interface HeroSectionProps {
  agencyName?: string;
  slogan?: string;
  headline?: string;
  heroImage?: string;
}

export default function HeroSection({
  agencyName,
  slogan,
  headline,
  heroImage
}: HeroSectionProps) {
  const title = agencyName || "ECISS";
  const claim = slogan || "Pobudzamy zmysły. Doganiamy przyszłość.";
  const heroTitle = headline || "Kreujemy cyfrowe doświadczenia Full Stack.";

  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {title}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-6 text-lg text-slate">{claim}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
            >
              Zobacz realizacje
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
          <img
            src={
              heroImage
                ? `${heroImage}?w=1200&h=900&fit=crop&auto=format,compress`
                : "https://imgix.cosmicjs.com/b1830080-22df-11f1-8e73-95937fcad31d-photo-1524504388940-b1c1722653e1-1773847939888.jpg?w=1200&h=900&fit=crop&auto=format,compress"
            }
            alt="ECISS Hero"
            width={600}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}