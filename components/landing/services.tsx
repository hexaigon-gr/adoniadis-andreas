import {
  BatteryCharging,
  Cog,
  Cpu,
  Disc,
  Droplets,
  Fuel,
  Hammer,
  LifeBuoy,
  Lightbulb,
  type LucideIcon,
  Package,
  Phone,
  Snowflake,
  Waves,
  Wind,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal, RevealGroup, RevealItem } from "@/components/landing/motion";
import { CONTACT, type ServiceKey,SERVICES } from "@/lib/general/constants";

const ICONS: Record<ServiceKey, LucideIcon> = {
  maintenance: Wrench,
  diagnostics: Cpu,
  brakes: Disc,
  tires: LifeBuoy,
  ac: Snowflake,
  electrical: BatteryCharging,
  suspension: Waves,
  transmission: Cog,
  lubricants: Droplets,
  lighting: Lightbulb,
  lpg: Fuel,
  emissions: Wind,
  bodywork: Hammer,
  parts: Package,
};

export const Services = async () => {
  const t = await getTranslations("Services");

  const featured = SERVICES.filter((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-2 text-brand">
            <span className="h-px w-8 bg-brand" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        {/* Featured (photo) cards */}
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const Icon = ICONS[service.key];
            return (
              <RevealItem key={service.key} className="h-full">
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={service.image!}
                    alt={t(`items.${service.key}.name`)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-carbon-deep/85 via-carbon-deep/15 to-transparent" />
                  <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-md">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="absolute inset-x-4 bottom-3 font-display text-xl font-bold uppercase tracking-tight text-white">
                    {t(`items.${service.key}.name`)}
                  </h3>
                </div>
                <p className="flex-1 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${service.key}.desc`)}
                </p>
              </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Remaining services */}
        <Reveal className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service) => {
            const Icon = ICONS[service.key];
            return (
              <div
                key={service.key}
                className="flex items-start gap-4 bg-card p-5 transition-colors duration-300 hover:bg-secondary"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-tight text-foreground">
                    {t(`items.${service.key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`items.${service.key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={`tel:${CONTACT.phone}`}
            className="group inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-wider text-foreground transition-colors duration-300 hover:text-brand"
          >
            <Phone className="size-4 text-brand" />
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
};
