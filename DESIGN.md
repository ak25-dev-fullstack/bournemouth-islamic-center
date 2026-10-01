# Design System

> Minimalist · Islamic-inspired · Editorial

---

## Visual Identity

This project's visual language draws from Islamic geometric tradition — precision, symmetry, and negative space. Clean surfaces, sacred geometry as ornament, and purposeful restraint over decoration.

---

## Color Palette

### Primary

| Name       | Hex       | Use                                 |
|------------|-----------|-------------------------------------|
| Ivory      | `#F8F6F0` | Page backgrounds, cards             |
| Ink        | `#1A1916` | Primary text, headings              |
| Warm White | `#FFFFFF` | Component surfaces                  |

### Accent

| Name       | Hex       | Use                                 |
|------------|-----------|-------------------------------------|
| Mosque green | `#0F6E56` | Text accent: links, labels, icons; prayer-times band, footer |
| Mosque deep  | `#0A4F3E` | Link hover, text on surface cards   |
| Gold       | `#C9963A` | Buttons (with Ink text) & decoration only — **never text on light backgrounds** |
| Gold light | `#F3DCA8` | Gold-toned text on dark / green backgrounds |
| Copper     | `#8A5A38` | Badges, secondary accent text       |
| Muted      | `#5A564F` | Secondary text (7.3:1 on white)     |

### Semantic

| Name    | Hex       | Use             |
|---------|-----------|-----------------|
| Success | `#3B6D11` | Confirmations   |
| Warning | `#BA7517` | Alerts          |
| Error   | `#A32D2D` | Destructive      |
| Info    | `#185FA5` | Informational   |

---

## Typography

### Typefaces

```
Heading:  Lora                (serif, sturdy, screen-legible; weight 500)
Body:     Inter               (sans-serif, clean, readable)
Mono:     JetBrains Mono      (code blocks)
```

### Scale

| Token    | Size  | Weight | Line Height | Use                  |
|----------|-------|--------|-------------|----------------------|
The site is designed to be comfortable for elderly visitors. All sizes are in `rem`
so they grow with the visitor's own browser/phone text-size setting.

| Token / class | Size  | Weight | Use                                   |
|---------------|-------|--------|---------------------------------------|
| h1            | clamp(36px → 64px) | 500 | Hero / page headings    |
| h2            | clamp(30px → 36px) | 500 | Section headings        |
| h3            | 20–28px | 500  | Card titles                           |
| `text-sm` / `text-base` | 18px | 400 | Body copy (default)          |
| `text-lg`     | 20px  | 400–600 | Lead text, buttons, nav           |
| `text-xs`     | 16px  | 400–600 | Badges, meta — **the minimum size** |

### Rules

- Headings in sentence case always — never all caps (labels too: no uppercase + letter-spacing)
- Never go below 16px for any text
- Body text maximum line length: 68 characters (approx. 640px)
- No bold mid-sentence; bold is for headings and labels only
- Avoid orphans on hero text — adjust line breaks manually

---

## Spacing

Based on an 8px grid.

```
--space-1:   4px
--space-2:   8px
--space-3:  12px
--space-4:  16px
--space-5:  24px
--space-6:  32px
--space-7:  48px
--space-8:  64px
--space-9:  96px
--space-10: 128px
```

Section padding (vertical): `--space-9` (96px) minimum.
Component internal padding: `--space-4` to `--space-5`.
Grid gutter: `--space-5` (24px).

---

## Layout

### Grid

```
Max content width:  1200px
Columns:            12
Gutter:             24px
Margin (desktop):   64px
Margin (tablet):    32px
Margin (mobile):    20px
```

### Breakpoints

```
mobile:   < 640px
tablet:   640px – 1024px   (header uses the Menu button up to 1024px)
desktop:  ≥ 1024px         (full navigation bar incl. Home link)
```

---

## Components

### Buttons

```
Primary:    bg Gold (#C9963A), text Ink, no border
Secondary:  bg transparent, border 2px, text Ink (or white on dark)
Text link:  Mosque green, semibold, always underlined
Danger:     bg Error (#A32D2D), text white
```

All buttons: `border-radius: 4px`, min-height 48px, `font-size: 20px`, `font-weight: 600`
Hover: opacity 0.88 transition (120ms ease)
No drop shadows on buttons.

### Cards

```
background:    #FFFFFF
border:        1px solid rgba(28, 26, 22, 0.1)
border-radius: 8px
padding:       32px
```

No box-shadow. Use border only.
On hover (interactive cards): border-color transitions to Gold at 0.4 opacity.

### Inputs

```
background:    #FFFFFF
border:        2px solid #5A564F
border-radius: 4px
min-height:    48px
font-size:     20px   (≥16px prevents iOS zoom-on-focus)
```

Focus: border-color Mosque green + soft green ring.
Error: border-color `#A32D2D`.
Placeholder: Stone `#8C8880`.

### Dividers

Use `<hr>` sparingly. Prefer geometric ornament:

```css
/* Thin gold line divider */
border: none;
border-top: 1px solid rgba(201, 150, 58, 0.3);
margin: 48px auto;
width: 120px;
```

---

## Iconography

- Style: outline only, 1.5px stroke weight
- Size: 16px (inline), 20px (UI), 24px (decorative)
- Source: Tabler Icons (outline set)
- Color: inherits from parent — never hardcoded
- Decorative icons: `aria-hidden="true"`
- Interactive icons: always paired with an `aria-label`

---

## Decorative Elements

### Geometric Ornaments

Drawn from Islamic geometric tradition. Use as:
- Section dividers (8-pointed star fragment, thin gold stroke)
- Background watermarks (opacity 3–5%, tiling geometric lattice)
- Loading states (animated geometric unfold)
- Empty states (centered rub el hizb outline)

Rules:
- Ornaments are always one color: Gold at low opacity, or Stone
- Never fill geometric ornaments — outline only
- Max ornament size in a component: 48px × 48px
- Never use ornaments as primary communication — decorative only

### Patterns

For background texture on hero or section blocks:

```
Mashrabiya lattice — opacity: 0.04, color: Ink
8-pointed star tile — opacity: 0.06, color: Gold
```

Keep subtle. If you can clearly see the pattern, reduce opacity.

---

## Motion

Keep animation minimal and purposeful.

```
Duration short:  120ms  (micro-interactions: hover, focus)
Duration medium: 240ms  (transitions: panel open, tooltip)
Duration long:   400ms  (page transitions, modals)

Easing:  ease-out for entrances
         ease-in  for exits
         ease-in-out for transforms
```

- No bounce, spring, or elastic easing
- No decorative animation — motion only when it communicates state change
- All animations wrapped in `@media (prefers-reduced-motion: no-preference)`

---

## Imagery Guidelines

### Photography

- Style: editorial, soft natural light, wide negative space
- Background: white or ivory (#F8F6F0) preferred
- Avoid: busy backgrounds, saturated colors, stock-photo poses
- Consistent color grading across all images: slightly warm, low contrast

### Illustration

- Line art only — thin strokes (1–1.5px), no fills unless geometric ornament
- Colors: Ink or Gold only
- Style references: Islamic geometric, fine line botanical, architectural sketch

### AI-generated images (Adobe Firefly)

Append to every prompt for consistency:
```
soft diffused studio lighting, pure white background, wide negative space,
minimalist, editorial, high resolution
```

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Gold `#C9963A` on White `#FFFFFF` = 2.7:1 — **decoration and button backgrounds only, never text**
- Mosque green on white 6.2:1 · Muted on white 7.3:1 · Gold light on green 4.6:1
- Gold on Ink `#1A1916` = passes AAA
- All interactive elements: visible focus state (3px Gold outline, 3px offset)
- Links are underlined, not distinguished by colour alone
- Never convey information through color alone — pair with label or icon
- Touch targets: minimum 44 × 44px

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use negative space generously | Fill every corner with content |
| Let geometric ornaments breathe | Overlay text on ornaments |
| Keep Gold accent rare and intentional | Use Gold as a background |
| Sentence case for all text | Use ALL CAPS or Title Case |
| One typeface weight per hierarchy level | Mix weights freely |
| Thin borders over drop shadows | Box shadows on cards |
| Editorial white space on mobile | Reduce spacing on mobile to fit more |

---

## File & Asset Naming

```
Icons:        icon-[name].svg         e.g. icon-search.svg
Illustrations: illustration-[name].svg
Photos:       photo-[subject]-[id].jpg
Patterns:     pattern-[name].svg
Components:   [ComponentName].tsx
```

---

*Last updated: October 2026*
