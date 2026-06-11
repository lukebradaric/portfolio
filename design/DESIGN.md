# Portfolio Design System

Dark-mode portfolio for a game developer. Minimal frameworks (plain HTML/CSS/JS),
modern and restrained. Accent: saturated sage green.

Open `styleguide.html` in a browser to see everything below rendered live.

---

## 1. Color Tokens

All colors are CSS custom properties defined on `:root`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0E1113` | Page background |
| `--surface` | `#15191B` | Card / section surfaces |
| `--surface-2` | `#1C2123` | Hovered surfaces, tag backgrounds |
| `--border` | `#272D2F` | Default 1px borders |
| `--border-accent` | `#3C5A45` | Hover / focus borders |
| `--text` | `#E8ECEA` | Primary text |
| `--text-muted` | `#9BA39F` | Descriptions, secondary text |
| `--text-faint` | `#646C68` | Captions, timestamps, footer |
| `--accent` | `#7BC88A` | Links, highlights, tag text, marquee icons |
| `--accent-bright` | `#A4E3B0` | Hover state of accent elements |
| `--accent-dim` | `rgba(123, 200, 138, 0.12)` | Accent-tinted backgrounds (tags, glows) |

Rules of thumb:
- Accent is for *emphasis only* — links, hovers, tags, small highlights. Never large filled areas.
- Surfaces step up in lightness with elevation: `--bg` → `--surface` → `--surface-2`.
- Borders, not shadows, define edges (flat style). Shadows only as a faint accent glow on card hover.

## 2. Typography

Two fonts, loaded from Google Fonts:

- **JetBrains Mono** — headings, tags, nav, labels, the marquee. The "developer voice."
- **Inter** — body text, descriptions. The "reading voice."

| Style | Font | Size / weight | Notes |
|---|---|---|---|
| Hero / h1 | JetBrains Mono | 40px / 700 | Tight letter-spacing (-0.02em) |
| Section heading / h2 | JetBrains Mono | 22px / 600 | Preceded by a `//` in accent color |
| Card title / h3 | JetBrains Mono | 17px / 600 | |
| Body | Inter | 15.5px / 400, line-height 1.65 | `--text-muted` for descriptions |
| Tag / label | JetBrains Mono | 12px / 500 | Uppercase optional; used in tags & nav |
| Caption | Inter | 13px / 400 | `--text-faint` |

Section headings use the `// heading` convention (code-comment style) as the one
playful signature element. Everything else stays quiet.

## 3. Spacing & Layout

- Base unit: **8px**. Spacing values: 8 / 16 / 24 / 32 / 48 / 80.
- Content max-width: **1080px**, centered, 24px side padding on mobile.
- Section vertical rhythm: 80px between major sections.
- Border radius: **6px** cards and buttons (sharper = less "template"), **0** for the marquee strip.
- Project grid: CSS grid, `repeat(auto-fill, minmax(320px, 1fr))`, 24px gap.
  Naturally 3 columns on desktop, 2 on tablet, 1 on phone — no media queries needed.

## 4. Components

### Project Card
The core element. Quiet and editorial — no HUD effects. Structure, top to bottom:

1. **Media** — 16:9 area (`aspect-ratio: 16/9`), `object-fit: cover`. Holds a static
   image or a GIF (GIFs from the old site drop straight in).
2. **Title** — JetBrains Mono, 17px.
3. **Description** — Inter, muted, clamped with `-webkit-line-clamp: 3`.
4. **Status-bar footer** — separated by a 1px top border: tag row on the left,
   `view ▸` prompt on the right. Whole card is the link.

(No index numbers or studio/personal meta line — tried, then cut for noise.)

Hover (200ms ease, gated by reduced-motion): border shifts to `--border-accent`,
faint accent glow, card lifts 2px, media zooms to 1.03, `view ▸` turns accent.

### Tags
Code-token style — no pill backgrounds. JetBrains Mono 12px, lowercase:

- **Tool tag**: rendered as `[unity]` — accent text, faint brackets via
  `::before`/`::after`.
- **Company tag**: rendered as `@studio-name` — muted text, faint `@` prefix.

### Icons
Brand icons come from the **Simple Icons CDN** as plain `<img>` tags — no icon
framework: `https://cdn.simpleicons.org/<slug>/<hex-without-#>` (use `9BA39F`
to match `--text-muted`). Verified slugs: `unity`, `unrealengine`, `cplusplus`,
`git`, `javascript`, `nodedotjs`, `openjdk`, `github`, `itchdotio`, `x`.
Not on the CDN (trademark removals): **C#** (use a styled mono `C#` text glyph)
and **LinkedIn** (hand-write a small inline SVG if needed; email envelope is
inline SVG too). Icon size: 18px in the marquee, 15px in buttons.

### Technologies Section
Static wrapped row (no marquee — a scrolling version was tried and cut).
Items: 18px brand icon + name in JetBrains Mono 14px, `--text-muted`,
flex-wrap with 14px/28px gaps.

### About Section
Two-column on desktop (avatar 120px circle with accent border + text), stacks on
mobile. Heading uses the `// about` style. Body is 2–3 short Inter paragraphs,
followed by a row of link buttons (GitHub, itch.io, Twitter, email) styled as
bordered ghost buttons with a 15px icon, both going accent on hover.

### Buttons / Links
- Inline links: `--accent`, underline on hover, `--accent-bright` on hover.
- Ghost button: 1px `--border`, transparent bg; hover → `--border-accent` border,
  `--accent` text. JetBrains Mono 13px.

## 5. Motion

- Standard transition: `200ms ease` on color, border, transform, shadow.
- Hover lift: `translateY(-2px)` max. Nothing bounces.
- Marquee: 30s linear loop.
- All motion gated behind `@media (prefers-reduced-motion: reduce)`.

## 6. Site Data — Google Sheets (no-redeploy updates)

ALL site content (not just projects) lives in one Google Sheet; the site fetches
it at load. The starting sheet is `sheet-template.csv` at the repo root — import
it into Google Sheets, publish (File → Share → Publish to web → CSV), and paste
the URL into `SHEET_CSV_URL` in `js/main.js`. While that constant is empty, the
site renders identical fallback content baked into `js/main.js`.

**Columns:** `section | key | title | description | icon_or_image | tags | link | order | visible`

**Row types (`section` column):**

| section | what it controls |
|---|---|
| `guide` | ignored by the site — human-readable editing notes at the top of the sheet |
| `config` | single texts, addressed by `key`: `hero_label`, `hero_title`, `hero_description`, `hero_button` (text in `description`, target in `link`), `about_1`, `about_2`, … (any number of about paragraphs), `footer_text` |
| `social` | one button each: `title` = text, `icon_or_image` = icon, `link` = URL. Rendered icon-only in the header and as ghost buttons in About |
| `project` / `jam` | one card each: `icon_or_image` = image/GIF, `tags` = comma list where `@name` becomes a company tag |
| `tech` | one technologies item: `title` + `icon_or_image` |

**Icons (`icon_or_image`):** a Simple Icons slug (https://simpleicons.org),
`linkedin`/`email` (inlined in the site), or `txt:C#` for a text glyph.

**Images/GIFs:** keep them in the site's `media/` folder (`media/name.png`) or
paste any direct image URL. (Google Drive image links are unreliable for
hotlinking; avoid Drive for the media files themselves.)
