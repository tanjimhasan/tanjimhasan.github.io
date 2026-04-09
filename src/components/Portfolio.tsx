"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { projects } from "@/data/projects";

const filters = ["all", "react", "wordpress", "other"] as const;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const gridRef = useGsapScrollTrigger<HTMLDivElement>({
    direction: "up",
    stagger: 0.15,
  });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Portfolio"
          subtitle="Some of my recent work"
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? "bg-accent text-white"
                  : "border border-border text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
