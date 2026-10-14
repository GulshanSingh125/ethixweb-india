import React from "react";
import { ArrowRight, Clock, ShieldCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-cream-200/60 border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-charcoal rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-floating border border-charcoal-800">
          {/* Subtle background red glow */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand-red font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Ready to Scale Your Digital Operation?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-white leading-tight">
              Tired of being client #300 at a generic agency?
            </h2>

            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Work with a senior team that knows your business by name. Whether you need an enterprise web overhaul, a custom software application, or a high-converting growth engine, we are ready to build.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="mailto:info@ethixweb.com"
                className="inline-flex items-center justify-center text-sm font-semibold text-charcoal-300 hover:text-white px-4 py-3 rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-brand-red" />
                <span>info@ethixweb.com</span>
              </a>
            </div>

            <div className="pt-8 border-t border-charcoal-800 flex flex-wrap gap-6 text-xs text-charcoal-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response within 24 hours guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Non-disclosure agreement upon request</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span>Direct senior engineer consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
