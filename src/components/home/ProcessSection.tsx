import React from "react";
import { Compass, Sparkles, Code2, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    phase: "Discover",
    icon: <Compass className="w-5 h-5" />,
    title: "Deep Discovery & Technical Audit",
    description:
      "We unpack your business economics, customer archetypes, bottlenecks, and legacy tech stack. We identify exact conversion drop-offs, Indian market nuances, and technical limitations.",
    deliverables: "Architecture blueprint, competitor audit & project scope",
  },
  {
    step: "02",
    phase: "Strategise",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Strategic Blueprint & UX Systems",
    description:
      "We design responsive UI/UX wireframes, design systems, and data models. Every screen is engineered with mobile accessibility, rapid visual clarity, and conversion psychology in mind.",
    deliverables: "Interactive Figma prototype, design tokens & tech specs",
  },
  {
    step: "03",
    phase: "Build",
    icon: <Code2 className="w-5 h-5" />,
    title: "Production Engineering & Quality Assurance",
    description:
      "Clean, scalable TypeScript code using Next.js App Router, Tailwind CSS, and Supabase. We enforce rigorous accessibility (WCAG AA), Core Web Vitals checks, and cross-device testing.",
    deliverables: "Production-ready codebase, CI/CD pipeline & staging deployment",
  },
  {
    step: "04",
    phase: "Optimise",
    icon: <LineChart className="w-5 h-5" />,
    title: "Continuous Telemetry & Conversion Growth",
    description:
      "Launch is day one. We monitor real-user telemetry, lead velocity, database performance, and organic search indexing to iterate and drive compound business growth.",
    deliverables: "Analytics dashboard, speed benchmarks & monthly growth reviews",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Execution Framework"
          title="Engineered for Predictability. Built for Speed."
          description="A disciplined 4-stage delivery model that removes agency ambiguity. From initial concept to enterprise-scale deployment, you get full transparency and zero surprise delays."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white rounded-xl p-6 sm:p-7 border border-cream-300 hover:border-charcoal-400 transition-all duration-300 hover:shadow-editorial flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-red">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-md bg-cream-100 flex items-center justify-center text-charcoal-700 border border-cream-200">
                    {step.icon}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-1">
                  Phase {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200">
                <p className="text-[11px] font-mono uppercase tracking-wider text-charcoal-500 mb-1">
                  Key Output
                </p>
                <p className="text-xs font-semibold text-charcoal">
                  {step.deliverables}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
