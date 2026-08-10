import { Phone, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-plumber.jpg";
import { business } from "@/data/businessData";
import { btnOutline, btnPrimary } from "@/lib/ui";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 hidden size-[34rem] rounded-full bg-primary/6 blur-3xl lg:block"
      />

      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px) brightness(0.95)',
            transform: 'scale(1.02)'
          }}
        />
        {/* subtle left-dark navy gradient overlay (stronger behind text, lighter to the right) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(8,20,40,0.92) 0%, rgba(8,20,40,0.64) 40%, rgba(8,20,40,0.36) 100%)',
          }}
        />
      </div>

      <div className="shell relative">
        <div className="min-h-[650px] md:min-h-[720px] lg:min-h-[720px] flex items-center relative z-20">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <p className="eyebrow uppercase text-white/90">
              <span className="h-px w-8 bg-teal mr-3 inline-block" aria-hidden="true" />
              TRUSTED LOCAL PLUMBING PROFESSIONALS
            </p>

            <h1 className="mt-6 text-[2.25rem] leading-[1.02] font-extrabold sm:text-[3rem] lg:text-[3.75rem] text-white">
              Reliable Plumbing.
              <br />
              <span className="text-primary">Done Right</span> the
              <br /> First Time.
            </h1>

            <p className="lede mt-6 text-slate-200">
              Professional plumbing services delivered with dependable workmanship, clear communication, and a
              commitment to your home.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={business.phoneHref} className={btnPrimary}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <Link to="/contact" className={btnOutline}>
                Contact Us
              </Link>
            </div>

            <div className="mt-9 flex flex-col gap-4 border-t border-border/30 pt-7 sm:flex-row sm:items-center sm:gap-8">
              <a href={business.phoneHref} className="group flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-surface-soft text-teal transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                  <Phone className="size-4.5" aria-hidden="true" />
                </span>
                <span className="leading-tight text-white">
                  <span className="block text-[0.6875rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Speak to a plumber
                  </span>
                  <span className="text-lg font-bold text-white">{business.phone}</span>
                </span>
              </a>
              <p className="flex items-start gap-2 text-sm text-slate-200 sm:max-w-[14rem]">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                Licensed, insured and serving the {business.region} since {business.foundedYear}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
