import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { personal } from "@/data/personal";

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/nihal",
    icon: Github,
    username: "@nihal",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nihal",
    icon: Linkedin,
    username: "in/nihal",
  },
  {
    name: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    username: personal.email,
  },
];
