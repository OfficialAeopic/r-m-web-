export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  tagline: string;
  description: string[];
  whatsIncluded: string[];
  whoItsFor: string;
  process: { step: string; description: string }[];
  relatedSlugs: string[];
  disclaimer?: {
    body: string;
    /** "warning" prints in amber-bordered box (estate-trust); "muted" softer */
    tone: "warning" | "muted";
  };
};

export const services: readonly Service[] = [
  {
    slug: "tax-preparation",
    title: "Tax Preparation",
    shortDescription:
      "Individual, business, and organizational tax returns prepared accurately and on schedule.",
    icon: "FileText",
    tagline: "Accurate, on-time tax returns — individual and business.",
    description: [
      "Individual returns (Form 1040 with all schedules), business returns (Forms 1065, 1120, 1120S), and nonprofit/organization returns (Form 990).",
      "Year-round availability — not a seasonal operation. E-filing available for faster processing, and Joshua reviews every return before it goes out the door.",
    ],
    whatsIncluded: [
      "Individual tax returns (Form 1040)",
      "Business tax returns (1065, 1120, 1120S)",
      "Nonprofit returns (Form 990)",
      "All applicable schedules and forms",
      "E-filing",
      "Document review and organization",
      "Year-round availability for questions",
    ],
    whoItsFor:
      "Individuals, families, small business owners, and organizations who want their returns done right — without the stress.",
    process: [
      {
        step: "Review",
        description: "We review your documents and prior returns.",
      },
      {
        step: "Prepare",
        description:
          "We prepare your return and flag anything that needs your attention.",
      },
      {
        step: "File",
        description: "We file on time and keep copies for your records.",
      },
    ],
    relatedSlugs: ["bookkeeping", "tax-planning", "business-corporate"],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortDescription:
      "Year-round bookkeeping that keeps your financial records clean and decision-ready.",
    icon: "BookOpen",
    tagline: "Clean books, clear decisions — all year long.",
    description: [
      "Monthly and quarterly bookkeeping that keeps your financial records organized and decision-ready.",
      "Bank reconciliation, transaction categorization, and year-end preparation so tax season is never a scramble.",
    ],
    whatsIncluded: [
      "Monthly / quarterly bookkeeping",
      "Bank reconciliation",
      "Transaction categorization",
      "Financial record maintenance",
      "Year-end preparation for tax season",
      "Decision-ready reports",
    ],
    whoItsFor:
      "Small business owners who need reliable books without hiring a full-time bookkeeper.",
    process: [
      {
        step: "Set Up",
        description: "We set up or review your current books.",
      },
      {
        step: "Maintain",
        description:
          "We maintain them monthly with reconciliation and categorization.",
      },
      {
        step: "Ready",
        description:
          "Year-end, your books are tax-ready — no scramble.",
      },
    ],
    relatedSlugs: ["accounting", "payroll", "tax-preparation"],
  },
  {
    slug: "payroll",
    title: "Payroll",
    shortDescription:
      "End-to-end payroll processing, compliance filings, and quarterly reporting.",
    icon: "Users",
    tagline: "Payroll done right — every pay period, every filing.",
    description: [
      "End-to-end payroll processing including tax withholding, deposits, quarterly filings, W-2 and 1099 preparation, and new hire reporting.",
      "We handle the compliance so you can focus on running your business.",
    ],
    whatsIncluded: [
      "Payroll processing (weekly / bi-weekly / monthly)",
      "Federal and state tax withholding and deposits",
      "W-2 and 1099 preparation",
      "Quarterly filing (Form 941)",
      "Annual filing (Form 940)",
      "New hire reporting",
    ],
    whoItsFor:
      "Business owners with employees who need reliable, compliant payroll without the headache.",
    process: [
      {
        step: "Setup",
        description:
          "We set up your payroll schedule and employee records.",
      },
      {
        step: "Process",
        description:
          "Each pay period, we process payroll and handle all tax deposits.",
      },
      {
        step: "File",
        description:
          "Quarterly and annual filings are submitted on time — every time.",
      },
    ],
    relatedSlugs: ["bookkeeping", "accounting", "business-corporate"],
  },
  {
    slug: "accounting",
    title: "Accounting",
    shortDescription:
      "Financial statements and ongoing accounting support for owners who need clarity.",
    icon: "Calculator",
    tagline: "Financial clarity for business owners who need it.",
    description: [
      "Financial statement preparation and ongoing accounting support. We give you the numbers you need to make informed decisions — not just a stack of reports you will never read.",
      "Profit and loss, balance sheets, and cash flow analysis presented in plain English.",
    ],
    whatsIncluded: [
      "Financial statement preparation",
      "Profit and loss reports",
      "Balance sheets",
      "Cash flow analysis",
      "Ongoing accounting support",
      "Business financial advisory",
    ],
    whoItsFor:
      "Business owners who want to understand their numbers — not just file them away.",
    process: [
      {
        step: "Assess",
        description: "We assess your current financial picture.",
      },
      {
        step: "Report",
        description: "We prepare clear, actionable financial statements.",
      },
      {
        step: "Support",
        description:
          "We provide ongoing support and answer your questions throughout the year.",
      },
    ],
    relatedSlugs: ["bookkeeping", "tax-preparation", "business-corporate"],
  },
  {
    slug: "irs-resolution",
    title: "IRS Resolution",
    shortDescription:
      "Audits, back taxes, debt negotiations, and direct representation when the letters arrive.",
    icon: "Shield",
    tagline: "When the IRS comes calling, we answer.",
    description: [
      "Direct representation and resolution for IRS issues — audits, back taxes, payment plans, and penalty abatement.",
      "We work directly with the IRS on your behalf so you do not have to. Every situation is different, and outcomes depend on individual circumstances. We work directly with the IRS to pursue the best resolution available.",
    ],
    whatsIncluded: [
      "IRS audit representation",
      "Back tax filing (prior year returns)",
      "Payment plan negotiation (installment agreements)",
      "Penalty abatement requests",
      "IRS notice response and resolution",
      "Offer in compromise evaluation",
    ],
    whoItsFor:
      "Anyone dealing with IRS issues — past-due returns, unexpected notices, audit letters, or tax debt.",
    process: [
      {
        step: "Review",
        description:
          "We review your situation and explain your options honestly.",
      },
      {
        step: "Represent",
        description:
          "We communicate directly with the IRS on your behalf.",
      },
      {
        step: "Resolve",
        description:
          "We work toward the best resolution available for your specific circumstances.",
      },
    ],
    relatedSlugs: ["tax-preparation", "tax-planning", "business-corporate"],
    disclaimer: {
      body: "Every situation is different and outcomes depend on individual circumstances. R & M does not guarantee specific results, dollar amounts, or timeframes. We work directly with the IRS to pursue the best resolution available for your facts.",
      tone: "muted",
    },
  },
  {
    slug: "estate-trust",
    title: "Estate & Trust",
    shortDescription:
      "Estate and trust tax return preparation (Form 706, Form 1041). Tax returns only — we do not provide legal advice.",
    icon: "Landmark",
    tagline:
      "Estate and trust tax return preparation — Form 706 and Form 1041.",
    description: [
      "We prepare estate tax returns (Form 706) and income tax returns for estates and trusts (Form 1041).",
      "Our role is tax return preparation — accurate, compliant, and on time. For estate planning, trust drafting, or trust administration, you will need a licensed attorney; we coordinate with yours.",
    ],
    whatsIncluded: [
      "Estate tax returns (Form 706)",
      "Income tax returns for estates and trusts (Form 1041)",
      "Required schedules and supporting forms",
      "Coordination with attorneys and trustees as needed",
    ],
    whoItsFor:
      "Executors, trustees, and families who need estate or trust tax returns prepared accurately.",
    process: [
      {
        step: "Review",
        description:
          "We review the estate or trust documents provided by your attorney or trustee.",
      },
      {
        step: "Prepare",
        description:
          "We prepare the required tax returns with all supporting schedules.",
      },
      {
        step: "File",
        description:
          "We file on time and provide copies for your records.",
      },
    ],
    relatedSlugs: ["tax-preparation", "tax-planning", "accounting"],
    disclaimer: {
      body: "R & M Accounting prepares estate and trust tax returns. We do not provide legal advice, estate planning, or trust administration services. For legal matters, consult a licensed attorney.",
      tone: "warning",
    },
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    shortDescription:
      "Proactive planning across the year so April never catches you off guard.",
    icon: "CalendarCheck",
    tagline: "Year-round planning so April never catches you off guard.",
    description: [
      "Proactive tax planning across the year — estimated payments, deduction identification, and life event planning.",
      "We help you understand your tax obligations and identify available deductions and credits.",
    ],
    whatsIncluded: [
      "Year-round tax strategy",
      "Estimated tax payment guidance",
      "Deduction and credit identification",
      "Life event tax planning (marriage, home purchase, retirement)",
      "Quarterly check-ins (as needed)",
    ],
    whoItsFor:
      "Individuals and business owners who want to plan ahead — not just react in April.",
    process: [
      {
        step: "Review",
        description: "We review your current tax situation and goals.",
      },
      {
        step: "Plan",
        description:
          "We build a plan to help you stay on track throughout the year.",
      },
      {
        step: "Adjust",
        description:
          "We check in periodically and adjust as your situation changes.",
      },
    ],
    relatedSlugs: ["tax-preparation", "accounting", "business-corporate"],
    disclaimer: {
      body: "Tax planning identifies deductions and credits available under current law for your specific situation. Outcomes vary by individual facts; R & M does not guarantee specific savings or refund amounts.",
      tone: "muted",
    },
  },
  {
    slug: "business-corporate",
    title: "Business & Corporate",
    shortDescription:
      "Entity selection, structuring, and the compliance work that keeps your business clean.",
    icon: "Building2",
    tagline: "Tax and accounting support for every stage of your business.",
    description: [
      "Entity selection guidance, business structuring, ongoing compliance, and business tax return preparation.",
      "We help you keep your business clean from a tax and compliance perspective — and stay reachable when questions come up between filings.",
    ],
    whatsIncluded: [
      "Entity selection guidance (LLC, S-Corp, C-Corp, Partnership)",
      "Business structuring and restructuring",
      "Ongoing compliance (annual filings, franchise tax)",
      "Business tax return preparation",
      "State and federal filing coordination",
    ],
    whoItsFor:
      "Business owners — from first-time LLCs to established corporations.",
    process: [
      {
        step: "Assess",
        description:
          "We assess your business structure and tax situation.",
      },
      {
        step: "File",
        description:
          "We handle your filings, compliance, and returns.",
      },
      {
        step: "Support",
        description:
          "We stay available for questions and planning throughout the year.",
      },
    ],
    relatedSlugs: ["tax-preparation", "accounting", "payroll"],
    disclaimer: {
      body: "R & M provides tax and accounting guidance for business entities. For legal formation documents, contracts, or operating agreements, consult a licensed attorney.",
      tone: "muted",
    },
  },
];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
