"use client";
import { FormEvent, useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const contactInfo = [
  { label: "Phone", value: "647-533-2508", href: "tel:6475332508", sub: "Call or text anytime" },
  { label: "Email", value: "info@pionerrenovation.ca", href: "mailto:info@pionerrenovation.ca", sub: "Response within 24hrs" },
  { label: "Service Area", value: "Durham & GTA", href: "#", sub: "Whitby · Ajax · Pickering · Oshawa · Scarborough · Markham + more" },
  { label: "Hours", value: "Mon – Sat 7am – 7pm", href: "#", sub: "Emergency contact available" },
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch within 24 hours.");
    formRef.current?.reset();
  };

  return (
    <>
      <section style={{ minHeight: "55vh", display: "flex", alignItems: "flex-end", padding: "160px var(--pad) 80px", position: "relative", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 80% at 80% 20%, rgba(255,92,0,0.07), transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">Contact</div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "var(--cream)", marginBottom: 32 }}>
            Let&apos;s<br /><span style={{ color: "var(--accent)" }}>Talk.</span>
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            Ready to start? Have a question? Just want a quote? We respond fast. Give us a call or drop a message below.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 100, alignItems: "start" }} className="contact-grid">
            {/* Info column */}
            <div>
              <AnimateIn><div className="eyebrow">Get in Touch</div></AnimateIn>
              <AnimateIn delay={100}>
                <h2 style={{ marginBottom: 48 }}>We pick up.<br /><span style={{ color: "var(--accent)" }}>We show up.</span></h2>
              </AnimateIn>

              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
                {contactInfo.map((c, i) => (
                  <AnimateIn key={c.label} delay={i * 60}>
                    <a
                      href={c.href}
                      style={{ display: "block", padding: "28px 0", borderBottom: "1px solid var(--border)", transition: "border-color 0.3s" }}
                      className="contact-info-row"
                    >
                      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 4, color: "var(--accent)", marginBottom: 8 }}>{c.label}</div>
                      <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(20px, 2.5vw, 32px)", color: "var(--cream)", textTransform: "uppercase", marginBottom: 6 }}>{c.value}</div>
                      <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.sub}</div>
                    </a>
                  </AnimateIn>
                ))}
              </div>
            </div>

            {/* Form column */}
            <AnimateIn delay={200}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
                className="contact-form"
              >
                <div className="field">
                  <input type="text" name="name" placeholder=" " required />
                  <label>Full Name</label>
                </div>
                <div className="field">
                  <input type="tel" name="phone" placeholder=" " />
                  <label>Phone Number</label>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <input type="email" name="email" placeholder=" " required />
                  <label>Email Address</label>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <input type="text" name="subject" placeholder=" " />
                  <label>Subject</label>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <textarea name="message" placeholder=" " rows={6} required />
                  <label>Your Message</label>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    <span>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
                    </span>
                  </button>
                </div>
                <p style={{ gridColumn: "span 2", fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                  We respond within 24 hours. Your information is never sold or shared.
                </p>
              </form>
            </AnimateIn>
          </div>
        </div>
      </section>

      <style>{`
        .contact-info-row:hover { border-color: var(--accent) !important; }
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-form { grid-template-columns: 1fr !important; }
          .contact-form .field[style*="span 2"],
          .contact-form div[style*="span 2"],
          .contact-form p[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </>
  );
}
