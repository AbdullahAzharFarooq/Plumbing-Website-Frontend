import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Quote } from "lucide-react";

import { CallCta } from "@/components/CallCta";
import { PageHero } from "@/components/PageHero";
import { Stars } from "@/components/Stars";
import { TrustBar } from "@/components/TrustBar";
import { business, ratingSummary, testimonials } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `Customer Reviews — ${business.companyName}`;
const description = `Read what homeowners across the ${business.region} say about working with ${business.companyName}.`;

const trustReasons = [
  {
    title: "Licensed local plumbers",
    body: "Our team is licensed, insured, and experienced in Toronto homes.",
  },
  {
    title: "Straightforward pricing",
    body: "You get honest recommendations and clear estimates before any work begins.",
  },
  {
    title: "Fast response",
    body: "Same-day help for urgent problems and dependable scheduling for planned work.",
  },
  {
    title: "Respectful service",
    body: "We treat your home with care, using boot covers, drop cloths, and a tidy clean-up.",
  },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const featured = testimonials.find((item) => item.featured) ?? testimonials[0]!;
  const others = testimonials.filter((item) => item !== featured);

  return (
    <>
      <PageHero
        eyebrow="Customer feedback"
        title="What Our Customers Say"
        copy="Two decades of local work, judged by the people who live with the results."
      >
        <div className="flex flex-wrap gap-3">
          <a href={business.phoneHref} className={btnPrimary}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <Link to="/contact" className={btnOutline}>
            Contact Us
          </Link>
        </div>
      </PageHero>

      <TrustBar />

      <section className="section bg-background">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Rating summary</p>
            <p className="mt-4 text-6xl font-extrabold tracking-tight text-navy">{ratingSummary.average}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Stars rating={ratingSummary.average} />
              <span className="text-sm font-medium text-muted-foreground">
                Based on {ratingSummary.count} customer reviews
              </span>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Homeowners across the {business.region} trust our team for honest estimates, reliable repairs, and
              respectful service.
            </p>
          </div>

          <figure className="rounded-[2rem] bg-navy p-10 text-navy-foreground">
            <Quote className="size-10 text-teal" aria-hidden="true" />
            <blockquote className="mt-6 text-[1.375rem] leading-relaxed font-medium text-navy-foreground">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/15 pt-6 text-sm">
              <div>
                <p className="font-semibold text-navy-foreground">{featured.name}</p>
                <p className="mt-1 text-muted-foreground">
                  {featured.service} · {featured.location}
                </p>
              </div>
              <Stars rating={featured.rating} />
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">More reviews</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">What homeowners are saying</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <figure key={item.name} className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full bg-teal/10 text-teal font-semibold">
                    {item.rating}.0
                  </span>
                  <Stars rating={item.rating} />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="block font-semibold text-navy">{item.name}</span>
                  <span className="text-muted-foreground">{item.service} · {item.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
            <div>
              <p className="eyebrow">Why trust us</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Trusted local plumbing with no surprises
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                We work carefully, communicate clearly, and arrive on time with the right tools for the job.
              </p>
            </div>
            <div className="grid gap-6">
              {trustReasons.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallCta
        heading="Need a plumber you can trust?"
        copy={`Call ${business.phone} or send us a message for fast, local service.`}
      />
    </>
  );
}
