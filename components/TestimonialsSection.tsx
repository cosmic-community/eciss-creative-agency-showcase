import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Referencje" subtitle="Głosy naszych klientów." />
        {testimonials.length === 0 ? (
          <p className="mt-8 text-slate">
            Dodaj referencje w Cosmic, aby wypełnić tę sekcję.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}