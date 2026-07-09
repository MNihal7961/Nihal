import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
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
  highlights: Highlight[];
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  username?: string;
}
