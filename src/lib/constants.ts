import type { NavLink } from "@/types";

export const siteConfig = {
  name: "M Nihal — Full Stack Software Engineer",
  title: "M Nihal | Full Stack Software Engineer",
  description:
    "Portfolio of M Nihal, a Full Stack Software Engineer based in Bangalore, India, specializing in React, Next.js, Node.js, and NestJS applications.",
  url: "https://nihalm.vercel.app",
  ogImage: "/og-image.png",
  keywords: [
    "M Nihal",
    "Full Stack Software Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "MERN Stack Developer",
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
