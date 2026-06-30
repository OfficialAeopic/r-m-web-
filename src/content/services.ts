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
  /** SEO (Website Expansion P1/P2). Falls back to title/shortDescription. */
  metaTitle?: string;
  metaDescription?: string;
  /** FAQ accordion + FAQPage JSON-LD (P2). */
  faqs?: { q: string; a: string }[];
  /** Local intro paragraph linking to top GEO-matrix pages (P2). */
  localBlurb?: string;
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
  {
    slug: "itin-application",
    title: "ITIN Application (Form W-7)",
    shortDescription:
      "ITIN applications and renewals (Form W-7) for taxpayers and dependents who need a U.S. taxpayer identification number.",
    icon: "IdCard",
    tagline: "ITIN applications and renewals, handled correctly the first time.",
    description: [
      "We prepare and submit Form W-7 for new ITINs and renewals, attached to your federal return where required.",
      "As an experienced preparer, we help you assemble the right identity and foreign-status documentation so your application isn't rejected for missing paperwork.",
    ],
    whatsIncluded: [
      "Form W-7 preparation (new + renewal)",
      "Document checklist and review",
      "ITINs for spouses and dependents",
      "Coordination with your federal return",
      "Renewal reminders for expiring ITINs",
    ],
    whoItsFor:
      "Individuals, spouses, and dependents who need a U.S. taxpayer ID number but are not eligible for a Social Security number.",
    process: [
      { step: "Review", description: "We confirm eligibility and the documents you'll need." },
      { step: "Prepare", description: "We complete Form W-7 and attach it to your return." },
      { step: "Submit", description: "We submit and track your application to issuance." },
    ],
    relatedSlugs: ["tax-preparation", "amended-prior-year"],
    faqs: [
      { q: "How long does an ITIN take?", a: "The IRS typically issues an ITIN in 7–11 weeks once a complete application is received; renewals can take longer during peak season." },
      { q: "Do I need to mail my passport?", a: "Not necessarily — we'll review whether a certified copy or an IRS-authorized Certifying Acceptance route fits your situation so you keep your originals when possible." },
      { q: "Can my spouse and children get ITINs?", a: "Yes. We prepare W-7s for spouses and qualifying dependents alongside your return." },
    ],
    localBlurb:
      "We help Houston-area families navigate ITIN applications and renewals year-round, with bilingual, hands-on document review.",
    metaTitle: "ITIN Application & Renewal (Form W-7) | R & M Accounting Houston",
    metaDescription:
      "ITIN applications and renewals (Form W-7) for individuals, spouses, and dependents. Document review and federal-return coordination from R & M Accounting in Houston.",
  },
  {
    slug: "sales-tax",
    title: "Texas Sales & Use Tax",
    shortDescription:
      "Texas sales and use tax registration, return preparation, and filing for small businesses.",
    icon: "Receipt",
    tagline: "Texas sales & use tax — registered, prepared, and filed on time.",
    description: [
      "We handle Texas sales and use tax: permit registration, periodic return preparation, and on-time filing with the Comptroller.",
      "We help you determine taxability, track collected tax, and keep your filings current so penalties and interest don't pile up.",
    ],
    whatsIncluded: [
      "Sales tax permit registration",
      "Monthly / quarterly / annual return preparation",
      "Taxability review",
      "Filing with the Texas Comptroller",
      "Penalty and notice resolution support",
    ],
    whoItsFor:
      "Texas small businesses and online sellers that collect sales tax and need filings handled accurately.",
    process: [
      { step: "Register", description: "We register or review your sales tax permit." },
      { step: "Prepare", description: "We compile taxable sales and prepare each return." },
      { step: "File", description: "We file on schedule and keep your account current." },
    ],
    relatedSlugs: ["bookkeeping", "business-corporate", "accounting"],
    faqs: [
      { q: "How often do I file Texas sales tax?", a: "The Comptroller assigns a monthly, quarterly, or annual filing frequency based on your volume; we file on whichever schedule applies to you." },
      { q: "Do I owe sales tax on online sales?", a: "It depends on nexus and what you sell. We review taxability so you collect and remit correctly." },
      { q: "Can you fix past-due sales tax?", a: "Yes — we prepare delinquent returns and help address penalties and Comptroller notices." },
    ],
    localBlurb:
      "From Houston storefronts to online sellers across the metro, we keep Texas sales & use tax filings accurate and on time.",
    metaTitle: "Texas Sales & Use Tax Filing for Small Business | R & M Accounting",
    metaDescription:
      "Texas sales and use tax permit registration, return preparation, and on-time filing with the Comptroller. R & M Accounting, Houston — serving small businesses since 1981.",
  },
  {
    slug: "business-formation",
    title: "Business Formation (Entity Setup)",
    shortDescription:
      "Entity setup filing assistance — LLCs, corporations, EIN applications. Filing assistance, not legal advice.",
    icon: "Building2",
    tagline: "Get your business set up right — entity filings and EIN.",
    description: [
      "We provide filing assistance for forming your business entity (LLC, S-corp, C-corp) and obtaining your federal EIN.",
      "We help you understand the tax treatment of each entity type so you can make an informed choice — and we coordinate with your attorney for the legal aspects of formation.",
    ],
    whatsIncluded: [
      "Entity formation filing assistance (LLC, corporation)",
      "EIN (federal tax ID) application",
      "Entity tax-treatment overview",
      "S-corp election (Form 2553) where appropriate",
      "Coordination with your attorney",
    ],
    whoItsFor:
      "New business owners who want help filing their entity paperwork and setting up for taxes correctly.",
    process: [
      { step: "Discuss", description: "We review your goals and the tax trade-offs of each entity type." },
      { step: "File", description: "We assist with the state formation filing and EIN application." },
      { step: "Set Up", description: "We get you ready for bookkeeping, payroll, and tax filing." },
    ],
    relatedSlugs: ["accounting", "bookkeeping", "business-corporate"],
    faqs: [
      { q: "Should I be an LLC or an S-corp?", a: "It depends on your income, payroll plans, and goals. We walk through the tax trade-offs; for legal structuring you'll also want an attorney." },
      { q: "Do you provide legal advice?", a: "No. We provide filing assistance and tax guidance. Legal questions — operating agreements, liability, contracts — should go to a licensed attorney." },
      { q: "How fast can I get an EIN?", a: "Often the same day once your entity details are confirmed." },
    ],
    localBlurb:
      "We help Houston-area entrepreneurs file their LLC or corporation and set up cleanly for taxes from day one.",
    metaTitle: "Business Formation & EIN Filing Assistance | R & M Accounting Houston",
    metaDescription:
      "LLC and corporation formation filing assistance, EIN applications, and S-corp elections from R & M Accounting in Houston. Filing assistance and tax guidance — not legal advice.",
    disclaimer: {
      body: "R & M Accounting provides business formation filing assistance and tax guidance. We do not provide legal advice. For operating agreements, liability questions, and legal structuring, consult a licensed attorney.",
      tone: "warning",
    },
  },
  {
    slug: "amended-prior-year",
    title: "Amended & Prior-Year Returns",
    shortDescription:
      "Amended returns (Form 1040-X) and catch-up filing for prior years you missed or need to correct.",
    icon: "History",
    tagline: "Fix a return or catch up on years you missed.",
    description: [
      "We prepare amended returns (Form 1040-X) to correct errors or claim missed credits and deductions.",
      "Behind on filing? We handle multiple prior-year returns and help you get back in good standing with the IRS.",
    ],
    whatsIncluded: [
      "Amended returns (Form 1040-X)",
      "Prior-year and back-tax return preparation",
      "Missed credit and deduction review",
      "IRS account transcript review",
      "Coordination with IRS resolution if balances are owed",
    ],
    whoItsFor:
      "Taxpayers who need to correct a filed return or catch up on one or more years of unfiled taxes.",
    process: [
      { step: "Review", description: "We pull transcripts and review what was (or wasn't) filed." },
      { step: "Prepare", description: "We prepare the amended or prior-year returns accurately." },
      { step: "File", description: "We file and, if needed, coordinate a resolution plan." },
    ],
    relatedSlugs: ["tax-preparation", "irs-resolution", "itin-application"],
    faqs: [
      { q: "How many years back can I file?", a: "We can prepare returns for prior years; to claim a refund the IRS generally allows three years from the original due date." },
      { q: "Will amending trigger an audit?", a: "A correctly prepared amendment supported by documentation is routine. We make sure the changes are well-substantiated." },
      { q: "I haven't filed in years — am I in trouble?", a: "Filing voluntarily is the best move. We help you catch up and, if you owe, coordinate a manageable plan." },
    ],
    localBlurb:
      "We help Houston-area taxpayers correct returns and catch up on back taxes, calmly and confidentially.",
    metaTitle: "Amended & Prior-Year Tax Returns (1040-X) | R & M Accounting Houston",
    metaDescription:
      "Amended returns (Form 1040-X) and prior-year catch-up filing from R & M Accounting in Houston. Correct errors, claim missed credits, and get back in good standing.",
  },
  {
    slug: "audit-representation",
    title: "IRS Audit Representation",
    shortDescription:
      "Representation before the IRS for examinations and notices, within Circular 230 practice scope.",
    icon: "Scale",
    tagline: "You don't face the IRS alone.",
    description: [
      "If you receive an audit notice or examination, we represent you before the IRS — communicating on your behalf and organizing the documentation that supports your return.",
      "Representation is provided within the scope of Treasury Circular 230 by qualified preparers; complex matters requiring counsel are coordinated with an attorney.",
    ],
    whatsIncluded: [
      "IRS notice and examination response",
      "Representation before the IRS",
      "Documentation assembly and review",
      "Correspondence handling on your behalf",
      "Resolution coordination",
    ],
    whoItsFor:
      "Individuals and businesses facing an IRS audit, examination, or significant notice.",
    process: [
      { step: "Assess", description: "We review the notice and your return to understand the scope." },
      { step: "Respond", description: "We prepare the response and represent you with the IRS." },
      { step: "Resolve", description: "We work toward the best supportable outcome." },
    ],
    relatedSlugs: ["irs-resolution", "amended-prior-year", "tax-preparation"],
    faqs: [
      { q: "Can you talk to the IRS for me?", a: "Yes. With authorization we communicate with the IRS on your behalf within Circular 230 practice scope." },
      { q: "What should I do when I get an IRS letter?", a: "Don't ignore it and don't panic — send it to us promptly so we can respond within the deadline." },
      { q: "What if my case needs a lawyer?", a: "We'll tell you. For litigation or legal matters we coordinate with a licensed attorney." },
    ],
    localBlurb:
      "We stand between Houston-area taxpayers and the IRS — handling notices and examinations so you don't have to.",
    metaTitle: "IRS Audit Representation | R & M Accounting Houston",
    metaDescription:
      "Representation before the IRS for audits, examinations, and notices — within Circular 230 scope — from R & M Accounting in Houston. You don't face the IRS alone.",
  },
  {
    slug: "financial-statements",
    title: "Financial Statements",
    shortDescription:
      "Preparation and compilation of financial statements for business and lending needs. Not an audit unless performed by a licensed CPA.",
    icon: "FileSpreadsheet",
    tagline: "Clear financial statements for lenders, owners, and decisions.",
    description: [
      "We prepare and compile financial statements — income statements, balance sheets, and cash-flow statements — from your books for lending, ownership, and planning needs.",
      "Compilation and preparation present your financial data; they are not an audit or a review. Attestation (audit/review) is provided only by a licensed CPA where applicable.",
    ],
    whatsIncluded: [
      "Income statement (P&L)",
      "Balance sheet",
      "Cash-flow statement",
      "Compilation / preparation engagements",
      "Lender-ready formatting",
    ],
    whoItsFor:
      "Business owners who need organized financial statements for lenders, investors, or internal decisions.",
    process: [
      { step: "Gather", description: "We work from your bookkeeping records." },
      { step: "Compile", description: "We prepare statements in a clear, standard format." },
      { step: "Deliver", description: "We deliver lender-ready statements and explain them." },
    ],
    relatedSlugs: ["bookkeeping", "accounting", "business-corporate"],
    faqs: [
      { q: "Is a compilation the same as an audit?", a: "No. A compilation/preparation presents your data without the assurance of an audit or review. Audit and review (attest) services require a licensed CPA." },
      { q: "Will my bank accept these?", a: "Many lenders accept compiled statements. If your lender requires audited statements, we'll tell you so you can engage a CPA firm." },
      { q: "How current can the statements be?", a: "As current as your books — which is another reason to keep bookkeeping up to date." },
    ],
    localBlurb:
      "We give Houston-area business owners clean, lender-ready financial statements built straight from their books.",
    metaTitle: "Financial Statement Preparation & Compilation | R & M Accounting Houston",
    metaDescription:
      "Income statements, balance sheets, and cash-flow statements prepared and compiled for lending and decisions. Not an audit unless performed by a licensed CPA. R & M Accounting, Houston.",
    disclaimer: {
      body: "R & M Accounting provides financial statement preparation and compilation services. These are not audit or review (attest) engagements. Attest services are provided only by a licensed CPA.",
      tone: "warning",
    },
  },
  {
    slug: "quickbooks-setup",
    title: "QuickBooks Setup & Training",
    shortDescription:
      "QuickBooks setup, cleanup, and training so your books run smoothly between visits.",
    icon: "Calculator",
    tagline: "Set up QuickBooks right — and learn to run it.",
    description: [
      "We set up QuickBooks for your business, clean up an existing file, and train you or your team to keep it current.",
      "A clean QuickBooks file means faster bookkeeping, accurate reports, and a painless tax season.",
    ],
    whatsIncluded: [
      "QuickBooks Online / Desktop setup",
      "Chart of accounts configuration",
      "Existing-file cleanup",
      "Bank feed and reconciliation setup",
      "One-on-one training",
    ],
    whoItsFor:
      "Small business owners adopting QuickBooks or struggling with a messy file.",
    process: [
      { step: "Assess", description: "We review your business and current setup." },
      { step: "Configure", description: "We set up or clean up your QuickBooks file." },
      { step: "Train", description: "We train you to keep it running between visits." },
    ],
    relatedSlugs: ["bookkeeping", "accounting", "payroll"],
    faqs: [
      { q: "Online or Desktop?", a: "We support both and help you choose based on how you work." },
      { q: "Can you fix my messy QuickBooks?", a: "Yes — file cleanup is one of our most common requests. We'll get your accounts and reconciliations back in order." },
      { q: "Will you keep doing my books after?", a: "We can — or train you to. Many clients pair setup with our bookkeeping service." },
    ],
    localBlurb:
      "We help Houston-area businesses set up and master QuickBooks so their books stay clean all year.",
    metaTitle: "QuickBooks Setup, Cleanup & Training | R & M Accounting Houston",
    metaDescription:
      "QuickBooks Online and Desktop setup, file cleanup, and one-on-one training from R & M Accounting in Houston. Clean books, accurate reports, painless tax season.",
  },
  {
    slug: "bank-products",
    title: "Refund Bank Products",
    shortDescription:
      "Optional refund-transfer products that let you pay prep fees from your refund. Fees apply; not a loan from R & M.",
    icon: "Banknote",
    tagline: "Optional refund transfer — pay prep fees from your refund.",
    description: [
      "For clients who prefer it, we offer optional refund-transfer bank products that let you pay your preparation fee out of your federal refund instead of up front.",
      "These products are provided by a third-party bank, charge a separate fee, and are entirely optional. They are not a loan from R & M Accounting, and choosing one never changes the cost of your tax preparation.",
    ],
    whatsIncluded: [
      "Optional refund-transfer enrollment",
      "Clear, up-front fee disclosure",
      "Direct deposit of your remaining refund",
      "No up-front preparation payment required",
    ],
    whoItsFor:
      "Clients who would rather have their preparation fee deducted from their refund than pay at filing.",
    process: [
      { step: "Explain", description: "We disclose the bank's fee and how the product works." },
      { step: "Choose", description: "You decide — it's always optional." },
      { step: "Disburse", description: "The bank deducts fees and deposits the rest to you." },
    ],
    relatedSlugs: ["tax-preparation", "itin-application"],
    faqs: [
      { q: "Is this a loan?", a: "No. A refund transfer is not a loan from R & M Accounting. It's an optional product from a third-party bank that lets you pay fees from your refund." },
      { q: "Does it cost extra?", a: "The bank charges a separate, disclosed fee for the service. We tell you the amount before you enroll, and it's always optional." },
      { q: "Does using it change my prep fee?", a: "No. Your preparation fee is the same whether you pay up front or use a refund transfer." },
    ],
    localBlurb:
      "Houston-area clients who prefer it can pay their prep fee from their refund through an optional, fully-disclosed bank product.",
    metaTitle: "Refund Transfer Bank Products | R & M Accounting Houston",
    metaDescription:
      "Optional refund-transfer products let you pay tax-prep fees from your federal refund. A third-party bank fee applies; it is not a loan from R & M Accounting and is always optional.",
    disclaimer: {
      body: "Refund transfer products are optional and provided by a third-party bank, not by R & M Accounting. A separate bank fee applies and is disclosed before enrollment. A refund transfer is not a loan, and using one does not change your tax-preparation fee.",
      tone: "warning",
    },
  },
  {
    slug: "notary",
    title: "Notary Services",
    shortDescription:
      "Notary public services for clients who need documents notarized while they're in the office.",
    icon: "Stamp",
    tagline: "Notary services, right when you need them.",
    description: [
      "We provide notary public services for clients handling tax, business, and financial documents.",
      "Notarize while you're in for your appointment — one less errand during a busy season.",
    ],
    whatsIncluded: [
      "Document notarization",
      "Acknowledgments and jurats",
      "Available during office hours",
      "Convenient for tax and business documents",
    ],
    whoItsFor:
      "Clients who need a quick, reliable notary for tax, business, or personal documents.",
    process: [
      { step: "Bring", description: "Bring your unsigned document and valid photo ID." },
      { step: "Verify", description: "We verify identity as required by Texas law." },
      { step: "Notarize", description: "We notarize and you're on your way." },
    ],
    relatedSlugs: ["business-formation", "tax-preparation"],
    faqs: [
      { q: "Do I need an appointment?", a: "Walk-ins are welcome during office hours, but calling ahead during tax season is wise." },
      { q: "What do I need to bring?", a: "The unsigned document and a valid government-issued photo ID. Don't sign until the notary is present." },
      { q: "Is there a fee?", a: "Notary fees follow Texas's statutory schedule; we'll let you know before we begin." },
    ],
    localBlurb:
      "Houston-area clients can get documents notarized while they're in for tax or accounting work.",
    metaTitle: "Notary Public Services | R & M Accounting Houston",
    metaDescription:
      "Notary public services at R & M Accounting in Houston for tax, business, and personal documents. Convenient during office hours — notarize while you're in.",
  },
];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
