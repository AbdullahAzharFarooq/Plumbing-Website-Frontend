import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/data/businessData";

export function FAQ({ items = faqs, className = "" }: { items?: typeof faqs; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section bg-background ${className}`}>
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Frequently Asked</h2>
            <p className="lede mt-4">
              Straight answers to what homeowners ask us most. Anything else, just call.
            </p>
          </div>

          <dl className="divide-y divide-border border-y border-border">
            {items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-navy">{item.q}</span>
                      <span
                        className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border text-navy"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-panel-${index}`}
                    hidden={!isOpen}
                    className="max-w-2xl pr-12 pb-6 text-[0.9375rem] leading-relaxed text-muted-foreground"
                  >
                    {item.a}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
