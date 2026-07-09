import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Experience",
  description: `A snapshot of ${personal.name}'s professional role, key achievements, and the tech stack behind the work.`,
};

export default function ExperiencePage() {
  return <Experience />;
}
