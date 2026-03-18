import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getAgencyProfile, getCaseStudies, getTestimonials } from "@/lib/cosmic";
import { renderMarkdown } from "@/lib/markdown";
import { normalizeTeam } from "@/lib/team";

export default async function HomePage() {
  const [profile, caseStudies, testimonials] = await Promise.all([
    getAgencyProfile(),
    getCaseStudies(),
    getTestimonials()
  ]);

  const aboutHtml = renderMarkdown(profile?.metadata?.about ?? "");
  const team = normalizeTeam(profile?.metadata?.team);

  return (
    <div className="bg-white">
      <HeroSection
        agencyName={profile?.metadata?.agency_name}
        slogan={profile?.metadata?.slogan}
        headline={profile?.metadata?.hero_headline}
        heroImage={profile?.metadata?.hero_image?.imgix_url}
      />
      <AboutSection aboutHtml={aboutHtml} />
      <TeamSection team={team} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection
        email={profile?.metadata?.contact_email}
        phone={profile?.metadata?.contact_phone}
        address={profile?.metadata?.contact_address}
      />
    </div>
  );
}