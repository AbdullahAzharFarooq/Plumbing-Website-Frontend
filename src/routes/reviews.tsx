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
            {business.phone}
          </a>
          <Link to="/contact" className={btnOutline}>
            Contact Us
          </Link>
        </div>
      </PageHero>

      <TrustBar />

      <section className="section bg-background">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">Rating summary</p>
            <p className="mt-4 flex items-end gap-3">
              <span className="text-6xl leading-none font-extrabold text-navy">{ratingSummary.average}</span>
              <span className="pb-1 text-sm text-muted-foreground">out of 5</span>
            </p>
            <Stars rating={ratingSummary.average} className="mt-4" />
            <p className="mt-3 text-sm text-muted-foreground">
              Based on {ratingSummary.count} customer reviews
            </p>
            <ul className="mt-8 space-y-2.5">
              {ratingSummary.breakdown.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="w-10 font-semibold text-navy">{row.stars} star</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-soft">
                    <span className="block h-full rounded-full bg-teal" style={{ width: `${row.percent}%` }} />
                  </span>
                  <span className="w-8 text-right">{row.percent}%</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
              Note for the site owner: the reviews shown here are placeholder content for development. Replace them
              with real, verified customer reviews before launch.
            </p>
          </div>

          <figure className="flex flex-col justify-between rounded-2xl bg-navy p-8 text-navy-foreground md:p-10">
            <div>
              <Quote className="size-8 text-teal" aria-hidden="true" />
              <blockquote className="mt-6 text-[1.375rem] leading-relaxed font-medium text-navy-foreground">
                “{featured.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/15 pt-6">
              <div>
                <p className="font-bold text-navy-foreground">{featured.name}</p>
                <p className="mt-0.5 text-sm text-navy-foreground/60">
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
          <h2 className="text-2xl font-extrabold sm:text-3xl">More from local homeowners</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <figure key={item.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <Stars rating={item.rating} />
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                  <span className="block font-semibold text-navy">{item.name}</span>
                  <span className="mt-0.5 block text-muted-foreground">
                    {item.service} · {item.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CallCta
        heading="Join the homeowners who stopped shopping around."
        copy={`Call ${business.phone} or send us a message and we'll take it from there.`}
      />
    </>
  );
}
