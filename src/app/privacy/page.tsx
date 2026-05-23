import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How R & M Accounting collects, uses, protects, and shares your personal and financial information. GLBA + TDPSA dual notice.",
  path: "/privacy",
});

const TOC = [
  { id: "glba", label: "GLBA Financial Privacy Notice" },
  { id: "info-collect", label: "Information We Collect" },
  { id: "info-use", label: "How We Use Your Information" },
  { id: "info-protect", label: "How We Protect Your Information" },
  { id: "info-share", label: "When We Share Your Information" },
  { id: "section-7216", label: "Your §7216 Rights" },
  { id: "retention", label: "Information Retention" },
  { id: "tdpsa", label: "Texas Data Privacy and Security Act (TDPSA)" },
  { id: "tdpsa-rights", label: "Your Rights Under TDPSA" },
  { id: "tdpsa-exercise", label: "How to Exercise Your Rights" },
  { id: "tdpsa-appeal", label: "Appeal Process" },
  { id: "contact", label: "Privacy Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 23, 2026"
      toc={TOC}
    >
      <LegalSection id="glba" title="1. GLBA Financial Privacy Notice">
        <p>
          {COMPANY.name} (&ldquo;R &amp; M&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a financial institution under the Gramm-Leach-Bliley
          Act (GLBA). This notice explains how we collect, use, share, and
          protect your nonpublic personal information.
        </p>
      </LegalSection>

      <LegalSection id="info-collect" title="1.1 Information We Collect">
        <p>
          We collect the following categories of information so that we can
          prepare your returns, advise you, and comply with our legal
          obligations:
        </p>
        <ul>
          <li>
            <strong>Personal identifiers</strong> — name, address, phone,
            email, Social Security Number, date of birth, and government ID.
          </li>
          <li>
            <strong>Financial information</strong> — bank account and routing
            numbers (for direct deposit/withdrawal), payment card information,
            income statements, and investment records.
          </li>
          <li>
            <strong>Tax return information</strong> — W-2s, 1099s, K-1s,
            deduction documentation, dependents&rsquo; identifying
            information, prior-year returns, and any other documents you
            provide for return preparation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="info-use" title="1.2 How We Use Your Information">
        <ul>
          <li>To prepare, review, and file your federal and state tax returns.</li>
          <li>To communicate with you about your engagement, appointments, and tax matters.</li>
          <li>To bill you and process payments for our services.</li>
          <li>To comply with federal and state tax laws, IRS recordkeeping rules, and Treasury Circular 230.</li>
          <li>To respond to lawful requests from government authorities.</li>
        </ul>
      </LegalSection>

      <LegalSection id="info-protect" title="1.3 How We Protect Your Information">
        <ul>
          <li><strong>Encryption at rest:</strong> AES-256 for all stored client records.</li>
          <li><strong>Encryption in transit:</strong> TLS 1.2 or higher for all network communication.</li>
          <li><strong>Multi-factor authentication (MFA):</strong> Required on the client portal and on every staff account.</li>
          <li><strong>Role-based access controls:</strong> Staff access is limited to the records they need for their work, enforced at the database level (Row-Level Security).</li>
          <li><strong>Audit logging:</strong> Every access to client records is logged with user, action, and timestamp.</li>
          <li><strong>Written information security program (WISP):</strong> Maintained in accordance with the FTC Safeguards Rule.</li>
        </ul>
      </LegalSection>

      <LegalSection id="info-share" title="1.4 When We Share Your Information">
        <p>We share your information only as required to provide services or by law:</p>
        <ul>
          <li><strong>IRS and state taxing authorities</strong> — when we electronically file or otherwise submit your return.</li>
          <li><strong>With your written consent under IRC §7216</strong> — for any disclosure not strictly required for return preparation.</li>
          <li><strong>Service providers</strong> — vetted vendors (e.g., e-file transmitters, document storage) bound by written confidentiality and security agreements.</li>
          <li><strong>Legal requirements</strong> — to comply with subpoenas, court orders, or other lawful process.</li>
        </ul>
        <p>We do <strong>not</strong> sell or rent your personal information to anyone.</p>
      </LegalSection>

      <LegalSection id="section-7216" title="1.5 Your §7216 Rights">
        <p>
          Under IRC §7216, a tax-return preparer may not disclose or use tax
          return information for any purpose other than preparing or
          assisting in preparing your return without your prior written
          consent.
        </p>
        <ul>
          <li>Each separate use or disclosure requires its own signed consent.</li>
          <li>Consents are specific — they identify the recipient, the categories of information disclosed, and the purpose.</li>
          <li>You may withdraw a §7216 consent at any time by emailing <a href={`mailto:${COMPANY.email}`} className="text-rm-accent underline">{COMPANY.email}</a>. Withdrawal does not affect disclosures already made in reliance on the consent.</li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="1.6 Information Retention">
        <ul>
          <li><strong>Tax documents and returns</strong> — retained for at least seven (7) years from filing, consistent with IRS recordkeeping guidance.</li>
          <li><strong>§7216 consent records</strong> — retained for a minimum of three (3) years after the date of the consent.</li>
          <li><strong>Audit logs</strong> — retained for at least three (3) years.</li>
          <li><strong>Engagement letters</strong> — retained for at least seven (7) years from the close of the engagement.</li>
        </ul>
        <p>After the applicable retention period, records are destroyed by secure means (cryptographic shredding for digital media; cross-cut shredding or pulping for paper).</p>
      </LegalSection>

      <LegalSection id="tdpsa" title="2. Texas Data Privacy and Security Act (TDPSA)">
        <p>
          The TDPSA gives Texas residents specific rights regarding their
          personal data. The rights below apply in addition to (not instead
          of) your GLBA rights above.
        </p>
      </LegalSection>

      <LegalSection id="tdpsa-rights" title="2.1 Your Rights Under TDPSA">
        <ul>
          <li><strong>Right to know</strong> what categories of personal data we collect about you and how we use them.</li>
          <li><strong>Right to access</strong> and obtain a copy of the personal data we hold about you.</li>
          <li><strong>Right to correct</strong> inaccuracies in your personal data.</li>
          <li><strong>Right to delete</strong> personal data we hold about you (subject to legal retention obligations — see Section 1.6).</li>
          <li><strong>Right to data portability</strong> — receive your data in a portable, commonly used format.</li>
          <li><strong>Right to opt out of sale or targeted advertising</strong> — R &amp; M does <strong>not</strong> sell personal data and does <strong>not</strong> engage in targeted advertising, so no opt-out action is needed.</li>
        </ul>
      </LegalSection>

      <LegalSection id="tdpsa-exercise" title="2.2 How to Exercise Your Rights">
        <p>
          To exercise any TDPSA right, email{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-rm-accent underline">
            {COMPANY.email}
          </a>{" "}
          with the subject line &ldquo;Privacy Request&rdquo;. We will
          confirm receipt within ten (10) business days and respond
          substantively within forty-five (45) days. If we need additional
          time, we will tell you why and provide an extended response date.
        </p>
        <p>We will verify your identity before fulfilling a request. For requests involving tax records, we may require an in-person verification or a notarized authorization.</p>
      </LegalSection>

      <LegalSection id="tdpsa-appeal" title="2.3 Appeal Process">
        <p>
          If we deny your TDPSA request, you may appeal the decision within
          forty-five (45) days by replying to our denial email. We will
          re-review your request and respond within sixty (60) days of the
          appeal. If the appeal is denied, you may file a complaint with the
          Texas Attorney General at{" "}
          <a
            href="https://www.texasattorneygeneral.gov/consumer-protection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rm-accent underline"
          >
            texasattorneygeneral.gov/consumer-protection
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="contact" title="3. Privacy Contact">
        <ul>
          <li>
            Email:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-rm-accent underline">
              {COMPANY.email}
            </a>
          </li>
          <li>Phone: {COMPANY.phone}</li>
          <li>Mail: {COMPANY.address.full}</li>
        </ul>
      </LegalSection>
    </LegalShell>
  );
}
