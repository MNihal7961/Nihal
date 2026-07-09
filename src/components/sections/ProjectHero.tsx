"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, LayoutGrid } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { TypeBadge, StatusBadge } from "@/components/sections/ProjectBadges";
import { techIcons } from "@/lib/tech-icons";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { Project } from "@/types";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-900/5"
    >
      <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100 sm:aspect-21/9">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
          fallback={
            <div className="flex flex-col items-center gap-2 text-slate-300">
              <LayoutGrid className="h-10 w-10" strokeWidth={1.5} />
              <span className="text-sm font-medium text-slate-400">{project.category}</span>
            </div>
          }
          priority
        />
      </div>

      <div className="p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <TypeBadge type={project.type} />
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {project.description}
        </p>

        {project.impactHighlights && (
          <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.impactHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                {highlight}
              </div>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const iconData = techIcons[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {iconData && <iconData.icon className="h-3.5 w-3.5" style={{ color: iconData.color }} />}
                {tech}
              </span>
            );
          })}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
