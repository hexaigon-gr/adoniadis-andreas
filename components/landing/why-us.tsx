import {
  Award,
  type LucideIcon,
  Network,
  Receipt,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal, RevealGroup, RevealItem } from "@/components/landing/motion";
import { WHY_US } from "@/lib/general/constants";

const ICONS: Record<(typeof WHY_US)[number], LucideIcon> = {
  specialist: Award,
  family: Users,
  genuine: ShieldCheck,
  transparent: Receipt,
  technicians: Wrench,
  network: Network,
};

export const WhyUs = async () => {
  const t = await getTranslations("WhyUs");

  return (
    <section className="bg-background py-20 lg:py-28">
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
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((key) => {
            const Icon = ICONS[key];
            return (
              <RevealItem key={key} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                  <span className="absolute right-0 top-0 h-1 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                  <span className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </span>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-tight text-foreground">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {t(`items.${key}.desc`)}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
};
