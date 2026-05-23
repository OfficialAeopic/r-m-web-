import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationLd } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "R & M Accounting and Tax Service | Houston Tax Preparation Since 1981",
    template: "%s | R & M Accounting and Tax Service",
  },
  description:
    "Tax preparation, bookkeeping, payroll, and accounting services for Houston families and businesses since 1981. Personal attention, year-round.",
  metadataBase: new URL(COMPANY.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_US",
    url: COMPANY.url,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col font-sans">
        <JsonLd data={organizationLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[var(--color-oxblood)] focus:text-[var(--color-paper)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID &&
          process.env.NEXT_PUBLIC_GA_ID !== "G-PLACEHOLDER" && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
      </body>
    </html>
  );
}
