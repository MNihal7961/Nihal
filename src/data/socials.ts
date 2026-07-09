import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { personal } from "@/data/personal";

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/MNihal7961",
    icon: Github,
    username: "github.com/MNihal7961",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
    username: "linkedin.com/in/your-profile",
  },
  {
    name: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    username: personal.email,
  },
];
