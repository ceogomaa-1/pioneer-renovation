import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "About — Pioneer Renovation",
  description: "Pioneer Renovation was founded in 2019 with one mission: deliver premium renovation work without the contractor runaround.",
};

const values = [
  { title: "Licensed & Insured", desc: "Full liability coverage and licensed trades on every single job. No exceptions, no corners cut." },
  { title: "Warranty Backed", desc: "Written warranty on all labour. If something isn't right after we leave, we come back and fix it." },
  { title: "On-Time Promise", desc: "We set a schedule and we stick to it. If we're ever delayed, you hear from us — not the other way around." },
  { title: "Clean Jobsite", desc: "Daily cleanup is non-negotiable. We treat your home like it's our own space." },
  { title: "Straight Pricing", desc: "Itemized quotes, milestone billing, no surprise invoices. What we quote is what you pay." },
  { title: "One Team", desc: "One point of contact for every trade. No juggling subcontractors — we own the entire project." },
];

const team = [
  { name: "Pioneer Leadership", role: "Founder & Principal", since: "Est. 2019", init: "PL" },
  { name: "Site Supervisors", role: "Project Management", since: "100+ Projects", init: "SS" },
  { name: "Licensed Tradespeople", role: "Electrical · Plumbing · Tile", since: "Fully Certified", init: "LT" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "flex-end", padding: "160px var(--pad) 80px", position: "relative", background: "var(--bg)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=80"
            alt="Pioneer Renovation team"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25, filter: "grayscale(0.5)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.97) 90%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">About Us</div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "var(--cream)", marginBottom: 32 }}>
            Built from the<br /><span style={{ color: "var(--accent)" }}>ground up.</span>
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            Founded 2019. Based in Durham Region. Serving the entire GTA with one mission: renovation done right.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Story */}
      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 100, alignItems: "center" }} className="story-grid">
            <AnimateIn>
              <div style={{ position: "relative" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", border: "1px solid var(--border)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" alt="Construction site" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) saturate(0.8)" }} />
                </div>
                <div style={{ position: "absolute", bottom: -24, right: -24, background: "var(--accent)", color: "#000", padding: "32px 36px" }}>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: 56, lineHeight: 0.9 }}>2019</div>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, marginTop: 12 }}>Founded</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div>
                <div className="eyebrow">Our Story</div>
                <h2 style={{ marginBottom: 32 }}>One crew.<br /><span style={{ color: "var(--accent)" }}>Every trade.</span></h2>
                <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, marginBottom: 24 }}>
                  Pioneer Renovation started with a simple frustration: homeowners were getting burned by unreliable contractors, surprise invoices, and projects that dragged on for months. We built a different model.
                </p>
                <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, marginBottom: 24 }}>
                  One company. One phone number. A licensed crew covering every trade — drywall, plumbing, electrical, flooring, tile, and more — managed by one accountable team from day one to final walkthrough.
                </p>
                <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7 }}>
                  Over 100 projects later, across Durham Region and the broader GTA, that model hasn&apos;t changed. We show up. We do the work. We make it right.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--accent)", padding: "60px 0" }}>
        <div className="container">
          <div className="stats__grid">
            {[
              { num: "100+", label: "Projects Delivered" },
              { num: "7 Yrs", label: "In Business" },
              { num: "100%", label: "Licensed & Insured" },
              { num: "5★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__num" style={{ fontSize: "clamp(48px,8vw,100px)" }}>{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--bg-soft)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <AnimateIn><div className="eyebrow">Our Standards</div></AnimateIn>
          <AnimateIn delay={100}><h2 style={{ marginBottom: 80 }}>What we<br /><span style={{ color: "var(--accent)" }}>stand for.</span></h2></AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--border)" }} className="values-grid">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 60}>
                <div style={{
                  padding: "48px 40px",
                  borderRight: i % 3 !== 2 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  transition: "background 0.4s",
                }} className="value-card">
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--cream)", textTransform: "uppercase", marginBottom: 16 }}>{v.title}</div>
                  <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <AnimateIn><div className="eyebrow">The Team</div></AnimateIn>
          <AnimateIn delay={100}><h2 style={{ marginBottom: 80 }}>Who builds<br /><span style={{ color: "var(--accent)" }}>your home.</span></h2></AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="team-grid">
            {team.map((m, i) => (
              <AnimateIn key={m.name} delay={i * 80}>
                <div style={{ padding: "40px 32px", border: "1px solid var(--border)", transition: "border-color 0.4s, transform 0.4s" }} className="team-card">
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 700, fontSize: 22, marginBottom: 28 }}>{m.init}</div>
                  <h3 style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--cream)", marginBottom: 8 }}>{m.name}</h3>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "var(--accent)", marginBottom: 8 }}>{m.role}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{m.since}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ color: "var(--cream)", fontSize: "clamp(36px,6vw,80px)" }}>Let&apos;s build<br /><span style={{ color: "var(--accent)" }}>something.</span></h2>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/quote" className="btn-primary"><span>Get a Free Quote <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" /></svg></span></Link>
            <a href="tel:6475332508" className="btn-ghost">647-533-2508</a>
          </div>
        </div>
      </section>

      <style>{`
        .value-card:hover { background: rgba(255,92,0,0.04) !important; }
        .team-card:hover { border-color: var(--accent) !important; transform: translateY(-4px); }
        @media (max-width: 980px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 880px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .values-grid > div > div { border-right: none !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
