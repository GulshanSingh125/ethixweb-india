import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "brand"
    | "outline"
    | "concept"
    | "statusNew"
    | "statusContacted"
    | "statusClosed";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-cream-200 text-charcoal-700 border-cream-300",
    brand: "bg-brand-redLight text-brand-redDeep border-brand-redSubtle",
    outline: "border-charcoal-300 text-charcoal-700 bg-transparent",
    concept:
      "bg-amber-50 text-amber-800 border-amber-200 font-mono text-[11px] uppercase tracking-wider",
    statusNew: "bg-blue-50 text-blue-700 border-blue-200",
    statusContacted: "bg-amber-50 text-amber-800 border-amber-200",
    statusClosed: "bg-emerald-50 text-emerald-800 border-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
