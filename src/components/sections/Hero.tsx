"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 -top-40 -z-10 h-md w-xl -translate-x-1/2 rounded-full bg-linear-to-br from-slate-200/60 via-slate-100/40 to-transparent blur-3xl" />

      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]"
            >
              {personal.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {personal.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{personal.experienceYears} Experience</span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
                >
                  <social.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-square w-full max-w-88 mx-auto">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-slate-100 to-slate-50 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/50">
                <ImageWithFallback
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="object-cover"
                  fallbackClassName="from-slate-100 via-white to-slate-100"
                  fallback={
                    <span className="text-6xl font-semibold text-slate-300">
                      {personal.initials}
                    </span>
                  }
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-md"
              >
                {personal.role}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
