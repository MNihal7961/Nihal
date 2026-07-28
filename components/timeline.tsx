type TechKey =
  | "react"
  | "next"
  | "ts"
  | "js"
  | "node"
  | "nestjs"
  | "express"
  | "mongodb"
  | "postgresql"
  | "mysql"
  | "typeorm"
  | "tailwind"
  | "antdesign"
  | "redux"
  | "docker"
  | "aws"
  | "n8n"
  | "git"
  | "github";

const techNames: Record<TechKey, string> = {
  react: "React",
  next: "Next.js",
  ts: "TypeScript",
  js: "JavaScript",
  node: "Node.js",
  nestjs: "NestJS",
  express: "Express.js",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  typeorm: "TypeORM",
  tailwind: "Tailwind CSS",
  antdesign: "Ant Design",
  redux: "Redux Toolkit",
  docker: "Docker",
  aws: "AWS",
  n8n: "N8N",
  git: "Git",
  github: "GitHub",
};

type Stat = {
  value: string;
  label: string;
};

type Experience = {
  title: string;
  company: string;
  location: string;
  workMode: string;
  dates: string;
  current?: boolean;
  stats: Stat[];
  summary: string;
  achievements: string[];
  projects: string[];
  tech: TechKey[];
};

const experiences: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Avadhuta Technologies Pvt. Ltd.",
    location: "Bangalore, India",
    workMode: "Hybrid",
    dates: "Jun 2024 — Present",
    current: true,
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "Multiple", label: "Production Apps" },
      { value: "SaaS", label: "Products Built" },
      { value: "AI", label: "Platform Experience" },
    ],
    summary:
      "Owning features end-to-end — from database design to production deployment — across AI-driven hiring platforms, automation tools, and SaaS products.",
    achievements: [
      "Built AI-powered hiring platforms",
      "Developed subscription & payment systems",
      "Created workflow automation using N8N",
      "Designed scalable backend APIs",
      "Delivered responsive production-ready UIs",
      "Deployed applications on AWS using Docker",
    ],
    projects: [
      "AI Recruitment Platforms",
      "Workflow Automation Systems",
      "Subscription Platforms",
      "Payment Integrations",
      "Admin Dashboards",
      "SaaS Applications",
    ],
    tech: [
      "react",
      "next",
      "ts",
      "js",
      "node",
      "nestjs",
      "express",
      "mongodb",
      "postgresql",
      "mysql",
      "typeorm",
      "tailwind",
      "antdesign",
      "redux",
      "docker",
      "aws",
      "n8n",
      "git",
      "github",
    ],
  },
];

export const Timeline = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-950 dark:text-neutral-50 pb-2 mt-2">
        <span className="link--elara">Experiences</span>
      </h1>
      <div className="w-auto border-t border-solid border-(--pattern-fg) opacity-100 dark:opacity-15 mb-4 -mx-2 md:-mx-14"></div>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div key={exp.title} className="pb-2 -mx-2 md:-mx-14 px-2 md:px-14">
            <div className="flex items-start gap-4 py-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-lg border border-neutral-200/80 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 font-bold text-neutral-700 dark:text-neutral-200">
                AT
              </div>
              <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                {/* Main summary info */}
                <div className="min-w-0">
                  <div className="font-semibold text-base md:text-lg text-neutral-950 dark:text-neutral-50">
                    {exp.title}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.company} · {exp.location}
                  </div>
                </div>
                {/* Dates */}
                <div className="shrink-0 md:text-right md:min-w-35">
                  <div className="text-xs md:text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mt-1 md:justify-end">
                     <div className="text-[12px] text-neutral-600 dark:text-neutral-400">
                   {exp.workMode}
                  </div>
                 
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {exp.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-neutral-200/80 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-3 py-2 text-center"
                >
                  <div className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-4">
              {exp.summary}
            </p>

            {/* Key Achievements */}
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                Key Achievements
              </h2>
              <ul className="list-disc list-inside pl-0 text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
                {exp.achievements.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Projects & Domains */}
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                Projects & Domains
              </h2>
              <div className="flex flex-wrap gap-2">
                {exp.projects.map((project) => (
                  <div
                    key={project}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-950 dark:text-neutral-200 shadow-sm"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-sm font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((key) => (
                  <div
                    key={key}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-950 dark:text-neutral-200 shadow-sm"
                  >
                    {techNames[key]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
