export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/tanjimhasan",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tanjimhasan",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:tanjim.hasan.dev@gmail.com",
    icon: "mail" as const,
  },
] as const;

export const CONTACT_INFO = {
  email: "tanjim.hasan.dev@gmail.com",
  phone: "+8801867499143",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/tanjimhasan",
} as const;

export const PERSONAL = {
  name: "Tanjim Hasan",
  role: "Software Engineer — Frontend",
  summary:
    "Frontend engineer with hands-on experience in React, JavaScript, TypeScript and WordPress, focused on building intuitive, high-performance user interfaces. Passionate about improving user experience and delivering efficient, scalable frontend solutions.",
} as const;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
