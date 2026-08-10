export const btn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60";

export const btnPrimary = `${btn} bg-primary text-primary-foreground shadow-soft hover:bg-primary/92 hover:shadow-lift active:translate-y-px`;

export const btnNavy = `${btn} bg-navy text-navy-foreground hover:bg-navy-soft`;

export const btnOutline = `${btn} border border-border bg-background text-navy hover:border-navy/30 hover:bg-surface`;

export const btnGhostLight = `${btn} border border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10`;

export const btnEmergency = `${btn} bg-emergency text-emergency-foreground hover:bg-emergency/90`;

export const linkArrow =
  "group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-navy";
