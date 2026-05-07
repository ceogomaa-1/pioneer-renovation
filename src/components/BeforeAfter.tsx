"use client";
import { useRef, useState, useCallback } from "react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({ before, after, beforeLabel = "Before", afterLabel = "After" }: Props) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) getPos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { getPos(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="ba"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* Before */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={before} alt="Before renovation" style={{ zIndex: 1 }} />

      {/* After — clipped */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt="After renovation"
        style={{ zIndex: 2, clipPath: `polygon(${pos}% 0, 100% 0, 100% 100%, ${pos}% 100%)` }}
      />

      {/* Handle */}
      <div className="ba__handle" style={{ left: `${pos}%`, zIndex: 3 }}>
        <div className="ba__knob">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 12H16M8 12L5 9M8 12L5 15M16 12L19 9M16 12L19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="ba__label" style={{ left: 24, zIndex: 4 }}>{beforeLabel}</div>
      <div className="ba__label" style={{ right: 24, zIndex: 4, color: "var(--accent)" }}>{afterLabel}</div>
    </div>
  );
}
