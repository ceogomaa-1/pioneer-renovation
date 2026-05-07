import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export default function CtaSection() {
  return (
    <section className="section cta" id="contact" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {/* Big background text */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Anton, sans-serif", fontSize: "clamp(100px, 25vw, 380px)",
        color: "var(--cream)", opacity: 0.025, userSelect: "none", letterSpacing: "-0.02em",
        textTransform: "uppercase", lineHeight: 1, pointerEvents: "none",
      }}>
        BUILD
      </div>

      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <AnimateIn>
            <h2 style={{ fontSize: "clamp(60px, 12vw, 180px)", color: "var(--cream)", marginBottom: 16 }}>
              Ready to<br /><span style={{ color: "var(--accent)", display: "inline-block" }}>Build?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p style={{ fontSize: "clamp(15px, 1.4vw, 18px)", color: "var(--text-dim)", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.6 }}>
              Every great renovation starts with a conversation. Tell us what you&apos;re thinking — we&apos;ll tell you exactly what it takes.
            </p>
          </AnimateIn>
          <AnimateIn delay={150}>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/quote" className="btn-primary">
                <span>
                  Get a Free Quote
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
                </span>
              </Link>
              <a href="tel:6475332508" className="btn-ghost">
                Call 647-533-2508
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={200}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 80 }} className="cta-cards">
            {[
              { label: "Phone", value: "647-533-2508", sub: "Call or text anytime", href: "tel:6475332508" },
              { label: "Email", value: "info@pionerrenovation.ca", sub: "We reply within 24hrs", href: "mailto:info@pionerrenovation.ca" },
              { label: "Service Area", value: "Durham & GTA", sub: "Including Scarborough, Markham, Pickering and more", href: "#area" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="cta-card">
                <div className="cta-card__label">{c.label}</div>
                <div className="cta-card__value">{c.value}</div>
                <div className="cta-card__sub">{c.sub}</div>
              </a>
            ))}
          </div>
        </AnimateIn>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .cta-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
