import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Eye, Phone, ShieldCheck, Users } from "lucide-react";

import aboutImage from "@/assets/about-team.jpg";
import { CallCta } from "@/components/CallCta";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { business, stats, whyChooseUs } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `About ${business.companyName} — Local Plumbers Since ${business.foundedYear}`;
const description = `Our story, values and team. ${business.companyName} has served homeowners across the ${business.region} since ${business.foundedYear}.`;

const values = [
  {
    title: "Quality workmanship",
    body: "Durable repairs completed with attention to detail and a commitment to lasting results.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable service",
    body: "A local team that arrives prepared, communicates clearly, and respects your home.",
    icon: Clock,
  },
  {
    title: "Transparent communication",
    body: "We explain the issue, the work required, and the timeline before we begin.",
    icon: Eye,
  },
  {
    title: "Customer-first",
    body: "Your questions are answered and the work is finished without surprises.",
    icon: Users,
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
            {business.phone}
          </a>
          <Link to="/contact" className={btnOutline}>
            Contact Us
          </Link>
        </div>
      </PageHero>

      <TrustBar />

      <section className="section bg-background">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">ABOUT US</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A local plumbing team built around workmanship, clarity and homeowner trust.
            </h2>
            <p className="mt-6 max-w-2xl lede">
              Northbridge Plumbing serves the Greater Toronto Area with reliable residential plumbing, honest communication, and repairs that last. We help homeowners solve the problem right the first time without over-selling or surprise upsells.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface-soft p-8">
            <dl className="grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-background p-6 shadow-soft">
                  <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A simple standard, grown through experience and local trust.
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                Northbridge Plumbing began with a single van and one clear promise: fix the problem properly, explain the work, and leave the home cleaner than we found it.
              </p>
              <p>
                Two decades later, the same local team still serves homeowners across the GTA. We focus on durable repairs, direct communication, and practical solutions that fit the job.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-background">
            <img
              src={aboutImage}
              alt="Northbridge Plumbing team discussing a residential plumbing job"
              width={1408}
              height={1056}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="max-w-2xl">
              <p className="eyebrow">Mission & values</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                What guides every visit to your home.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            <div className="max-w-2xl">
              <p className="eyebrow">Why choose us</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Trusted plumbing for local homeowners.
              </h2>
              <p className="mt-4 lede">
                Our work is built around practical repairs, consistent communication, and respect for your home.
              </p>
            </div>
            <div className="grid gap-5">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
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
