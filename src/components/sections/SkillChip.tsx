"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { hexToRgba } from "@/lib/utils";
import type { SkillItem } from "@/types";

interface SkillChipProps {
  skill: SkillItem;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -3,
        scale: 1.04,
        backgroundColor: hexToRgba(skill.color, 0.06),
        borderColor: hexToRgba(skill.color, 0.35),
        boxShadow: `0 12px 26px -12px ${hexToRgba(skill.color, 0.4)}`,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group flex cursor-default items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3"
    >
      <skill.icon className="h-5 w-5 shrink-0" style={{ color: skill.color }} />
      <span className="whitespace-nowrap text-sm font-medium text-slate-700">{skill.name}</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-slate-400 opacity-0 transition-all duration-300 ease-out group-hover:max-w-24 group-hover:opacity-100">
        &nbsp;• {skill.usage}
      </span>
    </motion.div>
  );
}
