import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Home, Phone, ShieldCheck, Star, Users } from "lucide-react";

import heroImage from "@/assets/hero-plumber.jpg";
import { Stars } from "@/components/Stars";
import { business, testimonials } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `Customer Reviews — ${business.companyName}`;
const description = `Read what homeowners across the ${business.region} say about working with ${business.companyName}.`;

const featuredReviews = testimonials.slice(0, 3);

const trustPoints = [
  {
    title: "Clear Communication",
    icon: Star,
  },
  {
    title: "Quality Workmanship",
    icon: ShieldCheck,
  },
  {
    title: "Respect for Your Home",
    icon: Home,
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
  return (
    <>
      <section className="bg-background">
        <div className="shell grid gap-8 py-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-14">
          <div className="max-w-xl">
            <p className="eyebrow">Customer Feedback</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Trusted by Homeowners Across the GTA.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Two decades of local plumbing work, judged by the people who live with the results.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-white/90 px-4 py-2 shadow-soft backdrop-blur-sm">
              <Stars rating={4.9} />
              <div>
                <p className="text-lg font-semibold text-navy">4.9 / 5</p>
                <p className="text-sm text-muted-foreground">Based on customer experiences</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <Link to="/contact" className={btnOutline}>
                Request a Callback
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft h-[260px] sm:h-[320px] lg:h-[420px]">
            <img
              src={heroImage}
              alt="Professional plumber in a warm residential setting"
              width={1440}
              height={960}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">What Our Customers Say</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              High-quality feedback from homeowners who value honest plumbing work.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[2rem] border border-border bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-2 text-teal">
                  <Star className="size-4" aria-hidden="true" />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">5.0</span>
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed text-navy">
                  “{review.quote}”
                </blockquote>
                <div className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                  <p className="font-semibold text-navy">{review.name}</p>
                  <p className="mt-1">{review.location}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-teal">{review.service}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-teal">Good Work Speaks for Itself.</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy-foreground">
              We focus on clear communication, quality workmanship, and treating every home with respect.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-3xl border border-navy-foreground/10 bg-navy/10 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <point.icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-lg font-semibold text-navy-foreground">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-navy">
                Need a Plumber You Can Trust?
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                From urgent repairs to everyday plumbing problems, our local team is ready to help.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <Link to="/contact" className={btnOutline}>
                Request a Callback
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
