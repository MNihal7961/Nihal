"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, Star } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Badge } from "@/components/ui/Badge";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100 transition-shadow hover:shadow-lg hover:shadow-slate-200/70"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          fallback={
            <div className="flex flex-col items-center gap-2 text-slate-300">
              <LayoutGrid className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-xs font-medium text-slate-400">{project.category}</span>
            </div>
          }
        />
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {project.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
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
          </div>
        )}
      </div>
    </motion.article>
  );
}
