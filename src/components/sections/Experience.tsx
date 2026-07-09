"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A timeline of roles and the work behind them."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 sm:left-[23px]"
          />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: index * 0.05 }}
                className="relative flex gap-6 pl-0 sm:gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
                  <Briefcase className="h-[18px] w-[18px] text-slate-700" strokeWidth={1.75} />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{item.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-slate-500">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
