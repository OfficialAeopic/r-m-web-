import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY, CIRCULAR_230_DISCLAIMER } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of rmtax.org. Visiting this site does not create a client-preparer relationship.",
  path: "/terms",
});

const TOC = [
  { id: "use", label: "Website Use" },
  { id: "no-relationship", label: "No Client Relationship" },
  { id: "accuracy", label: "Accuracy of Information" },
  { id: "circular-230", label: "Circular 230 Notice" },
  { id: "ip", label: "Intellectual Property" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "law", label: "Governing Law" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="May 23, 2026"
      toc={TOC}
    >
      <LegalSection id="use" title="1. Website Use">
        <p>
          By accessing or using {COMPANY.domain} (the &ldquo;Site&rdquo;), you
          agree to these Terms of Service. The Site is owned and operated by{" "}
          {COMPANY.name}. If you do not agree, please do not use the Site.
        </p>
        <p>
          You agree to use the Site only for lawful purposes. You will not
          attempt to disrupt the Site, gain unauthorized access to any portion
          of it, or use it to harvest information about other users.
        </p>
      </LegalSection>

      <LegalSection id="no-relationship" title="2. No Client Relationship">
        <p>
          <strong>
            Visiting this website or submitting a contact form does not create
            a client-preparer relationship between you and R &amp; M.
          </strong>{" "}
          A formal engagement requires (a) our review of your situation, (b) a
          mutual decision to proceed, and (c) a signed engagement letter that
          sets out the scope, fees, and responsibilities of each party.
        </p>
        <p>
          Until an engagement letter is signed, do not send us sensitive
          information such as Social Security numbers, banking details, or
          full tax documents.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="3. Accuracy of Information">
        <p>
          Content on the Site is provided for <strong>general information
          only</strong>. It is not specific tax, legal, or accounting advice
          and should not be relied upon as such. Tax law is complex, changes
          frequently, and applies differently depending on your individual
          facts.
        </p>
        <p>
          Before acting on anything you read here, consult a qualified
          professional who has reviewed your situation. R &amp; M makes no
          warranty as to the completeness or current accuracy of Site content.
        </p>
      </LegalSection>

      <LegalSection id="circular-230" title="4. Circular 230 Notice">
        <p>{CIRCULAR_230_DISCLAIMER}</p>
      </LegalSection>

      <LegalSection id="ip" title="5. Intellectual Property">
        <p>
          The Site, including its text, graphics, logos, and software, is the
          property of {COMPANY.name} or its licensors and is protected by U.S.
          and international copyright, trademark, and other intellectual
          property laws. You may not copy, modify, distribute, or create
          derivative works without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {COMPANY.name} and its
          owners, employees, and agents are not liable for any indirect,
          incidental, special, consequential, or punitive damages arising out
          of your access to or use of the Site, even if advised of the
          possibility of such damages. The Site is provided &ldquo;as
          is&rdquo; without warranties of any kind, express or implied.
        </p>
        <p>
          This limitation does not apply to liability that cannot be limited
          under applicable law.
        </p>
      </LegalSection>

      <LegalSection id="law" title="7. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to its conflict-of-laws principles. Any dispute arising out
          of or related to these Terms or your use of the Site shall be
          resolved in the state or federal courts located in Harris County,
          Texas.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we will
          revise the &ldquo;Last updated&rdquo; date at the top of this page.
          Your continued use of the Site after we post changes constitutes
          your acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact">
        <p>
          Questions about these Terms? Email{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-rm-accent underline">
            {COMPANY.email}
          </a>{" "}
          or call {COMPANY.phone}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
