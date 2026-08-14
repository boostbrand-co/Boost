# QA CHECKLIST

## Automated, run against this build
| Check | Result |
|---|---|
| TypeScript strict typecheck | Pass, zero errors |
| ESLint (next/core-web-vitals + TS) | Pass, zero errors, zero warnings |
| Production build | Pass, 54 routes compiled |
| Static prerender | 49 public routes as HTML, plus 404 and error pages |
| Internal link crawl over built HTML | 49 distinct targets, zero broken links |
| Orphan route check | None except the framework error boundary |
| Em dashes in shipped output | 0 |
| Banned vocabulary (unlock, elevate, revolutionize, seamless, cutting-edge, holistic, innovative solutions) | 0 |
| Demonstration data labelled | 11 badges, every illustrative artifact covered |
| Pricing placeholders | 36 instances of `[INVESTMENT RANGE TO CONFIRM]`, zero invented prices |
| Client metric source attribution | 112 rendered source lines |
| LEGAL REVIEW REQUIRED notices | 4 |
| One H1 per page | Verified across sampled pages |
| Titles and meta descriptions | Present on every route |

## Manual, done during the build
- Heading order checked per template, no skipped levels
- All interactive controls are real buttons, links, inputs or details elements
- `aria-expanded` on the header menu, the FAQ, the report accordion; `aria-selected` on scenario tabs;
  `aria-current` on breadcrumbs and the form step indicator; `aria-live` on filter counts and the
  checklist progress
- Skip-to-content link as the first focusable element
- Focus-visible outline in orange at 2px with 3px offset, never removed
- `prefers-reduced-motion` disables the scenario reveal, all transitions and smooth scrolling
- Every table wrapped in an overflow container with a min-width, so nothing clips on mobile
- Decorative marks carry `aria-hidden`, meaningful state has an `sr-only` label
- Contrast: cream on ink-900 is roughly 15:1, orange-500 on ink-900 roughly 5.6:1, orange-600 on
  cream-100 roughly 4.6:1, all at or above WCAG AA for their sizes

## Still to verify before launch
- [ ] Real-device testing on iOS Safari and Android Chrome, especially the mega menu and the tables
- [ ] Lighthouse and Core Web Vitals against the deployed URL rather than a local build
- [ ] Screen reader pass with VoiceOver and NVDA on the form and the scenario demo
- [ ] Keyboard-only pass through the full booking flow
- [ ] Open Graph rendering, once images exist
- [ ] 404 behaviour on the live host
- [ ] Analytics events firing, once IDs exist
- [ ] Legal sign-off, then remove the noindex flags from privacy and terms
