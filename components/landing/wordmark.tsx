import Image from "next/image";

import { cn } from "@/lib/general/utils";

interface WordmarkProps {
  tone?: "light" | "dark";
  className?: string;
}

/** Brand lockup: gear-emblem logo + stacked name / specialty line. */
export const Wordmark = ({ tone = "dark", className }: WordmarkProps) => {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={648}
        height={648}
        className="size-10 shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-bold leading-tight tracking-wide",
            tone === "light" ? "text-white" : "text-foreground",
          )}
        >
          ΑΝΔΡΕΑΣ ΑΝΤΩΝΙΑΔΗΣ
        </span>
        <span
          className={cn(
            "mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em]",
            tone === "light" ? "text-white/55" : "text-muted-foreground",
          )}
        >
          Auto Service · Nissan
        </span>
      </span>
    </span>
  );
};
