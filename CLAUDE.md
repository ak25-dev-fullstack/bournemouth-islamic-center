@AGENTS.md

# Bournemouth Islamic Centre website

Static Next.js 16 site (`output: "export"`, `basePath: "/bournemouth-islamic-center"`) deployed to GitHub Pages
on every push to `main` (`.github/workflows/deploy.yml`). Tailwind v4 — design tokens live in `src/app/globals.css`
(`@theme`), **not** in `tailwind.tokens.js` (that file is unused). Full design system: `DESIGN.md`.

Local dev: `npm run dev` → open **http://localhost:3000/bournemouth-islamic-center** (the bare `localhost:3000`
is a 404 because of the base path). To test on a phone/iPad on the same Wi-Fi, use the "Network:" address and
make sure it is listed in `allowedDevOrigins` in `next.config.ts` — otherwise the page loads but nothing is
interactive (e.g. the Menu button does nothing).

## Audience & design principles

The site must be easy to use for **elderly visitors** on phone, iPad/tablet and desktop. Keep all new UI within
these rules (approved by the site owner, Oct 2026):

### Typography
- **Body text 18px; nothing below 16px.** Tailwind's text scale is remapped in `globals.css`:
  `text-xs` = 16px, `text-sm`/`text-base` = 18px, `text-lg` = 20px, `text-xl` = 22px.
- All sizes in `rem` (or `clamp()` with rem) so they follow the visitor's own text-size setting. Don't use
  `text-[NNpx]`.
- Headings: **Lora** (weight 500), replacing Cormorant Garamond (too thin). Body: Inter.
- Sentence case everywhere — no `uppercase` + letter-spacing labels.

### Colour (all text meets WCAG AA 4.5:1)
- **Mosque green `#0F6E56` is the text accent** — links, labels, icons. Hover: `mosque-deep #0A4F3E`.
- **Gold `#C9963A` is for buttons (with ink text) and decoration only — never text on light backgrounds** (2.7:1).
- `gold-light #F3DCA8` for gold-toned text on dark/green backgrounds.
- `muted #5A564F` for secondary text (was `#8C8880`, which failed contrast). `copper #8A5A38` for badges.
- On dark backgrounds, white text is at least `text-white/85`.

### Interaction & layout
- Tap targets ≥ 44px (`min-h-11`); primary buttons `min-h-12`, `text-lg font-semibold`.
- Text links are **underlined** (not distinguished by colour alone).
- Form inputs ≥ 16px text (prevents iOS zoom-on-focus), 2px dark borders, green focus ring.
- Visible focus outline (3px gold). Skip-to-content link in `layout.tsx`.
- Animations disabled under `prefers-reduced-motion`.
- Use `svh` (not `vh`) for hero heights (iOS address bar).
- Header: explicit **Home** link first in the nav (elderly users may not know the logo goes home); active page
  highlighted. Full nav shows from 1024px (`lg`); below that a labelled "Menu" button (iPad portrait included).
  Mobile menu closes on Escape / route change and locks page scroll. Header still hides on scroll down (owner
  declined always-visible).
- Verify layouts at 390px (phone), 820px (iPad portrait), 1180px (iPad landscape), 1440px (desktop) — no
  horizontal scrolling.

### Prayer times (`src/components/home/PrayerTimesClient.tsx`)
- Mimics https://masjidbox.com/prayer-times/bournemouth-islamic-centre-and-central-mosque but in mosque green:
  date / current time / Hijri (English + Arabic) bar → title → large countdown ("The prayer of Asr is in
  HH:MM:SS") → zig-zag edge → 3×2 card grid (2 columns on phones) with the next prayer filled green and a
  "Next" badge → Jumu'ah bar → PDF download.
- Full-width section directly under the home hero; "Today at the mosque" cards follow it.
- Times are computed in **Europe/London** time regardless of the visitor's time zone; renders after mount (static
  export can't know "now").
- Data: `src/assets/prayer_times_apr_dec_2026.csv` parsed by `src/data/prayer-times-2026.ts`. Iqamah: Fajr from CSV;
  Dhuhr +15, Asr +15, Maghrib +5, Isha +10 min. **Jumu'ah times come from `src/data/prayer-times.ts`
  (13:10 English khutbah / 13:30 Arabic / 13:50 prayer), not masjidbox** (masjidbox's Jumu'ah data looked wrong).
- The CSV covers **Apr–Dec 2026 only**; outside that range the widget shows a "times not available" message.

### News → urgent notices
- The News page was removed (all content was placeholder). Urgent news goes in `src/data/notices.ts`; any entry
  there shows as an "Important notice" banner at the top of the home page (`UrgentNotices.tsx`). Empty list = no
  banner. Notices don't expire automatically — remove them when no longer relevant.

## Change log — Oct 2026 accessibility & responsive pass
- New type scale, Lora headings, accessible palette, sentence-case labels across all pages.
- Header rewritten (Home link, lg breakpoint, labelled Menu button, Esc/route-change close, scroll lock).
- Prayer times rebuilt masjidbox-style; fixed CSV bug where a 12:xx Dhuhr became "24:57" (53 days affected);
  Hijri dates now readable ("18 Rabi' al-Thani 1448 AH" + Arabic).
- Home: hero buttons enlarged, prayer section full width, "Today at the mosque" moved to its own light section
  (Jumu'ah card now uses the shared Jumu'ah data), News section replaced by urgent-notices banner, "News" quick-link
  tile replaced by "Prayer times".
- Event cards: stacked on small phones, full descriptions (no line clamp).
- Contact form, donate copy buttons, footer links, filter chips: larger text and tap targets.
- Footer: newsletter subscribe form removed (it did nothing); column is now "Follow us"; copyright spacing fixed.
- `next.config.ts`: `allowedDevOrigins` for testing on phones over Wi-Fi.

## Still to do before launch
1. **Donate page bank details are placeholders** (`20-00-00` / `12345678` / `87654321`) in `src/data/donations.ts`
   — must be replaced with the real accounts.
2. **Social links** in the footer (Facebook, YouTube, Instagram) point to `#` — need real URLs or removal.
3. **Imam's name** on the About page is still "Sheikh [Name]" (`src/app/about/page.tsx`).
4. **Prayer timetable** needs a 2027 CSV (and PDF in `public/`) before January 2027.
5. Review placeholder-looking content on About (timeline, services, "400+ worshippers"), Events and Reverts with
   the mosque committee.
6. `ThemeProvider.tsx` and `ProjectCard.tsx` are unused — delete if not needed.
7. `tailwind.tokens.js` is stale/unused (still lists the old palette and fonts) — delete or update.
