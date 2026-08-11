import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { CallCta } from "@/components/CallCta";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { ServiceAreas } from "@/components/ServiceAreas";
import { TrustBar } from "@/components/TrustBar";
import { business } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `Contact ${business.companyName} — Plumbers in ${business.city}`;
const description = `Call ${business.phone} or send a message. Residential plumbing across the ${business.region}, with emergency service available.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's Get Your Plumbing Problem Sorted."
        copy="Tell us what's happening and our team will help you determine the right next step."
      >
        <div className="flex flex-wrap gap-3">
          <a href={business.phoneHref} className={btnPrimary}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <a href="#contact" className={btnOutline}>
            Request Service
          </a>
        </div>
      </PageHero>

      <TrustBar />

      <ContactSection
        heading="Send us a message"
        copy="Tell us what's happening and we'll get back to you shortly — usually the same business day."
      />

      <CallCta
        heading="Have a Plumbing Emergency?"
        copy="Urgent plumbing issues shouldn't wait. Call now and our team will prioritise your home."
      />

      <ServiceAreas />
    </>
  );
}
