import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-paper py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            Who We Are
          </p>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Disciplined elevation, not reckless ambition.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="space-y-6 text-lg leading-relaxed text-ink/60">
              <p>
                Icarus Advisory is a corporate finance and treasury advisory
                firm that helps businesses unlock value, make better strategic
                decisions, and access the right capital solutions.
              </p>
              <p>
                We operate at the intersection of corporate finance, treasury
                strategy, capital raising, and transaction advisory —
                translating financial complexity into clear, commercially
                grounded decisions. The name Icarus reflects the pursuit of
                higher potential; our approach pairs that ambition with the
                discipline a board expects.
              </p>
              <p className="font-medium text-ink">
                The result is advice that is strategic, precise, and built to
                deliver real commercial value.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}