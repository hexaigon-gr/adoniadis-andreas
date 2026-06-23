/**
 * Single source of truth for all hard business facts.
 * Translatable copy lives in `messages/{el,en}.json`; immutable facts live here.
 */

export const SITE = {
  /** Public-facing brand name */
  name: "Ανδρέας Αντωνιάδης",
  /** Latin transliteration for the English locale (titles, metadata) */
  nameLatin: "Andreas Antoniadis",
  brandLine: "Auto Service",
  /** Registered legal entity (shown in legal footer per Greek law) */
  legalName: "ΑΝΤΩΝΙΑΔΗΣ Ε. ΑΝΔΡΕΑΣ AUTO SERVICES Ι.Κ.Ε.",
  legalNameLatin: "ANTONIADIS E. ANDREAS AUTO SERVICES P.C.",
  legalForm: "Ι.Κ.Ε.",
  foundedYear: 1970,
  specialty: "NISSAN",
  network: "AUTOFIT",
  rating: 4.8,
  reviewsCount: 175,
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.antoniadis-autoservice.gr",
  tagline: {
    el: "Εξειδικευμένο Συνεργείο NISSAN",
    en: "NISSAN Specialist Workshop",
  },
} as const;

export const CONTACT = {
  /** Primary number — verified public listing (Google / vrisko / xo.gr) */
  phone: "+302109931341",
  phoneDisplay: "210 993 1341",
  /** Secondary landline (AUTOFIT listing / shop stamp) */
  phoneAlt: "+302109937666",
  phoneAltDisplay: "210 993 7666",
  mobile: "+306974416181",
  mobileDisplay: "697 441 6181",
  email: "antoniadis@autofit.gr",
  address: {
    street: "Ισαύρων 2-4",
    city: "Ηλιούπολη",
    region: "Αττική",
    country: "GR",
    postalCode: "163 45",
    full: "Ισαύρων 2-4, Ηλιούπολη 163 45",
  },
} as const;

const MAPS_QUERY = "Ανδρέας Αντωνιάδης Συνεργείο Ισαύρων 2-4 Ηλιούπολη 163 45";

/** Opens the business location in Google Maps */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`;

/** Turn-by-turn directions to the workshop */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`;

/** Embeddable Google map of the real location (no API key required) */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  "Ισαύρων 2-4, Ηλιούπολη 163 45",
)}&hl=el&z=16&output=embed`;

/** Legal identifiers — must be publicly visible (Greek transparency law) */
export const LEGAL = {
  afm: "803101814",
  doy: "ΚΕΦΟΔΕ Αττικής",
  gemh: "189474301000",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/antoniadisandreas/",
} as const;

/**
 * Sister company — owned by the same family. Andreas' second business:
 * a used-car & motorhome dealership in Rafina. Cross-promoted on the site.
 */
export const WHEEL_WAY = {
  name: "Wheel Way",
  url: "https://www.wheel-way.gr/",
  logo: "/images/wheel-way-logo.png",
} as const;

/** Opening hours — 24h strings; used for display and schema.org */
export const HOURS = {
  /** Mon–Fri */
  weekdays: { open: "08:00", close: "16:30" },
  /** Sat & Sun closed */
  saturdayOpen: false,
  sundayOpen: false,
} as const;

/**
 * Service catalogue. `key` maps to a translation entry under `Services.items.*`
 * and to a Lucide icon in the Services component. `image` is an optional
 * featured photo under /public/images.
 */
export const SERVICES = [
  { key: "maintenance", image: "/images/service-maintenance.jpg", featured: true },
  { key: "diagnostics", image: "/images/service-diagnostics.jpg", featured: true },
  { key: "brakes", image: "/images/service-brakes.jpg", featured: true },
  { key: "tires", image: "/images/service-tires.jpg", featured: true },
  { key: "ac", image: "/images/service-ac.jpg", featured: true },
  { key: "electrical", image: "/images/service-electrical.jpg", featured: true },
  { key: "suspension", image: null, featured: false },
  { key: "transmission", image: null, featured: false },
  { key: "lubricants", image: null, featured: false },
  { key: "emissions", image: null, featured: false },
  { key: "bodywork", image: null, featured: false },
  { key: "parts", image: null, featured: false },
] as const;

export type ServiceKey = (typeof SERVICES)[number]["key"];

/** Why-choose-us pillars — `key` maps to `WhyUs.items.*` translations */
export const WHY_US = [
  "specialist",
  "family",
  "genuine",
  "transparent",
  "technicians",
  "network",
] as const;

/** Anchor links for the in-page navigation */
export const NAV_LINKS = [
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#reviews", key: "reviews" },
  { href: "#contact", key: "contact" },
] as const;
