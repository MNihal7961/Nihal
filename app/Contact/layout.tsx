import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nihal M for freelance work, collaboration, or full-time opportunities. Reach out via email or LinkedIn.",
  alternates: { canonical: "/Contact" },
  openGraph: {
    title: "Contact | Nihal M",
    description:
      "Get in touch with Nihal M for freelance work, collaboration, or full-time opportunities. Reach out via email or LinkedIn.",
    url: "/Contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
