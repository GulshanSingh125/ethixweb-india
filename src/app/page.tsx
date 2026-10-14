import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhyEthixweb } from "@/components/home/WhyEthixweb";
import { IndiaFocusSection } from "@/components/home/IndiaFocusSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero */}
      <Hero />

      {/* 3. Services Overview */}
      <ServicesOverview />

      {/* 4. Process: Discover, Strategise, Build, Optimise */}
      <ProcessSection />

      {/* 5. Three Illustrative Portfolio Concepts */}
      <FeaturedWork />

      {/* 6. Why Ethixweb: Strategy, Engineering, Design, Measurable Outcomes */}
      <WhyEthixweb />

      {/* 7. India-Focused Positioning Section */}
      <IndiaFocusSection />

      {/* 8. Strong Enquiry CTA */}
      <CtaBanner />
    </>
  );
}
