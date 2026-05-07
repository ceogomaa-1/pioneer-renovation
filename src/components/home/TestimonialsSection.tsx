"use client";
import { useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const testimonials = [
  { stars: "★★★★★", quote: "Pioneer transformed our basement from a concrete dungeon into the nicest room in the house. On time, on budget, and the crew was spotless.", name: "Jason M.", role: "Homeowner — Whitby", init: "JM" },
  { stars: "★★★★★", quote: "We hired them for a full kitchen gut. The tile work alone was worth every penny. No shortcuts, no surprises. These guys are the real deal.", name: "Priya K.", role: "Homeowner — Pickering", init: "PK" },
  { stars: "★★★★★", quote: "Drywall, electrical, flooring — all in one crew. My renovation was done in three weeks. Other companies quoted six. Highly recommend.", name: "Marcus T.", role: "Investment Property — Ajax", init: "MT" },
  { stars: "★★★★★", quote: "The before-and-after on our bathroom is unreal. Level 5 drywall finish, marble tile, new vanity. Looks like a magazine. Cost less than we budgeted.", name: "Sandra L.", role: "Homeowner — Oshawa", init: "SL" },
  { stars: "★★★★★", quote: "Pioneer moved us and then renovated the new place before we moved in. Having one company handle both was a game-changer. Total pros.", name: "David C.", role: "Homeowner — Scarborough", init: "DC" },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 500 : -500, behavior: "smooth" });
  };

  return (
    <section className="section testimonials" id="testimonials" style={{ background: "var(--bg-soft)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <AnimateIn><div className="eyebrow">Client Love</div></AnimateIn>
            <AnimateIn delay={100}><h2>What they<br /><span style={{ color: "var(--accent)" }}>say.</span></h2></AnimateIn>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["←", "→"].map((dir, i) => (
              <button
                key={dir}
                onClick={() => scroll(i === 0 ? "left" : "right")}
                style={{
                  width: 56, height: 56,
                  border: "1px solid var(--border)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--cream)", fontSize: 18,
                  transition: "background 0.3s, border-color 0.3s, color 0.3s",
                  cursor: "pointer",
                }}
                className="scroll-btn"
              >
                {dir}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        style={{
          display: "flex", gap: 24, marginTop: 60,
          overflowX: "auto", scrollSnapType: "x mandatory",
          paddingLeft: "var(--pad)", paddingRight: "var(--pad)",
          paddingBottom: 8,
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="t-card" style={{ scrollSnapAlign: "start" }}>
            <div className="t-card__stars">{t.stars}</div>
            <p className="t-card__quote">{t.quote}</p>
            <div className="t-card__author">
              <div className="t-card__avatar">{t.init}</div>
              <div>
                <div className="t-card__name">{t.name}</div>
                <div className="t-card__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scroll-btn:hover { background: var(--accent) !important; border-color: var(--accent) !important; color: #000 !important; }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
