"use client";
import { useRef, FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function QuoteSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch within 24 hours.");
    formRef.current?.reset();
  };

  return (
    <section className="section quote" id="quote" style={{ background: "var(--bg-soft)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }} className="quote-grid">
          <div>
            <AnimateIn><div className="eyebrow">Get a Quote</div></AnimateIn>
            <AnimateIn delay={100}><h2>Start your<br /><span style={{ color: "var(--accent)" }}>project.</span></h2></AnimateIn>
            <AnimateIn delay={200}>
              <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7, maxWidth: 400, marginTop: 24 }}>
                Fill in the form and we&apos;ll get back to you within 24 hours with a no-obligation quote. No fluff, no upsells — just a straight number.
              </p>
            </AnimateIn>
            <AnimateIn delay={250}>
              <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: "📞", label: "Call us", value: "647-533-2508", href: "tel:6475332508" },
                  { icon: "✉", label: "Email us", value: "info@pionerrenovation.ca", href: "mailto:info@pionerrenovation.ca" },
                ].map((c) => (
                  <a key={c.label} href={c.href} style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", border: "1px solid var(--border)", transition: "border-color 0.3s" }} className="contact-link">
                    <span style={{ fontSize: 22 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 4 }}>{c.label}</div>
                      <div style={{ color: "var(--cream)", fontSize: 15 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={150}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
              className="quote-form"
            >
              {[
                { id: "name", label: "Full Name", type: "text", full: false },
                { id: "phone", label: "Phone Number", type: "tel", full: false },
                { id: "email", label: "Email Address", type: "email", full: true },
              ].map((f) => (
                <div key={f.id} className="field" style={f.full ? { gridColumn: "span 2" } : {}}>
                  <input id={f.id} type={f.type} name={f.id} placeholder=" " required />
                  <label htmlFor={f.id}>{f.label}</label>
                </div>
              ))}

              <div className="field" style={{ gridColumn: "span 2" }}>
                <select id="service" name="service">
                  <option value="">Select a Service</option>
                  {["Home Renovation", "Drywall", "Plumbing", "Electrical", "Flooring", "Tile & Stone", "Vinyl Plank", "Indoor Renovation", "Outdoor Renovation", "Moving", "Other"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <label htmlFor="service">Service Needed</label>
              </div>

              <div className="field" style={{ gridColumn: "span 2" }}>
                <textarea id="message" name="message" placeholder=" " rows={5} />
                <label htmlFor="message">Tell us about your project</label>
              </div>

              <div style={{ gridColumn: "span 2", marginTop: 8 }}>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <span>
                    Send My Request
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
                  </span>
                </button>
              </div>

              <p style={{ gridColumn: "span 2", fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                We respond within 24 hours. Your info is never shared.
              </p>
            </form>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        .contact-link:hover { border-color: var(--accent) !important; }
        @media (max-width: 880px) {
          .quote-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .quote-form { grid-template-columns: 1fr !important; }
          .quote-form .field[style*="span 2"] { grid-column: span 1 !important; }
          .quote-form div[style*="span 2"] { grid-column: span 1 !important; }
          .quote-form p[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
