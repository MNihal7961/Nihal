"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { TypeBadge, StatusBadge } from "@/components/sections/ProjectBadges";
import { techIcons } from "@/lib/tech-icons";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";

interface ProjectFeaturedProps {
  project: Project;
}

export function ProjectFeatured({ project }: ProjectFeaturedProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5 transition-shadow hover:shadow-xl hover:shadow-slate-200/80"
    >
      <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
          fallback={
            <div className="flex flex-col items-center gap-2 text-slate-300">
              <LayoutGrid className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-xs font-medium text-slate-400">{project.category}</span>
            </div>
          }
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <TypeBadge type={project.type} />
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => {
            const iconData = techIcons[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600"
              >
                {iconData && <iconData.icon className="h-3 w-3" style={{ color: iconData.color }} />}
                {tech}
              </span>
            );
          })}
        </div>

        {project.keyResult && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-slate-50 px-3.5 py-3 text-sm text-slate-600">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
            {project.keyResult}
          </div>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
