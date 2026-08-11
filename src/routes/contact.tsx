import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/hero-plumber.jpg";
import { ContactForm } from "@/components/ContactForm";
import { business, serviceAreas } from "@/data/businessData";
import { btnGhostLight, btnOutline, btnPrimary } from "@/lib/ui";

const contactEmail = "hello@northbridgeplumbing.ca";
const title = `Contact ${business.companyName} — Plumbers in ${business.city}`;
const description = `Call ${business.phone} or send a message. Residential plumbing across the ${business.region}, with emergency service available.`;

const contactCards = [
  {
    label: "Phone",
    value: business.phone,
    icon: Phone,
    href: business.phoneHref,
  },
  {
    label: "Service Area",
    value: "Greater Toronto Area",
    icon: MapPin,
  },
  {
    label: "Hours",
    value: "Available for urgent plumbing needs",
    icon: Clock,
  },
  {
    label: "Email",
    value: contactEmail,
    icon: Mail,
    href: `mailto:${contactEmail}`,
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
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">GET IN TOUCH</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[4.5rem] leading-[1.02]">
              Reliable Plumbing Starts With a Conversation.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Whether you have an urgent plumbing problem, need a repair, or simply want professional advice, our team is ready to help.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <a href="#contact-form" className={btnOutline}>
                Request a Callback
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft">
            <img
              src={heroImage}
              alt="Professional plumber inspecting a residential plumbing system"
              width={1440}
              height={960}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal">Let's Get Your Plumbing Sorted.</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy-foreground">
              Fast access to the right local plumbing support.
            </h2>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-navy-foreground/70">
              Clear contact details, simple next steps, and a team that treats every home with care.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href ?? "#"}
                  className="group rounded-[1.5rem] border border-navy/15 bg-navy/10 p-6 transition hover:border-teal/50 hover:bg-navy/15"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-sm uppercase tracking-[0.2em] text-navy-foreground/70">{card.label}</p>
                  <p className="mt-3 text-lg font-semibold leading-tight text-navy-foreground">
                    {card.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow">Tell Us What’s Going On</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
                Give us a few details and our team will get back to you with the right next step.
              </h2>
              <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
                Licensed professionals • Clear communication • Reliable service
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

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="shell relative py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal">Have a Plumbing Emergency?</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy-foreground">
              Burst pipe, major leak, overflowing fixture, or another urgent problem?
            </h2>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-navy-foreground/70">
              Don't wait for the damage to get worse. Call now and our team will prioritise your home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
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

      <section className="bg-surface">
        <div className="shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow text-teal">Serving Homes Across the Greater Toronto Area</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
                Residential plumbing coverage across the GTA.
              </h2>
              <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
                Local service from our experienced team, with the same premium care and attention in every neighbourhood.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-3xl border border-border bg-background px-6 py-5 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
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
