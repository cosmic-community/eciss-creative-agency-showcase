import SectionHeading from "@/components/SectionHeading";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  address?: string;
}

export default function ContactSection({ email, phone, address }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Kontakt" subtitle="Porozmawiajmy o Twoim projekcie." />
        <div className="mt-10 grid gap-6 rounded-2xl border border-gray-200 bg-white p-8 text-slate">
          <div>
            <p className="text-sm font-semibold text-ink">Email</p>
            <p>{email || "contact@eciss.pl"}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Telefon</p>
            <p>{phone || "+48 000 000 000"}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Adres</p>
            <p>{address || "Dodaj adres w Cosmic."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}