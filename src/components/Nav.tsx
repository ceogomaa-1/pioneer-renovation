"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px var(--pad)" : "22px var(--pad)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(10,10,10,0.95)" : "linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.4s, padding 0.4s, border-color 0.4s",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <PioneerLogo />
      </Link>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="nav-desktop">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: pathname === l.href ? "var(--cream)" : "var(--text-dim)",
              position: "relative",
              padding: "8px 0",
              transition: "color 0.3s",
            }}
            className="nav-link"
          >
            {l.label}
            {pathname === l.href && (
              <span style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 1, background: "var(--accent)" }} />
            )}
          </Link>
        ))}
        <Link
          href="/quote"
          style={{
            border: "1px solid var(--cream)",
            color: "var(--cream)",
            padding: "12px 22px",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 2,
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.3s, color 0.3s, border-color 0.3s",
          }}
          className="nav-cta"
        >
          Get a Quote
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ display: "none", flexDirection: "column", gap: 5, padding: 8, zIndex: 110, background: "none", border: "none" }}
        className="menu-btn"
        aria-label="Menu"
      >
        <span style={{ width: 26, height: 2, background: "var(--cream)", display: "block", transition: "transform 0.3s, opacity 0.3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
        <span style={{ width: 26, height: 2, background: "var(--cream)", display: "block", transition: "transform 0.3s, opacity 0.3s", opacity: open ? 0 : 1 }} />
        <span style={{ width: 26, height: 2, background: "var(--cream)", display: "block", transition: "transform 0.3s, opacity 0.3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--bg)",
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          justifyContent: "center", padding: "0 var(--pad)", gap: 20, zIndex: 105,
        }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: "clamp(28px, 8vw, 48px)", fontFamily: "Anton, sans-serif", color: pathname === l.href ? "var(--accent)" : "var(--cream)", textTransform: "uppercase" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quote"
            style={{ marginTop: 20, fontFamily: "Anton, sans-serif", fontSize: "clamp(28px, 8vw, 48px)", color: "var(--accent)", textTransform: "uppercase" }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop { display: none !important; }
          .menu-btn { display: flex !important; }
        }
        .nav-link:hover { color: var(--cream) !important; }
        .nav-cta:hover { background: var(--accent) !important; color: #000 !important; border-color: var(--accent) !important; }
      `}</style>
    </nav>
  );
}
