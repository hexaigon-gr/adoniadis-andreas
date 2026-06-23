import { ArrowUpRight, BadgeCheck, Star, ThumbsUp, Wallet } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import { MAPS_URL, SITE } from "@/lib/general/constants";

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="size-9" aria-hidden>
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.01 24.01 0 0 0 0 21.56l7.98-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

export const Reviews = async () => {
  const t = await getTranslations("Reviews");

  const highlights = [
    { icon: ThumbsUp, label: t("highlight1") },
    { icon: BadgeCheck, label: t("highlight2") },
    { icon: Wallet, label: t("highlight3") },
  ];

  return (
    <section id="reviews" className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow flex items-center justify-center gap-2 text-brand">
            <span className="h-px w-8 bg-brand" />
            {t("eyebrow")}
            <span className="h-px w-8 bg-brand" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="h-1 w-full bg-linear-to-r from-[#4285F4] via-[#FBBC05] to-[#EA4335]" />
          <div className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
            {/* Score */}
            <div className="flex flex-col items-center text-center">
              <GoogleG />
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-6xl font-bold leading-none text-foreground">
                  {SITE.rating.toFixed(1)}
                </span>
                <span className="mb-1 font-mono text-sm text-muted-foreground">
                  {t("outOf")}
                </span>
              </div>
              <div className="mt-2 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("basedOn", { count: SITE.reviewsCount })}
              </p>
            </div>

            <div className="hidden h-32 w-px bg-border sm:block" />

            {/* Highlights + CTA */}
            <div className="flex w-full flex-1 flex-col gap-4">
              <ul className="flex flex-col gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <Icon className="size-4 text-brand" />
                    </span>
                    <span className="font-medium text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="brand"
                size="lg"
                className="mt-2 h-12 w-full text-base sm:w-auto"
              >
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {t("cta")}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
