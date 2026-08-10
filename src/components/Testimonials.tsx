import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import { ratingSummary, testimonials } from "@/data/businessData";
import { useReveal } from "@/hooks/useReveal";
import { Stars } from "./Stars";

export function Testimonials() {
  const featured = testimonials.find((item) => item.featured) ?? testimonials[0]!;
  const supporting = testimonials.filter((item) => item !== featured).slice(0, 4);
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="section bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Customer feedback</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars rating={ratingSummary.average} />
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-navy">{ratingSummary.average}</span> average ·{" "}
              {ratingSummary.count} reviews
            </p>
          </div>
        </div>

        <div ref={reveal.ref} className={`${reveal.className} mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]`}>
          <figure className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
            <div>
              <Quote className="size-8 text-teal/30" aria-hidden="true" />
              <blockquote className="mt-6 text-[1.25rem] leading-relaxed font-medium text-navy md:text-[1.375rem]">
                “{featured.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="font-bold text-navy">{featured.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {featured.service} · {featured.location}
                </p>
              </div>
              <Stars rating={featured.rating} />
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
            {supporting.slice(0, 3).map((item) => (
              <figure key={item.name} className="rounded-xl border border-border bg-card p-6">
                <Stars rating={item.rating} />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-navy">{item.name}</span>
                  <span className="text-muted-foreground"> · {item.service}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/reviews"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-navy"
          >
            Read all customer reviews
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
