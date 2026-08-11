import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import aboutImage from "@/assets/about-team.jpg";
import whyImage from "@/assets/why-craft.jpg";
import { CallCta } from "@/components/CallCta";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { business } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `About ${business.companyName} — Local Plumbers Since ${business.foundedYear}`;
const description = `Our story, values and team. ${business.companyName} has served homeowners across the ${business.region} since ${business.foundedYear}.`;

const approachPoints = [
  {
    title: "Honest communication",
    body: "We explain the problem, the options, and the cost before any work begins.",
  },
  {
    title: "Quality workmanship",
    body: "Every repair is completed with durable materials and high standards so it still holds.",
  },
  {
    title: "Reliable service",
    body: "We arrive prepared, on time, and ready to get the job done with minimal disruption.",
  },
  {
    title: "Respect for your home",
    body: "Boot covers, drop cloths, and a tidy workspace on every visit.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About our company"
        title="Professional Plumbing With a Personal Approach."
        copy={`A small, experienced local team that has been looking after homes across the ${business.region} since ${business.foundedYear}.`}
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
        <div className="shell grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              It started with one van and a simple standard.
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                {business.companyName} began in {business.foundedYear} with a single van, a licence, and a
                frustration: too many homeowners were being sold quick fixes that failed within the year. The plan
                was straightforward — do the job properly, explain it honestly, and let the work bring the next
                call.
              </p>
              <p>
                Two decades later that's still how it runs. We've stayed deliberately small enough that the person
                answering the phone knows the plumber knocking on your door, and experienced enough to handle
                everything from a dripping faucet to a failed main line.
              </p>
              <p>
                Most of our work now comes from repeat customers and their neighbours. That's the only marketing
                metric we really watch.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-surface-soft">
            <img
              src={aboutImage}
              alt={`${business.companyName} plumbers discussing a job in a residential utility room`}
              width={1408}
              height={1056}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section bg-surface">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our approach</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">How we approach every job</h2>
              <p className="lede mt-4">
                Our work is built on clear communication, dependable repairs, and respect for your home.
              </p>
            </div>
            <div className="grid gap-6">
              {approachPoints.map((point) => (
                <div key={point.title} className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallCta
        heading="Ready to talk to a licensed plumber?"
        copy={`Call ${business.phone} or request service and our team will follow up promptly.`}
      />
    </>
  );
}
