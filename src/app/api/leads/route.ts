import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { createAdminClient } from "@/lib/supabase/admin";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { verifyAdminSession } from "@/lib/supabase/auth-check";
import { SERVICE_OPTIONS } from "@/lib/types";

// Maximum request size guard: 50 KB
const MAX_PAYLOAD_SIZE = 50 * 1024;

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000); // 5 requests per 10 mins
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this network. Please wait a few minutes before submitting another enquiry.",
        },
        { status: 429 }
      );
    }

    // 2. Request body check & size guard
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: "Payload exceeds allowable size limit." },
        { status: 413 }
      );
    }

    const body = await req.json();

    // 3. Honeypot Bot Detection
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Silently accept to fool automated scrapers
      return NextResponse.json(
        { success: true, message: "Enquiry received." },
        { status: 200 }
      );
    }

    // 4. Server-Side Validation & Normalisation
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Full name must be at least 2 characters long.";
    } else if (name.length > 100) {
      errors.name = "Full name cannot exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "A valid business email address is required.";
    } else if (email.length > 255) {
      errors.email = "Email address cannot exceed 255 characters.";
    }

    const validServices = SERVICE_OPTIONS.map((s) => s.value as string);
    if (!service || !validServices.includes(service)) {
      errors.service = "A valid service category must be selected.";
    }

    if (!message || message.length < 10) {
      errors.message = "Project overview must be at least 10 characters long.";
    } else if (message.length > 2000) {
      errors.message = "Project overview cannot exceed 2000 characters.";
    }

    if (company.length > 100) {
      errors.company = "Company name cannot exceed 100 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed.", details: errors },
        { status: 400 }
      );
    }

    // 5. Database Persistence using Supabase
    // We prefer the server-side admin client with service-role to enforce that
    // public anonymous clients cannot read the leads table.
    const adminClient = createAdminClient();

    if (!adminClient) {
      // If Supabase credentials are not configured yet, explain explicitly
      console.warn("Supabase credentials missing in environment variables.");
      return NextResponse.json(
        {
          error:
            "Database integration is currently unconfigured. Please configure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 503 }
      );
    }

    const { data, error } = await adminClient
      .from("leads")
      .insert([
        {
          name,
          email,
          company: company || null,
          service,
          message,
          status: "new",
        },
      ])
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Supabase lead insertion error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });
      return NextResponse.json(
        {
          error:
            "Unable to record your enquiry at this moment. Please try again or email us directly at info@ethixweb.com.",
          details: process.env.NODE_ENV !== "production" ? error.message : undefined,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been successfully recorded.",
        id: data.id,
        created_at: data.created_at,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Unhandled error in POST /api/leads:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

// Protected GET /api/leads (Admin Only)
export async function GET(req: NextRequest) {
  try {
    const auth = await verifyAdminSession();

    if (!auth.isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in as an administrator." },
        { status: 401 }
      );
    }

    if (!auth.isAdmin) {
      return NextResponse.json(
        { error: auth.error || "Forbidden. Administrator privileges required." },
        { status: 403 }
      );
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json(
        { error: "Database client is unconfigured." },
        { status: 503 }
      );
    }

    const url = new URL(req.url);
    const statusFilter = url.searchParams.get("status");

    let query = adminClient
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (
      statusFilter &&
      ["new", "contacted", "closed"].includes(statusFilter)
    ) {
      query = query.eq("status", statusFilter);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching leads:", error.message);
      return NextResponse.json(
        { error: "Failed to fetch leads from database." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      leads: data || [],
    });
  } catch (err: any) {
    console.error("Unhandled error in GET /api/leads:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
