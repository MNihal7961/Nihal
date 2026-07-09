"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <section className="bg-slate-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s build something great together
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            I&apos;m currently open to new opportunities and collaborations. Reach out and let&apos;s
            talk about how I can help your team ship.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${personal.email}`} variant="invert">
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.75} />
                {social.username ?? social.name}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
