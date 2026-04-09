"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationConfig {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

export function useGsapScrollTrigger<T extends HTMLElement>(
  config: ScrollAnimationConfig = {}
) {
  const ref = useRef<T>(null);

  const {
    direction = "up",
    delay = 0,
    duration = 0.8,
    stagger = 0,
    start = "top 85%",
    once = true,
  } = config;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el.children.length > 0 && stagger ? el.children : el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay };
    const targets = stagger && el.children.length > 0 ? el.children : el;

    switch (direction) {
      case "up":
        fromVars.y = 40;
        break;
      case "down":
        fromVars.y = -40;
        break;
      case "left":
        fromVars.x = 40;
        break;
      case "right":
        fromVars.x = -40;
        break;
    }

    if (stagger) {
      fromVars.stagger = stagger;
    }

    const tween = gsap.from(targets, {
      ...fromVars,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay, duration, stagger, start, once]);

  return ref;
}
