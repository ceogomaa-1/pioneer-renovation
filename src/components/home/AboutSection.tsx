import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export default function AboutSection() {
  return (
    <section className="section about" id="about" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 80, alignItems: "center" }} className="about-grid">
          {/* Media */}
          <AnimateIn>
            <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid var(--border)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Pioneer Renovation crew"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) saturate(0.9)" }}
                loading="lazy"
              />
              <div style={{ position: "absolute", top: 24, left: 24, background: "var(--accent)", color: "#000", padding: "10px 16px", fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: 600 }}>
                Est. 2019
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn delay={150}>
            <div>
              <div className="eyebrow">About Pioneer</div>
              <h2 style={{ marginBottom: 32 }}>Built from the<br /><span style={{ color: "var(--accent)" }}>ground up.</span></h2>
              <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, marginBottom: 24, maxWidth: 540 }}>
                Pioneer Renovation was founded in 2019 with one mission: deliver premium renovation work without the contractor runaround. We&apos;re a licensed, insured team covering every trade — so you get one point of contact for your entire project.
              </p>
              <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
                We serve Durham Region, Scarborough, and the broader GTA — bringing big-city finishes to every neighbourhood with straight-up pricing and zero excuses.
              </p>

              <Link href="/about" className="btn-primary">
                <span>
                  Our Story
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
                </span>
              </Link>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48, paddingTop: 48, borderTop: "1px solid var(--border)" }}>
                {[
                  { title: "Licensed & Insured", desc: "Full liability coverage and licensed trades on every job." },
                  { title: "Warranty Backed", desc: "We stand behind our work with a written warranty on all labour." },
                  { title: "On-Time Always", desc: "We set a schedule and we stick to it. No excuses." },
                  { title: "Clean Jobsite", desc: "Daily cleanup. We treat your home like it's our own." },
                ].map((v) => (
                  <div key={v.title}>
                    <h4 style={{ fontSize: 18, color: "var(--cream)", marginBottom: 8, textTransform: "uppercase" }}>{v.title}</h4>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
