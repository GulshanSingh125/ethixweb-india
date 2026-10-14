import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-12 lg:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs font-mono tracking-eyebrow uppercase text-brand-red font-semibold",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-charcoal leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
