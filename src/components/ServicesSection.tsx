import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { services } from "@/data/businessData";
import { useReveal } from "@/hooks/useReveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const featured = services.filter((service) => service.featured);
  const rest = services.filter((service) => !service.featured);
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section bg-background">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Our services</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Our Plumbing Services</h2>
          <p className="lede mt-4">
            Professional solutions for everyday plumbing needs and unexpected problems.
          </p>
        </div>

        <div ref={reveal.ref} className={`${reveal.className} mt-12 grid gap-6 lg:grid-cols-2`}>
          {featured.map((service, index) => (
            <article
              key={service.slug}
              className="group relative overflow-hidden rounded-2xl bg-navy text-navy-foreground"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1280}
                height={800}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 size-full object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/85 to-navy/45"
              />
              <div className="relative flex min-h-[22rem] flex-col justify-end p-7 md:min-h-[25rem] md:p-9">
                <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-navy-foreground/60 uppercase">
                  {index === 0 ? "Most urgent" : "Most requested"}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-navy-foreground md:text-[1.75rem]">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-foreground/75">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-navy-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-navy-foreground/30 pb-1 text-sm font-semibold text-navy-foreground transition-colors hover:border-teal hover:text-teal"
                >
                  Learn more
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
