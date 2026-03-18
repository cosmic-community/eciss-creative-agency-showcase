import type { TeamMember } from "@/types";

export function normalizeTeam(rawTeam: unknown): TeamMember[] {
  if (!rawTeam) return [];

  if (Array.isArray(rawTeam)) {
    return rawTeam
      .map((member) => normalizeMember(member))
      .filter((member): member is TeamMember => Boolean(member));
  }

  if (typeof rawTeam === "object" && rawTeam !== null && "members" in rawTeam) {
    const members = (rawTeam as { members?: unknown }).members;
    if (Array.isArray(members)) {
      return members
        .map((member) => normalizeMember(member))
        .filter((member): member is TeamMember => Boolean(member));
    }
  }

  return [];
}

function normalizeMember(member: unknown): TeamMember | null {
  if (!member || typeof member !== "object") return null;

  const data = member as Record<string, unknown>;
  return {
    name: typeof data.name === "string" ? data.name : undefined,
    role: typeof data.role === "string" ? data.role : undefined,
    specialty: typeof data.specialty === "string" ? data.specialty : undefined
  };
}