import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View or download Nihal M's resume — full stack software engineer with experience across web, backend, and AI-powered systems.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Nihal M",
    description:
      "View or download Nihal M's resume — full stack software engineer with experience across web, backend, and AI-powered systems.",
    url: "/resume",
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
