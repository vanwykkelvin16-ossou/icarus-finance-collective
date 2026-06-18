import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const details = [
  { icon: "✉", k: "Email", v: "Dirk@icarusadvisory.co.za", href: "mailto:Dirk@icarusadvisory.co.za" },
  { icon: "✆", k: "Cell", v: "083 274 2247", href: "tel:0832742247" },
  { icon: "⦿", k: "Website", v: "icarusadvisory.co.za", href: "https://icarusadvisory.co.za" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:Dirk@icarusadvisory.co.za?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-2 w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none transition-all placeholder:text-ink/30 focus:border-accent-orange focus:ring-3 focus:ring-accent-orange/15";

  return (
    <section id="contact" className="bg-surface py-28 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-accent-orange">
            Get In Touch
          </p>
        </Reveal>
        <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Let's discuss your next financial decision.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">
              Whether you're preparing for a transaction, raising capital, or
              optimising treasury, a focused conversation is the best place to
              start.
            </p>
            <div className="mt-12 space-y-6">
              {details.map((d) => (
                <a
                  key={d.k}
                  href={d.href}
                  className="group flex items-center gap-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-accent-orange transition-colors group-hover:border-accent-orange">
                    {d.icon}
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                      {d.k}
                    </span>
                    <span className="block text-base font-medium text-ink transition-colors group-hover:text-accent-orange">
                      {d.v}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-ink/8 bg-paper p-8 shadow-card lg:p-10">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                  Company
                </label>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={field}
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder="Tell us about your situation"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3.5 text-sm font-semibold text-paper shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Send enquiry
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="text-xs leading-relaxed text-ink/40">
                This form opens your email client to send to
                Dirk@icarusadvisory.co.za. Connect a form service or backend to
                capture submissions automatically.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}