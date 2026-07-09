import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const statusStyles: Record<ProjectStatus, string> = {
  Production: "bg-emerald-50 text-emerald-700",
  Completed: "bg-slate-100 text-slate-600",
  "Active Development": "bg-amber-50 text-amber-700",
};

interface TypeBadgeProps {
  type: string;
  className?: string;
}

export function TypeBadge({ type, className }: TypeBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700",
        className
      )}
    >
      {type}
    </span>
  );
}

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
