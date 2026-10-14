import React from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Smartphone, Zap, ShieldCheck, Layers } from "lucide-react";

interface ConceptProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  summary: string;
  techStack: string[];
  indianMarketContext: string;
  architectureHighlights: string[];
  previewBadge: string;
}

const PROJECTS: ConceptProject[] = [
  {
    id: "bharatfin",
    title: "BharatFin Gateway",
    tagline: "Next-Gen Billing & GST Reconciliation for High-Volume MSMEs",
    category: "Fintech & Web Application",
    summary:
      "A high-throughput cloud accounting and invoice reconciliation dashboard designed for multi-branch Indian merchant networks managing complex GST tax brackets and UPI payment verification.",
    techStack: ["Next.js App Router", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    indianMarketContext:
      "Engineered for Tier-2 and Tier-3 internet resilience with optimistic UI updates and instant WhatsApp PDF invoice generation.",
    architectureHighlights: [
      "Sub-200ms transaction settlement rendering",
      "Automated e-Way bill & GSTIN validation hooks",
      "Role-based multi-store branch permissions",
    ],
    previewBadge: "Illustrative Concept",
  },
  {
    id: "aura-wellness",
    title: "Aura Botanical D2C",
    tagline: "High-Speed Headless Commerce for Modern Ayurvedic Wellness",
    category: "Headless E-Commerce & CRO",
    summary:
      "A luxury digital storefront for an Indian direct-to-consumer ayurvedic brand, built to eliminate checkout drop-offs across Tier-1 and Tier-2 mobile shoppers.",
    techStack: ["Next.js 15", "Headless CMS", "Tailwind CSS", "Razorpay / UPI"],
    indianMarketContext:
      "Overcomes the 70%+ mobile abandonment typical in Indian D2C through frictionless 2-step phone OTP authentication and instant UPI intent triggers.",
    architectureHighlights: [
      "99/100 Mobile Core Web Vitals score",
      "Sub-second catalog browsing and instant search",
      "Dynamic localization for regional languages",
    ],
    previewBadge: "Illustrative Concept",
  },
  {
    id: "logigrid",
    title: "LogiGrid India",
    tagline: "Interstate Fleet & Consignment Tracking Web Portal",
    category: "Enterprise Logistics Portal",
    summary:
      "A mission-critical logistics tracking console connecting fleet managers, consignment drivers, and enterprise consignees across the Golden Quadrilateral transport corridors.",
    techStack: ["React 19", "Supabase PostgreSQL", "Next.js Route Handlers", "Tailwind"],
    indianMarketContext:
      "Built for low-bandwidth mobile devices with ultra-lean payload budgets and real-time telemetry updates.",
    architectureHighlights: [
      "Live GPS status telemetry without WebSocket drain",
      "Driver dispatch and FASTag integration feeds",
      "Automated proof-of-delivery (POD) document captures",
    ],
    previewBadge: "Illustrative Concept",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-cream-50 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Illustrative Portfolio Concepts"
            title="Engineered for High-Scale Digital Adoption"
            description="Explore our conceptual architectural frameworks solving real-world digital adoption, speed, and conversion challenges for Indian businesses."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-500 bg-cream-200 px-3 py-1.5 rounded border border-cream-300">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Transparent Agency: Concept Architecture
            </span>
          </div>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-cream-300 overflow-hidden hover:border-charcoal-400 transition-all duration-300 hover:shadow-editorial"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Architecture Representation */}
                <div className="lg:col-span-5 bg-charcoal-900 text-cream-100 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-charcoal-800">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="concept">{project.previewBadge}</Badge>
                      <span className="font-mono text-xs text-charcoal-400">
                        Concept 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-brand-red uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-300 text-sm leading-relaxed mb-6">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Mock Visual Metric Card */}
                  <div className="bg-charcoal-850 p-4 rounded-lg border border-charcoal-700/80 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-charcoal-300 pb-2 border-b border-charcoal-700">
                      <span>Stack Core</span>
                      <span className="text-emerald-400">Production Tested</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-charcoal-800 text-[11px] font-mono text-cream-200 border border-charcoal-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Conceptual Details & Market Fit */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-2">
                        System Overview
                      </h4>
                      <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* India specific problem solved */}
                    <div className="p-4 rounded-lg bg-cream-100 border border-cream-200">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-charcoal-800 font-semibold mb-1 flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-brand-red" />
                        <span>Indian Market Nuance Addressed</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-charcoal-600">
                        {project.indianMarketContext}
                      </p>
                    </div>

                    {/* Architectural Highlights */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-2.5">
                        Engineering Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.architectureHighlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start text-xs sm:text-sm text-charcoal-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 mr-2.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-cream-200 flex items-center justify-between">
                    <span className="text-xs text-charcoal-500 italic">
                      Architecture design system ready for deployment
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-brand-red font-semibold hover:text-brand-redDark group"
                    >
                      <span>Inquire About Similar Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
