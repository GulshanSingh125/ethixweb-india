import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Code2,
  Workflow,
  Sparkles,
  ArrowRight,
  Compass,
  Check,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Ethixweb India — Our Philosophy & Operating Model",
  description:
    "Learn about Ethixweb's India-focused engineering philosophy, disciplined operating model, and commitment to building durable digital platforms.",
};

const PRINCIPLES = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
    title: "Trustworthy Systems by Default",
    description:
      "We build on battle-tested foundations: Next.js, TypeScript, PostgreSQL, and strict Row Level Security. No fragile shortcuts, unverified plugins, or obscure proprietary frameworks that leave you stranded.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-brand-red" />,
    title: "Engineered Like an Internal Tech Team",
    description:
      "We reject the traditional vendor-client divide. Instead of functioning as an unaccountable third-party, we operate as an invested in-house engineering and operations unit dedicated to your roadmap.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-brand-red" />,
    title: "Layered, Unified Execution",
    description:
      "Strategy, UX design, backend development, automated workflows, and search optimization reside in one synchronized delivery team, removing communication friction and timeline bloat.",
  },
  {
    icon: <Compass className="w-6 h-6 text-brand-red" />,
    title: "Zero Vanity Metrics",
    description:
      "We judge our output by business-critical outcomes: qualified inbound leads, sub-second mobile page loads, verified conversion uplifts, and reliable uptime. Not meaningless impressions or buzzwords.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero / Editorial Statement */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Who We Are & How We Operate</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-editorial text-charcoal leading-[1.12]">
              A disciplined technology partner for India&apos;s digital era.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-600 leading-relaxed text-balance">
              Ethixweb bridges the gap between high-level digital strategy and robust software engineering. We help ambitious Indian enterprises modernize their web platforms, automate operations, and scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* The Story & India Context (No Fabricated History) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              // The Reality We Address
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-editorial leading-tight">
              Solving the digital reliability deficit in India.
            </h2>
            <div className="p-4 rounded-xl bg-cream-200/60 border border-cream-300 space-y-2 mt-6">
              <p className="text-xs font-mono uppercase text-charcoal-700 font-semibold flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-brand-red" />
                <span>Global Operational Standards</span>
              </p>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Seamlessly serving enterprises across India, the United States, and the United Kingdom through a unified, responsive delivery model.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-charcoal-700 text-base leading-relaxed">
            <p>
              The Indian digital market is evolving at unprecedented speed. Businesses are no longer satisfied with static brochure websites built on sluggish, outdated page builders that take five seconds to load on mobile devices.
            </p>
            <p>
              Today&apos;s Indian consumers and B2B buyers expect frictionless digital interactions: sub-second mobile page loads, instantaneous WhatsApp inquiry options, seamless UPI payment checkout experiences, and crisp brand authority.
            </p>
            <p>
              However, many growing companies find themselves trapped between two undesirable choices: expensive legacy consultancies that move slowly, or low-cost outsourced vendors that deliver unmaintainable code and disappear after launch.
            </p>
            <p className="font-medium text-charcoal">
              Ethixweb exists to offer a better way: senior-level software engineering, rigorous design quality, and proactive digital operations delivered with complete accountability and transparent communication.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-20 bg-cream-50 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              // Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-editorial text-charcoal mt-2">
              The four pillars of the Ethixweb delivery model.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-cream-300 hover:border-charcoal-400 transition-all duration-300 hover:shadow-editorial"
              >
                <div className="w-12 h-12 rounded-lg bg-cream-100 border border-cream-200 flex items-center justify-center mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Commitments */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal rounded-3xl p-8 sm:p-12 lg:p-16 text-cream-100 border border-charcoal-800">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              // Our Pledge To Every Client
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-editorial text-white">
              No smoke and mirrors. Just verified execution.
            </h2>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    100% Code Ownership
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-400">
                    You own full rights to your repository, domain, and data. Zero vendor lock-in, proprietary licensing traps, or hidden maintenance hostage situations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Transparent Communication & Timezones
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-400">
                    Direct access to active engineers during Indian Standard Time (IST), with clear weekly milestone demos and real-time project boards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Built for Speed & Accessibility
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-400">
                    Every build adheres to WCAG 2.1 AA accessibility guidelines and targets 90+ mobile Core Web Vitals performance benchmarks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button href="/contact" variant="primary" size="lg">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
