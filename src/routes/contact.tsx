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
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Reliable Plumbing Starts With a Conversation.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you need an urgent repair, routine service, or simply have a question, our team is ready to help.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
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
        <div className="shell py-12 lg:py-14">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
                  Contact information
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Reach Northbridge Plumbing directly with a phone call, email, or service request.
                </p>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-border bg-surface px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Phone
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-navy">
                    <a href={business.phoneHref} className="transition hover:text-primary">
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div className="rounded-[1.5rem] border border-border bg-surface px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-navy">
                    <a href={`mailto:${contactEmail}`} className="transition hover:text-primary">
                      {contactEmail}
                    </a>
                  </dd>
                </div>
                <div className="rounded-[1.5rem] border border-border bg-surface px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Service Area
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-navy">Greater Toronto Area</dd>
                </div>
                <div className="rounded-[1.5rem] border border-border bg-surface px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Hours
                  </dt>
                  <dd className="mt-2 space-y-1 text-sm leading-relaxed text-navy">
                    {business.businessHours.map((entry) => (
                      <p key={entry.days}>
                        <span className="font-semibold">{entry.days}:</span> {entry.hours}
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-16">
          <div className="mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14 max-w-6xl">
            <div className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
              <p className="eyebrow">Let's connect</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
                Start your request and we’ll follow up with the right next step.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Use the form to tell us about your plumbing issue, then choose the best way for us to reach you.
              </p>

              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p>{contactEmail}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Service Area</p>
                  <p>Greater Toronto Area</p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Hours</p>
                  <div className="space-y-1">
                    {business.businessHours.map((entry) => (
                      <p key={entry.days}>{entry.days}: {entry.hours}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact-form"
              className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-12 lg:py-14">
          <div className="rounded-[2rem] border border-border bg-navy/95 p-8 shadow-soft sm:p-10 text-navy-foreground">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow text-teal">Have a Plumbing Emergency?</p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl leading-tight">
                  Call our team directly for urgent plumbing assistance.
                </h2>
              </div>
              <a href={business.phoneHref} className={btnPrimary}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-12 lg:py-14">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
            <p className="eyebrow text-teal">Service Area</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Toronto • North York • Scarborough • Etobicoke • Mississauga • Vaughan • Markham • Richmond Hill
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-12 lg:py-14">
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-navy">
                Need a Plumber? We're Ready to Help.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Professional service, straightforward communication, and quality work from a local team you can trust.
              </p>
            </div>
            <a href={business.phoneHref} className={btnPrimary}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
