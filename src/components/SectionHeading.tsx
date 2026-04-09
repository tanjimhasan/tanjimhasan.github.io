"use client";

import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useGsapScrollTrigger<HTMLDivElement>({ direction: "up" });

  return (
    <div ref={ref} className="mb-12 text-center">
      <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
    </div>
  );
}
