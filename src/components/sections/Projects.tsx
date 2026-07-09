"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  return (
    <section className="bg-slate-50/60 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of AI-driven platforms, payment systems, dashboards, and SaaS products I've built."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
