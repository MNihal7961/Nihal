import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Nihal — Full Stack Software Engineer",
  title: "Nihal | Full Stack Software Engineer",
  description:
    "Portfolio of Nihal, a Full Stack Software Engineer based in Bangalore, India, specializing in React, Next.js, Node.js, and NestJS applications.",
  url: "https://nihal.dev",
  ogImage: "/og-image.png",
  keywords: [
    "Nihal",
    "Full Stack Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "TypeScript Developer",
    "Bangalore Software Engineer",
  ],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
