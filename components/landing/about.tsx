import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/motion";

export const About = async () => {
  const t = await getTranslations("About");

  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-xl border border-brand/30 lg:block" />
          <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border shadow-xl">
            <Image
              src="/images/workshop.jpg"
              alt={t("title")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-carbon-deep/30 to-transparent" />
          </div>

          {/* Floating stat badges */}
          <div className="absolute -bottom-6 right-4 flex gap-3 lg:right-6">
            <div className="rounded-xl border border-border bg-background px-5 py-3 text-center shadow-lg">
              <div className="font-display text-3xl font-bold text-brand">
                {t("badge1Value")}
              </div>
              <div className="eyebrow mt-0.5 text-muted-foreground">
                {t("badge1Label")}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <Reveal className="lg:pl-4" delay={0.1}>
          <span className="eyebrow flex items-center gap-2 text-brand">
            <span className="h-px w-8 bg-brand" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-xl font-medium leading-snug text-foreground">
            {t("lead")}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("p1")}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">{t("p2")}</p>

          {/* Signature */}
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <Image
              src="/logo.png"
              alt=""
              width={648}
              height={648}
              className="size-12 shrink-0"
            />
            <div>
              <div className="font-display text-base font-semibold text-foreground">
                {t("signatureName")}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {t("signatureRole")}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
