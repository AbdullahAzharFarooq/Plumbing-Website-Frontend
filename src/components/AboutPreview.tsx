import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import aboutImage from "@/assets/about-team.jpg";
import { business } from "@/data/businessData";
import { useReveal } from "@/hooks/useReveal";

export function AboutPreview() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="section bg-background">
      <div className="shell">
        <div ref={reveal.ref} className={`${reveal.className} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div className="overflow-hidden rounded-2xl bg-surface-soft">
            <img
              src={aboutImage}
              alt="Two Northbridge plumbers reviewing job details on a tablet in a home utility room"
              width={1408}
              height={1056}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 size-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">About our company</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Professional Plumbing With a Personal Approach.
            </h2>
            <p className="lede mt-5">
              {business.companyName} has worked in local homes since {business.foundedYear}. We're a small,
              experienced team rather than a call centre with a fleet — which means the person who answers the phone
              knows the person arriving at your door.
            </p>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              We explain what's wrong in plain language, quote before we start, and treat your home the way we'd
              want ours treated.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Learn About Us
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
