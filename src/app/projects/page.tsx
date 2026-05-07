import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "Projects — Pioneer Renovation",
  description: "See Pioneer Renovation's portfolio of completed projects across Durham Region and the GTA — kitchens, bathrooms, basements, flooring, tile, and more.",
};

const caseStudies = [
  {
    title: "Full Kitchen Gut — Ajax",
    category: "Indoor Renovation",
    desc: "Removed existing layout, installed new cabinetry, quartz counters, tile backsplash, LVP flooring, and pot lights. Three-week turnaround.",
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kitchen", "Tile", "Plumbing", "Electrical"],
  },
  {
    title: "Basement Finish — Whitby",
    category: "Basement Development",
    desc: "Framing, spray foam insulation, drywall, LVP flooring, pot lights, and a full bathroom rough-in. Turned a concrete shell into a legal suite.",
    before: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Basement", "Drywall", "Flooring", "Electrical"],
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80", label: "Master Bath — Pickering", cat: "Tile & Stone" },
  { src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=700&q=80", label: "Hardwood Install — Oshawa", cat: "Flooring" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80", label: "Deck Build — Clarington", cat: "Outdoor" },
  { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=700&q=80", label: "LVP — Rental Unit, Scarborough", cat: "Vinyl Plank" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80", label: "Drywall Level 5 — Ajax", cat: "Drywall" },
  { src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=700&q=80", label: "Panel Upgrade — Whitby", cat: "Electrical" },
];

export default function ProjectsPage() {
  return (
    <>
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "flex-end", padding: "160px var(--pad) 80px", position: "relative", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 80% at 50% 100%, rgba(255,92,0,0.08), transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">Our Work</div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "var(--cream)", marginBottom: 32 }}>
            Real results.<br /><span style={{ color: "var(--accent)" }}>Real homes.</span>
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            Every project is a permanent record. We stand behind every finish.
          </p>
        </div>
      </section>

      {/* Case studies with before/after */}
      <section style={{ background: "var(--bg)", padding: "clamp(80px,14vh,160px) 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <AnimateIn><div className="eyebrow" style={{ marginBottom: 60 }}>Featured Projects</div></AnimateIn>
          {caseStudies.map((cs, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div style={{ marginBottom: 100 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 12 }}>{cs.category}</div>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", color: "var(--cream)" }}>{cs.title}</h2>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {cs.tags.map((t) => (
                      <span key={t} style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, padding: "6px 14px", border: "1px solid var(--border)", color: "var(--text-dim)", borderRadius: 100 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <BeforeAfter before={cs.before} after={cs.after} />
                <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.7, maxWidth: 680, marginTop: 24 }}>{cs.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Full gallery */}
      <section style={{ background: "var(--bg-soft)", padding: "clamp(80px,14vh,160px) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
            <AnimateIn>
              <div>
                <div className="eyebrow">Gallery</div>
                <h2>100+ Projects<br /><span style={{ color: "var(--accent)" }}>Delivered.</span></h2>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <Link href="/quote" className="btn-primary">
                <span>Start Your Project <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" /></svg></span>
              </Link>
            </AnimateIn>
          </div>

          <AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="gallery-grid">
              {gallery.map((item, i) => (
                <div key={i} style={{ overflow: "hidden", position: "relative", border: "1px solid var(--border)", aspectRatio: "4/3" }} className="gallery-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.4) contrast(1.05)", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.5s" }} className="gallery-img" loading="lazy" />
                  <div style={{ position: "absolute", left: 16, bottom: 16, zIndex: 2 }}>
                    <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 4 }}>{item.cat}</div>
                    <div className="gallery-item__label" style={{ position: "static", fontSize: 11 }}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.08); filter: grayscale(0) contrast(1) !important; }
        @media (max-width: 880px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
