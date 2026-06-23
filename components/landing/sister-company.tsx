import { ArrowUpRight, Car, Caravan, MapPin } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import { WHEEL_WAY } from "@/lib/general/constants";

/**
 * Cross-promotion band for the owner's second business, Wheel Way
 * (used cars & motorhomes). Mirrors the dark "branded band" treatment of
 * `NissanBand`, but pairs the copy with a clean white logo plate — the
 * Wheel Way logo has dark lettering, so it needs a light surface to read.
 */
export const SisterCompany = async () => {
  const t = await getTranslations("SisterCompany");

  const points = [
    { icon: Car, label: t("point1") },
    { icon: Caravan, label: t("point2") },
    { icon: MapPin, label: t("point3") },
  ];

  return (
    <section className="bg-grain relative overflow-hidden bg-carbon-deep py-20 lg:py-28">
      {/* Brand-red glow, tucked behind the logo plate */}
      <div className="absolute -right-24 top-1/2 size-112 -translate-y-1/2 rounded-full bg-brand/15 blur-[130px]" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal>
          <span className="eyebrow flex items-center gap-2 text-brand-bright">
            <span className="h-px w-8 bg-brand" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-silver">{t("body")}</p>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-white">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-bright">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="brand"
            size="lg"
            className="mt-9 h-12 px-7 text-base"
          >
            <a href={WHEEL_WAY.url} target="_blank" rel="noopener noreferrer">
              {t("cta")}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </Reveal>

        {/* Logo plate — clickable, lifts on hover */}
        <Reveal delay={0.1}>
          <a
            href={WHEEL_WAY.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("cta")}
            className="group relative block cursor-pointer rounded-2xl border border-white/10 bg-white p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-brand/20 sm:p-10"
          >
            <Image
              src={WHEEL_WAY.logo}
              alt={t("logoAlt")}
              width={641}
              height={213}
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="mx-auto h-auto w-full max-w-sm"
            />
            <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-border pt-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-brand">
                wheel-way.gr
              </span>
              <ArrowUpRight className="size-3.5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
