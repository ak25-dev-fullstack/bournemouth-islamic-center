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
| Gold       | `#C9963A` | Highlights, icons, decorative lines |
| Copper     | `#A0714F` | Hover states, secondary accent      |
| Stone      | `#8C8880` | Muted text, borders, dividers       |

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
Heading:  Cormorant Garamond  (serif, elegant, classical weight)
Body:     Inter               (sans-serif, clean, readable)
Mono:     JetBrains Mono      (code blocks)
```

### Scale

| Token    | Size  | Weight | Line Height | Use                  |
|----------|-------|--------|-------------|----------------------|
| `--h1`   | 48px  | 400    | 1.15        | Hero headings        |
| `--h2`   | 36px  | 400    | 1.2         | Section headings     |
| `--h3`   | 24px  | 500    | 1.3         | Card titles          |
| `--h4`   | 18px  | 500    | 1.4         | Sub-headings         |
| `--body` | 16px  | 400    | 1.7         | Body copy            |
| `--sm`   | 14px  | 400    | 1.6         | Captions, meta       |
| `--xs`   | 12px  | 400    | 1.5         | Labels, fine print   |

### Rules

- Headings in sentence case always — never all caps
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
tablet:   640px – 1024px
desktop:  > 1024px
```

---

## Components

### Buttons

```
Primary:    bg Gold (#C9963A), text Ink, no border
Secondary:  bg transparent, border 1px Stone, text Ink
Ghost:      bg transparent, no border, text Gold
Danger:     bg Error (#A32D2D), text white
```

All buttons: `border-radius: 4px`, `padding: 10px 24px`, `font-size: 14px`, `font-weight: 500`
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
border:        1px solid #8C8880
border-radius: 4px
padding:       10px 14px
font-size:     16px
```

Focus: border-color Gold, no glow/ring.
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
- Gold `#C9963A` on White `#FFFFFF` = 2.8:1 — **use only for decorative elements or large text (18px+)**
- Gold on Ink `#1A1916` = passes AAA
- All interactive elements: visible focus state (Gold border outline, 2px offset)
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

*Last updated: June 2026*
