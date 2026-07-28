import Container from "@/components/containers";
import Link from "next/link";
import { Mail, FileText, Linkedin, Github } from "lucide-react";
import DisplacementText from "@/components/ui/displacement-text";
import { EMAIL, FULL_NAME, SOCIAL_LINKS } from "@/lib/constants";

const buttonClass =
  "group relative overflow-hidden rounded-lg " +
  "bg-linear-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 " +
  "border border-neutral-200 dark:border-neutral-800 " +
  "text-neutral-800 dark:text-neutral-200 text-sm font-medium px-6 py-2.5 " +
  "transition-all duration-300 " +
  "hover:from-neutral-50 hover:to-neutral-100 dark:hover:from-neutral-800 dark:hover:to-neutral-800 " +
  "shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] " +
  "dark:shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] " +
  "flex items-center gap-2";

const contactDetails = [
  {
    label: "GitHub",
    value: SOCIAL_LINKS.github.replace("https://", ""),
    href: SOCIAL_LINKS.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Nihal",
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <div className="relative flex min-h-screen justify-center font-sans overflow-hidden">
      <Container className="px-8 pt-24 md:p-20 md:pb-10 mx-auto">
        {/* Background Pattern & Borders */}
        <div
          className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
        ></div>

        <div
          className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-80 dark:opacity-12"
        ></div>

        <h1 className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold text-3xl tracking-tight">
          <span className="link--elara">Contact</span>
        </h1>
        <p className="tracking-tight font-custom2 text-neutral-600 dark:text-neutral-400 max-w-lg text-sm md:text-base mt-2 mb-12">
          Hi there — I’m currently open to meaningful work.
        </p>

        <div className="w-full max-w-2xl p-0 md:p-0 relative z-10">
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className={buttonClass}>
              <Mail className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              Email Me
            </a>
            <Link href="/resume" className={buttonClass}>
              <FileText className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              View Resume
            </Link>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <Linkedin className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-10 border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 font-custom2 transition-colors"
              >
                <span className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <Icon size={14} />
                  {label}
                </span>
                <span className="text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 group-hover:underline transition-colors">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-custom2">
            <p>{FULL_NAME}</p>
          </div>
        </div>

        <div className="w-full h-96 relative overflow-hidden flex items-center justify-center -mt-20">
          <DisplacementText
            text="NIHAL M"
            fontSize={300}
            className="h-full w-full"
            lightColor="#171717"
            darkColor="#e5e5e5"
          />
        </div>
      </Container>
    </div>
  );
}
