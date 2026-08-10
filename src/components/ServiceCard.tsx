import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/data/businessData";

export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-lift"
    >
      <div className="aspect-16/10 overflow-hidden bg-surface-soft">
        <img
          src={service.image}
          alt={service.imageAlt}
          width={1280}
          height={800}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-navy">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
