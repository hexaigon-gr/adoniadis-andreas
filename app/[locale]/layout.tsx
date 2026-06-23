import "./globals.css";

import type { Metadata } from "next";
import { Fira_Mono,Fira_Sans, Fira_Sans_Condensed } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages,setRequestLocale } from "next-intl/server";

import { Providers } from "@/components/providers";
import { SITE } from "@/lib/general/constants";
import { routing } from "@/lib/i18n/routing";
import { BaseLayoutProps } from "@/types/page-props";

const firaSans = Fira_Sans({
  variable: "--font-body",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  weight: ["600", "700"],
  display: "swap",
});

const firaMono = Fira_Mono({
  variable: "--font-mono",
  subsets: ["latin", "greek"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.tagline.el}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Εξειδικευμένο συνεργείο NISSAN στην Ηλιούπολη. Οικογενειακή επιχείρηση από το 1970. Service, διάγνωση, φρένα, ανάρτηση, A/C, ελαστικά & ανταλλακτικά για όλες τις μάρκες.",
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${firaSans.variable} ${firaSansCondensed.variable} ${firaMono.variable} font-sans antialiased`}
      >
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
