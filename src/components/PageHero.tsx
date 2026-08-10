export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
}) {
  const isServicesHero = eyebrow && eyebrow.toLowerCase().includes("services");
  return (
    <section className={`border-b border-border ${isServicesHero ? "relative overflow-hidden bg-white" : "bg-surface"}`}>
      {isServicesHero && (
        <>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#f6fbff_0%,_transparent_30%)]" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(241,246,255,0.6) 0%, rgba(246,249,255,0.4) 50%, rgba(255,255,255,0.0) 100%)',
            }}
          />
          {/* subtle flowing svg shape on the right */}
          <svg
            className="absolute right-0 top-12 -z-10 h-[420px] w-[420px] opacity-20"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#eaf5ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#f6fbff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,200 C80,120 160,280 260,220 C340,170 420,140 400,80 L400,400 L0,400 Z" fill="url(#g1)" />
          </svg>
        </>
      )}

      <div className={`shell ${isServicesHero ? "min-h-[520px] flex items-center py-0" : "py-14 md:py-20"}`}>
        <div className={isServicesHero ? "relative z-10" : ""}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.08] font-extrabold sm:text-5xl">{title}</h1>
          <p className="lede mt-5">{copy}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
