import { BadgeCheck, type LucideIcon, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal, RevealGroup, RevealItem } from "@/components/landing/motion";

export const AutofitBand = async () => {
  const t = await getTranslations("Autofit");

  const points: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: ShieldCheck, title: t("point1Title"), desc: t("point1Desc") },
    { icon: BadgeCheck, title: t("point2Title"), desc: t("point2Desc") },
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
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

        <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <RevealItem key={point.title} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
};
