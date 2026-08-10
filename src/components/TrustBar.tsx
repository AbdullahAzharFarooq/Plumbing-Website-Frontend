import { BadgeCheck, Clock, Hammer, MapPin, Users } from "lucide-react";

import { trustPoints } from "@/data/businessData";

const icons = [BadgeCheck, Users, Hammer, Clock, MapPin];

export function TrustBar() {
  return (
    <section aria-label="Why you can rely on us" className="border-y border-border bg-surface">
      <div className="shell py-6">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((point, index) => {
            const Icon = icons[index % icons.length] ?? BadgeCheck;
            return (
              <li key={point} className="flex items-center gap-2.5">
                <Icon className="size-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-[0.8125rem] font-semibold tracking-tight text-navy">{point}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
