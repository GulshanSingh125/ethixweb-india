import React from "react";
import { Compass, Cpu, Palette, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: <Compass className="w-6 h-6" />,
    pillar: "01 / Strategy",
    title: "Commercially Grounded Strategy",
    description:
      "We do not build technology in a vacuum. Every page layout, user funnel, and API hook is designed to solve customer friction and generate qualified sales leads for your business.",
    stats: "Zero vanity features · High commercial intent",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    pillar: "02 / Engineering",
    title: "Rigorous Modern Engineering",
    description:
      "No fragile bloated themes or heavy plugins. We write maintainable TypeScript with Next.js App Router, Tailwind CSS, and hardened PostgreSQL database layers that scale effortlessly.",
    stats: "Sub-second TTFB · 100% Type-safe · Enterprise RLS",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    pillar: "03 / Design Quality",
    title: "Editorial Aesthetic & Accessibility",
    description:
      "A premium digital presence that earns immediate credibility. We combine generous whitespace, sharp typography, and strict WCAG 2.1 AA accessibility standards.",
    stats: "Accessible contrast · Mobile-first · Fluid typography",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    pillar: "04 / Measurable Outcomes",
    title: "Accountable Business Results",
    description:
      "From organic ranking improvements to reduced customer acquisition costs (CAC), we track real operational metrics so you know your exact return on technology investment.",
    stats: "Live lead telemetry · Form speed audits · Continuous CRO",
  },
];

export function WhyEthixweb() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Ethixweb Advantage"
          title="Why Forward-Looking Businesses Partner With Us"
          description="Most agencies hand off template sites and disappear. We operate as an invested technical partner combining strategic direction, elite code quality, and measurable accountability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((item) => (
            <div
              key={item.pillar}
              className="bg-white rounded-xl p-7 border border-cream-300 hover:border-charcoal-400 transition-all duration-300 hover:shadow-editorial flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-cream-100 border border-cream-200 flex items-center justify-center text-brand-red mb-6">
                  {item.icon}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-2">
                  {item.pillar}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200">
                <span className="text-xs font-mono text-charcoal-500 font-medium">
                  {item.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
