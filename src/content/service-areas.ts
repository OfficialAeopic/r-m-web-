export type ServiceArea = {
  slug: string;
  name: string;
  proximity: string;
  description: string;
  /** Index into the shared testimonials array (rotates across area pages). */
  testimonialIndex: number;
};

export const serviceAreas: readonly ServiceArea[] = [
  {
    slug: "houston",
    name: "Houston",
    proximity: "Main office located in Houston at Greenhouse Rd & Highway 6",
    description:
      "Our Houston office at 3880 Greenhouse Rd has been serving Houston families and businesses since 1981. Whether you need tax preparation, bookkeeping, payroll, or accounting support, we are right here in your community.",
    testimonialIndex: 0,
  },
  {
    slug: "cypress",
    name: "Cypress",
    proximity: "Minutes from Cypress via Highway 290 and Greenhouse Rd",
    description:
      "Cypress residents and businesses trust R & M Accounting for personal, year-round tax and accounting services. Our Greenhouse Rd office is a quick drive from anywhere in the Cypress area.",
    testimonialIndex: 1,
  },
  {
    slug: "katy",
    name: "Katy",
    proximity: "Short drive from Katy along I-10 and Highway 6",
    description:
      "Serving Katy families and small businesses with accurate tax preparation, bookkeeping, and accounting. Our office is easily accessible from Katy via I-10 and Highway 6.",
    testimonialIndex: 2,
  },
  {
    slug: "spring",
    name: "Spring",
    proximity: "Accessible from Spring via 249 and Highway 6",
    description:
      "Spring residents choose R & M Accounting for tax preparation, payroll, and bookkeeping they can count on. Year-round availability — not just during tax season.",
    testimonialIndex: 0,
  },
  {
    slug: "tomball",
    name: "Tomball",
    proximity: "Convenient from Tomball via 249 South",
    description:
      "From Tomball to our Greenhouse Rd office, R & M Accounting provides the personal attention your tax and accounting needs deserve. Serving the area since 1981.",
    testimonialIndex: 1,
  },
  {
    slug: "jersey-village",
    name: "Jersey Village",
    proximity: "Just minutes away in the Highway 6 corridor",
    description:
      "Jersey Village is right in our backyard. R & M Accounting serves Jersey Village families and businesses with hands-on tax preparation, bookkeeping, and accounting support.",
    testimonialIndex: 2,
  },
  {
    slug: "copperfield",
    name: "Copperfield",
    proximity: "Located right in the Copperfield / Greenhouse Rd area",
    description:
      "Our office is in the heart of the Copperfield area on Greenhouse Rd. R & M has been a trusted neighbor to Copperfield families and businesses for over four decades.",
    testimonialIndex: 0,
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    proximity: "Accessible via I-45 South to Highway 6",
    description:
      "The Woodlands families and businesses choose R & M Accounting for reliable, personal tax and accounting services. Our Greenhouse Rd office is an easy drive from The Woodlands.",
    testimonialIndex: 1,
  },
  {
    slug: "memorial",
    name: "Memorial",
    proximity: "Short drive west from Memorial along I-10",
    description:
      "Memorial residents trust R & M Accounting for year-round tax preparation, planning, and accounting. Personal attention from a firm that has served Houston for 45 years.",
    testimonialIndex: 2,
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    proximity: "Reachable from Sugar Land via Highway 6 South",
    description:
      "Sugar Land families and businesses rely on R & M Accounting for accurate, on-time tax preparation and bookkeeping. Our Highway 6 location makes us easy to reach from Sugar Land.",
    testimonialIndex: 0,
  },
];

export type ServiceAreaSlug = (typeof serviceAreas)[number]["slug"];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
