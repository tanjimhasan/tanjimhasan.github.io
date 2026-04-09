interface SkillTagProps {
  name: string;
}

export default function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="inline-block rounded-full border border-border bg-bg-tertiary px-4 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
      {name}
    </span>
  );
}
