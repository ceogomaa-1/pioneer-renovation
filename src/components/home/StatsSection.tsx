"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 100, suffix: "+", label: "Projects Delivered" },
  { num: 7, suffix: "", label: "Years in Business" },
  { num: 100, suffix: "%", label: "Licensed & Insured" },
  { num: 5, suffix: "★", label: "Average Rating" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

function StatItem({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat">
      <div className="stat__num">{count}{suffix}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ background: "var(--accent)", color: "#0a0a0a", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
