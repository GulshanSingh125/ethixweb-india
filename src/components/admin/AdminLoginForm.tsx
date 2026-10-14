"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Mail, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        throw new Error(authError.message || "Invalid authentication credentials.");
      }

      if (!data.session) {
        throw new Error("Unable to establish authenticated session.");
      }

      // Check authorization via API
      const verifyRes = await fetch("/api/leads");
      if (verifyRes.status === 403) {
        await supabase.auth.signOut();
        throw new Error(
          "Forbidden: Your account does not have administrator privileges for Ethixweb Leads."
        );
      }

      // Successful login and verification
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div
          role="alert"
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-brand-red mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="admin-email"
          className="block text-xs font-mono uppercase tracking-wider text-charcoal-300 font-semibold mb-2"
        >
          Administrator Email
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@ethixweb.com"
            required
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-charcoal-900 border border-charcoal-700 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="admin-password"
          className="block text-xs font-mono uppercase tracking-wider text-charcoal-300 font-semibold mb-2"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            required
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-charcoal-900 border border-charcoal-700 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={isLoading}
        className="w-full justify-center"
      >
        <span>Authenticate & Access Dashboard</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <div className="p-3.5 rounded-lg bg-charcoal-900/60 border border-charcoal-800 text-[11px] text-charcoal-400 space-y-1">
        <p className="font-semibold text-charcoal-300 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
          <span>Restricted Portal</span>
        </p>
        <p>
          Only authorized emails configured in <code className="text-cream-200">ADMIN_EMAILS</code> or with role metadata can access client leads.
        </p>
      </div>
    </form>
  );
}
