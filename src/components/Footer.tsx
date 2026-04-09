import { Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Tanjim Hasan. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== "mail" ? "_blank" : undefined}
              rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
              className="text-text-muted transition-colors hover:text-accent"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
