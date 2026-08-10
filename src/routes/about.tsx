import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import aboutImage from "@/assets/about-team.jpg";
import whyImage from "@/assets/why-craft.jpg";
import { CallCta } from "@/components/CallCta";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { business, stats, team, values, whyChooseUs } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `About ${business.companyName} — Local Plumbers Since ${business.foundedYear}`;
const description = `Our story, values and team. ${business.companyName} has served homeowners across the ${business.region} since ${business.foundedYear}.`;

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

          <div className="overflow-hidden rounded-2xl bg-surface-soft">
            <img
              src={aboutImage}
              alt={`${business.companyName} plumbers discussing a job in a residential utility room`}
              width={1408}
              height={1056}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell py-14 md:py-16">
          <h2 className="text-2xl font-extrabold text-navy-foreground sm:text-3xl">Experience, in numbers</h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-navy-foreground/15 pt-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold text-navy-foreground sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm text-navy-foreground/60">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="overflow-hidden rounded-2xl bg-surface-soft lg:order-2">
            <img
              src={whyImage}
              alt="Careful pipe fitting work being completed by a licensed plumber"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 size-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">How we work in your home</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {values.map((value, index) => (
                <li key={value.title} className="flex gap-6 py-6">
                  <span className="mt-1 font-mono text-sm font-semibold text-teal">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Our team</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">The people who show up</h2>
            <p className="lede mt-4">
              No subcontracted strangers. The same licensed team, job after job.
            </p>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="border-t border-navy pt-5">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.years}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Trust</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Why homeowners keep calling us back</h2>
          </div>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <dt className="text-base font-bold text-navy">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CallCta heading="Want to talk to us first?" copy="Ask questions before booking anything. We're happy to explain." />
    </>
  );
}
