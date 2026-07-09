"use client";

import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Quote,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { experience } from "@/data/experience";
import { techIcons } from "@/lib/tech-icons";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const currentRole = experience.find((item) => item.current) ?? experience[0];
const linkedin = socials.find((social) => social.name === "LinkedIn");

const quickInfo = [
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: User, label: "Role", value: personal.role },
  { icon: TrendingUp, label: "Experience", value: personal.experienceYears },
  { icon: Sparkles, label: "Availability", value: personal.availabilityStatus },
];

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_65%_55%_at_50%_25%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-md w-xl -translate-x-1/2 rounded-full bg-linear-to-br from-indigo-100/50 via-sky-100/40 to-transparent blur-3xl" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[14%] -z-10 hidden h-14 w-14 rounded-2xl border border-slate-200 lg:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-[8%] bottom-[18%] -z-10 hidden h-3 w-3 rounded-full bg-indigo-300/70 lg:block"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Let&apos;s Build Something Meaningful
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            I&apos;m currently working as a {personal.role} at {currentRole?.company} and am open to
            discussing new opportunities, freelance projects, collaborations, and innovative product
            ideas.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            I enjoy building scalable web applications, SaaS products, AI-powered platforms, and
            workflow automation systems.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.08)}
            className="mx-auto mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {quickInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl bg-slate-50 px-4 py-4 text-left shadow-sm ring-1 ring-slate-900/5"
              >
                <info.icon className="h-4 w-4 text-slate-400" strokeWidth={1.75} />
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  {info.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={`mailto:${personal.email}`}>
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
            <Button
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Download className="h-4 w-4" />
              View Resume
            </Button>
            {linkedin && (
              <Button href={linkedin.href} target="_blank" rel="noopener noreferrer" variant="secondary">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </Button>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <social.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-900">{social.name}</p>
                <p className="mt-0.5 truncate text-sm text-slate-500">{social.username}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Currently Working With
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {personal.techStackPreview.map((tech) => {
              const iconData = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {iconData && (
                    <iconData.icon className="h-3.5 w-3.5" style={{ color: iconData.color }} />
                  )}
                  {tech}
                </span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 max-w-xl text-center"
        >
          <Quote className="mx-auto h-5 w-5 text-slate-300" />
          <p className="mt-3 text-base italic leading-relaxed text-slate-500 sm:text-lg">
            Building software that solves real problems and creates meaningful user experiences.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
