import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technologies and tools ${personal.name} uses across frontend, backend, databases, cloud, and DevOps.`,
};

export default function SkillsPage() {
  return <Skills />;
}
