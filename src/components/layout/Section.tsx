import React from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  variant?: "default" | "muted" | "dark" | "brand";
  className?: string;
  children?: React.ReactNode;
}

export function Section({ className, variant = "default", children, ...props }: SectionProps & React.HTMLAttributes<HTMLElement>) {
  const variants = {
    default: "bg-bg-base",
    muted: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    brand: "bg-brand-900 text-white",
  };

  return (
    <section className={cn("py-20 md:py-28 lg:py-32", variants[variant], className)} {...props}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
