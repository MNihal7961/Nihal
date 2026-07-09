import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypeorm,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiDocker,
  SiN8N,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface TechIcon {
  icon: IconType;
  color: string;
}

export const techIcons: Record<string, TechIcon> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  TypeORM: { icon: SiTypeorm, color: "#FE0803" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Ant Design": { icon: SiAntdesign, color: "#1677FF" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: FaAws, color: "#FF9900" },
  N8N: { icon: SiN8N, color: "#EA4B71" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
};
