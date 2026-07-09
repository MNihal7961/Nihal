import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Experience",
  description: `A timeline of ${personal.name}'s professional roles, responsibilities, and the tech stack behind each.`,
};

export default function ExperiencePage() {
  return <Experience />;
}
