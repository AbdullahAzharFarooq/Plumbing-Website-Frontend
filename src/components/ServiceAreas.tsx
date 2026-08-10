import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { business, serviceAreas } from "@/data/businessData";
import { btnGhostLight } from "@/lib/ui";

export function ServiceAreas() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow text-teal">Service areas</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-foreground sm:text-4xl">
              Serving Homeowners Across {business.city}
            </h2>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-navy-foreground/70">
              Local coverage across the {business.region}. If you're just outside these areas, call and ask — we
              often can help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnGhostLight}>
                <Phone className="size-4" aria-hidden="true" />
                {business.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center px-2 text-sm font-semibold text-navy-foreground/70 transition-colors hover:text-navy-foreground"
              >
                Check your area
              </Link>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2.5 border-b border-navy-foreground/12 py-4 text-[0.9375rem] font-medium text-navy-foreground/85"
              >
                <MapPin className="size-4 shrink-0 text-teal" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
