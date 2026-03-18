export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface AgencyProfile extends CosmicObject {
  type: "agency-profile";
  metadata: {
    agency_name?: string;
    slogan?: string;
    hero_headline?: string;
    about?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    team?: unknown;
    contact_email?: string;
    contact_phone?: string;
    contact_address?: string;
    social_links?: unknown;
  };
}

export interface CaseStudy extends CosmicObject {
  type: "case-studies";
  metadata: {
    client?: string;
    summary?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    services?: unknown;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Testimonial extends CosmicObject {
  type: "testimonials";
  metadata: {
    author_name?: string;
    author_role?: string;
    company?: string;
    quote?: string;
    author_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface TeamMember {
  name?: string;
  role?: string;
  specialty?: string;
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}