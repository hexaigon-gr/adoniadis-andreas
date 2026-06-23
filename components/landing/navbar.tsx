"use client";

import { Clock, MapPin, Phone, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LocaleToggle } from "@/components/landing/locale-toggle";
import { Wordmark } from "@/components/landing/wordmark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CONTACT,
  DIRECTIONS_URL,
  HOURS,
  MAPS_URL,
  NAV_LINKS,
  SOCIAL,
} from "@/lib/general/constants";
import { cn } from "@/lib/general/utils";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Navbar = () => {
  const t = useTranslations("Nav");
  const tContact = useTranslations("Contact");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 320) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActive(top.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const solid = scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-brand via-brand-bright to-brand" />

      <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <a href="#top" className="shrink-0" aria-label="Ανδρέας Αντωνιάδης Auto Service">
          <Wordmark tone={solid ? "dark" : "light"} />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            let linkColor: string;
            if (solid) linkColor = isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground";
            else linkColor = isActive ? "text-white" : "text-white/75 hover:text-white";
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors duration-300",
                  linkColor,
                )}
              >
                {t(link.key)}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-1 h-0.5 origin-left bg-brand transition-transform duration-300 group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className={cn(
              "hidden items-center gap-2 font-mono text-sm font-medium transition-colors duration-300 xl:flex",
              solid ? "text-foreground hover:text-brand" : "text-white/85 hover:text-white",
            )}
          >
            <Phone className="size-4 text-brand-bright" />
            {CONTACT.phoneDisplay}
          </a>

          <LocaleToggle tone={solid ? "dark" : "light"} className="hidden sm:inline-flex" />

          <Button
            asChild
            variant="brand"
            className="hidden h-10 px-5 sm:inline-flex"
            icon={<Phone className="size-4" />}
          >
            <a href={`tel:${CONTACT.phone}`}>{t("call")}</a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t("menu")}
                className={cn(
                  "flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md transition-colors duration-300 lg:hidden",
                  solid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10",
                )}
              >
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[86%] flex-col gap-0 p-0 sm:max-w-sm"
            >
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>

              {/* Header */}
              <div className="flex shrink-0 items-center border-b border-border px-5 py-4 pr-14">
                <Wordmark tone="dark" />
              </div>

              {/* Scrollable middle */}
              <div className="min-h-0 flex-1 overflow-y-auto">
                <nav className="flex flex-col gap-0.5 p-3">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-center justify-between rounded-lg px-4 py-2.5 font-display text-lg font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
                      >
                        {t(link.key)}
                        <span className="size-1.5 rounded-full bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                {/* Contact quick block */}
                <div className="flex flex-col gap-2.5 border-t border-border px-5 py-4">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex min-h-10 items-center gap-3 text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    <Phone className="size-4 shrink-0 text-brand" />
                    <span className="font-mono text-sm font-medium">{CONTACT.phoneDisplay}</span>
                  </a>
                  <a
                    href={`tel:${CONTACT.mobile}`}
                    className="flex min-h-10 items-center gap-3 text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    <Smartphone className="size-4 shrink-0 text-brand" />
                    <span className="font-mono text-sm font-medium">{CONTACT.mobileDisplay}</span>
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-foreground transition-colors duration-300 hover:text-brand"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span className="text-sm">{CONTACT.address.full}</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="size-4 shrink-0 text-brand" />
                    <span className="text-sm">
                      {tContact("weekdays")}: {HOURS.weekdays.open}-{HOURS.weekdays.close}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer actions (pinned) */}
              <div className="flex shrink-0 flex-col gap-3 border-t border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-md bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                  >
                    <FacebookIcon />
                  </a>
                  <LocaleToggle tone="dark" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="brand" icon={<Phone className="size-4" />}>
                    <a href={`tel:${CONTACT.phone}`}>{t("call")}</a>
                  </Button>
                  <Button asChild variant="outline" icon={<MapPin className="size-4" />}>
                    <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                      {tContact("directions")}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
