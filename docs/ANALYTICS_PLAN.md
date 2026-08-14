# ANALYTICS PLAN

No tracking is installed. No IDs were provided and none were invented.

## Wiring
Add to `.env.local`:
```
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=
```
Install GTM through `app/layout.tsx` using `next/script` with `strategy="afterInteractive"`, and gate
it on the env var so local and preview builds stay clean. Route everything else through GTM rather
than adding separate snippets.

## Events to track
| Event | Fires when | Why it matters |
|---|---|---|
| `form_start` | First interaction on the growth-plan form | Already stubbed in `growth-plan-form.tsx` |
| `step_complete` | Each step advances, with step number | Shows exactly where qualification loses people |
| `form_submit` | Step 4 reached | Primary conversion |
| `calendar_open` | Scheduling widget loads | Separates form completion from booking |
| `email_click` | Any mailto click | Captures buyers who refuse forms, which the research shows is a real segment |
| `case_study_view` | Case study page view, with slug | Which proof actually gets read |
| `case_filter_used` | Filter toggled, with group and value | Reveals which goal, market and industry buyers self-select |
| `artifact_expand` | Report question or FAQ opened | Measures whether the show-the-work strategy is being consumed |
| `pricing_view` | Engagements page scrolled to an investment block | Price sensitivity signal once real numbers exist |
| `checklist_progress` | Ownership checklist items ticked | Intent signal on the replacing-an-agency page |
| `insight_read` | 75% scroll on an article | Content effectiveness |

## Conversions to configure in GA4
Primary: `form_submit`, `calendar_open`. Secondary: `email_click`, `checklist_progress`.

## What not to do
Do not add a cookie banner until tracking actually exists, and do not add tracking before the privacy
policy is completed by counsel. The site currently sets no cookies, which is why there is no banner.


## Growth plan diagnostic events, added 2026-08-14

`/build-my-growth-plan` pushes named events to `window.dataLayer`. No tag is installed by the site
itself. If no container is loaded, the pushes go nowhere and nothing leaves the browser.

| Event | Fires when | Payload |
|---|---|---|
| `growth_plan_start` | First interaction of any kind, once per session | none |
| `growth_plan_need_selected` | A card is chosen in step 1 | `need` |
| `growth_plan_context_answer` | Any of the four step 2 answers is chosen | `question`, `answer` |
| `growth_plan_step_complete` | Continue is pressed on any step | `from_step`, `from`, `to_step` |
| `growth_plan_complete` | Step 4 is submitted and the summary renders | `need`, `team`, `agency`, `investment`, `timeline` |
| `growth_plan_abandon` | Page hidden or closed after starting and before completing | `last_step`, `last_step_name` |
| `growth_plan_calendar_click` | The booking link is opened | `need` |
| `growth_plan_whatsapp_click` | The WhatsApp handoff is opened | `need` |
| `growth_plan_email_click` | The email handoff is opened | `need` |
| `growth_plan_restart` | Start again is pressed on the summary | none |

No name, email, website or free text is ever put into an event payload. Only the categorical answers
are sent, so the funnel can be read without shipping a lead into an analytics tool.

The number worth watching is the gap between `growth_plan_complete` and the three handoff clicks. If
people reach their summary and do not act on it, the recommendation is not landing and the routing
rule is the thing to change.
