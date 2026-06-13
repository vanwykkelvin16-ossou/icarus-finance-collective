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
        className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-blue) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            Elevating Potential. Delivering Value.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
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
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg transition-all hover:brightness-110"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent-orange"
            >
              Explore our services
              <span aria-hidden>→</span>
            </a>
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