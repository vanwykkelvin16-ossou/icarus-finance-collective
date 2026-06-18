# Icarus Advisory — Premium Redesign

Elevate the existing one-page site to a world-class corporate-finance / advisory look that matches the sophistication of the reference, **without changing any content**. All text, sections, navigation items, brand colors (`#042C70`, `#FD5303`, `#000000`, `#FEFEFE`) and fonts (Cinzel display, Montserrat body) stay exactly as they are. This is purely a visual / layout / motion upgrade.

## Design language

- Tighten and standardise a spacing rhythm: larger, more consistent vertical padding (sections breathe more), wider content gutters, clearer max-widths.
- Stronger type hierarchy: bigger hero headline, refined eyebrow labels, more deliberate paragraph spacing and measure (line length).
- Premium component styling system-wide: rounded corners, soft layered shadows, subtle borders, light glass/blur accents, refined hover micro-interactions.
- Subtle motion: keep the existing `Reveal` scroll fade-up, extend it with gentle staggering, hover lifts on cards/buttons, and a smooth hero load animation. All restrained and professional.

## Foundations (`src/styles.css`)

- Add reusable design tokens: soft shadow scale (e.g. `--shadow-soft`, `--shadow-card`, `--shadow-elevated`), a subtle brand gradient token, and a faint surface tint token for alternating section backgrounds — all built from existing brand colors via `color-mix`.
- Add a couple of utility keyframes (e.g. a slow float/scale for hero ambient shapes). Keep marquee/reveal as-is.
- No new fonts, no new palette — only derived tokens.

## Section-by-section

**Nav** — refine the sticky/blur header: smoother scrolled state with soft shadow, slightly larger touch targets, polished CTA button (gradient/shadow), improved mobile menu panel styling. Same links and labels.

**Hero** — keep headline, eyebrow, paragraph, both CTAs and the capability marquee. Strengthen the two-column balance with a refined right-side typographic/credential panel (built only from existing wording such as the tagline and capability words — no new claims). Larger headline scale, ambient brand-gradient glow, staggered load animation, premium primary + secondary buttons.

**About** — improve two-column rhythm, larger pull-quote treatment for the closing line, more whitespace.

**Services** — keep the three service blocks and all list items. Upgrade to premium cards (rounded, soft shadow, hover lift, refined number/tag styling, accent dividers) on the dark section, with better internal spacing.

**Approach** — refine the 4-up principles grid into cleaner cards with large index numerals, hover accent, consistent spacing.

**Leadership** — polish the dark profile card (glass/border refinement, better contact rows, hover states). Same content including the bio placeholder line.

**Contact** — keep the mailto form and contact details unchanged in behaviour. Upgrade field styling, labels, the contact-detail rows (icon chips), and the submit button to the premium style; tidy the helper note.

**Footer** — refine spacing, hover states, and divider; keep all links and wording.

## Motion & responsiveness

- Apply consistent `Reveal` reveals with light stagger across all sections.
- Add hover transitions to buttons, cards, service blocks, contact rows.
- Audit every section for tablet/mobile: graceful stacking, adjusted padding, fluid type sizes, no overflow (follow grid + `min-w-0` patterns for any mixed text/widget rows).

## Constraints / guarantees

- No content, copy, section, navigation item, image, or branding change.
- No new dependencies; pure Tailwind v4 + existing tokens + existing `Reveal`.
- Files touched: `src/styles.css` and the components in `src/components/site/` (`Nav`, `Hero`, `About`, `Services`, `Approach`, `Leadership`, `Contact`, `Footer`). `index.tsx` metadata stays as-is.

## Technical notes

- All new colors/shadows added as semantic tokens in `src/styles.css` (`@theme inline` for color tokens), never hardcoded in components.
- Web fonts already loaded via `<link>` in `__root.tsx`; unchanged.
- Verify the build and visually check desktop + mobile via Playwright screenshots after implementation.
