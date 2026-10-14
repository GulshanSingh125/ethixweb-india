import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  categoryNumber?: string;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  categoryNumber,
  title,
  description,
  features,
  href = "/services",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-cream-300 hover:border-charcoal-400 transition-all duration-300 hover:shadow-editorial",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-cream-100 border border-cream-200 flex items-center justify-center text-brand-red group-hover:scale-105 group-hover:bg-brand-redLight transition-all duration-300">
            {icon}
          </div>
          {categoryNumber && (
            <span className="font-mono text-xs text-charcoal-400 tracking-wider">
              {categoryNumber}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 group-hover:text-brand-red transition-colors">
          {title}
        </h3>

        <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-8 pt-4 border-t border-cream-200">
            {features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs sm:text-sm text-charcoal-700"
              >
                <span className="mr-2 text-brand-red font-bold select-none">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 mt-auto border-t border-cream-100 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-charcoal group-hover:text-brand-red transition-colors"
        >
          <span>Explore Service Details</span>
          <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
