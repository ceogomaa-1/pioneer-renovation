"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const floatsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in floats
    const floats = floatsRef.current?.querySelectorAll<HTMLDivElement>(".float-card");
    floats?.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, 1200 + i * 150);
    });
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      padding: "120px var(--pad) 80px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* Video BG */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Local file for dev, CDN fallback for production */}
        <source src="/video/hero2.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-construction-workers-at-a-building-site-7881/1080p.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — keeps text readable while letting video show */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.95) 100%)",
        zIndex: 1,
      }} />

      {/* Grid lines */}
      <div className="grid-lines" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Float cards */}
      <div ref={floatsRef} style={{
        position: "absolute", right: "var(--pad)", top: "38%",
        display: "flex", flexDirection: "column", gap: 16,
        zIndex: 2, pointerEvents: "none",
      }} className="hero-floats">
        {[
          { num: "100+", label: "Projects Delivered" },
          { num: <><span>5</span><em style={{ fontStyle: "normal", color: "var(--accent)" }}>★</em></>, label: "Average Rating" },
          { num: "100%", label: "Licensed & Insured" },
        ].map((c, i) => (
          <div key={i} className="float-card" style={{ opacity: 0, transform: "translateX(40px)" }}>
            <strong>{c.num}</strong>
            {c.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--max)", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 60, flexWrap: "wrap" }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--text-muted)", lineHeight: 1.6 }}>
            <span style={{ color: "var(--accent)", display: "block", fontWeight: 600 }}>Pioneer Renovation Co.</span>
            Durham Region · Scarborough · GTA
          </div>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--text-muted)", lineHeight: 1.6, textAlign: "right" }}>
            <span style={{ color: "var(--accent)", display: "block", fontWeight: 600 }}>Est. 2019</span>
            Licensed · Insured · Warrantied
          </div>
        </div>

        <h1 style={{
          fontFamily: "Anton, 'Archivo Black', sans-serif",
          fontSize: "clamp(56px, 13vw, 220px)",
          lineHeight: 0.92,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "var(--cream)",
          margin: 0,
        }}>
          <span style={{ display: "block" }}>Built to last.</span>
          <span style={{ display: "block", color: "var(--accent)" }}>Crafted to impress.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, marginTop: 56, alignItems: "end" }} className="hero-bottom">
          <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", color: "var(--text-dim)", maxWidth: 540, lineHeight: 1.55 }}>
            We&apos;re <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Pioneer Renovation</strong> — Durham &amp; the GTA&apos;s no-bullshit home renovation crew. From a single drywall patch to a full property transformation, every cut, joint and finish is dialed in. <strong style={{ color: "var(--cream)", fontWeight: 500 }}>One team. Every trade. Done right.</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <Link href="/quote" className="btn-primary">
              <span>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="1.8" /></svg>
              </span>
            </Link>
            <a href="tel:6475332508" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.5 9.5L9.5 8.5L7.5 10C5.5 9 4 7.5 3 5.5L4.5 3.5L3.5 1.5L1 1.5C1 7 5 11 11.5 11L11.5 9.5Z" stroke="currentColor" strokeWidth="1.2" /></svg>
              647-533-2508
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        zIndex: 3, fontSize: 10, textTransform: "uppercase", letterSpacing: 4,
        color: "var(--text-muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
      }}>
        Scroll
        <span className="scroll-cue-line" style={{ display: "block", width: 1, height: 40, background: "linear-gradient(180deg, var(--accent), transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-floats { display: none !important; }
          .hero-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
