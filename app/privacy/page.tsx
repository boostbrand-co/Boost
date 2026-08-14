import { Container, Section, PageHero, CTABlock } from "@/components/ui/primitives";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";

export const metadata = meta({
 title: "Privacy policy",
 description: "Structural placeholder for the BOOST privacy policy. Pending legal review.",
 path: "/privacy",
 noIndex: true,
});

const sections: { n: string; t: string; body: string[]; items?: string[] }[] = [
 {
 n: "01",
 t: "What data is collected",
 body: [
 "[TO BE COMPLETED BY LEGAL] Describe every category of personal data collected through this website and through client engagements, and the point of collection for each.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Information submitted through the intake form at /build-my-growth-plan, for example name, business name, email address, phone number and free-text answers",
 "[TO BE COMPLETED BY LEGAL] Information received by email at " + site.email,
 "[TO BE COMPLETED BY LEGAL] Technical data captured automatically, for example IP address, browser type, device type, referring URL and pages visited",
 "[TO BE COMPLETED BY LEGAL] Data processed on behalf of clients during an engagement, for example advertising platform data, analytics data and CRM records",
 "[TO BE COMPLETED BY LEGAL] Any additional categories not listed above",
 ],
 },
 {
 n: "02",
 t: "How the data is used",
 body: [
 "[TO BE COMPLETED BY LEGAL] State each purpose of processing and the lawful basis relied on for each, under the regimes that apply to this business.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Responding to enquiries and preparing proposals",
 "[TO BE COMPLETED BY LEGAL] Delivering contracted services",
 "[TO BE COMPLETED BY LEGAL] Site analytics and performance measurement",
 "[TO BE COMPLETED BY LEGAL] Marketing communications, and whether consent or legitimate interest is relied on",
 "[TO BE COMPLETED BY LEGAL] Legal, accounting and record-keeping obligations",
 ],
 },
 {
 n: "03",
 t: "Third-party processors and analytics",
 body: [
 "[TO BE COMPLETED BY LEGAL] List every processor and sub-processor with access to personal data, the purpose of each, the country in which it processes data, and the transfer mechanism where data leaves the country of collection.",
 "[TO BE COMPLETED BY LEGAL] Confirm whether advertising platform pixels or conversion APIs are operated on this domain, and if so which.",
 ],
 items: [
 "[TO BE COMPLETED BY LEGAL] Website hosting and infrastructure provider",
 "[TO BE COMPLETED BY LEGAL] Analytics provider",
 "[TO BE COMPLETED BY LEGAL] Email and communications provider",
 "[TO BE COMPLETED BY LEGAL] CRM or scheduling provider",
 "[TO BE COMPLETED BY LEGAL] Advertising platforms, where applicable",
 "[TO BE COMPLETED BY LEGAL] Any AI or automation tooling that processes personal data, and its role",
 ],
 },
 {
 n: "04",
 t: "Cookies and similar technologies",
 body: [
 "[TO BE COMPLETED BY LEGAL] List each cookie or similar technology set on this domain, its category, its purpose and its lifespan.",
 "[TO BE COMPLETED BY LEGAL] State whether a consent mechanism is required for visitors in each market served, and describe how consent is captured and withdrawn.",
 ],
 },
 {
 n: "05",
 t: "Data retention",
 body: [
 "[TO BE COMPLETED BY LEGAL] State the retention period for each category of data listed in section 01, the criteria used to set it, and what happens to client data at the end of an engagement.",
 ],
 },
 {
 n: "06",
 t: "User rights",
 body: [
 "[TO BE COMPLETED BY LEGAL] Set out the rights available to individuals under each applicable regime, including access, correction, deletion, portability, objection and withdrawal of consent, and the process and timeframe for exercising them.",
 "[TO BE COMPLETED BY LEGAL] Confirm which regimes apply given operations in the United States and Mexico and clients across Latin America.",
 ],
 },
 {
 n: "07",
 t: "Contact for data requests",
 body: [
 "[TO BE COMPLETED BY LEGAL] Name the controller entity, its registered address, and the contact point for privacy requests. Confirm whether a data protection officer or local representative is required.",
 `[TO BE COMPLETED BY LEGAL] Confirm whether ${site.email} is the correct contact address for privacy requests or whether a dedicated address is needed.`,
 ],
 },
 {
 n: "08",
 t: "Governing law",
 body: [
 "[TO BE COMPLETED BY LEGAL] State the governing law and the supervisory authority or authorities with jurisdiction, and how complaints may be raised.",
 ],
 },
 {
 n: "09",
 t: "Changes to this policy",
 body: [
 "[TO BE COMPLETED BY LEGAL] Describe how changes are made, how visitors are notified, and where previous versions can be found. Add an effective date and a last-reviewed date.",
 ],
 },
];

export default function PrivacyPage() {
 return (
 <>
 <PageHero
 eyebrow="Legal"
 title="Privacy policy"
 lead="This page is structural scaffolding only. Every section below names what a lawyer needs to supply. Nothing here should be read as the policy that governs your data."
 trail={[{ label: "Privacy policy" }]}
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
 Do not publish this page in its current form. Every bracketed marker below must be replaced by a qualified
 adviser covering the jurisdictions BOOST operates in, which at minimum includes the United States and
 Mexico. Until then, no statement on this page can be relied on by a visitor or a client.
 </p>
 </div>
 </PageHero>

 <Section tone="dark">
 <Container>
 <div className="grid gap-14 lg:grid-cols-12">
 <div className="lg:col-span-4">
 <h2 className="u-display text-3xl sm:text-4xl">Section scaffolding</h2>
 <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-65">
 Nine sections. Each lists what has to be established before the section can be written, rather than
 offering draft language that would only need to be thrown away.
 </p>
 <nav aria-label="Policy sections" className="mt-10 border-t border-white/12">
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
 <section key={s.n} id={`section-${s.n}`} className="scroll-mt-28 border-t border-white/12 py-10 first:border-t-0 first:pt-0">
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
 Replace every [TO BE COMPLETED BY LEGAL] marker, remove this notice and the notice at the top of the
 page, set an effective date, and remove the noindex flag from this route metadata.
 </p>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 <CTABlock
 title="Questions about your data?"
 body="Until this policy is finalised, data questions are answered directly by a person rather than by a document."
 primary={{ label: `Email ${site.email}`, href: `mailto:${site.email}` }}
 secondary={{ label: "Terms of service", href: "/terms" }}
 />
 </>
 );
}
