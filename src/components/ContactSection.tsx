import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { business } from "@/data/businessData";
import { ContactForm } from "./ContactForm";

export function ContactSection({ heading, copy }: { heading?: string; copy?: string }) {
  return (
    <section id="contact" className="section bg-surface">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              {heading ?? "Let's Get Your Plumbing Problem Solved."}
            </h2>
            <p className="lede mt-4">
              {copy ??
                "Have a question or need professional plumbing assistance? Get in touch with our team."}
            </p>

            <a
              href={business.phoneHref}
              className="group mt-8 flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.6875rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  Fastest response — call us
                </span>
                <span className="text-xl font-extrabold text-navy group-hover:text-primary">{business.phone}</span>
              </span>
            </a>

            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={business.emailHref} className="font-medium text-navy hover:text-primary">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {business.address.street}, {business.address.city}, {business.address.province}{" "}
                  {business.address.postalCode}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <div className="space-y-1">
                  {business.businessHours.map((entry) => (
                    <p key={entry.days} className="text-muted-foreground">
                      <span className="font-medium text-navy">{entry.days}:</span> {entry.hours}
                    </p>
                  ))}
                  <p className="pt-1 text-xs font-semibold text-emergency">{business.emergencyNote}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h3 className="text-lg font-bold">Send us a message</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Tell us what's happening and we'll get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
