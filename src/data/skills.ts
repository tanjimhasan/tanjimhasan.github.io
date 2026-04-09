export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "WordPress", "Gutenberg"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SCSS", "Styled Components"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Webpack", "VS Code", "Postman"],
  },
  {
    category: "APIs & Auth",
    items: ["REST API", "JWT Authentication"],
  },
];
