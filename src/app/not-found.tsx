import type { Metadata } from "next";
import { NotFoundContent } from "@/components/sections/NotFoundContent";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist, may have been moved, or the URL might be incorrect.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
