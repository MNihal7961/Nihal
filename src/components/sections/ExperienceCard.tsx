"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Code2, Layers } from "lucide-react";
import { techIcons } from "@/lib/tech-icons";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { ExperienceItem } from "@/types";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-slate-200/60 ring-1 ring-slate-900/5 sm:p-9"
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-linear-to-br from-indigo-100/50 via-transparent to-transparent blur-3xl"
      />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Briefcase className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {item.company} · {item.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="text-xs font-medium text-slate-500">{item.duration}</span>
          {item.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Currently Working Here
            </span>
          )}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {item.metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl bg-slate-50 px-4 py-3.5">
            <p className="text-lg font-semibold text-slate-900 sm:text-xl">{metric.value}</p>
            <p className="mt-0.5 text-xs text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-7 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
        {item.summary}
      </p>

      <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Key Achievements
          </h4>
          <ul className="mt-3 space-y-2.5">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Projects &amp; Domains
          </h4>
          <ul className="mt-3 space-y-2.5">
            {item.domains.map((domain) => (
              <li key={domain} className="flex items-start gap-2.5 text-sm text-slate-600">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                {domain}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 border-t border-slate-100 pt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Technologies
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.techStack.map((tech) => {
            const iconData = techIcons[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {iconData ? (
                  <iconData.icon className="h-3.5 w-3.5" style={{ color: iconData.color }} />
                ) : (
                  <Code2 className="h-3.5 w-3.5 text-slate-400" />
                )}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
