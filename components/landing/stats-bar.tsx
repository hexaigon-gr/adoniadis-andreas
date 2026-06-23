import { getTranslations } from "next-intl/server";

import { RevealGroup, RevealItem } from "@/components/landing/motion";

const STAT_KEYS = ["founded", "rating", "reviews", "specialty"] as const;

export const StatsBar = async () => {
  const t = await getTranslations("Stats");

  return (
    <section className="bg-hatch relative border-b border-white/10 bg-carbon">
      <RevealGroup
        stagger={0.1}
        className="container mx-auto grid grid-cols-2 divide-x divide-y divide-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0"
      >
        {STAT_KEYS.map((key) => (
          <RevealItem
            key={key}
            className="flex flex-col items-center gap-1 px-4 py-8 text-center lg:py-10"
          >
            <span className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              {t(`${key}Value`)}
            </span>
            <span className="eyebrow text-silver">{t(`${key}Label`)}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
