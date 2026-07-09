import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personal.name}, a ${personal.role} based in ${personal.location} with ${personal.experienceYears} of experience.`,
};

export default function AboutPage() {
  return <About />;
}
