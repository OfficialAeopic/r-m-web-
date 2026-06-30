export type ServiceArea = {
  slug: string;
  name: string;
  proximity: string;
  description: string;
  /** Index into the shared testimonials array (rotates across area pages). */
  testimonialIndex: number;
  /** Local detail (Website Expansion P3) — drives GEO-matrix uniqueness. */
  county: string;
  landmarks: string[];
  neighborhoods: string[];
  zips: string[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceAreas: readonly ServiceArea[] = [
  {
    slug: "houston",
    name: "Houston",
    proximity: "Main office located in Houston at Greenhouse Rd & Highway 6",
    description:
      "Our Houston office at 3880 Greenhouse Rd has been serving Houston families and businesses since 1981. Whether you need tax preparation, bookkeeping, payroll, or accounting support, we are right here in your community.",
    testimonialIndex: 0,
    county: "Harris County",
    landmarks: ["Bayou Bend", "Memorial Park", "Energy Corridor", "Houston Premium Outlets"],
    neighborhoods: ["Energy Corridor", "Spring Branch", "Westchase", "Eldridge / West Oaks"],
    zips: ["77084", "77079", "77077", "77042"],
    metaTitle: "Tax Preparation & Accounting in Houston, TX | R & M Accounting",
    metaDescription:
      "Houston tax preparation, bookkeeping, payroll, and accounting since 1981. R & M Accounting at 3880 Greenhouse Rd — year-round, personal service for Houston families and businesses.",
  },
  {
    slug: "cypress",
    name: "Cypress",
    proximity: "Minutes from Cypress via Highway 290 and Greenhouse Rd",
    description:
      "Cypress residents and businesses trust R & M Accounting for personal, year-round tax and accounting services. Our Greenhouse Rd office is a quick drive from anywhere in the Cypress area.",
    testimonialIndex: 1,
    county: "Harris County",
    landmarks: ["Towne Lake", "Berry Center", "Houston Premium Outlets", "Cypress Top Historic Park"],
    neighborhoods: ["Towne Lake", "Bridgeland", "Fairfield", "Coles Crossing"],
    zips: ["77433", "77429", "77410"],
    metaTitle: "Cypress, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Tax preparation, bookkeeping, and accounting for Cypress, TX. R & M Accounting is minutes away via Hwy 290 — serving Bridgeland, Towne Lake, and Fairfield since 1981.",
  },
  {
    slug: "katy",
    name: "Katy",
    proximity: "Short drive from Katy along I-10 and Highway 6",
    description:
      "Serving Katy families and small businesses with accurate tax preparation, bookkeeping, and accounting. Our office is easily accessible from Katy via I-10 and Highway 6.",
    testimonialIndex: 2,
    county: "Fort Bend / Harris County",
    landmarks: ["Katy Mills Mall", "Typhoon Texas", "Mary Jo Peckham Park", "Katy Heritage Museum"],
    neighborhoods: ["Cinco Ranch", "Cross Creek Ranch", "Firethorne", "Seven Meadows"],
    zips: ["77449", "77450", "77494", "77493"],
    metaTitle: "Katy, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Katy tax preparation, bookkeeping, and accounting from R & M Accounting — an easy drive via I-10. Serving Cinco Ranch, Cross Creek Ranch, and Firethorne families and businesses.",
  },
  {
    slug: "spring",
    name: "Spring",
    proximity: "Accessible from Spring via 249 and Highway 6",
    description:
      "Spring residents choose R & M Accounting for tax preparation, payroll, and bookkeeping they can count on. Year-round availability — not just during tax season.",
    testimonialIndex: 0,
    county: "Harris County",
    landmarks: ["Old Town Spring", "Mercer Botanic Gardens", "Pundt Park", "Spring Creek Greenway"],
    neighborhoods: ["Gleannloch Farms", "Klein", "Augusta Pines", "Spring Trails"],
    zips: ["77373", "77379", "77386", "77389"],
    metaTitle: "Spring, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Spring, TX tax preparation, payroll, and bookkeeping from R & M Accounting. Year-round service for Gleannloch Farms, Klein, and Augusta Pines — reachable via 249.",
  },
  {
    slug: "tomball",
    name: "Tomball",
    proximity: "Convenient from Tomball via 249 South",
    description:
      "From Tomball to our Greenhouse Rd office, R & M Accounting provides the personal attention your tax and accounting needs deserve. Serving the area since 1981.",
    testimonialIndex: 1,
    county: "Harris County",
    landmarks: ["Tomball Depot", "Burroughs Park", "Main Street Tomball", "Lone Star College–Tomball"],
    neighborhoods: ["Wildwood at Northpointe", "Rosehill", "Inverness Estates", "Willowcreek Ranch"],
    zips: ["77375", "77377", "77362"],
    metaTitle: "Tomball, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Tomball tax preparation, bookkeeping, and accounting from R & M Accounting via 249 South. Personal, year-round service for Tomball families and small businesses since 1981.",
  },
  {
    slug: "jersey-village",
    name: "Jersey Village",
    proximity: "Just minutes away in the Highway 6 corridor",
    description:
      "Jersey Village is right in our backyard. R & M Accounting serves Jersey Village families and businesses with hands-on tax preparation, bookkeeping, and accounting support.",
    testimonialIndex: 2,
    county: "Harris County",
    landmarks: ["Jersey Meadow Golf Course", "Clark Henry Park", "US-290 corridor", "Carol Fox Park"],
    neighborhoods: ["Jersey Village proper", "White Oak", "Carverdale", "Fairbanks"],
    zips: ["77040", "77041", "77065"],
    metaTitle: "Jersey Village, TX Tax & Accounting | R & M Accounting",
    metaDescription:
      "Jersey Village tax preparation, bookkeeping, and accounting from neighbors at R & M Accounting in the Hwy 6 corridor. Hands-on, year-round service since 1981.",
  },
  {
    slug: "copperfield",
    name: "Copperfield",
    proximity: "Located right in the Copperfield / Greenhouse Rd area",
    description:
      "Our office is in the heart of the Copperfield area on Greenhouse Rd. R & M has been a trusted neighbor to Copperfield families and businesses for over four decades.",
    testimonialIndex: 0,
    county: "Harris County",
    landmarks: ["Copperfield Swim & Racquet", "Sheldon Park", "Glen Chase Park", "Greenhouse Rd corridor"],
    neighborhoods: ["Middlegate Village", "Westcreek Village", "Stonegate", "Birnamwood"],
    zips: ["77095", "77084"],
    metaTitle: "Copperfield Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "R & M Accounting is in the heart of Copperfield on Greenhouse Rd — tax preparation, bookkeeping, and accounting for Middlegate, Westcreek, and Stonegate since 1981.",
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    proximity: "Accessible via I-45 South to Highway 6",
    description:
      "The Woodlands families and businesses choose R & M Accounting for reliable, personal tax and accounting services. Our Greenhouse Rd office is an easy drive from The Woodlands.",
    testimonialIndex: 1,
    county: "Montgomery County",
    landmarks: ["The Woodlands Mall", "Cynthia Woods Mitchell Pavilion", "Market Street", "The Waterway"],
    neighborhoods: ["Grogan's Mill", "Sterling Ridge", "Creekside Park", "Alden Bridge"],
    zips: ["77380", "77381", "77382", "77384"],
    metaTitle: "The Woodlands, TX Tax & Accounting | R & M Accounting",
    metaDescription:
      "Tax preparation, bookkeeping, and accounting for The Woodlands, TX from R & M Accounting. Reliable, personal service for Sterling Ridge, Creekside Park, and Alden Bridge.",
  },
  {
    slug: "memorial",
    name: "Memorial",
    proximity: "Short drive west from Memorial along I-10",
    description:
      "Memorial residents trust R & M Accounting for year-round tax preparation, planning, and accounting. Personal attention from a firm that has served Houston for 45 years.",
    testimonialIndex: 2,
    county: "Harris County",
    landmarks: ["Memorial City Mall", "Terry Hershey Park", "City Centre", "Bunker Hill Village"],
    neighborhoods: ["Memorial Villages", "Bunker Hill", "Hedwig Village", "Frostwood"],
    zips: ["77024", "77079", "77080"],
    metaTitle: "Memorial Tax Preparation, Planning & Accounting | R & M Accounting",
    metaDescription:
      "Memorial-area tax preparation, planning, and accounting from R & M Accounting — a short drive west on I-10. Year-round, personal service for the Memorial Villages.",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    proximity: "Reachable from Sugar Land via Highway 6 South",
    description:
      "Sugar Land families and businesses rely on R & M Accounting for accurate, on-time tax preparation and bookkeeping. Our Highway 6 location makes us easy to reach from Sugar Land.",
    testimonialIndex: 0,
    county: "Fort Bend County",
    landmarks: ["Smart Financial Centre", "Sugar Land Town Square", "Constellation Field", "Brazos River Park"],
    neighborhoods: ["First Colony", "Telfair", "Greatwood", "New Territory"],
    zips: ["77478", "77479", "77498"],
    metaTitle: "Sugar Land, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Sugar Land tax preparation and bookkeeping from R & M Accounting via Hwy 6 South. Accurate, on-time service for First Colony, Telfair, and Greatwood families and businesses.",
  },
  {
    slug: "bellaire",
    name: "Bellaire",
    proximity: "Reachable from Bellaire via I-610 and Highway 6",
    description:
      "Bellaire homeowners and professionals choose R & M Accounting for thorough, year-round tax preparation, planning, and bookkeeping with the kind of personal attention a close-knit community expects.",
    testimonialIndex: 1,
    county: "Harris County",
    landmarks: ["Bellaire Town Square", "Evelyn's Park", "Nature Discovery Center", "Loftin Park"],
    neighborhoods: ["Southdale", "Mulberry Park", "Bellaire proper", "Braeswood"],
    zips: ["77401", "77081"],
    metaTitle: "Bellaire, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Bellaire, TX tax preparation, planning, and bookkeeping from R & M Accounting. Personal, year-round service for Southdale, Mulberry Park, and Braeswood households and professionals.",
  },
  {
    slug: "pearland",
    name: "Pearland",
    proximity: "Accessible from Pearland via Beltway 8 and Highway 6",
    description:
      "Pearland families and small businesses rely on R & M Accounting for accurate tax returns, bookkeeping, and payroll. One of the fastest-growing communities in the region — and we're here for it year-round.",
    testimonialIndex: 2,
    county: "Brazoria County",
    landmarks: ["Pearland Town Center", "Independence Park", "Shadow Creek Ranch Nature Trail", "Centennial Park"],
    neighborhoods: ["Shadow Creek Ranch", "Silverlake", "Southwyck", "West Lea"],
    zips: ["77584", "77581", "77047"],
    metaTitle: "Pearland, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Pearland tax preparation, bookkeeping, and payroll from R & M Accounting via Beltway 8. Year-round service for Shadow Creek Ranch, Silverlake, and Southwyck families and businesses.",
  },
  {
    slug: "missouri-city",
    name: "Missouri City",
    proximity: "Reachable from Missouri City via Highway 6 South",
    description:
      "Missouri City residents and business owners trust R & M Accounting for personal, dependable tax and accounting help. Our Highway 6 office is a straight shot from the Missouri City area.",
    testimonialIndex: 0,
    county: "Fort Bend County",
    landmarks: ["Quail Valley", "Buffalo Run Park", "Community Park", "Sienna Plantation"],
    neighborhoods: ["Sienna", "Quail Valley", "Lake Olympia", "Riverstone"],
    zips: ["77459", "77489"],
    metaTitle: "Missouri City, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Missouri City tax preparation, bookkeeping, and accounting from R & M Accounting via Hwy 6 South. Dependable, year-round service for Sienna, Quail Valley, and Riverstone.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    proximity: "Accessible from Richmond via Highway 6 and US-90",
    description:
      "Richmond families and businesses choose R & M Accounting for accurate, on-time tax preparation and bookkeeping. We bring decades of experience to the historic Fort Bend County seat.",
    testimonialIndex: 1,
    county: "Fort Bend County",
    landmarks: ["George Ranch Historical Park", "Brazos Bend State Park", "Historic Downtown Richmond", "Fort Bend County Fairgrounds"],
    neighborhoods: ["Aliana", "Harvest Green", "Long Meadow Farms", "Pecan Grove"],
    zips: ["77406", "77407", "77469"],
    metaTitle: "Richmond, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Richmond, TX tax preparation, bookkeeping, and accounting from R & M Accounting via Hwy 6 and US-90. Decades of experience serving Aliana, Harvest Green, and Pecan Grove.",
  },
  {
    slug: "rosenberg",
    name: "Rosenberg",
    proximity: "Reachable from Rosenberg via US-59 and Highway 6",
    description:
      "Rosenberg residents and small businesses rely on R & M Accounting for straightforward, year-round tax and bookkeeping help. We're proud to serve this growing Fort Bend community.",
    testimonialIndex: 2,
    county: "Fort Bend County",
    landmarks: ["Rosenberg Railroad Museum", "Seabourne Creek Nature Park", "Historic Downtown Rosenberg", "Fort Bend County Fairgrounds"],
    neighborhoods: ["Cumings", "Bonbrook Plantation", "Summer Lakes", "Reading"],
    zips: ["77471", "77469"],
    metaTitle: "Rosenberg, TX Tax Preparation & Accounting | R & M Accounting",
    metaDescription:
      "Rosenberg tax preparation, bookkeeping, and accounting from R & M Accounting via US-59. Straightforward, year-round service for Bonbrook Plantation, Summer Lakes, and Cumings.",
  },
  {
    slug: "fulshear",
    name: "Fulshear & Cinco Ranch",
    proximity: "Accessible from Fulshear and Cinco Ranch via FM 1093 and I-10",
    description:
      "Fulshear and Cinco Ranch families and professionals choose R & M Accounting for thorough, personal tax preparation, planning, and bookkeeping. We serve one of the area's fastest-growing master-planned corridors.",
    testimonialIndex: 0,
    county: "Fort Bend County",
    landmarks: ["Cross Creek Ranch", "Fulshear Simonton Branch Library", "Cinco Ranch Beach Club", "Tamarron"],
    neighborhoods: ["Cross Creek Ranch", "Cinco Ranch", "Tamarron", "Fulbrook on Fulshear Creek"],
    zips: ["77441", "77494", "77423"],
    metaTitle: "Fulshear & Cinco Ranch Tax & Accounting | R & M Accounting",
    metaDescription:
      "Tax preparation, planning, and bookkeeping for Fulshear and Cinco Ranch from R & M Accounting via FM 1093 and I-10. Personal, year-round service for Cross Creek Ranch and Tamarron.",
  },
];

export type ServiceAreaSlug = (typeof serviceAreas)[number]["slug"];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
