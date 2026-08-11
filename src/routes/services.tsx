import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";

import heroImage from "@/assets/hero-plumber.jpg";
import { CallCta } from "@/components/CallCta";
import { FAQ } from "@/components/FAQ";
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
      <section className="bg-surface">
        <div className="shell py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
            <div className="max-w-2xl">
              <p className="eyebrow">OUR SERVICES</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                Professional Plumbing Services for Every Part of Your Home
              </h1>
              <p className="lede mt-6">
                From urgent plumbing problems to everyday repairs, our experienced team provides reliable
                solutions with clear communication and quality workmanship.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={business.phoneHref} className={btnPrimary}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {business.phone}
                </a>
                <Link to="/contact" className={btnOutline}>
                  Request a Callback
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-background">
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
        </div>
      </section>

      <TrustBar />

      <section className="bg-background">
        <div className="shell">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`grid scroll-mt-28 items-center gap-10 border-t border-border py-14 last:border-b last:border-border last:pb-0 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="overflow-hidden rounded-[1.75rem] bg-surface-soft">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={1280}
                    height={860}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-navy">SERVICE</span>
                </div>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">{service.name}</h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-[0.96rem] text-navy">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal/10 text-teal">
                        ✓
                      </span>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-3">
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

      <section className="section bg-surface">
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

      <FAQ items={faqs.slice(0, 5)} className="bg-background" />
      <CallCta
        heading="Need a Plumber? Let's Get It Sorted."
        copy="Whether it's an urgent repair or something you've been meaning to fix, our experienced team is ready to help."
      />
    </>
  );
}
