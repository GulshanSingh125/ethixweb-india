import React from "react";
import Link from "next/link";
import { Mail, Clock, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100 border-t border-charcoal-800">
      {/* Top Banner / Value Proposition */}
      <div className="border-b border-charcoal-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-semibold">
              // The Ethixweb Standard
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-editorial text-white">
              We run the tech. You run the business.
            </p>
            <p className="text-charcoal-400 text-sm">
              Dedicated engineering, performance marketing, and digital operations for ambitious Indian enterprises and global teams.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-red text-white hover:bg-brand-redDark text-sm font-semibold transition-all group"
          >
            <span>Request Project Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-brand-red flex items-center justify-center font-bold text-white text-sm">
                E
              </div>
              <span className="font-bold tracking-tight text-lg text-white flex items-center gap-1">
                ETHIXWEB
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm">
              Engineering high-conversion websites, modern web apps, and automated digital operations built specifically for speed, reliability, and measurable Indian market growth.
            </p>
            <div className="pt-2 space-y-2 text-xs text-charcoal-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>India Hubs: Bengaluru & New Delhi NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>Mon–Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <a
                  href="mailto:info@ethixweb.com"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  info@ethixweb.com
                </a>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#performance-marketing"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seo"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Technical & Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cro"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Conversion Optimisation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  AI Automation & CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  About Ethixweb
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Featured Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-1.5 text-charcoal-400 hover:text-white transition-colors font-mono text-xs pt-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* India Fit & Trust */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 mb-4">
              Standards
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>WCAG 2.1 AA Compliant</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Sub-second mobile speed</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Strict privacy & security</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Zero vendor lock-in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & sub-links */}
        <div className="pt-12 mt-12 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} Ethixweb. All rights reserved. Built for Indian business scale.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-charcoal-300 transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-charcoal-300 transition-colors">
              Terms & Conditions
            </span>
            <span className="hover:text-charcoal-300 transition-colors">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
