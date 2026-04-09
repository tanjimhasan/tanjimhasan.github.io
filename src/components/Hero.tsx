"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";
import gsap from "gsap";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-greeting]", {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(
          "[data-hero-name]",
          { opacity: 0, y: 40, duration: 0.8 },
          "-=0.3"
        )
        .from(
          "[data-hero-role]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4"
        )
        .from(
          "[data-hero-summary]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.3"
        )
        .from(
          "[data-hero-ctas] > *",
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 },
          "-=0.3"
        )
        .from(
          "[data-hero-social] > *",
          { opacity: 0, scale: 0.5, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        )
        .from(
          "[data-hero-scroll]",
          { opacity: 0, y: -10, duration: 0.5 },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    github: <GithubIcon size={20} />,
    linkedin: <LinkedinIcon size={20} />,
    mail: <Mail size={20} />,
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-end/5 blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <p
          data-hero-greeting
          className="mb-4 text-lg text-text-secondary"
        >
          Hello, I&apos;m
        </p>
        <h1
          data-hero-name
          className="font-display text-5xl font-bold leading-tight text-text-primary md:text-7xl"
        >
          {PERSONAL.name}
        </h1>
        <p
          data-hero-role
          className="mt-4 text-xl font-medium text-accent md:text-2xl"
        >
          {PERSONAL.role}
        </p>
        <p
          data-hero-summary
          className="mx-auto mt-6 max-w-xl text-text-secondary"
        >
          {PERSONAL.summary}
        </p>

        <div data-hero-ctas className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-3 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full border border-border px-8 py-3 font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>

        <div data-hero-social className="mt-8 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== "mail" ? "_blank" : undefined}
              rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-hero-scroll
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex animate-bounce flex-col items-center text-text-muted transition-colors hover:text-accent"
          aria-label="Scroll to About section"
        >
          <span className="mb-2 text-xs">Scroll Down</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
