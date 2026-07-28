import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects and open source contributions by Nihal M, including web apps, AI tools, and developer utilities.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Nihal M",
    description:
      "A collection of projects and open source contributions by Nihal M, including web apps, AI tools, and developer utilities.",
    url: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
