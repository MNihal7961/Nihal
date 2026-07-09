import type { Metadata } from "next";
import { Resume } from "@/components/sections/Resume";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Resume",
  description: `Preview or download ${personal.name}'s resume.`,
};

export default function ResumePage() {
  return <Resume />;
}
