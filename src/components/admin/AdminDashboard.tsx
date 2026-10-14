"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  LogOut,
  Search,
  Filter,
  RefreshCw,
  Mail,
  Building,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Lead, LeadStatus, SERVICE_OPTIONS } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

interface AdminDashboardProps {
  initialUserEmail?: string;
}

export function AdminDashboard({ initialUserEmail }: AdminDashboardProps) {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>(initialUserEmail || "");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMessageLead, setSelectedMessageLead] = useState<Lead | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url =
        statusFilter === "all"
          ? "/api/leads"
          : `/api/leads?status=${statusFilter}`;
      const res = await fetch(url);

      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (res.status === 403) {
        setError(
          "Access Denied: Your account is not authorized as an Ethixweb Administrator."
        );
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch leads");
      }

      setLeads(data.leads || []);
    } catch (err: any) {
      setError(err.message || "An error occurred while loading leads.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check client session
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        setUserEmail(user.email);
      }
    });

    fetchLeads();
  }, [statusFilter]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update lead status");
      }

      // Optimistic state update
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id ? { ...lead, status: newStatus } : lead
        )
      );
    } catch (err: any) {
      alert(`Update failed: ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        (lead.company && lead.company.toLowerCase().includes(q)) ||
        lead.message.toLowerCase().includes(q) ||
        lead.service.toLowerCase().includes(q)
      );
    });
  }, [leads, searchQuery]);

  // Metric counts
  const metrics = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "new").length;
    const contactedCount = leads.filter((l) => l.status === "contacted").length;
    const closedCount = leads.filter((l) => l.status === "closed").length;
    return { total, newCount, contactedCount, closedCount };
  }, [leads]);

  const getServiceLabel = (serviceVal: string) => {
    const found = SERVICE_OPTIONS.find((s) => s.value === serviceVal);
    return found ? found.label : serviceVal;
  };

  return (
    <div className="min-h-screen bg-cream-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cream-300">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
              <h1 className="text-2xl sm:text-3xl font-bold tracking-editorial text-charcoal">
                Ethixweb Lead Console
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Active Administrator:{" "}
              <span className="font-mono font-medium text-charcoal">
                {userEmail || "Authorized Admin"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={fetchLeads}
              disabled={isLoading}
              className="gap-1.5"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleLogout}
              className="gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-cream-300 shadow-subtle">
            <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500">
              Total Inquiries
            </p>
            <p className="text-3xl font-bold text-charcoal mt-1">
              {metrics.total}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-cream-300 shadow-subtle">
            <p className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
              New Unreviewed
            </p>
            <p className="text-3xl font-bold text-blue-700 mt-1">
              {metrics.newCount}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-cream-300 shadow-subtle">
            <p className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              In Contact
            </p>
            <p className="text-3xl font-bold text-amber-800 mt-1">
              {metrics.contactedCount}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-cream-300 shadow-subtle">
            <p className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
              Closed / Qualified
            </p>
            <p className="text-3xl font-bold text-emerald-800 mt-1">
              {metrics.closedCount}
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-cream-300 shadow-subtle flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-cream-100 rounded-lg border border-cream-200">
            {["all", "new", "contacted", "closed"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                  statusFilter === st
                    ? "bg-white text-charcoal shadow-sm font-semibold"
                    : "text-charcoal-600 hover:text-charcoal"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, company or keyword..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-cream-50 border border-cream-300 text-xs sm:text-sm text-charcoal placeholder-charcoal-400 focus:outline-none focus:ring-1 focus:ring-brand-red focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-charcoal-400 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-brand-red" />
            <div>
              <p className="font-semibold">Unable to load leads</p>
              <p className="text-xs mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Main Leads Table */}
        <div className="bg-white rounded-2xl border border-cream-300 shadow-subtle overflow-hidden">
          {isLoading ? (
            <div className="p-16 text-center space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-brand-red" />
              <p className="text-sm font-mono text-charcoal-500">
                Fetching leads from Supabase PostgreSQL...
              </p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-16 text-center space-y-3">
              <FileText className="w-10 h-10 mx-auto text-charcoal-300" />
              <h3 className="text-base font-bold text-charcoal">
                No leads found
              </h3>
              <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
                {searchQuery || statusFilter !== "all"
                  ? "No submissions matched your current search and filter criteria."
                  : "No client enquiries have been recorded in the database yet."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-cream-100 border-b border-cream-300 text-[11px] font-mono uppercase tracking-wider text-charcoal-600">
                    <th className="py-3.5 px-6">Lead / Contact</th>
                    <th className="py-3.5 px-6">Company</th>
                    <th className="py-3.5 px-6">Service Area</th>
                    <th className="py-3.5 px-6">Received (IST)</th>
                    <th className="py-3.5 px-6">Status Action</th>
                    <th className="py-3.5 px-6 text-right">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200 text-xs sm:text-sm">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-cream-50/70 transition-colors"
                    >
                      {/* Name & Email */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-charcoal">
                          {lead.name}
                        </div>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-xs text-charcoal-500 hover:text-brand-red inline-flex items-center gap-1 mt-0.5"
                        >
                          <Mail className="w-3 h-3 text-brand-red shrink-0" />
                          <span>{lead.email}</span>
                        </a>
                      </td>

                      {/* Company */}
                      <td className="py-4 px-6 text-charcoal-700">
                        {lead.company ? (
                          <div className="flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-charcoal-400 shrink-0" />
                            <span>{lead.company}</span>
                          </div>
                        ) : (
                          <span className="text-charcoal-400 italic text-xs">
                            Not provided
                          </span>
                        )}
                      </td>

                      {/* Service Area */}
                      <td className="py-4 px-6">
                        <span className="inline-block text-xs font-medium text-charcoal-800 bg-cream-200/70 px-2.5 py-1 rounded border border-cream-300">
                          {getServiceLabel(lead.service)}
                        </span>
                      </td>

                      {/* Received Date */}
                      <td className="py-4 px-6 text-xs text-charcoal-600 font-mono">
                        {formatDate(lead.created_at)}
                      </td>

                      {/* Status Selector */}
                      <td className="py-4 px-6">
                        <select
                          value={lead.status}
                          disabled={updatingId === lead.id}
                          onChange={(e) =>
                            handleStatusChange(
                              lead.id,
                              e.target.value as LeadStatus
                            )
                          }
                          className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border focus:outline-none transition-all cursor-pointer ${
                            lead.status === "new"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : lead.status === "contacted"
                              ? "bg-amber-50 text-amber-800 border-amber-200"
                              : "bg-emerald-50 text-emerald-800 border-emerald-200"
                          }`}
                        >
                          <option value="new">● New</option>
                          <option value="contacted">● Contacted</option>
                          <option value="closed">● Closed</option>
                        </select>
                      </td>

                      {/* Message Preview Button */}
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedMessageLead(lead)}
                          className="text-xs font-medium text-brand-red hover:text-brand-redDark underline underline-offset-2"
                        >
                          View Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Message Modal Dialog */}
      {selectedMessageLead && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full border border-cream-300 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-cream-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  {selectedMessageLead.name}
                </h3>
                <p className="text-xs text-charcoal-500 font-mono mt-0.5">
                  {selectedMessageLead.email} · {formatDate(selectedMessageLead.created_at)}
                </p>
              </div>
              <button
                onClick={() => setSelectedMessageLead(null)}
                className="p-1 rounded-md text-charcoal-400 hover:text-charcoal hover:bg-cream-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-1">
                Requested Service
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {getServiceLabel(selectedMessageLead.service)}
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-1">
                Project Requirements & Overview
              </p>
              <div className="bg-cream-50 p-4 rounded-xl border border-cream-200 text-sm text-charcoal-700 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                {selectedMessageLead.message}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-cream-200">
              <a
                href={`mailto:${selectedMessageLead.email}?subject=Regarding your enquiry with Ethixweb`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-brand-red text-white hover:bg-brand-redDark transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Reply by Email</span>
              </a>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setSelectedMessageLead(null)}
              >
                <span>Close</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
