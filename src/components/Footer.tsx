import Link from "next/link";

const PioneerLogo = () => (
  <svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" aria-label="Pioneer Renovation" style={{ height: 44, width: "auto", display: "block" }}>
    <g>
      <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" fill="none" stroke="#ff5c00" strokeWidth="2.5" />
      <polygon points="40,16 60,28 60,52 40,64 20,52 20,28" fill="none" stroke="rgba(255,92,0,0.25)" strokeWidth="1" />
      <path d="M 28 24 L 28 58 L 36 58 L 36 46 L 46 46 C 53 46 56 41 56 36 C 56 28 52 24 45 24 Z M 36 30 L 44 30 C 47 30 48 32 48 36 C 48 38 47 40 44 40 L 36 40 Z" fill="#f3f0e8" />
    </g>
    <text x="92" y="40" fontFamily="Anton, sans-serif" fontSize="32" fill="#f3f0e8" letterSpacing="2.5">PIONEER</text>
    <text x="92" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#ff5c00" letterSpacing="6" fontWeight="500">RENOVATION CO. — EST. 2019</text>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", padding: "80px 0 32px", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 80 }} className="footer-grid">
          <div>
            <PioneerLogo />
            <p style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.7, maxWidth: 320, marginTop: 20 }}>
              Durham Region & the GTA's no-bullshit renovation crew. From a single drywall patch to a full property transformation — done right, every time.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
              {["FB", "IG", "YT"].map((s) => (
                <a key={s} href="#" style={{ width: 40, height: 40, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--text-dim)", letterSpacing: 1, transition: "border-color 0.3s, color 0.3s" }} className="social-icon">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 24, fontWeight: 600 }}>Services</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Home Renovation", "Drywall", "Plumbing", "Electrical", "Flooring", "Tile & Stone", "Vinyl Plank", "Moving"].map((s) => (
                <li key={s}><Link href="/services" style={{ color: "var(--text-dim)", fontSize: 14, transition: "color 0.3s" }} className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 24, fontWeight: 600 }}>Company</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Process", href: "/process" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/quote" },
              ].map((l) => (
                <li key={l.label}><Link href={l.href} style={{ color: "var(--text-dim)", fontSize: 14, transition: "color 0.3s" }} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--accent)", marginBottom: 24, fontWeight: 600 }}>Contact</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              <li><a href="tel:6475332508" style={{ color: "var(--text-dim)", fontSize: 14, transition: "color 0.3s" }} className="footer-link">647-533-2508</a></li>
              <li><a href="mailto:info@pionerrenovation.ca" style={{ color: "var(--text-dim)", fontSize: 14, transition: "color 0.3s" }} className="footer-link">info@pionerrenovation.ca</a></li>
              <li style={{ color: "var(--text-dim)", fontSize: 14, lineHeight: 1.6 }}>Durham Region<br />Scarborough · GTA</li>
            </ul>
            <Link href="/quote" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 28, background: "var(--accent)", color: "#000",
              padding: "14px 24px", fontSize: 12, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: 2,
            }}>
              Free Quote
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" /></svg>
            </Link>
          </div>
        </div>

        {/* Massive footer wordmark */}
        <div style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(60px, 14vw, 220px)",
          color: "var(--cream)",
          lineHeight: 0.85,
          letterSpacing: "-0.02em",
          marginTop: 80,
          borderTop: "1px solid var(--border)",
          paddingTop: 32,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textAlign: "center",
          textTransform: "uppercase",
          opacity: 0.06,
          userSelect: "none",
        }}>
          PIONEER<span style={{ color: "var(--accent)" }}>.</span>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 32,
        }}>
          <span>© {new Date().getFullYear()} Pioneer Renovation Co. All rights reserved.</span>
          <span>Durham · Scarborough · GTA · Est. 2019</span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--cream) !important; }
        .social-icon:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
