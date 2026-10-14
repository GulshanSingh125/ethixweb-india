import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/supabase/auth-check";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard | Ethixweb Leads Console",
  description: "Protected administrative console for managing client inquiries.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const auth = await verifyAdminSession();

  // 1. Unauthenticated -> Redirect to login page
  if (!auth.isAuthenticated) {
    redirect("/admin/login");
  }

  // 2. Authenticated but not in admin whitelist/role -> Forbidden
  if (!auth.isAdmin) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-charcoal-900 border border-charcoal-800 rounded-2xl p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-brand-red">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white">
              Administrator Access Restricted
            </h1>
            <p className="text-xs text-charcoal-400 leading-relaxed">
              You are signed in as <code className="text-cream-200">{auth.user?.email}</code>, but this account is not registered in the administrative authorization whitelist (<code className="text-cream-200">ADMIN_EMAILS</code>).
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/admin/login"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-charcoal-800 text-xs font-mono text-charcoal-300 hover:text-white hover:bg-charcoal-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Sign in with a different account</span>
            </Link>
            <Link
              href="/"
              className="text-xs text-charcoal-500 hover:text-charcoal-300"
            >
              Return to Public Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authorized Admin
  return <AdminDashboard initialUserEmail={auth.user?.email} />;
}
