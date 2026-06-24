import logoLight from "@/assets/icarus-logo-light.png";

export function Footer() {
  return (
    <footer className="border-t-2 border-accent-orange/80 bg-ink py-16 text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <div>
          <img
            src={logoLight}
            alt="Icarus Advisory"
            width={1435}
            height={592}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-paper/50">
            Icarus Advisory
            <br />
            Elevating Potential. Delivering Value.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
            Services
          </p>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            {["Corporate Finance", "Treasury Advisory", "Capital Raising", "Value Creation"].map(
              (s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-accent-orange">
                    {s}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li>
              <a href="mailto:Dirk@icarusadvisory.co.za" className="transition-colors hover:text-accent-orange">
                Dirk@icarusadvisory.co.za
              </a>
            </li>
            <li>
              <a href="tel:0832742247" className="transition-colors hover:text-accent-orange">
                083 274 2247
              </a>
            </li>
            <li>
              <a href="https://icarusadvisory.co.za" className="transition-colors hover:text-accent-orange">
                icarusadvisory.co.za
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-paper/10 px-6 pt-8 lg:px-10">
        <p className="text-xs text-paper/40">
          © {new Date().getFullYear()} Icarus Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}