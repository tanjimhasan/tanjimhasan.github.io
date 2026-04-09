export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Sovware",
    companyUrl: "https://sovware.com",
    role: "Software Engineer — Frontend → Lead Engineer",
    period: "April 2020 — Present",
    location: "Signboard, Dhaka, Bangladesh",
    bullets: [
      "Developed custom Gutenberg blocks for the Formgent form builder using WordPress. Utilized WordPress data stores for efficient state management and built interactive UI, core logic, and submission handling using the WordPress Interactivity API.",
      "Developed core features of Helpgent including the builder, admin panel, and frontend submission system using React, React Query, and Context API. Engineered complex logic flows and integrated video, voice, and screen recording capabilities.",
      "Worked with the Directorist Pricing Plan plugin, contributing to feature development, customization, and maintenance.",
      "Resolved customer issues related to Directorist by debugging, troubleshooting, and providing effective technical solutions.",
      "Developed and maintained business websites including directorist.com, sovware.com, and wpwax.com, ensuring performance, scalability, and a high-quality user experience.",
      "Developed HexaDash, an admin dashboard product for ThemeForest, focusing on building a scalable, high-performance UI with reusable components and modern frontend practices.",
      "Promoted to Lead Engineer in recognition of technical contributions, ownership, and leadership in project delivery.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "WordPress",
      "Gutenberg",
      "React Query",
      "Context API",
      "REST API",
    ],
  },
  {
    company: "Bestweby",
    companyUrl: "https://bestweby.com",
    role: "Frontend Developer",
    period: "May 2019 — March 2020",
    location: "Shymoli, Dhaka, Bangladesh",
    bullets: [
      "Contributed to the front-end development of multiple client-facing projects, ensuring high-quality user experiences.",
      "Collaborated with cross-functional teams to build and enhance in-house web applications.",
      "Delivered consistent, scalable, and maintainable UI solutions across a wide range of project requirements.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];
