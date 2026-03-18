import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow">
      <p className="text-sm text-slate">“{testimonial.metadata?.quote || "Brak cytatu."}”</p>
      <div className="mt-6 flex items-center gap-3">
        {testimonial.metadata?.author_photo?.imgix_url ? (
          <img
            src={`${testimonial.metadata.author_photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.author_name || testimonial.title}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-200" />
        )}
        <div>
          <p className="text-sm font-semibold text-ink">
            {testimonial.metadata?.author_name || "Klient"}
          </p>
          <p className="text-xs text-slate">
            {testimonial.metadata?.author_role || "Rola"}{" "}
            {testimonial.metadata?.company ? `· ${testimonial.metadata.company}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}