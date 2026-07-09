import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects built by ${personal.name}, including AI-powered platforms, payment systems, dashboards, and SaaS applications.`,
};

export default function ProjectsPage() {
  return <Projects />;
}
