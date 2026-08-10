import whyImage from "@/assets/why-craft.jpg";
import { stats, whyChooseUs } from "@/data/businessData";
import { useReveal } from "@/hooks/useReveal";

export function WhyChooseUs() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="section bg-surface">
      <div className="shell">
        <div ref={reveal.ref} className={`${reveal.className} grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">The difference</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Why Homeowners Choose Us</h2>
            <p className="lede mt-4">
              Plumbing is easy to do quickly and hard to do properly. We built this company around the second one.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-surface-soft">
              <img
                src={whyImage}
                alt="Plumber's hands tightening a copper pipe fitting with precision"
                width={1200}
                height={1504}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 size-full object-cover"
              />
            </div>
          </div>

          <div>
            <ol className="divide-y divide-border border-y border-border">
              {whyChooseUs.map((item, index) => (
                <li key={item.title} className="flex gap-6 py-7 first:pt-0 md:gap-8">
                  <span className="mt-0.5 font-mono text-sm font-semibold text-teal">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-extrabold tracking-tight text-navy">{stat.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
