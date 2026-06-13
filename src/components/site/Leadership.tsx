import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="bg-brand py-28 text-brand-foreground lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            Leadership
          </p>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
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

          <Reveal delay={240}>
            <div className="rounded-3xl border border-brand-foreground/15 bg-brand-foreground/5 p-8 backdrop-blur-sm lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-orange">
                Chief Executive Officer
              </p>
              <p className="mt-5 font-display text-3xl font-bold">Dirk Fourie</p>
              <p className="mt-2 text-sm text-brand-foreground/60">
                CA(SA) — Corporate Finance & Treasury Advisory
              </p>
              <dl className="mt-8 space-y-5 border-t border-brand-foreground/15 pt-8">
                {[
                  { k: "Email", v: "Dirk@icarusadvisory.co.za", href: "mailto:Dirk@icarusadvisory.co.za" },
                  { k: "Cell", v: "083 274 2247", href: "tel:0832742247" },
                  { k: "Web", v: "icarusadvisory.co.za", href: "https://icarusadvisory.co.za" },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-foreground/40">
                      {row.k}
                    </dt>
                    <dd>
                      <a
                        href={row.href}
                        className="text-sm font-medium transition-colors hover:text-accent-orange"
                      >
                        {row.v}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}