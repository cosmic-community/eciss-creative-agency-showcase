import { CaseStudy } from "@/types";
import { renderMarkdown } from "@/lib/markdown";
import { getMetafieldArrayValue } from "@/lib/cosmic";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const services = getMetafieldArrayValue(study.metadata?.services);
  const solutionHtml = renderMarkdown(study.metadata?.solution ?? "");
  const resultsHtml = renderMarkdown(study.metadata?.results ?? "");

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Case study</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{study.title}</h3>
          <p className="mt-3 text-sm text-slate">{study.metadata?.summary || "Brak opisu."}</p>
        </div>
        {study.metadata?.featured_image?.imgix_url && (
          <img
            src={`${study.metadata.featured_image.imgix_url}?w=360&h=360&fit=crop&auto=format,compress`}
            alt={study.title}
            width={180}
            height={180}
            className="h-20 w-20 rounded-xl object-cover"
          />
        )}
      </div>
      <div className="mt-6 grid gap-4 text-sm text-slate">
        <div>
          <p className="font-semibold text-ink">Klient</p>
          <p>{study.metadata?.client || "Brak danych"}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Wyzwanie</p>
          <p>{study.metadata?.challenge || "Brak danych"}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Rozwiązanie</p>
          <div
            className="prose prose-sm mt-2 text-slate"
            dangerouslySetInnerHTML={{
              __html: solutionHtml || "<p>Dodaj rozwiązanie w Cosmic.</p>"
            }}
          />
        </div>
        <div>
          <p className="font-semibold text-ink">Rezultaty</p>
          <div
            className="prose prose-sm mt-2 text-slate"
            dangerouslySetInnerHTML={{
              __html: resultsHtml || "<p>Dodaj rezultaty w Cosmic.</p>"
            }}
          />
        </div>
        {services.length > 0 && (
          <div>
            <p className="font-semibold text-ink">Usługi</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={`${study.id}-${service}`}
                  className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}