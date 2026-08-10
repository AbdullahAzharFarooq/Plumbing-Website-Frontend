import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { business } from "@/data/businessData";
import { btnEmergency, btnGhostLight } from "@/lib/ui";

export function CallCta({
  heading = "Need a plumber today?",
  copy = "Call and speak with an experienced plumber — no phone trees, no scripts.",
  emergency = false,
}: {
  heading?: string;
  copy?: string;
  emergency?: boolean;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="shell py-14 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-foreground sm:text-3xl">{heading}</h2>
            <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-navy-foreground/70">{copy}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={business.phoneHref} className={emergency ? btnEmergency : btnGhostLight}>
              <Phone className="size-4" aria-hidden="true" />
              {business.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-lg bg-background px-6 text-sm font-semibold text-navy transition-colors hover:bg-surface-soft"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
