import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technologies, languages, and tools Nihal M works with — from React and Next.js to Docker, AWS, and AI/LLM engineering.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Nihal M",
    description:
      "Explore the technologies, languages, and tools Nihal M works with — from React and Next.js to Docker, AWS, and AI/LLM engineering.",
    url: "/skills",
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
