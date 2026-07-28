"use client";

import Container from "@/components/containers";
import { Download, ExternalLink } from "lucide-react";

const RESUME_PATH = "/resume/MNihal.pdf";
const RESUME_PREVIEW_SRC = `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`;

export default function Resume() {
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

      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold text-3xl tracking-tight">
          <span className="link--elara">Resume</span>
        </h1>

        <div className="flex items-center gap-3">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <ExternalLink size={15} />
            View in new tab
          </a>
          <a
            href={RESUME_PATH}
            download
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <Download size={15} />
            Download
          </a>
        </div>
      </div>

      <p className="tracking-tight font-custom2 text-neutral-600 dark:text-neutral-400 max-w-lg text-sm md:text-base mt-4 mb-6">
        Here&apos;s a copy of my resume. You can view it below, open it in a new tab, or download it.
      </p>

      <div
        className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-100 dark:bg-neutral-900"
        style={{ aspectRatio: "594.96 / 841.92" }}
      >
        <object
          data={RESUME_PREVIEW_SRC}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm font-custom2">
              Your browser can&apos;t preview PDFs inline.
            </p>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <ExternalLink size={15} />
              Open resume in a new tab
            </a>
          </div>
        </object>
      </div>
    </Container>
  );
}
