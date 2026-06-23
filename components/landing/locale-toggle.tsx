"use client";

import { useLocale } from "next-intl";

import { cn } from "@/lib/general/utils";
import { usePathname, useRouter } from "@/lib/i18n/navigation";

const LOCALES = [
  { code: "el", label: "ΕΛ", name: "Ελληνικά" },
  { code: "en", label: "EN", name: "English" },
] as const;

interface LocaleToggleProps {
  /** "light" = for dark backgrounds (white text), "dark" = for light backgrounds */
  tone?: "light" | "dark";
  className?: string;
}

export const LocaleToggle = ({ tone = "dark", className }: LocaleToggleProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (code: string) => {
    if (code !== locale) router.replace(pathname, { locale: code });
  };

  return (
    <div
      role="group"
      aria-label="Γλώσσα / Language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 font-mono text-xs",
        tone === "light"
          ? "border-white/20 bg-white/5"
          : "border-border bg-secondary",
        className,
      )}
    >
      {LOCALES.map(({ code, label, name }) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            aria-pressed={active}
            aria-label={name}
            className={cn(
              "cursor-pointer rounded-full px-2.5 py-1.5 tracking-wider transition-colors duration-300",
              active && "bg-brand text-brand-foreground",
              !active && tone === "light" && "text-white/70 hover:text-white",
              !active && tone === "dark" && "text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
