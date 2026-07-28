"use client";

import { CSSProperties } from "react";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiAntdesign,
    SiReactrouter,
    SiBootstrap,
    SiMui,
    SiShadcnui,
    SiRedux,
    SiReactquery,
    SiNestjs,
    SiExpress,
    SiJsonwebtokens,
    SiGraphql,
    SiStrapi,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiTypeorm,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiAmazonec2,
    SiAmazons3,
    SiN8N,
    SiLinux,
    SiNginx,
    SiGrafana,
    SiGit,
    SiGithub,
    SiPostman,
    SiGithubactions,
    SiLangchain,
    SiSupabase,
    SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { FaCube, FaBrain, FaSitemap, FaRobot, FaDatabase } from "react-icons/fa";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Ant Design", icon: SiAntdesign, color: "#1890FF" },
            { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "Material UI", icon: SiMui, color: "#007FFF" },
            { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
        ],
    },
    {
        title: "State Management",
        skills: [
            { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
            { name: "Zustand", icon: FaCube, color: "#764ABC" },
            { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "Express.js", icon: SiExpress, color: "#000000" },
            { name: "REST APIs", icon: TbApi, color: "#0EA5E9" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#FB015B" },
            { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "TypeORM", icon: SiTypeorm, color: "#E83524" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
    {
        title: "AI / LLM",
        skills: [
            { name: "LLM", icon: FaBrain, color: "#10A37F" },
            { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
            { name: "LangGraph", icon: FaSitemap, color: "#2C3E50" },
            { name: "RAG", icon: FaRobot, color: "#6366F1" },
            { name: "Qdrant", icon: FaDatabase, color: "#DC244C" },
            { name: "ChromaDB", icon: FaDatabase, color: "#FFA500" },
        ],
    },
    {
        title: "DevOps & Infrastructure",
        skills: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "AWS EC2", icon: SiAmazonec2, color: "#FF9900" },
            { name: "AWS S3", icon: SiAmazons3, color: "#FF9900" },
            { name: "N8N", icon: SiN8N, color: "#EA4B71" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        ],
    },
    {
        title: "Tools & Workflow",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
        ],
    },
];

export default function Skills() {
    return (
        <div className="w-full mt-4 relative">
            <div className="w-auto border-t border-solid border-(--pattern-fg) opacity-100 dark:opacity-15 mb-2 -mx-2 md:-mx-14"></div>
            <div className="flex flex-col items-start space-y-3">
                <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50 py-2">
                    <span className="link--elara">Skills</span>
                </h1>
            </div>
            <div className="w-auto border-t border-solid border-(--pattern-fg) opacity-100 dark:opacity-15 mb-4 -mx-2 md:-mx-14"></div>

            <div className="flex flex-col items-start space-y-3">
                <p className="font-custom2 text-neutral-700 dark:text-neutral-300 mt-3 px-2 py-1.75 text-sm inline-block bg-neutral-100 dark:bg-neutral-900 border-dashed border-neutral-300 dark:border-neutral-700 border mb-6">
                    I love working with these technologies to build beautiful and functional applications.
                </p>

                <div className="flex flex-col gap-5 w-full">
                    {skillGroups.map((group) => (
                        <div key={group.title}>
                            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-2">
                                {group.title}
                            </h2>
                            <div className="skill-row flex flex-wrap items-center gap-2">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        style={{ "--brand": skill.color } as CSSProperties}
                                        className="skill-pill group flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/50 hover:border-(--brand) dark:hover:border-(--brand) transition-all duration-300 cursor-pointer"
                                    >
                                        <skill.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300 transition-colors group-hover:text-(--brand) dark:group-hover:text-(--brand)" />
                                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
