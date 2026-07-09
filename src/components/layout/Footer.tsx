"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { navLinks } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-8">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <motion.div variants={fadeUp}>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-slate-900 to-slate-700 text-xs font-semibold tracking-tight text-white">
                {personal.initials}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  {personal.name}
                </span>
                <span className="text-[11px] text-slate-500">{personal.role}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {personal.tagline}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Quick Links
            </span>
            <nav className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Connect
            </span>
            <div className="mt-4 flex items-center gap-2.5">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 24px -10px rgba(15,23,42,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.75} />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Location
              </span>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                {personal.location}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Availability
              </span>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
                <Sparkles className="h-3.5 w-3.5 text-slate-400" />
                {personal.availabilityStatus}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-center gap-2 border-t border-slate-100 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-xs text-slate-500">
            © {year} {personal.name}
          </p>
          <p className="text-xs text-slate-400">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
