import { Code2, MapPin, Clock, Layers, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Fact = {
  icon: LucideIcon;
  label: string;
};

const facts: Fact[] = [
  { icon: Code2, label: "Full Stack Engineer" },
  { icon: MapPin, label: "Based in Bangalore" },
  { icon: Clock, label: "2+ Years Experience" },
  { icon: Layers, label: "MERN + Next.js Specialist" },
  { icon: Rocket, label: "Building Production SaaS Products" },
];

export const About = () => {
  return (
    <div>

      <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-950 dark:text-neutral-50 pb-2 mt-2">
        <span className="link--elara">About</span>
      </h1>
      <div className="w-auto border-t border-solid border-(--pattern-fg) opacity-100 dark:opacity-15 mb-4 -mx-2 md:-mx-14"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
            Engineer, builder, and problem solver.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I build modern web applications using React, Next.js, TypeScript, Node.js, and NestJS.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Over the last year, I&apos;ve worked on AI-powered hiring platforms, workflow automation systems, payment integrations, and SaaS products used in production environments.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            My focus is creating software that is scalable, maintainable, and enjoyable to use.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:border-l md:border-(--pattern-fg) md:pl-6 md:opacity-100">
          {facts.map((fact) => (
            <div key={fact.label} className="flex items-center gap-2.5">
              <fact.icon className="w-4 h-4 shrink-0 text-neutral-600 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
