import { Code2, Server, Database, Cloud, Wrench } from "lucide-react";
import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "Ant Design" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express.js" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "TypeORM" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker" },
      { name: "AWS EC2" },
      { name: "N8N" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub" },
    ],
  },
];
