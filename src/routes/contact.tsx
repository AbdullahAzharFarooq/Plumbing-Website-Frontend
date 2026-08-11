import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { business, serviceAreas } from "@/data/businessData";
import { btnGhostLight, btnOutline, btnPrimary } from "@/lib/ui";

const contactEmail = "hello@northbridgeplumbing.ca";
const title = `Contact ${business.companyName} — Plumbers in ${business.city}`;
const description = `Call ${business.phone} or send a message. Residential plumbing across the ${business.region}, with emergency service available.`;

const contactDetails = [
  {
    label: "Phone",
    value: business.phone,
    href: business.phoneHref,
  },
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    label: "Service Area",
    value: "Greater Toronto Area",
  },
  {
    label: "Hours",
    value: "Available for urgent plumbing needs",
  },
];

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
      <section className="bg-surface">
        <div className="shell py-12 lg:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow">GET IN TOUCH</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Reliable Plumbing Starts With a Conversation.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you have an urgent plumbing problem, need a repair, or simply want professional advice, our team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <a href="#contact-form" className={btnOutline}>
                Request a Callback
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
            <h2 className="text-base font-semibold uppercase tracking-[0.24em] text-teal">
              Contact details
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Reach our team directly or send a quick request with the details below.
            </p>
            <dl className="mt-8 grid gap-7 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-lg font-semibold text-navy">
                    {item.href ? (
                      <a href={item.href} className="transition hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow">Tell Us What’s Going On</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
                Give us a few details and our team will get back to you with the right next step.
              </h2>
              <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
                Licensed professionals • Clear communication • Reliable service.
              </p>
            </div>

            <div
              id="contact-form"
              className="rounded-[2rem] border border-border bg-white p-8 shadow-soft md:p-10"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-16">
          <div className="rounded-[2rem] border border-teal/20 bg-navy/95 p-8 sm:p-10">
            <p className="eyebrow text-teal">Have a Plumbing Emergency?</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy-foreground">
              Burst pipe, major leak, overflowing fixture, or another urgent problem?
            </h2>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-foreground/70">
              Don't wait for the damage to get worse. Call now and our team will prioritise your home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a href="#contact-form" className={btnGhostLight}>
                Request a Callback
              </a>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/60">
              Priority response for urgent plumbing calls.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow text-teal">Serving Homes Across the Greater Toronto Area</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
                Residential plumbing coverage across the GTA.
              </h2>
              <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
                Local service from our experienced team, with the same premium care and attention in every neighbourhood.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-navy">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-navy-foreground">
                Need a Plumber? We're Ready to Help.
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-navy-foreground/70">
                Professional service, straightforward communication, and quality work from a local team you can trust.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <a href="#contact-form" className={btnGhostLight}>
                Request a Callback
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
