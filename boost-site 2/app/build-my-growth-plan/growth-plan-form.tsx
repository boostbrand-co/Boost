"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { engagements, type Engagement } from "@/data/engagements";
import { site } from "@/data/site";

/* ------------------------------------------------------------------ *
 * ANALYTICS
 *
 * No tracking IDs are installed anywhere in this project. `track` pushes a
 * named event onto window.dataLayer if a tag manager has been loaded by the
 * host, and does nothing at all otherwise. Event names are documented in
 * /docs/ANALYTICS_PLAN.md. Nothing here sends data to a third party on its own.
 * ------------------------------------------------------------------ */

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackPayload[];
  }
}

function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

/* ------------------------------------------------------------------ *
 * DESTINATIONS
 *
 * Both are environment variables with documented placeholders. Until a real
 * scheduling link and a real WhatsApp number are supplied, the interface says
 * so in plain language rather than linking somewhere that does not exist.
 * See /docs/MISSING_CONTENT.md.
 * ------------------------------------------------------------------ */

const CALENDAR_URL = process.env.NEXT_PUBLIC_BOOST_CALENDAR_URL || "";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_BOOST_WHATSAPP || "";

/* ------------------------------------------------------------------ *
 * STEP 1: NINE NEEDS
 * ------------------------------------------------------------------ */

type NeedId =
  | "replacing-agency"
  | "plateau"
  | "launch"
  | "paid-media"
  | "creative-volume"
  | "reporting"
  | "website"
  | "cross-border"
  | "unknown";

type Need = {
  id: NeedId;
  number: string;
  label: string;
  line: string;
};

const needs: Need[] = [
  {
    id: "replacing-agency",
    number: "01",
    label: "We are replacing an agency",
    line: "The relationship is ending or already has, and you want the next one to go differently.",
  },
  {
    id: "plateau",
    number: "02",
    label: "Growth has flattened",
    line: "The same spend stopped producing the same result and nobody can say exactly when it changed.",
  },
  {
    id: "launch",
    number: "03",
    label: "We are launching or repositioning",
    line: "There is a date attached, and the work has to be sequenced backwards from it.",
  },
  {
    id: "paid-media",
    number: "04",
    label: "Paid media is not producing",
    line: "The accounts are running. What they are returning is either unclear or getting worse.",
  },
  {
    id: "creative-volume",
    number: "05",
    label: "We need creative we can actually test",
    line: "Not more assets. Enough variation, made against a hypothesis, to learn something.",
  },
  {
    id: "reporting",
    number: "06",
    label: "The reporting does not tell us anything",
    line: "Dashboards arrive, numbers move, and no decision follows from either.",
  },
  {
    id: "website",
    number: "07",
    label: "The site is not converting the traffic",
    line: "The media is doing its job and something between the click and the sale is not.",
  },
  {
    id: "cross-border",
    number: "08",
    label: "We are growing across the US and Mexico",
    line: "One market works, the other does not, and translated campaigns are not closing the gap.",
  },
  {
    id: "unknown",
    number: "09",
    label: "We are not sure what the problem is",
    line: "Something is wrong with the numbers and the honest answer is that the cause is not obvious.",
  },
];

/* ------------------------------------------------------------------ *
 * STEP 2: FOUR CONTEXT QUESTIONS
 * ------------------------------------------------------------------ */

type OptionSet = {
  id: "team" | "agency" | "investment" | "timeline";
  question: string;
  help: string;
  options: { value: string; label: string }[];
};

const contextQuestions: OptionSet[] = [
  {
    id: "team",
    question: "Who does marketing today",
    help: "This decides whether we are adding depth to your team or running the function.",
    options: [
      { value: "founder-led", label: "The founder or owner, alongside everything else" },
      { value: "one-person", label: "One person internally" },
      { value: "in-house-team", label: "An in-house marketing team" },
      { value: "agency-only", label: "An external agency or freelancers" },
      { value: "nobody", label: "Nobody consistently" },
    ],
  },
  {
    id: "agency",
    question: "Where things stand with your current agency",
    help: "Timing changes what is worth doing first, particularly around account access.",
    options: [
      { value: "none", label: "We do not have one" },
      { value: "current-staying", label: "We have one and intend to keep them" },
      { value: "current-reviewing", label: "We have one and are reviewing the relationship" },
      { value: "leaving", label: "We are leaving one, or already have" },
      { value: "several-failed", label: "We have been through several and none worked" },
    ],
  },
  {
    id: "investment",
    question: "Roughly what goes into marketing each month",
    help: "Media plus fees, at whatever level of precision you have. This is about whether testing can produce a signal, not about qualifying you.",
    options: [
      { value: "under-5k", label: "Under 5,000 USD" },
      { value: "5-15k", label: "5,000 to 15,000 USD" },
      { value: "15-50k", label: "15,000 to 50,000 USD" },
      { value: "over-50k", label: "Over 50,000 USD" },
      { value: "undecided", label: "Not decided yet" },
    ],
  },
  {
    id: "timeline",
    question: "When you want this to change",
    help: "A real date is more useful here than an ambitious one.",
    options: [
      { value: "now", label: "Now, something is actively broken" },
      { value: "30-days", label: "Within 30 days" },
      { value: "quarter", label: "This quarter" },
      { value: "exploring", label: "Exploring, no date attached" },
    ],
  },
];

const labelFor = (id: OptionSet["id"], value: string) =>
  contextQuestions.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label || "";

/* ------------------------------------------------------------------ *
 * ROUTING
 *
 * A rule, not a diagnosis. It reads four answers and points at one of the four
 * engagements that actually exist. It never invents an engagement, never prices
 * anything, and never claims to have analysed the business.
 * ------------------------------------------------------------------ */

type Answers = {
  need: NeedId | "";
  team: string;
  agency: string;
  investment: string;
  timeline: string;
  change: string;
  name: string;
  email: string;
  website: string;
};

const emptyAnswers: Answers = {
  need: "",
  team: "",
  agency: "",
  investment: "",
  timeline: "",
  change: "",
  name: "",
  email: "",
  website: "",
};

type Recommendation = {
  engagement: Engagement;
  because: string;
};

function recommend(a: Answers): Recommendation | null {
  const get = (slug: string) => engagements.find((e) => e.slug === slug);
  const secondOpinion = get("second-opinion");
  const core = get("core-partnership");
  const capacity = get("variable-capacity");
  const sprint = get("launch-sprint");
  if (!secondOpinion || !core || !capacity || !sprint) return null;

  // Diagnostic first when the constraint is not yet named, when the last
  // relationship failed, or when the budget decision has not been made.
  if (a.need === "unknown" || a.need === "reporting") {
    return {
      engagement: secondOpinion,
      because:
        "You described the problem as unclear rather than as a specific channel failing. Paying for execution before the constraint is named is how the last budget got spent.",
    };
  }
  if (a.agency === "several-failed") {
    return {
      engagement: secondOpinion,
      because:
        "More than one agency has already been tried here. A fixed-scope read of what actually went wrong is worth more than a fourth attempt at the same brief.",
    };
  }
  if (a.investment === "undecided" || a.investment === "under-5k") {
    return {
      engagement: secondOpinion,
      because:
        "The budget decision has not been made yet. A fixed-fee diagnosis gives you something to take to that decision, and it tells you if the answer is that the spend is not ready to produce a signal.",
    };
  }
  if (a.need === "launch" || (a.need === "cross-border" && (a.timeline === "now" || a.timeline === "30-days"))) {
    return {
      engagement: sprint,
      because:
        "There is a date attached to this. Work with a date runs backwards from it, which is a different shape of engagement from an ongoing one.",
    };
  }
  if (a.team === "in-house-team" && (a.need === "creative-volume" || a.need === "website" || a.need === "paid-media")) {
    return {
      engagement: capacity,
      because:
        "You already have a team that owns the strategy. What is missing is depth in one discipline, and that does not need a full partnership wrapped around it.",
    };
  }
  if (a.need === "replacing-agency" && a.agency === "leaving") {
    return {
      engagement: secondOpinion,
      because:
        "You are mid-handover. Some of what needs securing is easier to get while the previous relationship is still live, and that is the first thing this looks at.",
    };
  }
  return {
    engagement: core,
    because:
      "Strategy, creative and media all sit inside the problem you described. Buying them separately is what usually produces the version of this you are trying to fix.",
  };
}

function situationLine(a: Answers): string {
  const agency = labelFor("agency", a.agency);
  const timeline = labelFor("timeline", a.timeline);
  if (!agency && !timeline) return "Not stated";
  return [agency, timeline].filter(Boolean).join(". ");
}

/* ------------------------------------------------------------------ *
 * UI PIECES
 * ------------------------------------------------------------------ */

const STEPS = ["Need", "Context", "In your words", "Contact", "Your plan"];

function Progress({ step }: { step: number }) {
  return (
    <div className="border-b border-white/12 pb-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {STEPS.map((s, i) => {
          const state = i < step ? "done" : i === step ? "current" : "todo";
          return (
            <span key={s} className="flex items-center gap-2.5">
              <span
                aria-hidden
                className={`u-meta tabular-nums ${
                  state === "current" ? "text-orange-500" : state === "done" ? "opacity-55" : "opacity-25"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`u-meta ${
                  state === "current" ? "" : state === "done" ? "opacity-55" : "opacity-25"
                }`}
              >
                {s}
              </span>
            </span>
          );
        })}
      </div>
      <div aria-hidden className="mt-5 h-px w-full bg-white/12">
        <div
          className="h-px bg-orange-500 transition-[width] duration-500"
          style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        Step {step + 1} of {STEPS.length}. {STEPS[step]}.
      </p>
    </div>
  );
}

function StepHead({ number, title, help }: { number: string; title: string; help: string }) {
  return (
    <div className="max-w-2xl">
      <p className="u-meta text-orange-500">Step {number}</p>
      <h3 className="u-display mt-4 text-3xl sm:text-4xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed opacity-65 sm:text-base">{help}</p>
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  nextLabel,
  nextDisabled,
  hint,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel: string;
  nextDisabled?: boolean;
  hint?: string;
}) {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/12 pt-8">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="u-meta border border-white/20 px-5 py-3 transition-colors hover:border-white/45"
        >
          Back
        </button>
      ) : null}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="u-meta bg-orange-500 px-6 py-3 text-ink-900 transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-white/12 disabled:text-white/35"
      >
        {nextLabel}
      </button>
      {hint ? <span className="text-xs opacity-45">{hint}</span> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * THE FORM
 * ------------------------------------------------------------------ */

export function GrowthPlanForm() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(emptyAnswers);
  const started = useRef(false);
  const completed = useRef(false);
  const reached = useRef(0);

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((prev) => ({ ...prev, [k]: v }));

  const begin = useCallback(() => {
    if (started.current) return;
    started.current = true;
    track("growth_plan_start");
  }, []);

  const go = useCallback(
    (next: number, fromLabel: string) => {
      begin();
      track("growth_plan_step_complete", { from_step: step + 1, from: fromLabel, to_step: next + 1 });
      reached.current = Math.max(reached.current, next);
      setStep(next);
    },
    [begin, step],
  );

  // Abandonment: fires once if the flow was started, never completed, and the
  // page is being closed or backgrounded.
  useEffect(() => {
    const onLeave = () => {
      if (!started.current || completed.current) return;
      completed.current = true;
      track("growth_plan_abandon", { last_step: reached.current + 1, last_step_name: STEPS[reached.current] });
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") onLeave();
    };
    window.addEventListener("pagehide", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const rec = useMemo(() => (step === 4 ? recommend(a) : null), [step, a]);

  const selectedNeed = needs.find((n) => n.id === a.need);
  const emailLooksValid = /.+@.+\..+/.test(a.email.trim());
  const contextComplete = Boolean(a.team && a.agency && a.investment && a.timeline);

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hi BOOST, I completed the growth plan questions on your site.",
      "",
      `Primary need: ${selectedNeed?.label || "Not stated"}`,
      `Who does marketing today: ${labelFor("team", a.team) || "Not stated"}`,
      `Current agency: ${labelFor("agency", a.agency) || "Not stated"}`,
      `Monthly investment: ${labelFor("investment", a.investment) || "Not stated"}`,
      `Timeline: ${labelFor("timeline", a.timeline) || "Not stated"}`,
      "",
      `What I want to change: ${a.change.trim() || "Not stated"}`,
      "",
      `Name: ${a.name || "Not stated"}`,
      `Email: ${a.email || "Not stated"}`,
      `Website: ${a.website || "Not stated"}`,
      rec ? `Suggested starting point: ${rec.engagement.name}` : "",
    ].filter((l) => l !== undefined);
    return lines.join("\n");
  }, [a, rec, selectedNeed]);

  const emailSubject = `Growth plan: ${selectedNeed?.label || "Enquiry"}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
    whatsappMessage,
  )}`;
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
    : "";

  return (
    <div className="border border-white/12 bg-ink-800">
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <Progress step={step} />

        <div className="mt-10 anim-in">
          {/* ---------------- STEP 1 ---------------- */}
          {step === 0 ? (
            <>
              <StepHead
                number="01"
                title="What brought you here."
                help="Pick the one that is closest. You will get a box to describe it properly in your own words two steps from now."
              />
              <div className="mt-10 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
                {needs.map((n) => {
                  const active = a.need === n.id;
                  return (
                    <button
                      key={n.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        begin();
                        set("need", n.id);
                        track("growth_plan_need_selected", { need: n.id });
                      }}
                      className={`flex flex-col p-6 text-left transition-colors ${
                        active ? "bg-orange-500 text-ink-900" : "bg-ink-800 hover:bg-ink-700"
                      }`}
                    >
                      <span className={`u-meta tabular-nums ${active ? "opacity-60" : "text-orange-500"}`}>
                        {n.number}
                      </span>
                      <span className="mt-4 text-lg leading-snug">{n.label}</span>
                      <span className={`mt-3 text-sm leading-relaxed ${active ? "opacity-75" : "opacity-60"}`}>
                        {n.line}
                      </span>
                    </button>
                  );
                })}
              </div>
              <NavRow
                onNext={() => go(1, "need")}
                nextLabel="Continue"
                nextDisabled={!a.need}
                hint={a.need ? undefined : "Pick one to continue"}
              />
            </>
          ) : null}

          {/* ---------------- STEP 2 ---------------- */}
          {step === 1 ? (
            <>
              <StepHead
                number="02"
                title="Four things that change the answer."
                help="These four decide which starting point makes sense. Nothing here is scored and nothing triggers a sales sequence."
              />
              <div className="mt-10 space-y-10">
                {contextQuestions.map((q) => (
                  <fieldset key={q.id}>
                    <legend className="text-lg leading-snug">{q.question}</legend>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed opacity-55">{q.help}</p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {q.options.map((o) => {
                        const active = a[q.id] === o.value;
                        return (
                          <button
                            key={o.value}
                            type="button"
                            aria-pressed={active}
                            onClick={() => {
                              begin();
                              set(q.id, o.value);
                              track("growth_plan_context_answer", { question: q.id, answer: o.value });
                            }}
                            className={`border px-4 py-2.5 text-sm transition-colors ${
                              active
                                ? "border-orange-500 bg-orange-500 text-ink-900"
                                : "border-white/20 hover:border-white/45"
                            }`}
                          >
                            {o.label}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </div>
              <NavRow
                onBack={() => setStep(0)}
                onNext={() => go(2, "context")}
                nextLabel="Continue"
                nextDisabled={!contextComplete}
                hint={contextComplete ? undefined : "All four, then continue"}
              />
            </>
          ) : null}

          {/* ---------------- STEP 3 ---------------- */}
          {step === 2 ? (
            <>
              <StepHead
                number="03"
                title="What are you trying to change?"
                help="Tell us what is working, what is not, or what you want marketing to do next."
              />
              <div className="mt-10 max-w-3xl">
                <label htmlFor="gp-change" className="sr-only">
                  What are you trying to change
                </label>
                <textarea
                  id="gp-change"
                  rows={8}
                  value={a.change}
                  onChange={(e) => {
                    begin();
                    set("change", e.target.value);
                  }}
                  placeholder="Plain language is better than a brief. Whatever you would say out loud if we were already on the call."
                  className="w-full border border-white/20 bg-ink-900 p-5 text-base leading-relaxed outline-none transition-colors placeholder:opacity-35 focus:border-orange-500"
                />
                <p className="mt-4 text-xs leading-relaxed opacity-45">
                  This is the part a strategist reads first. It matters more than any of the buttons.
                </p>
              </div>
              <NavRow
                onBack={() => setStep(1)}
                onNext={() => go(3, "change")}
                nextLabel="Continue"
                nextDisabled={a.change.trim().length < 10}
                hint={a.change.trim().length < 10 ? "A sentence is enough" : undefined}
              />
            </>
          ) : null}

          {/* ---------------- STEP 4 ---------------- */}
          {step === 3 ? (
            <>
              <StepHead
                number="04"
                title="Where to send this."
                help="Three fields. No phone number, because a form is not the right place to hand one over."
              />
              <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
                {[
                  { id: "name" as const, label: "Name", type: "text", ph: "First and last", required: true },
                  { id: "email" as const, label: "Work email", type: "email", ph: "you@company.com", required: true },
                  { id: "website" as const, label: "Website", type: "text", ph: "company.com", required: false },
                ].map((f) => (
                  <div key={f.id} className={f.id === "website" ? "sm:col-span-2" : ""}>
                    <label htmlFor={`gp-${f.id}`} className="u-meta opacity-55">
                      {f.label}
                      {f.required ? "" : " (optional)"}
                    </label>
                    <input
                      id={`gp-${f.id}`}
                      type={f.type}
                      value={a[f.id]}
                      autoComplete={f.id === "email" ? "email" : f.id === "name" ? "name" : "url"}
                      onChange={(e) => {
                        begin();
                        set(f.id, e.target.value);
                      }}
                      placeholder={f.ph}
                      className="mt-3 w-full border border-white/20 bg-ink-900 px-4 py-3.5 text-base outline-none transition-colors placeholder:opacity-35 focus:border-orange-500"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-xs leading-relaxed opacity-45">
                Nothing you enter is sold, shared or added to a list you did not ask for. What happens to it is written
                out on the privacy page.
              </p>
              <NavRow
                onBack={() => setStep(2)}
                onNext={() => {
                  completed.current = true;
                  track("growth_plan_complete", {
                    need: a.need,
                    team: a.team,
                    agency: a.agency,
                    investment: a.investment,
                    timeline: a.timeline,
                  });
                  go(4, "contact");
                }}
                nextLabel="See my starting point"
                nextDisabled={!a.name.trim() || !emailLooksValid}
                hint={!a.name.trim() || !emailLooksValid ? "Name and a valid email" : undefined}
              />
            </>
          ) : null}

          {/* ---------------- STEP 5 ---------------- */}
          {step === 4 ? (
            <>
              <StepHead
                number="05"
                title="Here is what you told us."
                help="Read it back before you book anything. If a line is wrong, go back and change it, because this is what a strategist sees."
              />

              {/* SUMMARY */}
              <div className="mt-10 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
                <div className="bg-ink-900 p-6 sm:p-7">
                  <p className="u-meta opacity-40">Current situation</p>
                  <p className="mt-3 text-base leading-relaxed">{situationLine(a)}</p>
                </div>
                <div className="bg-ink-900 p-6 sm:p-7">
                  <p className="u-meta opacity-40">Primary need</p>
                  <p className="mt-3 text-base leading-relaxed">{selectedNeed?.label || "Not stated"}</p>
                </div>
                <div className="bg-ink-900 p-6 sm:p-7">
                  <p className="u-meta opacity-40">Team model</p>
                  <p className="mt-3 text-base leading-relaxed">{labelFor("team", a.team) || "Not stated"}</p>
                  <p className="mt-2 text-sm opacity-55">
                    {labelFor("investment", a.investment) || "Investment not stated"}
                  </p>
                </div>
                <div className="bg-ink-900 p-6 sm:p-7">
                  <p className="u-meta opacity-40">In your words</p>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{a.change.trim() || "Not stated"}</p>
                </div>
              </div>

              {/* RECOMMENDATION */}
              {rec ? (
                <div className="mt-8 border border-orange-500/40 bg-ink-900">
                  <div className="border-b border-orange-500/25 px-6 py-5 sm:px-7">
                    <p className="u-meta text-orange-500">Recommended BOOST starting point</p>
                  </div>
                  <div className="grid gap-8 p-6 sm:p-7 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="u-meta tabular-nums opacity-40">{rec.engagement.number}</p>
                      <h4 className="u-display mt-3 text-3xl">{rec.engagement.name}</h4>
                      <p className="mt-3 text-sm leading-relaxed opacity-70">{rec.engagement.line}</p>
                      <a
                        href={`/engagements#${rec.engagement.slug}`}
                        className="u-meta mt-6 inline-block text-orange-500 underline underline-offset-4"
                      >
                        What this engagement includes
                      </a>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="u-meta opacity-40">Why this one</p>
                      <p className="mt-3 text-sm leading-relaxed opacity-80">{rec.because}</p>
                      <p className="u-meta mt-7 opacity-40">Commitment</p>
                      <p className="mt-3 text-sm leading-relaxed opacity-80">{rec.engagement.commitment}</p>
                    </div>
                  </div>
                  <div className="border-t border-orange-500/25 px-6 py-5 sm:px-7">
                    <p className="text-xs leading-relaxed opacity-55">
                      This is a routing rule, not a diagnosis. It reads four of your answers and points at one of the
                      four engagements that exist. It has not analysed your business, it has not seen your accounts, and
                      it can be wrong. The actual diagnosis happens on the call, by a person, using your numbers.
                    </p>
                  </div>
                </div>
              ) : null}

              {/* HANDOFF */}
              <div className="mt-10 border-t border-white/12 pt-10">
                <h4 className="u-display text-2xl sm:text-3xl">Three ways to carry this forward.</h4>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-65">
                  All three reach the same people and carry the same answers. Pick whichever you would actually use.
                </p>

                <div className="mt-8 grid gap-px border border-white/12 bg-white/12 lg:grid-cols-3">
                  {/* CALENDAR */}
                  <div className="flex flex-col bg-ink-900 p-6 sm:p-7">
                    <p className="u-meta text-orange-500">01 Book the call</p>
                    <p className="mt-4 text-sm leading-relaxed opacity-70">
                      Thirty minutes on your numbers and the most likely constraint. You are told who is on the call
                      before it happens.
                    </p>
                    <div className="mt-auto pt-7">
                      {CALENDAR_URL ? (
                        <a
                          href={CALENDAR_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track("growth_plan_calendar_click", { need: a.need })}
                          className="u-meta inline-block bg-orange-500 px-5 py-3 text-ink-900 transition-colors hover:bg-orange-600"
                        >
                          Open the calendar
                        </a>
                      ) : (
                        <div className="border border-dashed border-white/25 p-4">
                          <p className="u-meta text-signal-amber">Scheduling link not yet connected</p>
                          <p className="mt-2.5 text-xs leading-relaxed opacity-55">
                            Set NEXT_PUBLIC_BOOST_CALENDAR_URL to the real booking link. No third-party scheduler is
                            embedded until a real URL is supplied.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex flex-col bg-ink-900 p-6 sm:p-7">
                    <p className="u-meta text-orange-500">02 Continue on WhatsApp</p>
                    <p className="mt-4 text-sm leading-relaxed opacity-70">
                      Opens a message with your answers already written into it. You can read it and edit it before
                      anything sends.
                    </p>
                    <div className="mt-auto pt-7">
                      {whatsappHref ? (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track("growth_plan_whatsapp_click", { need: a.need })}
                          className="u-meta inline-block border border-white/25 px-5 py-3 transition-colors hover:border-white/50"
                        >
                          Continue on WhatsApp
                        </a>
                      ) : (
                        <div className="border border-dashed border-white/25 p-4">
                          <p className="u-meta text-signal-amber">WhatsApp number not yet connected</p>
                          <p className="mt-2.5 text-xs leading-relaxed opacity-55">
                            Set NEXT_PUBLIC_BOOST_WHATSAPP to the real business number. No number is published here
                            until a real one is supplied.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex flex-col bg-ink-900 p-6 sm:p-7">
                    <p className="u-meta text-orange-500">03 Send it as an email</p>
                    <p className="mt-4 text-sm leading-relaxed opacity-70">
                      If forms are not your thing, this opens your own email with the same answers in the body. It goes
                      to a person.
                    </p>
                    <div className="mt-auto pt-7">
                      <a
                        href={mailto}
                        onClick={() => track("growth_plan_email_click", { need: a.need })}
                        className="u-meta inline-block border border-white/25 px-5 py-3 transition-colors hover:border-white/50"
                      >
                        Email {site.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* THE MESSAGE, VISIBLE */}
                <details className="mt-8 border border-white/12 bg-ink-900">
                  <summary className="u-meta cursor-pointer px-6 py-5 opacity-65 transition-opacity hover:opacity-100">
                    See exactly what gets sent
                  </summary>
                  <pre className="u-scrollbar overflow-x-auto border-t border-white/12 px-6 py-5 text-xs leading-relaxed opacity-70">
                    {whatsappMessage}
                  </pre>
                </details>

                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/12 pt-8">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="u-meta border border-white/20 px-5 py-3 transition-colors hover:border-white/45"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setA(emptyAnswers);
                      setStep(0);
                      started.current = false;
                      completed.current = false;
                      reached.current = 0;
                      track("growth_plan_restart");
                    }}
                    className="u-meta opacity-45 underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    Start again
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
