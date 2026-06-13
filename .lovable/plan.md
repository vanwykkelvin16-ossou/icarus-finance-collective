# Icarus Advisory — Landing Page

A world-class, Apple-inspired single-page site. Pure typographic minimalism: generous whitespace, bold restrained type, brand color accents, smooth scroll reveals. No stock photography. Enquiry form opens the visitor's email client (mailto).

## Design Foundations

**Fonts** (loaded via `<link>` in root route head):
- Cinzel — display/headings (the "ICARUS" wordmark, section titles)
- Montserrat — subheadings, body, UI

**Palette** (brand-locked, mapped to semantic tokens in `src/styles.css`):
- `#042C70` deep blue — primary
- `#FD5303` orange — accent / CTAs
- `#000000` black — text on light
- `#FEFEFE` near-white — background

Light-first design, mostly white canvas with deep-blue and one black section for contrast, orange used sparingly for emphasis and CTAs only (Apple-style accent discipline).

## Page Structure (one route: `/`)

Fixed slim top nav: ICARUS wordmark left; Corporate Finance · Treasury · Value Creation · Contact right; "Start a conversation" pill (orange) on the far right. Subtle blur/translucent background on scroll.

1. **Hero** — Full-height. Eyebrow "ELEVATING POTENTIAL. DELIVERING VALUE." Oversized Cinzel headline "Helping businesses rise to their full financial potential." Supporting line about the firm. Two CTAs: "Start a conversation →" (orange) and "Explore our services" (text link). Marquee/strip of capability words (CORPORATE FINANCE · TREASURY ADVISORY · CAPITAL RAISING · M&A · VALUE CREATION).
2. **Who We Are** — "Disciplined elevation, not reckless ambition." with the firm narrative, set in a calm two-column layout.
3. **What We Do** — Three numbered service cards (Corporate Finance / Treasury / Value Creation), each with its descriptor and the bulleted capability list. Clean dividers, hover lift.
4. **How We Work** — Four principles (Clarity first, Commercially grounded, Disciplined execution, Measurable value) in a 4-up grid with large index numerals.
5. **Leadership** — "Led by a chartered accountant who thinks like an owner." Dirk Fourie CA(SA) profile block with contact details and a bio placeholder note. Designed as an elegant card.
6. **Contact** — "Let's discuss your next financial decision." Email/cell/website blocks + enquiry form (Name, Company, Email, How can we help?). Submit builds a mailto link to Dirk@icarusadvisory.co.za and opens the email client; helper text explains this.
7. **Footer** — Wordmark + tagline, Services list, Contact list.

## Interactions
- Smooth in-view fade/slide reveals on sections (lightweight, tasteful).
- Anchor nav scrolls to sections; sticky header condenses on scroll.
- Hover states on cards and CTAs with restrained motion.
- Fully responsive (mobile nav collapses to a simple menu).

## SEO
- Title: "Icarus Advisory — Corporate Finance & Treasury" (<60 chars)
- Meta description from the firm summary (<160 chars)
- Single H1 (hero), semantic sections, JSON-LD `ProfessionalService`/`Organization` with contact details.

## Technical Notes
- Edit `src/routes/index.tsx` to build the page; extract sections into `src/components/` (Nav, Hero, About, Services, Approach, Leadership, Contact, Footer) for clarity.
- Add brand tokens + font families to `src/styles.css` (`@theme`), fonts via `<link>` in `src/routes/__root.tsx`.
- Mailto form handled client-side (no backend), per your choice.
- Update root/index `head()` metadata.

No backend or dependencies required.