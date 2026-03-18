import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CaseStudy } from "@/types";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Studia przypadku" subtitle="Wdrożenia, które zmieniają biznes." />
        {caseStudies.length === 0 ? (
          <p className="mt-8 text-slate">
            Brak studiów przypadku. Dodaj je w Cosmic, aby wypełnić tę sekcję.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}