"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { personal } from "@/data/personal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_65%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -left-20 top-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[6%] top-[12%] -z-10 hidden h-16 w-16 rounded-2xl border border-slate-200 lg:block"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.div variants={fadeUp}>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                About
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Engineer, builder, and problem solver.
              </h2>
            </motion.div>

            <div className="mt-7 space-y-4">
              {personal.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-2">
              {personal.quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                  {fact}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {personal.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col justify-between gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <stat.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{stat.value}</p>
                  {stat.meta && <p className="mt-0.5 text-xs text-slate-500">{stat.meta}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
