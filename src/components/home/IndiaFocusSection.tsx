import React from "react";
import { Check, ShieldCheck, Smartphone, Zap, IndianRupee, Globe2 } from "lucide-react";

export function IndiaFocusSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-cream-100 border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Core Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-charcoal-700 text-xs font-mono uppercase tracking-widest text-brand-red">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>India-First Digital Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-white leading-[1.15]">
              Built for India&apos;s Digital Scale. Engineered to Global Standards.
            </h2>

            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed">
              India is experiencing the world&apos;s fastest digital transition. With over 850 million connected users across Tier-1 metros and Tier-2/3 hubs, customer expectations for speed, trust, and simplicity have never been higher.
            </p>

            <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
              Yet most Indian businesses are held back by sluggish legacy platforms, unreliable outsourced development, and fragmented marketing vendors. We close this gap by engineering enterprise-grade digital systems with local execution speed.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-cream-200">
                  Resilient on variable mobile networks (4G & 5G)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-cream-200">
                  Instant UPI & Razorpay conversion checkout flows
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-cream-200">
                  WhatsApp automation & CRM pipeline routing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-cream-200">
                  GST compliant and Indian billing ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Market Drivers */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-xl hover:border-charcoal-700 transition-colors">
              <Smartphone className="w-6 h-6 text-brand-red mb-4" />
              <h3 className="text-base font-bold text-white mb-2">
                Mobile-First Consumer Demographics
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Over 82% of commercial website traffic in India originates from mobile devices. We prioritize thumb-driven navigation, instantaneous touch states, and zero layout shifts.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-xl hover:border-charcoal-700 transition-colors">
              <Zap className="w-6 h-6 text-brand-red mb-4" />
              <h3 className="text-base font-bold text-white mb-2">
                Data-Conscious Performance Budgets
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                We avoid bulky scripts and heavy assets. By delivering sub-100KB initial JavaScript bundles, your site loads under 1 second even in low-signal suburban regions.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-xl hover:border-charcoal-700 transition-colors">
              <IndianRupee className="w-6 h-6 text-brand-red mb-4" />
              <h3 className="text-base font-bold text-white mb-2">
                High-Conversion Trust Architectures
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Indian consumers demand strong credibility signals before purchasing or submitting leads. We integrate verifiable trust badges, clear pricing tiers, and transparent contact channels.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-xl hover:border-charcoal-700 transition-colors">
              <Globe2 className="w-6 h-6 text-brand-red mb-4" />
              <h3 className="text-base font-bold text-white mb-2">
                Global Standards, Local Accountability
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                You get the engineering rigor of a premier international development studio combined with real-time IST communication, transparent milestones, and accountable delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
