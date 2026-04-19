"use client";

import Image from "next/image";
import { Briefcase, Award, FolderOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { PERSONAL } from "@/lib/constants";

const stats = [
  { icon: <Briefcase size={20} />, value: "6+", label: "Years Experience" },
  { icon: <FolderOpen size={20} />, value: "15+", label: "Projects" },
  { icon: <Award size={20} />, value: "Lead", label: "Engineer" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Query",
  "Redux",
  "ContextAPI",
  "Tailwind CSS",
  "WordPress",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "GSAP",
];

export default function About() {
  const contentRef = useGsapScrollTrigger<HTMLDivElement>({
    direction: "up",
    stagger: 0.15,
  });

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div
          ref={contentRef}
          className="mt-12 grid items-center gap-12 md:grid-cols-2"
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gradient-start to-gradient-end opacity-20 blur-lg" />
              <Image
                src="/images/profile.png"
                alt={PERSONAL.name}
                width={350}
                height={350}
                className="relative rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="leading-relaxed text-text-secondary">
              {PERSONAL.summary}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-bg-secondary p-4 text-center"
                >
                  <div className="mb-2 flex justify-center text-accent">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-bg-tertiary px-3 py-1 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
