import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";

import { CallCta } from "@/components/CallCta";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { business, faqs, services } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";
import { Link } from "@tanstack/react-router";

const title = `Plumbing Services in ${business.city} — ${business.companyName}`;
const description =
  "Emergency plumbing, drain cleaning, leak repair, water heaters, pipe repair, toilets, fixtures and sewer services for local homeowners.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const benefits = [
  { title: "Diagnosed before quoted", body: "We find the actual cause first, then price the real fix." },
  { title: "One visit where possible", body: "Vans stocked with common parts so most jobs finish same-day." },
  { title: "Clean workspace", body: "Drop sheets down, area left tidy, debris taken with us." },
  { title: "Workmanship you can check", body: "We walk you through what was done before we leave." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Professional Plumbing Services for Every Part of Your Home"
        copy="Professional solutions for everyday plumbing needs and unexpected problems — carried out by licensed plumbers who explain the work before starting it."
      >
        <div className="flex flex-wrap gap-3">
          <a href={business.phoneHref} className={btnPrimary}>
            <Phone className="size-4" aria-hidden="true" />
            Call {business.phone}
          </a>
          <Link to="/contact" className={btnOutline}>
            Request a callback
          </Link>
        </div>
      </PageHero>

      <TrustBar />

      <section className="section bg-background">
        <div className="shell">
          <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Service categories</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Jump straight to what you need. Every service below is available across the {business.region}.
            </p>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="group flex items-center justify-between gap-3 border-b border-border py-4 text-[0.9375rem] font-semibold text-navy transition-colors hover:text-primary"
                >
                  {service.name}
                  <ArrowRight
                    className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-4 md:py-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-8 border-b border-border py-14 last:border-b-0 lg:grid-cols-2 lg:gap-16 lg:py-20"
            >
              <div className={`overflow-hidden rounded-2xl bg-surface-soft ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={1280}
                  height={800}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="aspect-16/10 size-full object-cover"
                />
              </div>

              <div>
                <p className="eyebrow">
                  {String(index + 1).padStart(2, "0")}
                  <span className="h-px w-6 bg-teal" aria-hidden="true" />
                  Service
                </p>
                <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{service.name}</h2>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-[0.9375rem] text-navy">
                      <Check className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={business.phoneHref} className={btnPrimary}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call Now
                  </a>
                  <Link to="/contact" className={btnOutline}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-background">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">What's included</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">The same standard on every job</h2>
          </div>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t border-navy pt-5">
                <dt className="text-base font-bold text-navy">{benefit.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FAQ items={faqs.slice(0, 5)} className="bg-surface" />
      <CallCta />
    </>
  );
}
