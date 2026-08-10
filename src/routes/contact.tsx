import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { business, serviceAreas } from "@/data/businessData";
import { btnPrimary } from "@/lib/ui";

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
        eyebrow="Contact us"
        title="Need a Plumber? Call Us Today."
        copy="Speak with an experienced plumber, describe what's happening, and get a straight answer about what happens next."
      >
        <a href={business.phoneHref} className={btnPrimary}>
          <Phone className="size-4" aria-hidden="true" />
          {business.phone}
        </a>
      </PageHero>

      <TrustBar />

      <section className="section bg-background">
        <div className="shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Company</h2>
            <p className="mt-4 font-bold text-navy">{business.legalName}</p>
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
              <span>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.province} {business.address.postalCode}
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Phone & email</h2>
            <a href={business.phoneHref} className="mt-4 flex items-center gap-2 font-bold text-navy hover:text-primary">
              <Phone className="size-4 text-teal" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="mt-3 flex items-center gap-2 text-sm break-all text-muted-foreground hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-teal" aria-hidden="true" />
              {business.email}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Business hours</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {business.businessHours.map((entry) => (
                <div key={entry.days}>
                  <dt className="font-semibold text-navy">
                    <Clock className="mr-1.5 inline size-3.5 text-teal" aria-hidden="true" />
                    {entry.days}
                  </dt>
                  <dd className="text-muted-foreground">{entry.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs font-semibold text-emergency">{business.emergencyNote}</p>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Service area</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        heading="Send us a message"
        copy="Prefer to write it down? Fill in the form and we'll reply shortly — usually the same business day."
      />
    </>
  );
}
