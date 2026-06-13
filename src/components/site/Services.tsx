import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    tag: "Corporate Finance",
    title: "Corporate Finance Advisory",
    desc: "Strategic financial decisions, capital raising, valuations, M&A, and transaction execution — structured and delivered with discipline.",
    items: [
      "Business valuations",
      "Capital raising support",
      "M&A & transaction structuring",
      "Financial modelling",
      "Investor engagement & materials",
      "Deal execution support",
    ],
  },
  {
    no: "02",
    tag: "Treasury",
    title: "Treasury Advisory",
    desc: "Liquidity, funding, cash flow, banking relationships, and financial risk — managed for resilience and capital efficiency.",
    items: [
      "Cash flow & working capital",
      "Funding strategy & debt structuring",
      "Banking facility reviews",
      "Liquidity planning",
      "Treasury controls",
      "Financial risk management",
    ],
  },
  {
    no: "03",
    tag: "Value Creation",
    title: "Value Creation Advisory",
    desc: "Identifying and unlocking hidden value — improving performance, optimising capital structure, and preparing for what's next.",
    items: [
      "Capital efficiency & margin improvement",
      "Capital structure optimisation",
      "Funding & investor readiness",
      "Operational finance insight",
      "Enterprise value improvement",
      "Strategic growth planning",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink py-28 text-paper lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            What We Do
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Three areas where we create measurable value.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/55">
            From the first strategic question to deal execution and beyond, our
            work is organised around the decisions that move enterprise value.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 120}
              className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-paper/[0.04] lg:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-semibold text-accent-orange">
                  {s.no}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/55">
                {s.desc}
              </p>
              <ul className="mt-8 space-y-3 border-t border-paper/10 pt-8">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] text-paper/70"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}