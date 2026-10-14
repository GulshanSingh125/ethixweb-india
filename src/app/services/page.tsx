import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  TrendingUp,
  Search,
  Target,
  Bot,
  Settings2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Ethixweb India — Engineering, Growth & Digital Operations",
  description:
    "Explore Ethixweb's full-stack services: Web Development, Performance Marketing, SEO, Conversion Rate Optimisation, and AI Automation for ambitious Indian enterprises.",
};

const DETAILED_SERVICES = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development & Web Applications",
    subtitle: "Custom-engineered digital flagships and mission-critical web platforms.",
    icon: <Globe className="w-7 h-7" />,
    summary:
      "We replace bloated templates and fragile page builders with clean, type-safe Next.js App Router architectures. Every web project is engineered for sub-second performance, strict WCAG 2.1 AA accessibility, and seamless scalability under high traffic surges.",
    deliverables: [
      "Custom Next.js App Router codebase with TypeScript",
      "Tailwind CSS responsive design systems (mobile-first)",
      "Headless CMS integration (Sanity, Strapi, or Contentful)",
      "Supabase PostgreSQL data modeling & server-side APIs",
      "Payment gateway integration (Razorpay, Stripe, UPI)",
      "Comprehensive testing, security hardening & CI/CD deployment",
    ],
    businessValue:
      "Drastically cuts bounce rates on mobile networks, eliminates costly technical debt, and provides an enterprise-grade digital foundation that scales with your business.",
  },
  {
    id: "performance-marketing",
    number: "02",
    title: "Performance Marketing & Customer Acquisition",
    subtitle: "Revenue-driven paid media across Google Ads, Meta, and LinkedIn.",
    icon: <TrendingUp className="w-7 h-7" />,
    summary:
      "We build paid advertising ecosystems where creative, copy, and landing pages operate in perfect synchronization. Rather than reporting on vanity clicks, our focus is strictly on qualified pipeline value, customer acquisition cost (CAC), and return on ad spend (ROAS).",
    deliverables: [
      "Full-funnel campaign structure & audience segmentation",
      "High-converting dedicated landing page engineering",
      "Conversion API (CAPI) server-side attribution tracking",
      "Multi-variant copy and visual asset testing",
      "Weekly transparent pacing & CAC telemetry reports",
    ],
    businessValue:
      "Protects ad spend efficiency, removes attribution guesswork, and creates a repeatable customer acquisition channel that compounds with scale.",
  },
  {
    id: "seo",
    number: "03",
    title: "Search Engine Optimisation (Technical & Local)",
    subtitle: "Durable organic visibility that compounds into compounding demand.",
    icon: <Search className="w-7 h-7" />,
    summary:
      "We treat SEO as a discipline of software engineering and topical authority. We resolve deep technical crawling bottlenecks, optimize Core Web Vitals to 90+, and structure semantic content clusters that capture high-intent commercial searches across India.",
    deliverables: [
      "Comprehensive technical crawling & indexability audit",
      "Core Web Vitals remediation (LCP, INP, CLS)",
      "Structured data & rich snippet schema implementation",
      "Regional & local SEO optimization for Indian metro hubs",
      "Topical content architecture & keyword mapping",
    ],
    businessValue:
      "Builds long-term organic equity that reduces dependency on escalating pay-per-click ad auctions and attracts high-intent buyers organically.",
  },
  {
    id: "cro",
    number: "04",
    title: "Conversion Rate Optimisation & UX Audits",
    subtitle: "Turning existing traffic into verified, qualified leads and transactions.",
    icon: <Target className="w-7 h-7" />,
    summary:
      "Getting visitors to your site is only half the battle. We conduct rigorous heuristic evaluations, user session telemetry, and hypothesis-driven A/B experiments to eliminate friction in signups, form submissions, and checkout workflows.",
    deliverables: [
      "Heuristic UX review & user drop-off heatmapping",
      "Mobile checkout & lead form friction reduction",
      "Statistical A/B testing strategy and implementation",
      "Clear call-to-action (CTA) hierarchy and trust signaling",
      "Lead qualification gate design and validation optimization",
    ],
    businessValue:
      "Directly increases revenue yield from your existing traffic without requiring any increase in marketing ad spend.",
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI Automation & Digital Operations",
    subtitle: "Automated receptionists, CRM workflows, and operational copilots.",
    icon: <Bot className="w-7 h-7" />,
    summary:
      "We deploy AI receptionists and automated workflows that answer, qualify, and route customer enquiries 24/7. Connect your website forms, calls, WhatsApp channels, and CRM into one synchronized operational engine.",
    deliverables: [
      "24/7 AI chat and lead qualification agents",
      "HubSpot, Zoho, and GoHighLevel CRM synchronization",
      "Automated WhatsApp lead confirmation & notification triggers",
      "Zapier / Make custom workflow automation pipelines",
      "Internal team copilots and operational reporting syncs",
    ],
    businessValue:
      "Captures high-value leads within seconds, prevents dropped enquiries during off-hours, and frees your team from repetitive manual operations.",
  },
  {
    id: "maintenance",
    number: "06",
    title: "Dedicated Digital Operations & Retainers",
    subtitle: "A senior technology department on call for your business.",
    icon: <Settings2 className="w-7 h-7" />,
    summary:
      "Instead of dealing with unreliable freelancers or slow support ticketing queues, partner with an active engineering team that manages updates, security patches, uptime monitoring, and ongoing feature rollouts.",
    deliverables: [
      "Continuous uptime & performance monitoring",
      "Monthly security updates & dependency patches",
      "Priority feature implementation & design iterations",
      "Database backups and disaster recovery protocols",
      "Direct Slack/WhatsApp engineering communication channel",
    ],
    businessValue:
      "Provides complete operational peace of mind, allowing executive leadership to focus on core business growth while we manage the technology.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream-100">
      {/* Header / Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Full-Stack Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-editorial text-charcoal leading-[1.12]">
              Digital capabilities engineered to grow Indian businesses.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-600 leading-relaxed text-balance">
              From modern web application development and technical SEO to conversion optimization and automated digital operations. Every service is built around measurable revenue impact.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {DETAILED_SERVICES.map((srv) => (
            <article
              key={srv.id}
              id={srv.id}
              className="scroll-mt-28 bg-white rounded-2xl border border-cream-300 p-8 sm:p-12 transition-all duration-300 hover:border-charcoal-400 hover:shadow-editorial"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Header */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-cream-100 border border-cream-200 flex items-center justify-center text-brand-red">
                      {srv.icon}
                    </div>
                    <span className="font-mono text-base font-bold text-charcoal-400">
                      {srv.number}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                      {srv.title}
                    </h2>
                    <p className="text-sm font-medium text-brand-red mt-1">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed pt-2">
                    {srv.summary}
                  </p>

                  <div className="pt-4">
                    <Button
                      href={`/contact?service=${srv.id}`}
                      variant="outline"
                      size="sm"
                      className="group"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </div>

                {/* Right Details: Deliverables & Business Value */}
                <div className="lg:col-span-7 bg-cream-50 rounded-xl p-6 sm:p-8 border border-cream-200 space-y-6">
                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-red" />
                      <span>Key Engineering Deliverables</span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-charcoal-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-red mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Value */}
                  <div className="pt-4 border-t border-cream-200">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 font-semibold mb-1.5 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Commercial Impact & Value</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                      {srv.businessValue}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal text-cream-100 border-t border-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            // Start Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-editorial text-white">
            Need a tailored solution for your business?
          </h2>
          <p className="text-charcoal-300 text-base max-w-2xl mx-auto leading-relaxed">
            Tell us about your business goals, target audience, and current challenges. Our senior team will provide a transparent scope and architectural recommendation.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Book an Engineering Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
