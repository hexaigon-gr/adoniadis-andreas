import { CONTACT, HOURS, LEGAL, SITE, SOCIAL } from "@/lib/general/constants";

const SERVICE_NAMES = {
  el: [
    "Service & Συντήρηση",
    "Διαγνωστικός Έλεγχος",
    "Φρένα",
    "Service Κλιματισμού (A/C)",
    "Μπαταρίες",
    "Σύστημα Ανάρτησης",
    "Σύστημα Μετάδοσης",
    "Λιπαντικά & Αλλαγή Λαδιών",
    "Υγραεριοκίνηση (LPG)",
    "Κάρτα Καυσαερίων & ΚΤΕΟ",
    "Ανταλλακτικά & Αξεσουάρ",
  ],
  en: [
    "Service & Maintenance",
    "Diagnostics",
    "Brakes",
    "A/C Service",
    "Batteries",
    "Suspension",
    "Transmission",
    "Oils & Lubricants",
    "LPG / Autogas",
    "Emissions & MOT Prep",
    "Parts & Accessories",
  ],
} as const;

const COPY = {
  el: {
    name: "Συνεργείο Αυτοκινήτων Ανδρέας Αντωνιάδης",
    description:
      "Εξειδικευμένο συνεργείο NISSAN στην Ηλιούπολη. Οικογενειακή επιχείρηση από το 1970: service, διάγνωση και επισκευές για όλες τις μάρκες.",
    catalog: "Υπηρεσίες",
  },
  en: {
    name: "Andreas Antoniadis Auto Service",
    description:
      "NISSAN specialist workshop in Ilioupoli, Athens. Family-run since 1970: service, diagnostics and repairs for all makes.",
    catalog: "Services",
  },
} as const;

interface StructuredDataProps {
  locale: string;
}

export const StructuredData = ({ locale }: StructuredDataProps) => {
  const lang = locale === "en" ? "en" : "el";
  const copy = COPY[lang];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#business`,
    name: copy.name,
    legalName: SITE.legalName,
    description: copy.description,
    url: SITE.url,
    image: [`${SITE.url}/images/hero.jpg`, `${SITE.url}/images/workshop.jpg`],
    logo: `${SITE.url}/images/hero.jpg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "€€",
    foundingDate: String(SITE.foundedYear),
    founder: { "@type": "Person", name: "Ευάγγελος Αντωνιάδης" },
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      postalCode: CONTACT.address.postalCode.replace(/\s/g, ""),
      addressRegion: CONTACT.address.region,
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.coordinates.lat,
      longitude: CONTACT.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: HOURS.weekdays.open,
        closes: HOURS.weekdays.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SITE.rating),
      reviewCount: String(SITE.reviewsCount),
      bestRating: "5",
    },
    areaServed: { "@type": "City", name: "Ηλιούπολη" },
    knowsAbout: ["Nissan", "Συντήρηση αυτοκινήτων", "Επισκευή αυτοκινήτων"],
    sameAs: [SOCIAL.facebook],
    identifier: [
      { "@type": "PropertyValue", propertyID: "VAT", value: LEGAL.afm },
      { "@type": "PropertyValue", propertyID: "GEMI", value: LEGAL.gemh },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.catalog,
      itemListElement: SERVICE_NAMES[lang].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
