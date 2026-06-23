import { Check, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/general/constants";

export const NissanBand = async () => {
  const t = await getTranslations("Nissan");
  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <section className="bg-grain relative overflow-hidden bg-carbon-deep py-20 lg:py-28">
      {/* Giant typographic watermark (clipped by the section's overflow-hidden) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[14rem] font-bold leading-none tracking-tighter text-white/4 sm:block sm:text-[18rem] lg:text-[24rem]"
      >
        NISSAN
      </span>
      {/* Red glow */}
      <div className="absolute -left-32 bottom-0 size-112 rounded-full bg-brand/20 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-2 text-brand-bright">
            <span className="h-px w-8 bg-brand" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-silver">{t("body")}</p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-white">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check className="size-3 text-brand-foreground" />
                </span>
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="brand"
            size="lg"
            className="mt-9 h-12 px-7 text-base"
            icon={<Phone className="size-4" />}
          >
            <a href={`tel:${CONTACT.phone}`}>{t("cta")}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
