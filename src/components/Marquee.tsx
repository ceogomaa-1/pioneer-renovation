export default function Marquee() {
  const items = ["Home Renovation", "Drywall", "Plumbing", "Electrical", "Flooring", "Tile & Vinyl", "Indoor", "Outdoor", "Moving"];

  const track = (
    <>
      {items.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 60 }}>
          <span style={{ color: "var(--accent)" }}>★</span>
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ display: "flex", gap: 60, alignItems: "center" }}>
        <div className="marquee__item">{track}</div>
        <div className="marquee__item">{track}</div>
        <div className="marquee__item">{track}</div>
      </div>
    </div>
  );
}
