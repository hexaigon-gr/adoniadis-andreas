import { ArrowUpRight, Clock, Hexagon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { LocaleToggle } from "@/components/landing/locale-toggle";
import { Wordmark } from "@/components/landing/wordmark";
import { SocialIcon } from "@/components/social-icon";
import {
  CONTACT,
  HOURS,
  LEGAL,
  MAPS_URL,
  NAV_LINKS,
  SITE,
  SOCIAL,
  WHEEL_WAY,
} from "@/lib/general/constants";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const SiteFooter = async () => {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const tContact = await getTranslations("Contact");
  const year = new Date().getFullYear();

  const legalRows = [
    { label: t("afmLabel"), value: LEGAL.afm },
    { label: t("doyLabel"), value: LEGAL.doy },
    { label: t("gemhLabel"), value: LEGAL.gemh },
    { label: t("legalFormLabel"), value: SITE.legalForm },
  ];

  return (
    <footer className="bg-grain relative overflow-hidden bg-carbon-deep text-silver">
      <div className="container mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver/80">
              {t("tagline")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon
                url={SOCIAL.facebook}
                color="facebook"
                icon={<FacebookIcon />}
              />
              <LocaleToggle tone="light" />
            </div>

            {/* Sister company — owner's second business */}
            <a
              href={WHEEL_WAY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex max-w-xs items-center gap-3 rounded-xl border border-white/10 bg-white/3 p-3 transition-colors duration-300 hover:border-white/25 hover:bg-white/5"
            >
              <span className="flex shrink-0 items-center rounded-md bg-white p-2">
                <Image
                  src={WHEEL_WAY.logo}
                  alt={WHEEL_WAY.name}
                  width={641}
                  height={213}
                  className="h-auto w-20"
                />
              </span>
              <span className="min-w-0">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-silver/60">
                  {t("sisterLabel")}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-white">
                  {WHEEL_WAY.name}
                  <ArrowUpRight className="size-3.5 text-silver/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </span>
                <span className="text-xs text-silver/70">{t("sisterDesc")}</span>
              </span>
            </a>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2">
            <h3 className="eyebrow text-white">{t("quickLinks")}</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-silver/80 transition-colors duration-300 hover:text-white"
                  >
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white">{t("contactTitle")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver/80 transition-colors duration-300 hover:text-white"
                >
                  {CONTACT.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="font-mono text-silver/80 transition-colors duration-300 hover:text-white"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-silver/80 transition-colors duration-300 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span className="text-silver/80">
                  {tContact("weekdays")}: {HOURS.weekdays.open}-{HOURS.weekdays.close}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal / company details — required public disclosure */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white">{t("legalTitle")}</h3>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/3 p-4">
              <div className="mb-3 text-xs font-medium leading-snug text-silver">
                {SITE.legalName}
              </div>
              <dl className="space-y-2">
                {legalRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-silver">
                      {row.label}
                    </dt>
                    <dd className="font-mono text-xs text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-silver/80 sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.legalName}. {t("rights")}
          </p>
          <p className="flex items-center gap-1.5">
            <Hexagon className="size-3.5 text-brand" />
            {t("madeBy")}{" "}
            <a
              href="https://hexaigon.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-silver transition-colors duration-300 hover:text-white"
            >
              Hexaigon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
