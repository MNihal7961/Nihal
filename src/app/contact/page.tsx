import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${personal.name} via email, LinkedIn, or GitHub.`,
};

export default function ContactPage() {
  return <Contact />;
}
