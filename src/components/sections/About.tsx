"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineer, builder, and problem solver."
          description="A quick look at how I got here and what drives my work."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {personal.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-base leading-relaxed text-slate-600 sm:text-[1.05rem]"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {personal.highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <highlight.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{highlight.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
