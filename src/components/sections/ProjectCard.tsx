"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { TypeBadge, StatusBadge } from "@/components/sections/ProjectBadges";
import { techIcons } from "@/lib/tech-icons";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm shadow-slate-100 ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2">
        <TypeBadge type={project.type} />
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-3 text-base font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => {
          const iconData = techIcons[tech];
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600"
            >
              {iconData && <iconData.icon className="h-3 w-3" style={{ color: iconData.color }} />}
              {tech}
            </span>
          );
        })}
      </div>

      {project.keyResult && (
        <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
          <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
          <span>
            <span className="font-medium text-slate-700">Result: </span>
            {project.keyResult}
          </span>
        </div>
      )}

      {(project.githubUrl || project.liveUrl) && (
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
    </motion.article>
  );
}
