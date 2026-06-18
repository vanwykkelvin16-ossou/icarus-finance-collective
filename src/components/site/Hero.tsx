import { Reveal } from "./Reveal";

const marquee = [
  "Corporate Finance",
  "Treasury Advisory",
  "Capital Raising",
  "Mergers & Acquisitions",
  "Value Creation",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 animate-float-slow rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-blue) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-paper/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-orange shadow-soft backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              Elevating Potential. Delivering Value.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-5xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
              Helping businesses rise to their full financial potential.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/60">
              A corporate finance and treasury advisory firm for business owners,
              executives, investors, and funders who want clearer decisions and
              measurable value.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3.5 text-sm font-semibold text-paper shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Start a conversation
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-soft"
              >
                Explore our services
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="rounded-3xl border border-ink/10 bg-gradient-brand p-8 text-paper shadow-elevated lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-orange">
              Areas of focus
            </p>
            <ul className="mt-7 divide-y divide-paper/10">
              {marquee.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors"
                >
                  <span className="font-display text-base font-semibold leading-snug">
                    {item}
                  </span>
                  <span className="font-display text-xs font-semibold text-paper/40 transition-colors group-hover:text-accent-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-ink/10 py-5">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-ink/40"
            >
              {item}
              <span className="ml-16 text-accent-orange">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}