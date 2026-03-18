import SectionHeading from "@/components/SectionHeading";

export default function AboutSection({ aboutHtml }: { aboutHtml: string }) {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="O agencji" subtitle="Poznaj naszą misję i podejście." />
        <div
          className="prose prose-lg mt-8 text-slate"
          dangerouslySetInnerHTML={{
            __html: aboutHtml || "<p>Dodaj opis agencji w Cosmic, aby pojawił się w tej sekcji.</p>"
          }}
        />
      </div>
    </section>
  );
}