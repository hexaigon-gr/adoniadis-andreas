import {
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/motion";
import { Button } from "@/components/ui/button";
import {
  CONTACT,
  DIRECTIONS_URL,
  HOURS,
  MAPS_EMBED_URL,
  MAPS_URL,
} from "@/lib/general/constants";

export const Contact = async () => {
  const t = await getTranslations("Contact");

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Details */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <ul className="divide-y divide-border">
              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <MapPin className="size-5" />
                </Icon>
                <div>
                  <div className="eyebrow text-muted-foreground">
                    {t("addressLabel")}
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {CONTACT.address.street}, {CONTACT.address.city}{" "}
                    {CONTACT.address.postalCode}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <Phone className="size-5" />
                </Icon>
                <div>
                  <div className="eyebrow text-muted-foreground">
                    {t("phoneLabel")}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="font-mono font-medium text-foreground transition-colors duration-300 hover:text-brand"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <span className="text-border">·</span>
                    <a
                      href={`tel:${CONTACT.phoneAlt}`}
                      className="font-mono text-muted-foreground transition-colors duration-300 hover:text-brand"
                    >
                      {CONTACT.phoneAltDisplay}
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <Smartphone className="size-5" />
                </Icon>
                <div>
                  <div className="eyebrow text-muted-foreground">
                    {t("mobileLabel")}
                  </div>
                  <a
                    href={`tel:${CONTACT.mobile}`}
                    className="mt-1 block font-mono font-medium text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {CONTACT.mobileDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <PhoneCall className="size-5" />
                </Icon>
                <div>
                  <div className="eyebrow text-muted-foreground">
                    {t("hotlineLabel")}
                  </div>
                  <a
                    href={`tel:${CONTACT.hotline}`}
                    className="mt-1 block font-mono font-medium text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {CONTACT.hotlineDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <Mail className="size-5" />
                </Icon>
                <div className="min-w-0">
                  <div className="eyebrow text-muted-foreground">
                    {t("emailLabel")}
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block truncate font-medium text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 p-5">
                <Icon>
                  <Clock className="size-5" />
                </Icon>
                <div className="w-full">
                  <div className="eyebrow text-muted-foreground">
                    {t("hoursLabel")}
                  </div>
                  <dl className="mt-1.5 space-y-1 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-foreground">{t("weekdays")}</dt>
                      <dd className="font-mono font-medium text-foreground">
                        {HOURS.weekdays.open}-{HOURS.weekdays.close}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-muted-foreground">{t("saturday")}</dt>
                      <dd className="font-mono text-muted-foreground">
                        {t("closed")}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-muted-foreground">{t("sunday")}</dt>
                      <dd className="font-mono text-muted-foreground">
                        {t("closed")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>

            <div className="flex flex-col gap-3 border-t border-border p-5 sm:flex-row">
              <Button
                asChild
                variant="brand"
                size="lg"
                className="h-12 flex-1 text-base"
                icon={<Phone className="size-4" />}
              >
                <a href={`tel:${CONTACT.phone}`}>{t("callNow")}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 flex-1 text-base"
                icon={<Navigation className="size-4" />}
              >
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  {t("directions")}
                </a>
              </Button>
            </div>
          </div>

          {/* Real storefront + location map */}
          <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="relative aspect-video w-full shrink-0">
              <Image
                src="/images/storefront.jpg"
                alt={t("storefrontAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-carbon-deep/40 to-transparent" />
              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-carbon-deep/70 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-white backdrop-blur-sm">
                <MapPin className="size-3 text-brand-bright" />
                {t("storefrontBadge")}
              </span>
            </div>
            <iframe
              title={CONTACT.address.full}
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full grow border-0 grayscale-35 transition-all duration-500 hover:grayscale-0"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-t border-border bg-card px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors duration-300 hover:bg-secondary hover:text-brand"
            >
              <MapPin className="size-4 text-brand" />
              {t("openMaps")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
    {children}
  </span>
);
