export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "react" | "wordpress" | "other";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "formgent",
    title: "Formgent",
    description:
      "Custom Gutenberg blocks for a form builder using WordPress. Features efficient state management with WordPress data stores and interactive UI via the Interactivity API.",
    image: "/images/projects/ph-1.png",
    tags: ["WordPress", "Gutenberg", "Interactivity API"],
    category: "wordpress",
  },
  {
    id: "helpgent",
    title: "Helpgent",
    description:
      "A conversational form builder with admin panel and frontend submission system. Includes video, voice, and screen recording capabilities built with React and React Query.",
    image: "/images/projects/ph-2.png",
    tags: ["React", "React Query", "Context API", "TypeScript"],
    category: "react",
  },
  {
    id: "hexadash",
    title: "HexaDash",
    description:
      "Admin dashboard product for ThemeForest with a scalable, high-performance UI built using reusable components and modern frontend practices.",
    image: "/images/projects/ph-3.png",
    tags: ["React", "Styled Components", "REST API"],
    category: "react",
  },
  {
    id: "directorist",
    title: "Directorist Pricing Plan",
    description:
      "WordPress directory plugin with pricing plan features. Contributed to feature development, customization, and maintenance.",
    image: "/images/projects/ph-4.png",
    tags: ["WordPress", "PHP", "JavaScript"],
    category: "wordpress",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Developed and maintained business websites including directorist.com, sovware.com, and wpwax.com with focus on performance and scalability.",
    image: "/images/projects/ph-5.png",
    tags: ["WordPress", "SCSS", "JavaScript", "Performance"],
    category: "wordpress",
  },
];
