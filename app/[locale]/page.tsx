import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { About } from "@/components/landing/about";
import { AutofitBand } from "@/components/landing/autofit-band";
import { Contact } from "@/components/landing/contact";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { NissanBand } from "@/components/landing/nissan-band";
import { Reviews } from "@/components/landing/reviews";
import { Services } from "@/components/landing/services";
import { SisterCompany } from "@/components/landing/sister-company";
import { SiteFooter } from "@/components/landing/site-footer";
import { StatsBar } from "@/components/landing/stats-bar";
import { StructuredData } from "@/components/landing/structured-data";
import { WhyUs } from "@/components/landing/why-us";
import { SITE } from "@/lib/general/constants";
import { BasePageProps } from "@/types/page-props";

const DESCRIPTIONS = {
  el: "Εξειδικευμένο συνεργείο NISSAN στην Ηλιούπολη. Οικογενειακή επιχείρηση από το 1970: service, διάγνωση, φρένα, ανάρτηση, A/C, ελαστικά & ανταλλακτικά για όλες τις μάρκες. Καλέστε στο 210 993 1341.",
  en: "NISSAN specialist workshop in Ilioupoli, Athens. Family-run since 1970: service, diagnostics, brakes, suspension, A/C, tyres & parts for all makes. Call 210 993 1341.",
} as const;

export const generateMetadata = async ({
  params,
}: BasePageProps): Promise<Metadata> => {
  const { locale } = await params;
  const isEl = locale === "el";
  const brand = isEl ? SITE.name : SITE.nameLatin;
  const title = `${brand} · ${isEl ? SITE.tagline.el : SITE.tagline.en}`;
  const description = isEl ? DESCRIPTIONS.el : DESCRIPTIONS.en;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { el: "/el", en: "/en", "x-default": "/el" },
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      locale: isEl ? "el_GR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og.jpg",
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
  };
};

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Navbar />
      <main id="main">
        <Hero />
        <StatsBar />
        <Services />
        <NissanBand />
        <About />
        <WhyUs />
        <AutofitBand />
        <Reviews />
        <SisterCompany />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
