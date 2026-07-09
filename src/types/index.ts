import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  meta?: string;
}

export interface Personal {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  headline: string;
  summary: string;
  bio: string[];
  location: string;
  experienceYears: string;
  email: string;
  avatarUrl: string;
  resumeUrl: string;
  stats: Stat[];
  quickFacts: string[];
  techStackPreview: string[];
  availabilityStatus: string;
  credibilityPills: string[];
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
  description: string;
  usage: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  skills: SkillItem[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  summary: string;
  metrics: Metric[];
  achievements: string[];
  domains: string[];
  techStack: string[];
}

export type ProjectTier = "hero" | "featured" | "other";
export type ProjectStatus = "Production" | "Completed" | "Active Development";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  status: ProjectStatus;
  tier: ProjectTier;
  technologies: string[];
  impactHighlights?: string[];
  keyResult?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  username?: string;
}
