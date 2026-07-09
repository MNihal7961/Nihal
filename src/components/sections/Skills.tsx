"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/sections/SkillChip";
import { skills } from "@/data/skills";
import { staggerContainer, viewportOnce } from "@/lib/motion";

const allSkills = skills.flatMap((category) => category.skills);

export function Skills() {
  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          description="I build modern, scalable applications using a carefully selected technology stack across frontend, backend, cloud, and automation."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {allSkills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
