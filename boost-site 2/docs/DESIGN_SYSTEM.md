# DESIGN SYSTEM

Defined in `app/globals.css` as Tailwind v4 `@theme` tokens. No config file needed.

## Colour
| Token | Hex | Use |
|---|---|---|
| `ink-900` | #0B0B0C | Primary canvas |
| `ink-800` | #121315 | Section alternate, artifact panels |
| `ink-700` | #17181B | Nested panels |
| `ink-600` `ink-500` `ink-400` | #1E2024 #2A2D32 #3A3E45 | Depth steps |
| `cream-50` | #FCFAF6 | Light hover |
| `cream-100` | #F6F2EA | Light sections, body text on dark |
| `cream-200` `cream-300` | #EDE7DB #DED6C6 | Light borders |
| `orange-500` | #FF5C1A | The accent. Eyebrows, active states, key numbers, primary CTA |
| `orange-600` | #E44B0C | Orange on cream backgrounds (contrast) |
| `orange-700` `orange-100` | #C13D06 #FFE9DF | Pressed, tint |
| `signal-green` | #3FA46A | Positive state in artifacts |
| `signal-red` | #D2452F | Negative state, misses |
| `signal-amber` | #C98A16 | Caution |

Rule: orange is an accent, never a wash. Tints stop at 10% opacity. On cream sections use
`orange-600` for text so contrast holds.

## Typography
- Sans: Inter Variable, self-hosted via `@fontsource-variable/inter`
- Mono: JetBrains Mono Variable, self-hosted, used only for metadata labels and figures
- `.u-display` for large headings: -0.03em tracking, 0.98 line-height, weight 500
- `.u-meta` for small uppercase mono labels: 11px, 0.14em tracking
- Numbers always `tabular-nums`

Scale: hero 2.75rem to 4.5rem, section heads 2.25rem to 3.75rem, body 1rem to 1.25rem.

## Structure
- Container: `max-w-[88rem]`, padding 1.25rem to 3rem
- Section rhythm: `py-20 sm:py-28 lg:py-32`
- Borders: `border-white/10` and `/12` on dark, `border-ink-900/15` on cream. The `.u-rule` class
  handles this automatically and flips inside `.on-cream`
- Radius: 0 everywhere except status dots. No shadows. No gradients.
- Grid: 12 column on large screens, editorial rather than card-based

## Motion
- One keyframe: `anim-in`, a 520ms fade and 10px rise
- The scenario demo reveals steps at 620ms intervals
- Everything collapses under `prefers-reduced-motion`, including the demo, which reveals instantly
- No parallax, no scroll-jacking, no 3D

## Components
See `COMPONENT_MAP.md`.

## Design principle
Claim, then mechanism, then demonstration. If a component does not help a visitor understand,
evaluate, trust, compare or act, it does not ship. Artifacts render inside `ArtifactFrame`, which
carries a demonstration-data badge so illustrative numbers can never be mistaken for client results.
