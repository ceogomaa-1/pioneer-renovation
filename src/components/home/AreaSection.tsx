import AnimateIn from "@/components/AnimateIn";

const cities = [
  "Durham Region", "Whitby", "Oshawa", "Ajax",
  "Pickering", "Clarington", "Scarborough", "North York",
  "Markham", "Mississauga", "Brampton", "Toronto",
];

export default function AreaSection() {
  return (
    <section className="section area" id="area" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }} className="area-grid">
          <div>
            <AnimateIn><div className="eyebrow">Service Area</div></AnimateIn>
            <AnimateIn delay={100}><h2>We serve<br /><span style={{ color: "var(--accent)" }}>the GTA.</span></h2></AnimateIn>
            <AnimateIn delay={200}>
              <p style={{ color: "var(--text-dim)", fontSize: 16, lineHeight: 1.7, maxWidth: 480, marginTop: 24, marginBottom: 48 }}>
                Based in Durham Region, we run crews across the Greater Toronto Area. If you&apos;re within reach, we&apos;ll show up.
              </p>
            </AnimateIn>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--border)" }}>
              {cities.map((city, i) => (
                <div key={city} className="city-row" style={{ paddingLeft: i % 2 === 1 ? 24 : 0 }}>
                  {city}
                  <span className="city-row__dot" />
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder — stylised SVG */}
          <AnimateIn delay={150}>
            <div style={{
              aspectRatio: "1/1",
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg viewBox="0 0 400 400" style={{ width: "100%", height: "100%", opacity: 0.6 }}>
                {/* Stylised GTA map outlines */}
                <path d="M50 300 Q100 250 150 220 Q200 190 260 200 Q320 210 360 180 Q370 150 350 120 Q330 90 300 80 Q250 60 200 90 Q150 120 120 160 Q80 210 60 260 Z" fill="none" stroke="#232323" strokeWidth="1.5" />
                <path d="M120 200 Q160 180 200 185 Q240 190 270 175 Q290 165 300 150" fill="none" stroke="#232323" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M80 280 Q120 250 160 240 Q200 230 240 235" fill="none" stroke="#232323" strokeWidth="1" strokeDasharray="4 4" />

                {/* Service area dots */}
                {[
                  [200, 200, "Durham"], [240, 185, "Whitby"], [265, 175, "Oshawa"],
                  [215, 215, "Ajax"], [185, 220, "Pickering"], [290, 160, "Clarington"],
                  [160, 230, "Scarborough"], [145, 215, "North York"],
                ].map(([cx, cy, name], i) => (
                  <g key={i}>
                    <circle cx={cx as number} cy={cy as number} r="5" fill="#ff5c00" opacity={0.9} />
                    <circle cx={cx as number} cy={cy as number} r="5" fill="none" stroke="#ff5c00" strokeWidth="1.5" opacity={0.4}>
                      <animate attributeName="r" from="5" to="18" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <text x={(cx as number) + 8} y={(cy as number) + 4} fontSize="8" fill="#a8a39a" fontFamily="Space Grotesk, sans-serif">{name as string}</text>
                  </g>
                ))}
              </svg>

              <div style={{
                position: "absolute", bottom: 24, left: 24,
                fontSize: 10, textTransform: "uppercase", letterSpacing: 3,
                color: "var(--text-muted)",
              }}>
                <span style={{ color: "var(--accent)", marginRight: 6 }}>●</span>Active service zones
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .area-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
