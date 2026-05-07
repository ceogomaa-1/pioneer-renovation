"use client";
import { FormEvent, useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const services = [
  "Home Renovation", "Drywall", "Plumbing", "Electrical",
  "Flooring", "Tile & Stone", "Vinyl Plank",
  "Indoor Renovation", "Outdoor Renovation", "Moving", "Multiple Services", "Other",
];

const steps = [
  { n: "01", t: "Fill the form", d: "Tell us about your project — scope, timeline, budget range." },
  { n: "02", t: "We review", d: "We look at the details and reach out within 24hrs to schedule a site visit." },
  { n: "03", t: "On-site visit", d: "We walk the space with you at no charge. No obligation." },
  { n: "04", t: "Quote delivered", d: "Itemized, written quote in your inbox within 48hrs of the visit." },
];

export default function QuotePage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Quote request sent! We'll be in touch within 24 hours to schedule your free site visit.");
    formRef.current?.reset();
  };

  return (
    <>
      <section style={{ minHeight: "55vh", display: "flex", alignItems: "flex-end", padding: "160px var(--pad) 80px", position: "relative", background: "var(--accent)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 11, textTransform: "uppercase", letterSpacing: 4, color: "#000", fontWeight: 500, marginBottom: 24 }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "#000" }} />
            Free Quote
          </div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "#000", marginBottom: 32, fontFamily: "Anton, sans-serif", lineHeight: 0.92, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            Get a free<br />estimate.
          </h1>
          <p style={{ color: "rgba(0,0,0,0.65)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            No obligation. No hard sell. Just a straight number from a team that shows up.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 100, alignItems: "start" }} className="quote-page-grid">
            {/* Left: process + contact */}
            <div>
              <AnimateIn><div className="eyebrow">The Process</div></AnimateIn>
              <AnimateIn delay={100}><h2 style={{ marginBottom: 48 }}>What happens<br /><span style={{ color: "var(--accent)" }}>next.</span></h2></AnimateIn>

              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)", marginBottom: 60 }}>
                {steps.map((s, i) => (
                  <AnimateIn key={s.n} delay={i * 60}>
                    <div style={{ padding: "24px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: 24, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "Anton, sans-serif", fontSize: 14, color: "var(--accent)", letterSpacing: 2, paddingTop: 3 }}>{s.n}</span>
                      <div>
                        <div style={{ fontFamily: "Anton, sans-serif", fontSize: 20, color: "var(--cream)", textTransform: "uppercase", marginBottom: 8 }}>{s.t}</div>
                        <div style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6 }}>{s.d}</div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn delay={300}>
                <div style={{ padding: "32px", background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 16 }}>Prefer to call?</div>
                  <a href="tel:6475332508" style={{ fontFamily: "Anton, sans-serif", fontSize: 28, color: "var(--cream)", display: "block", marginBottom: 8 }}>647-533-2508</a>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Mon–Sat · 7am–7pm</div>
                </div>
              </AnimateIn>
            </div>

            {/* Right: form */}
            <AnimateIn delay={200}>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "clamp(32px,4vw,56px)" }}>
                <h3 style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "var(--cream)", marginBottom: 40 }}>Project Details</h3>

                <form ref={formRef} onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="quote-page-form">
                  <div className="field">
                    <input type="text" name="name" placeholder=" " required />
                    <label>Full Name *</label>
                  </div>
                  <div className="field">
                    <input type="tel" name="phone" placeholder=" " required />
                    <label>Phone Number *</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <input type="email" name="email" placeholder=" " required />
                    <label>Email Address *</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <input type="text" name="address" placeholder=" " />
                    <label>Property Address</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <select name="service">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <label>Service Needed</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <select name="timeline">
                      <option value="">Preferred Start Timeline</option>
                      {["ASAP", "Within 1 month", "1–3 months", "3–6 months", "6+ months", "Just exploring"].map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <label>Timeline</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <select name="budget">
                      <option value="">Approximate Budget</option>
                      {["Under $5,000", "$5,000–$15,000", "$15,000–$30,000", "$30,000–$75,000", "$75,000–$150,000", "$150,000+", "Not sure yet"].map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <label>Budget Range</label>
                  </div>
                  <div className="field" style={{ gridColumn: "span 2" }}>
                    <textarea name="details" placeholder=" " rows={5} />
                    <label>Project Description</label>
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <span>
                        Submit Quote Request
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
                      </span>
                    </button>
                  </div>
                  <p style={{ gridColumn: "span 2", fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                    Free, no-obligation quote. We respond within 24 hours.
                  </p>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .quote-page-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .quote-page-form { grid-template-columns: 1fr !important; }
          .quote-page-form .field[style*="span 2"],
          .quote-page-form div[style*="span 2"],
          .quote-page-form p[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </>
  );
}
