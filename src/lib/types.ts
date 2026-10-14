export type LeadStatus = "new" | "contacted" | "closed";

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: LeadStatus;
  created_at: string;
}

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  honeypot?: string; // Bot protection
}

export const SERVICE_OPTIONS = [
  { value: "web-development", label: "Web Development & Web Applications" },
  { value: "performance-marketing", label: "Performance Marketing & Paid Ads" },
  { value: "seo", label: "Search Engine Optimisation (Technical & Local SEO)" },
  { value: "cro", label: "Conversion Rate Optimisation & UX Audits" },
  { value: "ai-automation", label: "AI Agents & Workflow Automations" },
  { value: "digital-operations", label: "Full Digital Operations & Retainer" },
] as const;

export type ServiceOptionValue = (typeof SERVICE_OPTIONS)[number]["value"];
