import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { business } from "@/data/businessData";
import { btnPrimary } from "@/lib/ui";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label={`${business.companyName} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
                  activeProps={{ className: "text-navy font-semibold" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right leading-tight">
            <div className="text-[0.6875rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Speak to a plumber
            </div>
            <a href={business.phoneHref} className="text-base font-bold text-navy hover:text-primary">
              {business.phone}
            </a>
          </div>
          <a href={business.phoneHref} className={btnPrimary}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"
            aria-label={`Call ${business.phone}`}
          >
            <Phone className="size-4.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-navy"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell py-4">
            <ul className="divide-y divide-border">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-medium text-navy"
                    activeProps={{ className: "text-primary font-semibold" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-surface p-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Speak to a plumber
              </p>
              <a href={business.phoneHref} className="mt-1 block text-xl font-bold text-navy">
                {business.phone}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{business.emergencyNote}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
