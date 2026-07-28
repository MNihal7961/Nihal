"use client";

import Container from "@/components/containers";
import Skills from "@/components/skills";

export default function SkillsPage() {
  return (
    <Container className="px-8 pt-24 md:p-20 md:pb-10 mx-auto">
      {/* RIGHT BORDER */}
      <div
        className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
      ></div>

      {/* LEFT BORDER */}
      <div
        className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
      ></div>

      <Skills />
    </Container>
  );
}
