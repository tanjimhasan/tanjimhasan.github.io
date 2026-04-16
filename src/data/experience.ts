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
      "Built and maintained custom Gutenberg blocks for the Formgent form builder, improving form creation flexibility and user experience.",
      "Lead frontend development of Helpgent, delivering complex UI features including video, voice, and screen recording capabilities.",
      "Architected scalable frontend systems using React, React Query, and Context API, improving performance and maintainability.",
      "Integrated REST APIs and optimized data flow, reducing UI latency and improving responsiveness.",
      "Contributed to Directorist plugin development, including feature enhancements, debugging, and customer issue resolution.",
      "Promoted to Lead Engineer for strong ownership, technical leadership, and consistent delivery.",
      "Developed HexaDash, an admin dashboard product for ThemeForest, focusing on building a scalable, high-performance UI with reusable components and modern frontend practices.",
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
