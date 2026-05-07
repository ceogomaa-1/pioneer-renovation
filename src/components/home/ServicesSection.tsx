"use client";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const services = [
  { num: "/01", title: "Home Renovation", desc: "Full-property gut renos, room-by-room makeovers, additions and conversions delivered turnkey.", tags: ["Full Reno", "Additions"], img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80" },
  { num: "/02", title: "Drywall", desc: "Hanging, taping, mudding, sanding, level-5 finishes, repairs and texture matching.", tags: ["Hang & Tape", "Level 5"], img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" },
  { num: "/03", title: "Plumbing", desc: "Rough-ins, fixture installs, leak repair, re-piping, kitchen & bath plumbing & drainage.", tags: ["Rough-In", "Fixtures"], img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80" },
  { num: "/04", title: "Electrical", desc: "Panel upgrades, new circuits, pot-light installs, code-compliant rough-ins and finishes.", tags: ["Panels", "Pot Lights"], img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80" },
  { num: "/05", title: "Flooring", desc: "Hardwood, engineered, laminate & subfloor builds — sanded, stained, sealed.", tags: ["Hardwood", "Engineered"], img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80" },
  { num: "/06", title: "Tile & Stone", desc: "Bathrooms, backsplashes, foyers — porcelain, marble, mosaic. Razor-sharp grout lines.", tags: ["Porcelain", "Marble"], img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80" },
  { num: "/07", title: "Vinyl Plank", desc: "Waterproof luxury vinyl plank — basements, kitchens, bathrooms, rentals.", tags: ["LVP", "Waterproof"], img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80" },
  { num: "/08", title: "Indoor Renovation", desc: "Kitchens, bathrooms, basements, living rooms — design + build, all in-house.", tags: ["Kitchen", "Bath", "Basement"], img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" },
  { num: "/09", title: "Outdoor Renovation", desc: "Decks, fences, patios, exterior siding, outdoor lighting and curb appeal.", tags: ["Decks", "Patios", "Siding"], img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" },
  { num: "/10", title: "Moving", desc: "Local moving across Durham & the GTA — wrapped, padded, on-time. No hidden fees.", tags: ["Local", "Residential"], img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80" },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="section services" id="services" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "end" }} className="services-head">
          <div>
            <AnimateIn><div className="eyebrow">What We Do</div></AnimateIn>
            <AnimateIn delay={100}>
              <h2>One team.<br /><span style={{ color: "var(--accent)" }}>Every trade.</span></h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={200}>
            <p style={{ color: "var(--text-dim)", fontSize: "clamp(15px, 1.3vw, 18px)", maxWidth: 480, lineHeight: 1.6 }}>
              From a single repair to a full gut-renovation, Pioneer covers every stage of your project — so you don&apos;t juggle five contractors hoping they show up. We do, every time, on time.
            </p>
          </AnimateIn>
        </div>
      </div>

      <div className="container">
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((s) => (
            <Link key={s.num} href="/services" className="service-row" style={{ display: "grid" }}>
              <div className="service-row__num">{s.num}</div>
              <div className="service-row__title">{s.title}</div>
              <div className="service-row__desc">{s.desc}</div>
              <div className="service-row__tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="service-row__arrow"><ArrowIcon /></div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .services-head { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
