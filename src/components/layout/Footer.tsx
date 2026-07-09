import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { navLinks } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-semibold text-white">
            {personal.initials}
          </span>
          <span>
            © {year} {personal.name}. All rights reserved.
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <social.icon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
