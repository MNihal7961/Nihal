import type { ExperienceItem } from "@/types";
import { personal } from "@/data/personal";

export const experience: ExperienceItem[] = [
  {
    id: "avadhuta-technologies",
    company: "Avadhuta Technologies Pvt. Ltd.",
    role: "Full Stack Engineer",
    duration: "Jun 2024 — Present",
    location: "Bangalore, India",
    current: true,

    summary:
      "Owning features end-to-end — from database design to production deployment — across AI-driven hiring platforms, automation tools, and SaaS products.",

    metrics: [
      { value: personal.experienceYears.split(" ")[0], label: "Years Experience" },
      { value: "Multiple", label: "Production Apps" },
      { value: "SaaS", label: "Products Built" },
      { value: "AI", label: "Platform Experience" },
    ],

    achievements: [
      "Built AI-powered hiring platforms",
      "Developed subscription & payment systems",
      "Created workflow automation using N8N",
      "Designed scalable backend APIs",
      "Delivered responsive production-ready UIs",
      "Deployed applications on AWS using Docker",
    ],

    domains: [
      "AI Recruitment Platforms",
      "Workflow Automation Systems",
      "Subscription Platforms",
      "Payment Integrations",
      "Admin Dashboards",
      "SaaS Applications",
    ],

    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "TypeORM",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "Docker",
      "AWS",
      "N8N",
      "Git",
      "GitHub",
    ],
  },
];
