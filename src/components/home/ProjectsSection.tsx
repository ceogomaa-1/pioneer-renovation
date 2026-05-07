import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import BeforeAfter from "@/components/BeforeAfter";

const gallery = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80", label: "Kitchen Reno — Ajax", size: "lg" },
  { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80", label: "Tile Work — Whitby", size: "md" },
  { src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=700&q=80", label: "Hardwood — Oshawa", size: "sm" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", label: "Bathroom — Pickering", size: "sm" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80", label: "Deck Build — Clarington", size: "sm" },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projects" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 64, flexWrap: "wrap" }}>
          <div>
            <AnimateIn><div className="eyebrow">Our Work</div></AnimateIn>
            <AnimateIn delay={100}><h2>Real results.<br /><span style={{ color: "var(--accent)" }}>Real homes.</span></h2></AnimateIn>
          </div>
          <AnimateIn delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
              <p style={{ color: "var(--text-dim)", maxWidth: 380, lineHeight: 1.6, textAlign: "right" }}>
                Every project is a permanent record. We stand behind every finish.
              </p>
              <Link href="/projects" className="btn-ghost">
                View All Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" /></svg>
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Before/After Slider */}
        <AnimateIn>
          <BeforeAfter
            before="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
            after="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80"
            beforeLabel="Before"
            afterLabel="After"
          />
        </AnimateIn>

        {/* Gallery grid */}
        <AnimateIn delay={100}>
          <div className="projects__gallery" style={{ marginTop: 80 }}>
            {gallery.map((item, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item--${item.size}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="gallery-item__label">{item.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
