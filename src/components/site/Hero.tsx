import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero.jpg";

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-24"
    >
      {/* Cinematic background image */}
      <img
        src={heroImage}
        alt="Abstract ascending financial light curve over glass towers"
        width={1536}
        height={1536}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      {/* Gradient overlays for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, color-mix(in oklab, var(--brand-blue) 92%, var(--brand-black)) 0%, color-mix(in oklab, var(--brand-blue) 78%, var(--brand-black)) 38%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--brand-blue) 90%, var(--brand-black)), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-orange backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-orange" />
              Elevating Potential. Delivering Value.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl font-display text-[2.75rem] font-bold leading-[1.04] tracking-tight text-paper sm:text-6xl lg:text-[4.5rem]">
              Helping businesses rise to their full{" "}
              <span className="text-accent-orange">financial potential.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
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
                className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-paper/50 hover:bg-paper/5"
              >
                Explore our services
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-paper/10 py-5">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-paper/40"
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