export interface Project {
  slug: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  longDescription?: {
    pt: string;
    en: string;
  };
  image: string;
  tags: string[];
  category: "ai-ml" | "web" | "backend" | "fullstack";
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  title: {
    pt: string;
    en: string;
  };
  icon: string;
  skills: Skill[];
  gridSpan?: "normal" | "wide" | "tall";
}

export interface Experience {
  company: string;
  role: {
    pt: string;
    en: string;
  };
  period: string;
  description: {
    pt: string;
    en: string;
  };
  technologies: string[];
  logo?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
