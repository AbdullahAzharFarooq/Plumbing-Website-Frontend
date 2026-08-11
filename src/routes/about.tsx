import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/svc-waterheater.jpg";
import secondaryImage from "@/assets/svc-faucet.jpg";
import { CallCta } from "@/components/CallCta";
import { TrustBar } from "@/components/TrustBar";
import { business, serviceAreas, trustPoints } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";

const title = `About ${business.companyName} — Local Plumbers Since ${business.foundedYear}`;
const description = `Our story, values and team. ${business.companyName} has served homeowners across the ${business.region} since ${business.foundedYear}.`;

const philosophy = [
  {
    title: "Do the job properly",
    body: "We focus on solving the problem correctly rather than applying temporary fixes.",
  },
  {
    title: "Explain the work",
    body: "Clear communication before the work begins, so homeowners know what we're doing and why.",
  },
  {
    title: "Respect the home",
    body: "We treat every home with care and leave the workspace clean when the job is done.",
  },
  {
    title: "Build long-term trust",
    body: "Our goal isn't one service call. It's becoming the plumber you recommend to your neighbours.",
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
      <section className="bg-background">
        <div className="shell grid gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">ABOUT NORTHBRIDGE</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[4.5rem] leading-[1.02]">
              Professional Plumbing
              <br />
              With a Personal Approach
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              A small, experienced local team looking after homes across the Greater Toronto Area since {business.foundedYear}.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone}
              </a>
              <Link to="/contact" className={btnOutline}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft">
            <img
              src={heroImage}
              alt="Professional plumber working inside a residential home"
              width={1440}
              height={960}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              A local plumbing company built on trust and quality.
            </h2>
            <div className="mt-8 space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                Northbridge Plumbing has served homeowners across the GTA since {business.foundedYear}. We keep our team small so every job delivers the care and attention a home deserves.
              </p>
              <p>
                Our work is designed to last: clear estimates, honest advice, and repairs that avoid the repeat visits other companies leave behind.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-background">
            <img
              src={secondaryImage}
              alt="Plumber adjusting a faucet in a bright kitchen"
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
          <div className="max-w-2xl">
            <p className="eyebrow">OUR APPROACH</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              Simple process. Clear decisions. Reliable results.
            </h2>
          </div>

          <ol className="mt-10 space-y-6">
            {philosophy.map((item, index) => (
              <li key={item.title} className="grid gap-6 rounded-[2rem] border border-border bg-white p-8 sm:grid-cols-[4rem_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-navy text-white text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Homeowners Choose Northbridge</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              Dependability and respect with every call.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-border bg-white px-6 py-5 text-sm font-semibold text-navy">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              <MapPin className="size-4" aria-hidden="true" />
              PROUDLY LOCAL
            </div>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              Serving homes across the Greater Toronto Area.
            </h2>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              From emergency repairs to planned upgrades, our crew brings the same dependable service to every neighbourhood we serve.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div key={area} className="rounded-3xl border border-border bg-white px-6 py-5 text-sm font-medium text-navy">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">OUR TEAM</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              Skilled plumbers who treat your home with care.
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              We focus on creating solutions that last, and we leave your home clean and ready for the next day.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-background">
            <img
              src={aboutImage}
              alt="Northbridge Plumbing tradespeople working inside a residential home"
              width={1408}
              height={1056}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CallCta
        heading="Need a plumber you can trust?"
        copy="Whether it's an urgent repair or something you've been meaning to fix, our team is ready to help."
      />
    </>
  );
}
