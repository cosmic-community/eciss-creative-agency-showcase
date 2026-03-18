import { createBucketClient } from "@cosmicjs/sdk";
import type { AgencyProfile, CaseStudy, CosmicResponse, Testimonial } from "@/types";

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === "object" && error !== null && "status" in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return "";
  if (typeof field === "string") return field;
  if (typeof field === "number" || typeof field === "boolean") return String(field);
  if (typeof field === "object" && field !== null && "value" in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === "object" && field !== null && "key" in field) {
    return String((field as { key: unknown }).key);
  }
  return "";
}

export function getMetafieldArrayValue(field: unknown): string[] {
  if (!field) return [];
  if (Array.isArray(field)) {
    return field
      .map((item) => getMetafieldValue(item))
      .filter((item) => item.length > 0);
  }
  const single = getMetafieldValue(field);
  return single ? [single] : [];
}

export async function getAgencyProfile(): Promise<AgencyProfile | null> {
  try {
    const response = await cosmic.objects
      .find({ type: "agency-profile" })
      .props(["id", "title", "slug", "metadata", "type", "created_at", "modified_at"])
      .depth(1);

    const profiles = response.objects as AgencyProfile[];
    const profile = profiles[0];

    if (!profile) return null;
    return profile;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch agency profile");
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response: CosmicResponse<CaseStudy> = await cosmic.objects
      .find({ type: "case-studies" })
      .props(["id", "title", "slug", "metadata", "type", "created_at", "modified_at"])
      .depth(1);

    return response.objects as CaseStudy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch case studies");
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response: CosmicResponse<Testimonial> = await cosmic.objects
      .find({ type: "testimonials" })
      .props(["id", "title", "slug", "metadata", "type", "created_at", "modified_at"])
      .depth(1);

    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch testimonials");
  }
}