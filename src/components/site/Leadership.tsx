import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-gradient-brand py-28 text-brand-foreground lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, var(--brand-orange) 0%, transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            Leadership
          </p>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Led by a chartered accountant who thinks like an owner.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-brand-foreground/70">
              <p>
                Icarus Advisory is led by Dirk Fourie CA(SA), bringing corporate
                finance and treasury expertise to business owners, executives,
                boards, investors, and funders.
              </p>
              <p className="text-brand-foreground/45">
                [Insert short professional biography — experience, sectors, and
                approach to be confirmed.]
              </p>
              <p>
                Engagements are handled directly and confidentially, with senior
                attention from first conversation through to execution.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}