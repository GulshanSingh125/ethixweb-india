import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Ethixweb Portal",
  description: "Secure administrator access to manage Ethixweb leads and client submissions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono text-charcoal-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Back to Ethixweb Homepage</span>
        </Link>

        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center font-bold text-white text-base">
            E
          </div>
          <span className="font-bold tracking-tight text-xl text-white">
            ETHIXWEB
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-red bg-charcoal-900 border border-charcoal-800 px-2 py-0.5 rounded">
            Internal
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-editorial text-white">
          Leads Management Console
        </h1>
        <p className="text-xs text-charcoal-400 mt-1">
          Sign in with your verified administrator account to view and manage inbound commercial inquiries.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-charcoal-850 py-8 px-6 sm:px-10 rounded-2xl border border-charcoal-800 shadow-2xl">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
