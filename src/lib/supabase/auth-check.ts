import { createServerSupabaseClient } from "./server";
import { User } from "@supabase/supabase-js";

export interface AdminAuthResult {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: User | null;
  error?: string;
}

export async function verifyAdminSession(): Promise<AdminAuthResult> {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return {
        isAuthenticated: false,
        isAdmin: false,
        user: null,
        error: "Unauthenticated: No active session found.",
      };
    }

    // Check admin authorization:
    // 1. Role in app_metadata
    const isRoleAdmin = user.app_metadata?.role === "admin";

    // 2. Email whitelist from environment variables
    const adminEmailsEnv = process.env.ADMIN_EMAILS || "";
    const allowedEmails = adminEmailsEnv
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const isEmailAllowed = user.email
      ? allowedEmails.includes(user.email.toLowerCase())
      : false;

    // If no ADMIN_EMAILS are defined and user has no role, we reject to prevent arbitrary Supabase users
    const isAuthorized = isRoleAdmin || isEmailAllowed;

    if (!isAuthorized) {
      return {
        isAuthenticated: true,
        isAdmin: false,
        user,
        error:
          "Forbidden: Your account does not have administrative privileges for Ethixweb Leads.",
      };
    }

    return {
      isAuthenticated: true,
      isAdmin: true,
      user,
    };
  } catch (err: any) {
    return {
      isAuthenticated: false,
      isAdmin: false,
      user: null,
      error: err.message || "Failed to verify admin credentials.",
    };
  }
}
