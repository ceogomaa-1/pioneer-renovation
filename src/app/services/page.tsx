import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Services — Pioneer Renovation",
  description: "Full-service renovation: drywall, plumbing, electrical, flooring, tile, vinyl, indoor & outdoor renovation, and moving across Durham Region & the GTA.",
};

const services = [
  {
    num: "01", title: "Home Renovation", slug: "home-renovation",
    desc: "Full-property gut renos, room-by-room makeovers, additions and conversions delivered turnkey. We plan, we build, we deliver.",
    details: ["Complete property transformations", "Room additions & conversions", "Basement development", "Design + build, all in-house"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    tags: ["Full Reno", "Additions"],
  },
  {
    num: "02", title: "Drywall", slug: "drywall",
    desc: "Hanging, taping, mudding, sanding, level-5 finishes, repairs and texture matching. Perfect walls, every time.",
    details: ["Hang & tape", "Level 5 finish", "Repairs & patches", "Texture matching"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    tags: ["Hang & Tape", "Level 5"],
  },
  {
    num: "03", title: "Plumbing", slug: "plumbing",
    desc: "Rough-ins, fixture installs, leak repair, re-piping, kitchen & bath plumbing & drainage. Fully licensed.",
    details: ["Rough-in plumbing", "Fixture installation", "Leak detection & repair", "Kitchen & bath drainage"],
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
    tags: ["Rough-In", "Fixtures"],
  },
  {
    num: "04", title: "Electrical", slug: "electrical",
    desc: "Panel upgrades, new circuits, pot-light installs, code-compliant rough-ins and finishes. ESA certified.",
    details: ["Panel upgrades", "New circuit installs", "Pot light installation", "Code-compliant rough-ins"],
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80",
    tags: ["Panels", "Pot Lights"],
  },
  {
    num: "05", title: "Flooring", slug: "flooring",
    desc: "Hardwood, engineered, laminate & subfloor builds — sanded, stained, sealed. Built to last decades.",
    details: ["Hardwood installation", "Engineered & laminate", "Subfloor leveling", "Sand, stain & seal"],
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80",
    tags: ["Hardwood", "Engineered"],
  },
  {
    num: "06", title: "Tile & Stone", slug: "tile-stone",
    desc: "Bathrooms, backsplashes, foyers — porcelain, marble, mosaic. Razor-sharp grout lines guaranteed.",
    details: ["Porcelain & ceramic", "Natural stone & marble", "Mosaic & feature walls", "Backsplashes & foyers"],
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
    tags: ["Porcelain", "Marble"],
  },
  {
    num: "07", title: "Vinyl Plank", slug: "vinyl-plank",
    desc: "Waterproof luxury vinyl plank — basements, kitchens, bathrooms, rentals. Fast install, great finish.",
    details: ["Luxury vinyl plank (LVP)", "Waterproof options", "Click-lock & glue-down", "Basements & rentals"],
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80",
    tags: ["LVP", "Waterproof"],
  },
  {
    num: "08", title: "Indoor Renovation", slug: "indoor",
    desc: "Kitchens, bathrooms, basements, living rooms — design + build, all in-house. One team, zero headaches.",
    details: ["Kitchen renovations", "Bathroom renovations", "Basement finishing", "Living room & bedroom renos"],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    tags: ["Kitchen", "Bath", "Basement"],
  },
  {
    num: "09", title: "Outdoor Renovation", slug: "outdoor",
    desc: "Decks, fences, patios, exterior siding, outdoor lighting and curb appeal. Your home, elevated.",
    details: ["Deck construction", "Patio & interlock", "Fencing", "Exterior siding & trim"],
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    tags: ["Decks", "Patios", "Siding"],
  },
  {
    num: "10", title: "Moving", slug: "moving",
    desc: "Local moving across Durham & the GTA — wrapped, padded, on-time. No hidden fees.",
    details: ["Local residential moving", "Fully wrapped & padded", "On-time guarantee", "No hidden fees"],
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80",
    tags: ["Local", "Residential"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{
        minHeight: "60vh", display: "flex", alignItems: "flex-end",
        padding: "160px var(--pad) 80px", position: "relative", background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 80% at 10% 90%, rgba(255,92,0,0.07), transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">What We Do</div>
          <h1 style={{ fontSize: "clamp(56px, 12vw, 180px)", color: "var(--cream)", marginBottom: 32 }}>
            Our<br /><span style={{ color: "var(--accent)" }}>Services.</span>
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "clamp(16px, 1.5vw, 20px)", maxWidth: 600, lineHeight: 1.6 }}>
            One team, every trade. No juggling contractors. No excuses. Just a complete renovation from start to finish.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Services list */}
      <section style={{ background: "var(--bg)", padding: "0 0 clamp(80px,14vh,160px)" }}>
        <div className="container">
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {services.map((s, i) => (
              <AnimateIn key={s.num} delay={i * 30}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, borderBottom: "1px solid var(--border)", padding: "clamp(40px,6vw,80px) 0" }} className="service-detail-row">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                      <span style={{ fontFamily: "Anton, sans-serif", fontSize: 14, color: "var(--accent)", letterSpacing: 2 }}>/{s.num}</span>
                      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "var(--cream)", marginBottom: 20 }}>{s.title}</h2>
                    <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>{s.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {s.details.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-dim)", fontSize: 14 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 36 }}>
                      <Link href="/quote" className="btn-primary">
                        <span>Get a Quote <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" /></svg></span>
                      </Link>
                    </div>
                  </div>
                  <div style={{ overflow: "hidden", border: "1px solid var(--border)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.3)", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.5s" }} className="service-img" loading="lazy" />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-row:hover .service-img { transform: scale(1.05); filter: grayscale(0) !important; }
        @media (max-width: 880px) {
          .service-detail-row { grid-template-columns: 1fr !important; }
          .service-detail-row > div:last-child { aspect-ratio: 16/9; }
        }
      `}</style>
    </>
  );
}
