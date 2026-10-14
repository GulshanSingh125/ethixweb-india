import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyAdminSession } from "@/lib/supabase/auth-check";
import { LeadStatus } from "@/lib/types";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Lead ID is required." },
        { status: 400 }
      );
    }

    // 1. Verify administrator authentication and authorization
    const auth = await verifyAdminSession();

    if (!auth.isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized: Please log in as an administrator." },
        { status: 401 }
      );
    }

    if (!auth.isAdmin) {
      return NextResponse.json(
        { error: auth.error || "Forbidden: Administrator privileges required." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { status } = body;

    const validStatuses: LeadStatus[] = ["new", "contacted", "closed"];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        {
          error:
            "Invalid status value. Allowed statuses are: new, contacted, closed.",
        },
        { status: 400 }
      );
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json(
        { error: "Database client is unconfigured." },
        { status: 503 }
      );
    }

    const { data, error } = await adminClient
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error(`Failed to update lead ${id}:`, error.message);
      return NextResponse.json(
        { error: "Failed to update lead status in database." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Lead status updated to ${status}.`,
      lead: data,
    });
  } catch (err: any) {
    console.error("Unhandled error in PATCH /api/leads/[id]:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
