import { Reveal } from "./Reveal";

const principles = [
  {
    no: "01",
    title: "Clarity first",
    desc: "We turn financial complexity into clear, decision-ready insight — no jargon, no noise.",
  },
  {
    no: "02",
    title: "Commercially grounded",
    desc: "Recommendations are practical, value-focused, and built to withstand boardroom scrutiny.",
  },
  {
    no: "03",
    title: "Disciplined execution",
    desc: "Ambition matched with the structure and precision that funders and investors expect.",
  },
  {
    no: "04",
    title: "Measurable value",
    desc: "We focus on the decisions that move capital efficiency and enterprise value.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-surface py-28 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            How We Work
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            An advisory partner, built around your decisions.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
            Every engagement is grounded in commercial judgement and structured
            for executive audiences who are commercially intelligent and
            time-poor.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.no} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-ink/8 bg-paper p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-orange/30 hover:shadow-card">
                <span className="font-display text-5xl font-bold text-ink/10 transition-colors group-hover:text-accent-orange">
                  {p.no}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}