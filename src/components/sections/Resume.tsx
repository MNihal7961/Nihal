"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  FileText,
  FileWarning,
  Loader2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";
import { fadeUp, viewportOnce } from "@/lib/motion";

type ResumeStatus = "checking" | "available" | "missing";

export function Resume() {
  const [status, setStatus] = useState<ResumeStatus>("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(personal.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "available" : "missing");
      })
      .catch(() => {
        if (!cancelled) setStatus("missing");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Resume"
          title="Take a closer look"
          description="Preview my full resume below, or download a copy for later."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm shadow-slate-100">
            <div className="aspect-3/4 w-full sm:aspect-4/5 lg:aspect-3/4">
              {status === "checking" && (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="text-sm">Loading resume preview…</span>
                </div>
              )}

              {status === "available" && (
                <iframe
                  src={`${personal.resumeUrl}#view=fitH`}
                  title={`${personal.name} resume`}
                  className="h-full w-full border-0"
                />
              )}

              {status === "missing" && (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <FileWarning className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      Resume preview unavailable
                    </p>
                    <p className="mt-1 max-w-xs text-sm text-slate-500">
                      Add a PDF at{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">
                        public{personal.resumeUrl}
                      </code>{" "}
                      to enable the live preview.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FileText className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {personal.name} — Resume
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {personal.role} · {personal.experienceYears} experience
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Button href={personal.resumeUrl} className="w-full">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
