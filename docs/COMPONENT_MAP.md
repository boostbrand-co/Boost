# COMPONENT MAP

## Primitives · `components/ui/primitives.tsx`
| Component | Purpose |
|---|---|
| `Container` | Max width and responsive padding |
| `Section` | Section wrapper, `tone="dark" | "deep" | "cream"` |
| `SectionHeader` | Eyebrow, number, title, lead |
| `Eyebrow` | Orange mono label with optional number |
| `Button` | `primary | outline | ghost | cream` |
| `Rule` | Themed horizontal rule |
| `MetricBlock` | Value, label, and a visible source line |
| `DemoBadge` | Demonstration-data chip |
| `PlaceholderNote` | Orange-bordered awaiting-content block |
| `Breadcrumbs` | Trail with Home prepended |
| `PageHero` | Standard page opening with meta strip |
| `FAQ` | Accessible details/summary accordion |
| `CTABlock` | Closing conversion block |
| `RelatedGrid` | Bordered related-links grid |

## System artifacts · `components/system/`
| Component | What it shows |
|---|---|
| `ScenarioDemo` | Signal to diagnosis to decision to result to learning, across three scenarios. Tabs change the evidence, not the label |
| `LoopDiagram` | The six-phase operating loop with artifact, owner and client visibility per phase |
| `ArtifactFrame` | Interface frame with label, demo badge and caption |
| `CreativeTestTable` | Concept, CPA, decision, reason |
| `ReportArtifact` | The six-question monthly report plus the misses section |
| `MemoryTable` | Creative Memory running record |
| `OwnershipTable` | What the client owns, from day one |
| `CapabilityMap` | Client, BOOST and shared responsibility split |
| `AISplitPanel` | What AI does, what humans own, and the review rule |
| `Checklist` | Interactive ownership checklist with live count |

## Navigation and cards
| Component | Notes |
|---|---|
| `Header` | Mega menu on desktop, disclosure nav on mobile, escape to close, no setState-in-effect |
| `Footer` | Four-column sitemap footer plus legal and AI pages |
| `CaseCard` | Client, summary, two metrics, filters, decision link |
| `TeamCard` | Role first, then what they own and what you work with them on |
| `SituationCard` | Number, title, line, three signals |

## Page-local components
| File | Purpose |
|---|---|
| `app/work/work-index.tsx` | Client-side filtering over server-rendered cases |
| `app/insights/insights-index.tsx` | Category filtering and lead-article treatment |
| `app/build-my-growth-plan/growth-plan-form.tsx` | Four-step qualification flow |
