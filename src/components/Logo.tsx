import { business } from "@/data/businessData";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const text = tone === "light" ? "text-navy-foreground" : "text-navy";
  const sub = tone === "light" ? "text-navy-foreground/60" : "text-muted-foreground";

  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-lg bg-navy" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3.5c3.4 3.2 5.6 6.1 5.6 8.9A5.6 5.6 0 0 1 12 18a5.6 5.6 0 0 1-5.6-5.6c0-2.8 2.2-5.7 5.6-8.9Z" className="text-teal" />
          <path d="M12 20.5v.5" className="text-teal" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[0.9375rem] font-extrabold tracking-tight ${text}`}>{business.companyName}</span>
        <span className={`mt-1 text-[0.625rem] font-semibold tracking-[0.18em] uppercase ${sub}`}>
          Residential Plumbing
        </span>
      </span>
    </span>
  );
}
