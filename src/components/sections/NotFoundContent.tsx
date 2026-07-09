"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { navLinks } from "@/lib/constants";

const quickLinks = navLinks.filter((link) => link.href !== "/resume");

export function NotFoundContent() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white py-32">
      <div className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_65%_55%_at_50%_40%,black,transparent)]" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[18%] -z-10 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl sm:h-56 sm:w-56"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-[16%] -z-10 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl sm:h-64 sm:w-64"
      />

      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[16%] top-[20%] -z-10 h-14 w-14 rounded-2xl border border-slate-200 sm:h-20 sm:w-20"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-[14%] bottom-[22%] -z-10 h-10 w-10 rounded-full border border-slate-200 sm:h-14 sm:w-14"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-[22%] top-[28%] -z-10 h-3 w-3 rounded-full bg-indigo-300/70 sm:h-4 sm:w-4"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-7xl font-semibold tracking-tight text-slate-900 sm:text-8xl"
          >
            404
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            Looks like you&apos;re lost.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist, may have been moved, or the URL
            might be incorrect.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/">Back to Home</Button>
            <Button href="/projects" variant="secondary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500">You may find what you&apos;re looking for here:</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
