interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
  bullets?: string[];
}

export default function TimelineItem({
  period,
  title,
  subtitle,
  description,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-border py-6 pl-8">
      <div className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-2 border-accent bg-bg-primary" />
      <span className="text-sm font-medium text-accent">{period}</span>
      <h3 className="mt-1 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary">{subtitle}</p>
      {description && (
        <p className="mt-2 text-text-secondary">{description}</p>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
