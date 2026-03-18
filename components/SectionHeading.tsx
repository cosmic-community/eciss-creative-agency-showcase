interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      {subtitle && <p className="mt-2 text-slate">{subtitle}</p>}
    </div>
  );
}