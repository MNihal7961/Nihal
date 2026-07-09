"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  FileDown,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { experience } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/motion";

const currentRole = experience.find((item) => item.current) ?? experience[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 -top-40 -z-10 h-md w-xl -translate-x-1/2 rounded-full bg-linear-to-br from-slate-200/60 via-slate-100/40 to-transparent blur-3xl" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[18%] -z-10 hidden h-12 w-12 rounded-2xl border border-slate-200 lg:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute left-[6%] bottom-[14%] -z-10 hidden h-3 w-3 rounded-full bg-indigo-300/70 lg:block"
      />

      <Container className="w-full">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              {personal.role}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-[2.3rem] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]"
            >
              {personal.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {personal.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {personal.techStackPreview.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Me
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {personal.credibilityPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-3"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.name}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 14px 28px -12px rgba(15,23,42,0.28)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  <social.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm lg:mt-9 lg:max-w-none"
          >
            <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-indigo-100/60 via-transparent to-sky-100/60 blur-2xl" />

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/70 ring-1 ring-slate-900/5"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-900/5">
                  <ImageWithFallback
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="object-cover"
                    fallback={
                      <span className="text-xl font-semibold text-slate-300">
                        {personal.initials}
                      </span>
                    }
                    priority
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    {personal.name}
                  </p>
                  <p className="text-sm text-slate-500">{personal.role}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Building2 className="h-4 w-4 shrink-0 text-slate-400" />
                  {currentRole?.company}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                  {personal.location}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Code2 className="h-4 w-4 shrink-0 text-slate-400" />
                  {personal.techStackPreview.slice(0, 3).join(" • ")}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600">
                  <TrendingUp className="h-4 w-4 shrink-0 text-slate-400" />
                  {personal.experienceYears} Experience
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {personal.availabilityStatus}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
