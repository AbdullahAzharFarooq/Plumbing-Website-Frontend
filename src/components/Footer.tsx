import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";

import { business, serviceAreas, services } from "@/data/businessData";
import { Logo } from "./Logo";

const socialIcon = {
  Facebook,
  Instagram,
  Google: Star,
} as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Residential plumbing for homeowners across the {business.region}. Dependable workmanship, clear
              communication, and repairs that hold.
            </p>
            <div className="mt-6 flex gap-2">
              {business.socialLinks.map((link) => {
                const Icon = socialIcon[link.label as keyof typeof socialIcon] ?? Star;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-navy-foreground/15 text-navy-foreground/70 transition-colors hover:border-navy-foreground/40 hover:text-navy-foreground"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-foreground/50 uppercase">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-foreground/50 uppercase">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    hash={service.slug}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-foreground/50 uppercase">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={business.phoneHref} className="flex items-start gap-3 font-semibold text-navy-foreground">
                  <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="flex items-start gap-3 break-all text-navy-foreground/70 hover:text-navy-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-foreground/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.province} {business.address.postalCode}
                </span>
              </li>
            </ul>
            <dl className="mt-6 space-y-1.5 text-sm text-navy-foreground/70">
              {business.businessHours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-4">
                  <dt>{entry.days}</dt>
                  <dd className="text-right text-navy-foreground/90">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/12 pt-6 text-xs text-navy-foreground/45">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {business.legalName}. All rights reserved.
            </p>
            <p>Serving {serviceAreas.slice(0, 5).join(" · ")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
