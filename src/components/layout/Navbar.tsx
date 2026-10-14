"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-cream-100/90 backdrop-blur-md border-cream-300 shadow-subtle py-3"
          : "bg-cream-100 border-cream-200/60 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
          >
            <div className="w-8 h-8 rounded bg-charcoal flex items-center justify-center font-bold text-white text-base tracking-tighter border border-charcoal-800 group-hover:bg-brand-red transition-colors">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg sm:text-xl text-charcoal flex items-center gap-1">
                ETHIXWEB
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500">
                India Operations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm py-1 px-1",
                    isActive
                      ? "text-charcoal font-semibold"
                      : "text-charcoal-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/admin/login"
              className="text-xs font-mono text-charcoal-500 hover:text-charcoal flex items-center gap-1.5 px-2 py-1 rounded transition-colors"
              title="Admin Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-charcoal-700 hover:text-charcoal hover:bg-cream-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-cream-300 bg-cream-50 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-charcoal hover:bg-cream-200/80 hover:text-brand-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-charcoal-600 hover:bg-cream-200/80 hover:text-charcoal transition-colors font-mono"
            >
              <ShieldCheck className="w-4 h-4 text-charcoal-400" />
              <span>Admin Dashboard</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-cream-200 flex flex-col gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
