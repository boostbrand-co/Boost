import { Container, Section, PageHero, CTABlock } from "@/components/ui/primitives";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";

export const metadata = meta({
 title: "Terms of service",
 description: "Structural placeholder for the BOOST terms of service. Pending legal review.",
 path: "/terms",
 noIndex: true,
});

const sections: { n: string; t: string; body: string[]; items?: string[] }[] = [
 {
 n: "01",
 t: "Scope of services",
 body: [
 "[TO BE COMPLETED BY LEGAL] Define what these terms cover: use of this website, the engagement of BOOST for marketing services, or both. State which document governs where a signed statement of work says something different.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Definition of the contracting entity and the client",
 "[TO BE COMPLETED BY LEGAL] Which services are in scope and how scope is agreed in writing",
 "[TO BE COMPLETED BY LEGAL] Order of precedence between these terms, a statement of work and any client purchase terms",
 "[TO BE COMPLETED BY LEGAL] Terms covering visitors who only use this website and never become clients",
 ],
 },
 {
 n: "02",
 t: "Engagement terms",
 body: [
 "[TO BE COMPLETED BY LEGAL] Set out how an engagement begins, how scope changes are agreed, what the client is responsible for supplying, and the effect of client delay on timelines.",
 "[TO BE COMPLETED BY LEGAL] Confirm the commitment periods described publicly on /engagements, including the initial 90-day term and 30 days notice on the ongoing partnership, and the crediting of the diagnostic fee against a first invoice where a client continues within 30 days.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Commencement, term and renewal",
 "[TO BE COMPLETED BY LEGAL] Change control process",
 "[TO BE COMPLETED BY LEGAL] Client dependencies, including access to accounts and data",
 "[TO BE COMPLETED BY LEGAL] Approval process and deemed approval, if any",
 ],
 },
 {
 n: "03",
 t: "Payment",
 body: [
 "[TO BE COMPLETED BY LEGAL] State fees, currency, invoicing cadence, payment terms, late payment consequences, taxes and withholding, and the treatment of media spend.",
 "[TO BE COMPLETED BY LEGAL] Reflect the public commitment that management fees are stated separately from media spend, and confirm who holds the contractual relationship with each advertising platform and who is liable for media invoices.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Fee structure and currency for United States and Mexico clients",
 "[TO BE COMPLETED BY LEGAL] Invoicing schedule and payment window",
 "[TO BE COMPLETED BY LEGAL] Late payment interest and suspension rights",
 "[TO BE COMPLETED BY LEGAL] Taxes, VAT, IVA and withholding across jurisdictions",
 "[TO BE COMPLETED BY LEGAL] Whether media spend is paid by the client directly or passed through, and the consequences of each",
 "[TO BE COMPLETED BY LEGAL] Expenses and third-party costs",
 ],
 },
 {
 n: "04",
 t: "Intellectual property and asset ownership",
 body: [
 "[TO BE COMPLETED BY LEGAL] Define who owns work product, when ownership transfers, and what happens to work produced before full payment.",
 "[TO BE COMPLETED BY LEGAL] Reflect the public commitment that advertising accounts, tracking pixels, analytics properties, domains, source files, historical data and the decision log are created under client ownership and remain with the client. Confirm the mechanism that makes that binding.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Ownership of deliverables and the point of transfer",
 "[TO BE COMPLETED BY LEGAL] Ownership of accounts, pixels, analytics properties and domains",
 "[TO BE COMPLETED BY LEGAL] Licence retained by BOOST for portfolio and case study use, and how client approval is obtained",
 "[TO BE COMPLETED BY LEGAL] Ownership of methods, templates, frameworks and internal tooling",
 "[TO BE COMPLETED BY LEGAL] Third-party licensed assets, including stock, fonts and music, and who holds the licence",
 "[TO BE COMPLETED BY LEGAL] Treatment of AI-assisted output and any resulting ownership limitations",
 ],
 },
 {
 n: "05",
 t: "Confidentiality",
 body: [
 "[TO BE COMPLETED BY LEGAL] Define confidential information, permitted disclosures, the duration of the obligation, and treatment of client business data such as revenue, margin and CRM records.",
 "[TO BE COMPLETED BY LEGAL] Address whether client data may be used in anonymised or aggregated form, and whether it may be processed by third-party or AI tooling.",
 ],
 },
 {
 n: "06",
 t: "Limitation of liability",
 body: [
 "[TO BE COMPLETED BY LEGAL] State warranties given and disclaimed, liability caps, excluded losses, and the position on advertising platform outcomes, platform policy changes and account suspensions outside BOOST's control.",
 "[TO BE COMPLETED BY LEGAL] Confirm that no results are guaranteed, consistent with the public position on /fit, and state it in enforceable language.",
 ],
 },
 {
 n: "07",
 t: "Termination",
 body: [
 "[TO BE COMPLETED BY LEGAL] Set out notice periods, termination for cause, termination for convenience, the effect on fees already invoiced, and the offboarding process.",
 "[TO BE COMPLETED BY LEGAL] Reflect the public commitment that the client retains accounts, assets and the decision log on exit, and define the handover window and what is delivered within it.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Notice periods per engagement type",
 "[TO BE COMPLETED BY LEGAL] Termination for material breach and cure periods",
 "[TO BE COMPLETED BY LEGAL] Fees payable on termination and treatment of work in progress",
 "[TO BE COMPLETED BY LEGAL] Handover obligations, timeframe and format of delivered assets",
 "[TO BE COMPLETED BY LEGAL] Survival of confidentiality, IP and liability clauses",
 ],
 },
 {
 n: "08",
 t: "Governing law",
 body: [
 "[TO BE COMPLETED BY LEGAL] State the governing law, the forum for disputes, and whether arbitration or mediation applies. Confirm how this works for clients contracting in the United States, Mexico and elsewhere in Latin America.",
 "[TO BE COMPLETED BY LEGAL] Confirm the contracting entity for each market and whether separate terms are required per entity.",
 ],
 },
 {
 n: "09",
 t: "Changes to these terms",
 body: [
 "[TO BE COMPLETED BY LEGAL] Describe how these terms may be amended, what notice is given, and whether continued use of the website or continued service constitutes acceptance. Add an effective date and a last-reviewed date.",
 ],
 },
];

export default function TermsPage() {
 return (
 <>
 <PageHero
 eyebrow="Legal"
 title="Terms of service"
 lead="This page is structural scaffolding only. Every section below names what a lawyer needs to establish. Nothing here creates or describes an actual contractual obligation."
 trail={[{ label: "Terms of service" }]}
 meta={[
 { label: "Status", value: "Placeholder, pending legal review" },
 { label: "Effective date", value: "[TO BE COMPLETED BY LEGAL]" },
 { label: "Last reviewed", value: "[TO BE COMPLETED BY LEGAL]" },
 { label: "Indexing", value: "Excluded from search engines" },
 ]}
 >
 <div className="mt-14 border-2 border-orange-500 bg-orange-500/10 p-6 sm:p-8">
 <p className="u-meta text-orange-500">Notice</p>
 <p className="u-display mt-4 text-2xl sm:text-3xl">
 LEGAL REVIEW REQUIRED, this page is a structural placeholder and is not legal advice or final policy
 language.
 </p>
 <p className="mt-6 max-w-3xl text-sm leading-relaxed opacity-75">
 Do not publish this page in its current form and do not rely on it in a commercial conversation. Every
 bracketed marker below must be replaced by a qualified adviser covering the jurisdictions BOOST contracts
 in. Where a section refers to a commitment published elsewhere on this site, that commitment still needs
 enforceable language written for it.
 </p>
 </div>
 </PageHero>

 <Section tone="dark">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12">
 <div className="lg:col-span-4">
 <h2 className="u-display text-3xl sm:text-4xl">Section scaffolding</h2>
 <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-65">
 Nine sections. Each lists what has to be decided before the section can be drafted, rather than offering
 sample language that would give a false sense of coverage.
 </p>
 <nav aria-label="Terms sections" className="mt-10 border-t border-white/12">
 {sections.map((s) => (
 <a
 key={s.n}
 href={`#section-${s.n}`}
 className="flex items-baseline gap-4 border-b border-white/12 py-3 text-sm hover:text-orange-500"
 >
 <span className="u-meta tabular-nums opacity-40">{s.n}</span>
 {s.t}
 </a>
 ))}
 </nav>
 </div>

 <div className="lg:col-span-8">
 {sections.map((s) => (
 <section
 key={s.n}
 id={`section-${s.n}`}
 className="scroll-mt-28 border-t border-white/12 py-10 first:border-t-0 first:pt-0"
 >
 <div className="flex items-baseline gap-4">
 <span className="u-meta tabular-nums text-orange-500">{s.n}</span>
 <h3 className="u-display text-2xl sm:text-3xl">{s.t}</h3>
 </div>
 <div className="mt-6 space-y-4">
 {s.body.map((p) => (
 <p key={p} className="max-w-3xl text-sm leading-relaxed opacity-75">
 {p}
 </p>
 ))}
 </div>
 {s.items && (
 <ul className="mt-7 border-t border-white/12">
 {s.items.map((item) => (
 <li key={item} className="flex gap-4 border-b border-white/12 py-3.5 text-sm leading-relaxed">
 <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-orange-500" />
 <span className="opacity-70">{item}</span>
 </li>
 ))}
 </ul>
 )}
 </section>
 ))}

 <div className="mt-6 border-l-2 border-orange-500 bg-orange-500/[0.06] px-5 py-5 sm:px-7 sm:py-6">
 <p className="u-meta text-orange-500">Before publication</p>
 <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-80">
 Replace every [TO BE COMPLETED BY LEGAL] marker, confirm that the public commitments on /engagements
 and /how-boost-works/client-control are reflected in enforceable clauses, remove both notices, set an
 effective date, and remove the noindex flag from this route metadata.
 </p>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 <CTABlock
 title="Need the contract detail now?"
 body="Until these terms are finalised, engagement terms are set out in the statement of work and answered directly by a person."
 primary={{ label: `Email ${site.email}`, href: `mailto:${site.email}` }}
 secondary={{ label: "Privacy policy", href: "/privacy" }}
 />
 </>
 );
}
