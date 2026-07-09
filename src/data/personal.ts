import { Rocket, Code2, Zap, MapPin, TrendingUp, Blocks } from "lucide-react";
import type { Personal } from "@/types";

const experienceYears = "2+ Years";

export const personal: Personal = {
  name: "M Nihal",
  initials: "MN",
  role: "Full Stack Engineer",
  tagline:
    "Building scalable web applications, SaaS platforms, AI-powered systems, and automation solutions.",
  headline: "Building Modern SaaS Products, AI Platforms & Scalable Web Applications.",
  summary:
    "I design and develop production-ready software using React, Next.js, TypeScript, NestJS, and cloud technologies.",

  bio: [
    "I build modern web applications using React, Next.js, TypeScript, Node.js, and NestJS.",
    "Over the last year, I've worked on AI-powered hiring platforms, workflow automation systems, payment integrations, and SaaS products used in production environments.",
    "My focus is creating software that is scalable, maintainable, and enjoyable to use.",
  ],

  location: "Bangalore, India",
  experienceYears,

  email: "mnihal7961@gmail.com",

  avatarUrl: "/profile.jpg",

  resumeUrl: "/resume/M-Nihal-Resume.pdf",

  techStackPreview: [
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],

  availabilityStatus: "Available for opportunities",

  credibilityPills: [
    "Full Stack Engineer",
    `${experienceYears} Experience`,
    "Production Applications",
    "SaaS Products",
    "AI Platforms",
    "Workflow Automation",
  ],

  stats: [
    {
      icon: Rocket,
      label: "Current Role",
      value: "Full Stack Engineer",
      meta: "Avadhuta Technologies",
    },
    {
      icon: Code2,
      label: "Core Stack",
      value: "React • Next.js • NestJS • TypeScript",
    },
    {
      icon: Zap,
      label: "Focus Areas",
      value: "SaaS • AI Platforms • Automation",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
    },
    {
      icon: TrendingUp,
      label: "Experience",
      value: experienceYears,
      meta: "Professional Experience",
    },
    {
      icon: Blocks,
      label: "Projects",
      value: "Multiple",
      meta: "Production Applications",
    },
  ],

  quickFacts: [
    "Full Stack Engineer",
    "Based in Bangalore",
    `${experienceYears} Experience`,
    "MERN + Next.js Specialist",
    "Building Production SaaS Products",
  ],
};
