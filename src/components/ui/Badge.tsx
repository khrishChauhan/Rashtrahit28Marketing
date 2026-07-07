import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  variant?: "default" | "accent" | "outline" | "subtle";
  className?: string;
  children?: React.ReactNode;
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps & React.HTMLAttributes<HTMLDivElement>) {
  const variants = {
    default: "bg-brand-100 text-brand-700",
    accent: "bg-accent-50 text-accent-700",
    outline: "border border-gray-200 text-gray-600",
    subtle: "bg-gray-100 text-gray-600",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
