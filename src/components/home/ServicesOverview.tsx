import React from "react";
import { Globe, TrendingUp, Search, Target, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    categoryNumber: "01",
    title: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    description:
      "Modern Next.js web applications, scalable headless CMS platforms, and responsive brand flagships engineered with TypeScript, strict accessibility, and sub-second loading speeds.",
    features: [
      "Custom Next.js App Router architecture",
      "React 19 & Tailwind design systems",
      "Robust PostgreSQL & Supabase integrations",
      "Seamless Razorpay & UPI payment flows",
    ],
    href: "/services#web-development",
  },
  {
    categoryNumber: "02",
    title: "Performance Marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    description:
      "High-ROAS paid media across Google Ads, Meta, and LinkedIn designed for customer acquisition. We construct tightly integrated landing pages and real-time attribution tracking.",
    features: [
      "Full-funnel campaign architecture",
      "Dynamic ad creative and copy testing",
      "Server-side conversion tracking (CAPI)",
      "CAC reduction and LTV optimization",
    ],
    href: "/services#performance-marketing",
  },
  {
    categoryNumber: "03",
    title: "Search Engine Optimisation",
    icon: <Search className="w-6 h-6" />,
    description:
      "Sustainable organic growth powered by deep technical SEO audits, Core Web Vitals remediation, semantic content clustering, and localized search visibility across India.",
    features: [
      "Technical audits & schema markup",
      "Core Web Vitals 90+ score delivery",
      "Pan-India regional and local search rankings",
      "Competitor gap & commercial keyword intent",
    ],
    href: "/services#seo",
  },
  {
    categoryNumber: "04",
    title: "Conversion Optimisation (CRO)",
    icon: <Target className="w-6 h-6" />,
    description:
      "Transforming inbound traffic into verified paying customers. We conduct quantitative funnel audits, behavioral session recordings, and empirical A/B testing.",
    features: [
      "Frictionless checkout and lead capture flows",
      "Heatmaps and user drop-off telemetry",
      "Hypothesis-driven A/B experimentation",
      "Direct conversion lift without ballooning ad spend",
    ],
    href: "/services#cro",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Full-Stack Capabilities Built for Measurable Revenue"
            description="We eliminate the fragmentation of hiring separate agencies for design, development, and marketing. Ethixweb operates as your unified technology and growth department."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/services" variant="outline" size="md">
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              categoryNumber={service.categoryNumber}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
