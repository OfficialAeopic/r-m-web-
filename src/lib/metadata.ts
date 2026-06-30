import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { serviceAreas } from "@/content/service-areas";
import { TESTIMONIALS } from "@/content/testimonials";

const SITE_URL = COMPANY.url;
const SITE_NAME = COMPANY.name;
const DEFAULT_OG = `${SITE_URL}/opengraph-image`;

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG],
    },
  };
}

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: COMPANY.address.street,
  addressLocality: COMPANY.address.city,
  addressRegion: COMPANY.address.state,
  postalCode: COMPANY.address.zip,
  addressCountry: "US",
};

const GEO = { "@type": "GeoCoordinates", latitude: 29.8505, longitude: -95.634 };

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    description:
      "Tax preparation, bookkeeping, payroll, and accounting services for Houston families and businesses since 1981.",
    url: SITE_URL,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    address: POSTAL_ADDRESS,
    geo: GEO,
    foundingDate: String(COMPANY.founded),
    areaServed: serviceAreas.map((a) => a.name),
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
  };
}

export function serviceLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "AccountingService",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "Houston" },
  };
}

export function articleLd({
  title,
  description,
  url,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function reviewsLd() {
  const reviews = TESTIMONIALS.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
      bestRating: "5",
    },
    review: reviews,
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function localBusinessLd({
  serviceName,
  cityName,
  url,
}: {
  serviceName: string;
  cityName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: `${SITE_NAME} — ${serviceName} in ${cityName}`,
    description: `${serviceName} for ${cityName}, TX families and businesses.`,
    url,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    address: POSTAL_ADDRESS,
    geo: GEO,
    areaServed: { "@type": "City", name: cityName },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export const SITE_URL_EXPORTED = SITE_URL;
