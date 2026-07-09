"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectHero } from "@/components/sections/ProjectHero";
import { ProjectFeatured } from "@/components/sections/ProjectFeatured";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects, builtDomains } from "@/data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const heroProject = projects.find((project) => project.tier === "hero");
const featuredProjects = projects.filter((project) => project.tier === "featured");
const otherProjects = projects.filter((project) => project.tier === "other");

const headerBadges = [
  `${projects.length}+ Projects Delivered`,
  "Production Experience",
  "Full Stack Development",
];

export function Projects() {
  return (
    <section className="bg-slate-50/60 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A collection of production applications, SaaS platforms, AI-powered systems, automation workflows, and business solutions I've built."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 flex flex-wrap gap-2"
        >
          {headerBadges.map((badge) => (
            <motion.span
              key={badge}
              variants={fadeUp}
              className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {heroProject && (
          <div className="mt-12">
            <ProjectHero project={heroProject} />
          </div>
        )}

        {featuredProjects.length > 0 && (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {featuredProjects.map((project) => (
              <ProjectFeatured key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-14">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Other Projects
            </span>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 border-t border-slate-200 pt-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            What I&apos;ve Built
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {builtDomains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
