import { ChevronDown, Phone, Star, Wrench } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { CONTACT, SITE } from "@/lib/general/constants";

export const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section
      id="top"
      className="bg-grain relative flex min-h-svh items-center overflow-hidden bg-carbon-deep"
    >
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-carbon-deep via-carbon-deep/85 to-carbon-deep/30" />
      <div className="absolute inset-0 bg-linear-to-t from-carbon-deep via-transparent to-carbon-deep/70" />
      {/* Red accent glow */}
      <div className="absolute -left-40 top-1/3 size-136 rounded-full bg-brand/25 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 pb-24 pt-32 sm:px-6 lg:pt-36">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="animate-rise flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-brand-foreground backdrop-blur-sm">
              <Wrench className="size-3.5 text-brand-bright" />
              <span className="eyebrow text-white/90">{t("badge")}</span>
            </span>
            <span className="eyebrow text-white/55">{t("since")}</span>
          </div>

          {/* Headline */}
          <h1
            className="animate-rise mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            {t.rich("titleA", {
              hl: (chunks) => <span className="text-brand-bright">{chunks}</span>,
            })}
            <br />
            <span className="text-white/90">{t("titleB")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.35s" }}
          >
            <Button
              asChild
              variant="brand"
              size="lg"
              className="h-12 px-7 text-base"
              icon={<Phone className="size-4" />}
            >
              <a href={`tel:${CONTACT.phone}`}>
                {t("ctaPrimary")} · {CONTACT.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 border border-white/25 bg-white/5 px-7 text-base text-white backdrop-blur-sm hover:bg-white/15"
            >
              <a href="#services">{t("ctaSecondary")}</a>
            </Button>
          </div>

          {/* Trust strip */}
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-mono text-sm font-medium text-white">
                {t("trustRating", { rating: SITE.rating })}
              </span>
              <span className="text-sm text-white/55">
                · {t("trustReviews", { count: SITE.reviewsCount })}
              </span>
            </div>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="text-sm text-white/70">{t("trustNetwork")}</span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="text-sm text-white/70">{t("trustBrands")}</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label={t("scroll")}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/50 transition-colors duration-300 hover:text-white lg:flex"
      >
        <span className="eyebrow text-[0.6rem]">{t("scroll")}</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
};
