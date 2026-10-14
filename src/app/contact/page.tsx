import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, Clock, MapPin, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Ethixweb India — Start Your Project Consultation",
  description:
    "Get in touch with Ethixweb India. Discuss your web development, performance marketing, SEO, or digital operations requirements with our senior engineering team.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header Banner */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-editorial text-charcoal leading-tight">
              Start a conversation with our engineering team.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
              Whether you are planning a complete platform redesign, seeking scalable web development, or automating business workflows, we are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Direct Contact Details */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal tracking-tight">
                Direct Contact Channels
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We prefer direct, transparent communication without agency layers or endless sales triage.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-cream-300">
                <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-charcoal-500 font-semibold">
                    Email Directly
                  </p>
                  <a
                    href="mailto:info@ethixweb.com"
                    className="text-sm font-semibold text-charcoal hover:text-brand-red transition-colors"
                  >
                    info@ethixweb.com
                  </a>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    For project scopes, RFPs, and technical enquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-cream-300">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-charcoal-500 font-semibold">
                    Active Operating Hours
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    Mon – Sat: 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Prompt replies within 24 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-cream-300">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-charcoal-500 font-semibold">
                    Indian Delivery Hubs
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    Bengaluru & New Delhi NCR
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Connected with global offices in Seattle, New York, & London.
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment Commitments */}
            <div className="p-6 rounded-2xl bg-charcoal text-cream-100 border border-charcoal-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-red uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Our Consultation Guarantee</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                No Sales Pressure. Real Technical Assessment.
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                When you submit an enquiry, our response will include an objective assessment of your technical requirements, architectural options, and transparent milestones.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Suspense Boundary */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-white rounded-2xl border border-cream-300 p-12 text-center text-charcoal-500">
                  Loading enquiry form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
