import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    num: "01",
    title: "Free Consult",
    desc: "We walk the site, ask the right questions, and give you a straight-talking assessment. No obligation, no sales pitch.",
    icon: "◎",
  },
  {
    num: "02",
    title: "Detailed Quote",
    desc: "Itemized pricing with zero hidden costs. You know exactly what you're paying for before a single tool comes out.",
    icon: "◈",
  },
  {
    num: "03",
    title: "We Build",
    desc: "Our crew shows up on time, keeps the site clean, and works until the job is done right. Weekly updates, always.",
    icon: "◉",
  },
  {
    num: "04",
    title: "Final Walkthrough",
    desc: "We don't ghost you. Every finish is reviewed with you on-site. We fix anything that isn't perfect. Simple.",
    icon: "◍",
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="process" style={{ background: "var(--bg-soft)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <AnimateIn><div className="eyebrow">How It Works</div></AnimateIn>
        <AnimateIn delay={100}>
          <h2>The Pioneer<br /><span style={{ color: "var(--accent)" }}>Process.</span></h2>
        </AnimateIn>

        <div className="process__grid" style={{ marginTop: 80 }}>
          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 80}>
              <div className="process__card">
                <div className="process__card-num">{step.num}</div>
                <div style={{ position: "absolute", top: 32, right: 32, fontSize: 28, color: "var(--text-muted)" }}>{step.icon}</div>
                <div className="process__card-title">{step.title}</div>
                <p className="process__card-desc">{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
