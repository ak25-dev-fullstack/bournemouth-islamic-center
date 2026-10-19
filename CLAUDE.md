@AGENTS.md

# Bournemouth Islamic Centre website

Static Next.js 16 site (`output: "export"`, no base path) deployed to GitHub Pages at **https://biccm.org**
(custom domain; `public/CNAME`, DNS at Namecheap) on every push to `main` (`.github/workflows/deploy.yml`). Tailwind v4 — design tokens live in `src/app/globals.css`
(`@theme`), **not** in `tailwind.tokens.js` (that file is unused). Full design system: `DESIGN.md`.

Local dev: `npm run dev` → open **http://localhost:3000**. To test on a phone/iPad on the same Wi-Fi, use the "Network:" address and
make sure it is listed in `allowedDevOrigins` in `next.config.ts` — otherwise the page loads but nothing is
interactive (e.g. the Menu button does nothing).

## What the mosque offers (confirmed by the site owner, Oct 2026)

This is the **real** list of services — use it as the source of truth for any copy. Don't invent other services,
classes, groups or facilities (e.g. food bank, youth club, library, weekend school times, capacity figures);
if something isn't listed here, treat it as unconfirmed placeholder.

- **Prayer rooms open 24/7** — separate rooms for brothers (male) and sisters (female).
- **Jumu'ah (Friday prayer)** — times in `src/data/prayer-times.ts` (`jummahInfo`).
- **Madrasah for children** — no timetable published; visitors should **contact the mosque for details**.
- **Nikah** (marriage) ceremonies.
- **Janazah** (funeral) services.
- **Reverts** — people can take their **shahadah at the mosque**.
- **Everyone is welcome:** brothers, sisters, school trips, and anyone interested in Islam.

The list lives in `src/data/services.ts` (About page "Our services" grid, `/about#services`). The home page
"Today at the mosque" cards and the contact page "Visiting times" / enquiry topics reflect the same list.

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
  HH:MM:SS") → zig-zag edge → 3×2 card grid (3 compact columns on phones too — whole section fits one phone screen) with the next prayer filled green and a
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
- Footer: newsletter subscribe form removed (it did nothing); "Follow us" social column later removed too (no real
  links); copyright spacing fixed.
- `next.config.ts`: `allowedDevOrigins` for testing on phones over Wi-Fi.
- Donate: real HSBC account (from the paying-in book) in `src/data/donations.ts`, shown as a single bank-details
  card (`BankDetailsCard.tsx`) with copy buttons + "How to give" steps. No separate Sadaqah/Zakat funds — donors
  can put that in the payment reference. "Registered charity" section uses real Charity Commission data
  (`src/data/charity.ts`, no. 1032058; sources in `CHARITY.md`). The charity is **not recognised by HMRC for Gift Aid** — don't mention Gift Aid.
  "Where your money goes" shows real figures from the filed 2025/26 accounts (`latestAccounts` in `charity.ts`).
  "Set up a regular gift" section removed.

## Still to do before launch
1. **Social links:** the footer "Follow us" column was removed (Oct 2026) because the links were placeholders —
   add it back only with real Facebook/YouTube/Instagram URLs.
2. **Imam:** name is now real — Imam Majid Yasin (imam, director & community representative; Oct 2026). The
   invented bio (ijazah, degree, "over a decade") was removed. Confirm `src/assets/imam.jpg` is actually him,
   and add a fuller bio only if the committee supplies one.
3. **Prayer timetable** needs a 2027 CSV (and PDF in `public/`) before January 2027.
4. Review remaining placeholder content with the mosque committee: About (imam bio; the "Our history" timeline
   was removed Oct 2026 because it was invented and no public history could be found — only the 1994 charity
   registration and use as a COVID-19 vaccination centre in 2021 are verifiable; re-add if the committee
   supplies real dates), Events
   (`src/data/events.ts` — Quran circle, sisters' halaqa, youth club etc. are unconfirmed, and the Jummah event
   says 13:00) and Reverts. Services are now real (see "What the mosque offers").
5. `ThemeProvider.tsx` and `ProjectCard.tsx` are unused — delete if not needed.
6. `tailwind.tokens.js` is stale/unused (still lists the old palette and fonts) — delete or update.
7. Update `latestAccounts` in `src/data/charity.ts` each year once new accounts are filed (usually by August).
