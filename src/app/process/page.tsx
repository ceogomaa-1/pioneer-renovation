import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Our Process — Pioneer Renovation",
  description: "Learn how Pioneer Renovation works — from the first call to the final walkthrough. Transparent, on-time, no excuses.",
};

const steps = [
  {
    num: "01", title: "Free Consultation",
    long: "We walk the site with you — no fee, no obligation. We listen to your vision, assess what's needed, and give you a straight-talking picture of the scope, timeline and what to realistically expect. No fluff.",
    points: ["On-site assessment", "Timeline expectations", "Scope clarification", "Zero obligation"],
  },
  {
    num: "02", title: "Detailed Quote",
    long: "Within 48 hours of the consultation, you get a fully itemized quote. Material costs, labour, timeline, payment milestones — everything broken down so you know exactly what you're paying for. No surprise invoices.",
    points: ["Itemized line-by-line pricing", "Material & labour split", "Payment milestone schedule", "Written warranty terms"],
  },
  {
    num: "03", title: "We Build",
    long: "Our licensed crew shows up on the agreed start date. We keep the site clean daily, communicate progress weekly, and flag any real issues immediately — not at the end. The work speaks for itself.",
    points: ["Licensed & insured crew", "Daily site cleanup", "Weekly progress updates", "Immediate issue flagging"],
  },
  {
    num: "04", title: "Final Walkthrough",
    long: "Before we consider a job done, we do a full walkthrough with you — every finish, every corner, every detail. If anything isn't right, we fix it. No charge. No argument. That's the Pioneer standard.",
    points: ["Full site inspection with you", "Punch list completion", "All deficiencies remedied", "Warranty documentation"],
  },
];

const faqs = [
  { q: "How long does a typical renovation take?", a: "It depends on scope. A bathroom typically takes 1–2 weeks. A full kitchen runs 3–5 weeks. A complete gut renovation can be 6–12 weeks. We give you an exact timeline in your quote and we stick to it." },
  { q: "Do you pull permits?", a: "Yes — for all work that requires one. Electrical, plumbing, structural — we handle permit applications and inspections as part of the job. Never work with a contractor who skips permits." },
  { q: "Are you licensed and insured?", a: "100%. We carry full general liability insurance and WSIB coverage. Our tradespeople are licensed in their respective fields. We'll provide proof before any work starts." },
  { q: "What areas do you serve?", a: "We're based in Durham Region and serve Whitby, Oshawa, Ajax, Pickering, Clarington, Scarborough, North York, Markham, and the broader GTA. If you're nearby, reach out." },
  { q: "What's your payment structure?", a: "Typically a 25% deposit to start, milestone payments tied to project phases, and a final 10% held until the walkthrough is complete and you're satisfied. All terms are in writing." },
];

export default function ProcessPage() {
  return (
    <>
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "flex-end", padding: "160px var(--pad) 80px", position: "relative", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 80% at 90% 10%, rgba(255,92,0,0.07), transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">How We Work</div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "var(--cream)", marginBottom: 32 }}>
            The Pioneer<br /><span style={{ color: "var(--accent)" }}>Process.</span>
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            Transparent pricing. Licensed tradespeople. A clean site. And a crew that actually shows up on time.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 80}>
              <div style={{
                display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 60,
                borderBottom: "1px solid var(--border)", padding: "clamp(48px,6vw,80px) 0",
                alignItems: "start",
              }} className="process-step">
                <div>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(60px,8vw,120px)", color: "var(--accent)", lineHeight: 0.9, opacity: 0.3 }}>{step.num}</div>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: 14, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 3, marginTop: 16 }}>Step {step.num}</div>
                </div>
                <div>
                  <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--cream)", marginBottom: 24 }}>{step.title}</h2>
                  <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7 }}>{step.long}</p>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, paddingTop: 12 }}>
                  {step.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--text-dim)", fontSize: 14 }}>
                      <span style={{ width: 28, height: 28, border: "1px solid var(--accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontSize: 12, flexShrink: 0 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bg-soft)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="faq-grid">
            <div>
              <AnimateIn><div className="eyebrow">FAQ</div></AnimateIn>
              <AnimateIn delay={100}><h2>Common<br /><span style={{ color: "var(--accent)" }}>Questions.</span></h2></AnimateIn>
              <AnimateIn delay={150}>
                <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7, marginTop: 24, marginBottom: 40 }}>
                  Still have questions? Call us directly.
                </p>
                <a href="tel:6475332508" className="btn-primary">
                  <span>647-533-2508 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.5 9.5L9.5 8.5L7.5 10C5.5 9 4 7.5 3 5.5L4.5 3.5L3.5 1.5L1 1.5C1 7 5 11 11.5 11L11.5 9.5Z" stroke="currentColor" strokeWidth="1.2" /></svg></span>
                </a>
              </AnimateIn>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {faqs.map((faq, i) => (
                <AnimateIn key={i} delay={i * 60}>
                  <FaqItem q={faq.q} a={faq.a} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--accent)", padding: "80px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <h2 style={{ color: "#000", fontSize: "clamp(36px, 6vw, 80px)" }}>Ready to start?</h2>
          <Link href="/quote" style={{ background: "#000", color: "var(--cream)", padding: "22px 48px", fontFamily: "Space Grotesk, sans-serif", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px", display: "inline-flex", alignItems: "center", gap: 14 }}>
            Get a Free Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .process-step { grid-template-columns: 1fr !important; gap: 24px !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details style={{ borderBottom: "1px solid var(--border)", padding: "28px 0" }} className="faq-item">
      <summary style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(18px, 2vw, 24px)", color: "var(--cream)", textTransform: "uppercase", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
        {q}
        <span style={{ color: "var(--accent)", fontSize: 24, flexShrink: 0, lineHeight: 1 }}>+</span>
      </summary>
      <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7, marginTop: 20 }}>{a}</p>
    </details>
  );
}
