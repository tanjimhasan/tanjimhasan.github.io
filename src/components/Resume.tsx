"use client";

import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import SkillTag from "@/components/SkillTag";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";

export default function Resume() {
  const expRef = useGsapScrollTrigger<HTMLDivElement>({
    direction: "up",
    stagger: 0.2,
  });
  const eduRef = useGsapScrollTrigger<HTMLDivElement>({
    direction: "up",
    stagger: 0.2,
  });
  const skillsRef = useGsapScrollTrigger<HTMLDivElement>({
    direction: "up",
    stagger: 0.1,
  });

  return (
    <section id="resume" className="bg-bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Resume"
          subtitle="My professional journey and skills"
        />

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold text-text-primary">
              Experience
            </h3>
            <div ref={expRef}>
              {experiences.map((exp) => (
                <TimelineItem
                  key={exp.company}
                  period={exp.period}
                  title={exp.role}
                  subtitle={`${exp.company} — ${exp.location}`}
                  bullets={exp.bullets}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold text-text-primary">
              Education
            </h3>
            <div ref={eduRef}>
              {education.map((edu) => (
                <TimelineItem
                  key={edu.institution}
                  period={edu.period}
                  title={edu.degree}
                  subtitle={edu.institution}
                  description={
                    [edu.gpa, edu.board].filter(Boolean).join(" — ") ||
                    undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="mb-8 text-center font-display text-xl font-semibold text-text-primary">
            Skills & Abilities
          </h3>
          <div ref={skillsRef} className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
