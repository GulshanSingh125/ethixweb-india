import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-cream-100 border-b border-cream-200">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#121316 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 border border-cream-300 text-xs font-mono uppercase tracking-widest text-charcoal-700">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>Digital Agency for Ambitious Indian Enterprises</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-editorial text-charcoal leading-[1.12] text-balance">
            We run the tech.{" "}
            <span className="text-brand-red italic font-serif">You run</span>{" "}
            the business.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed text-balance">
            Ethixweb builds ultra-fast web platforms, high-converting digital funnels, and resilient software backends. Engineered specifically for Indian startups, SMEs, and modern brands demanding global agency craftsmanship with accountable local execution.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-editorial group"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="/#work"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Explore Selected Work</span>
            </Button>
          </div>

          {/* Fast Trust Indicators */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-cream-300/80 text-left">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-charcoal">Sub-Second Speed</p>
                <p className="text-xs text-charcoal-500">Core Web Vitals optimized</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-charcoal">Mobile-First UI</p>
                <p className="text-xs text-charcoal-500">Built for 4G/5G mobile reality</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-charcoal">Enterprise Security</p>
                <p className="text-xs text-charcoal-500">RLS, Supabase & Next.js</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-charcoal">Transparent Delivery</p>
                <p className="text-xs text-charcoal-500">Zero vendor lock-in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
