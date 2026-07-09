import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-hiring-platform",
    title: "AI-Powered Hiring Platform",
    description:
      "An end-to-end recruitment platform that uses AI to screen resumes, rank candidates, and automate interview scheduling for hiring teams.",
    image: "/projects/ai-hiring-platform.png",
    category: "AI-Powered Hiring Platform",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "AWS EC2"],
    githubUrl: "https://github.com/nihal/ai-hiring-platform",
    liveUrl: "https://ai-hiring-platform.example.com",
    featured: true,
  },
  {
    id: "subscription-billing-system",
    title: "Subscription & Payment System",
    description:
      "A recurring billing platform with plan management, invoicing, webhooks, and an admin panel for tracking revenue and churn.",
    image: "/projects/subscription-billing.png",
    category: "Subscription & Payment System",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Docker"],
    githubUrl: "https://github.com/nihal/subscription-billing-system",
    liveUrl: "https://billing.example.com",
    featured: true,
  },
  {
    id: "gift-redemption-platform",
    title: "Gift Redemption Platform",
    description:
      "A rewards platform enabling users to redeem points for gift cards and vouchers, with real-time inventory sync and fraud checks.",
    image: "/projects/gift-redemption.png",
    category: "Gift Redemption Platform",
    technologies: ["Next.js", "NestJS", "MySQL", "TypeORM", "Tailwind CSS"],
    githubUrl: "https://github.com/nihal/gift-redemption-platform",
    liveUrl: "https://rewards.example.com",
    featured: true,
  },
  {
    id: "admin-analytics-dashboard",
    title: "Admin Analytics Dashboard",
    description:
      "A role-based admin dashboard with real-time metrics, user management, and configurable reporting widgets.",
    image: "/projects/admin-dashboard.png",
    category: "Admin Dashboard",
    technologies: ["React.js", "TypeScript", "Ant Design", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/nihal/admin-analytics-dashboard",
    liveUrl: "https://dashboard.example.com",
  },
  {
    id: "workflow-automation-suite",
    title: "Workflow Automation Suite",
    description:
      "An internal automation system built on N8N and custom Node.js services to eliminate repetitive operational tasks across teams.",
    image: "/projects/workflow-automation.png",
    category: "Workflow Automation System",
    technologies: ["N8N", "Node.js", "NestJS", "MongoDB", "Docker"],
    githubUrl: "https://github.com/nihal/workflow-automation-suite",
  },
  {
    id: "saas-project-tracker",
    title: "SaaS Project Tracker",
    description:
      "A multi-tenant SaaS application for teams to plan sprints, track tasks, and visualize progress with kanban and timeline views.",
    image: "/projects/saas-tracker.png",
    category: "SaaS Application",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redux Toolkit"],
    githubUrl: "https://github.com/nihal/saas-project-tracker",
    liveUrl: "https://tracker.example.com",
  },
  {
    id: "ecommerce-storefront",
    title: "E-commerce Storefront",
    description:
      "A performant storefront with product catalog, cart, checkout, and an integrated admin panel for inventory and order management.",
    image: "/projects/ecommerce-storefront.png",
    category: "E-commerce Solution",
    technologies: ["React.js", "Next.js", "Express.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/nihal/ecommerce-storefront",
    liveUrl: "https://shop.example.com",
  },
];
