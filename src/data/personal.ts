import { Layers, Rocket, Sparkles, Gauge } from "lucide-react";
import type { Personal } from "@/types";

export const personal: Personal = {
  name: "Nihal",
  initials: "N",
  role: "Full Stack Software Engineer",
  tagline: "Full Stack Software Engineer, Bangalore, India",
  headline: "Building Scalable Full-Stack Applications with Modern Web Technologies",
  summary:
    "Passionate Full Stack Software Engineer specializing in building scalable web applications using modern JavaScript technologies. I design and ship end-to-end products with React, Next.js, Node.js, and NestJS, deployed on cloud infrastructure.",
  bio: [
    "I'm a Full Stack Software Engineer with 1+ years of experience building production web applications end to end — from database schema to pixel-perfect UI. I work primarily across the React/Next.js and Node.js/NestJS ecosystem, with a strong focus on clean architecture and maintainable code.",
    "My work spans AI-powered hiring platforms, subscription and payment systems, gift redemption platforms, admin dashboards, workflow automation tools, and SaaS products. I care about performance, accessibility, and building interfaces that feel effortless to use.",
    "Outside of feature work, I enjoy optimizing developer experience — clean folder structures, reusable components, and typed APIs that make teams move faster with fewer bugs.",
  ],
  location: "Bangalore, India",
  experienceYears: "1+ Years",
  email: "nihal@avadhutatech.com",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/resume/nihal-resume.pdf",
  highlights: [
    {
      title: "End-to-End Ownership",
      description: "From database design to deployment, I build and ship complete features independently.",
      icon: Layers,
    },
    {
      title: "Performance Focused",
      description: "Optimized rendering, queries, and bundle sizes for fast, responsive experiences.",
      icon: Gauge,
    },
    {
      title: "Modern Stack",
      description: "React, Next.js, NestJS, and cloud-native deployments as daily tools of the trade.",
      icon: Sparkles,
    },
    {
      title: "Product Mindset",
      description: "I build with the end user and business outcome in mind, not just the ticket.",
      icon: Rocket,
    },
  ],
};
