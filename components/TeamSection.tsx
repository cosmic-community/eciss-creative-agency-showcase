import SectionHeading from "@/components/SectionHeading";
import { TeamMember } from "@/types";

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="team" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Zespół kreatywny" subtitle="Specjaliści, którzy tworzą wartość." />
        {team.length === 0 ? (
          <p className="mt-8 text-slate">
            Dodaj członków zespołu w polu JSON, aby wyświetlić ich w tej sekcji.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={`${member.name ?? "member"}-${index}`} className="rounded-2xl bg-white p-6 shadow">
                <p className="text-lg font-semibold text-ink">{member.name || "Członek zespołu"}</p>
                <p className="mt-2 text-sm text-slate">{member.role || "Rola zespołu"}</p>
                {member.specialty && (
                  <p className="mt-3 text-sm text-steel">{member.specialty}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}