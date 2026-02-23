import { useState, useEffect, useRef } from 'react';

const SCOOPER_LOGO = "data:image/png;base64,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";

// ▼▼▼ REPLACE THIS ENTIRE PROSPECT BLOCK WITH RESEARCH OUTPUT ▼▼▼
const PROSPECT = {
  name: "FIRST_NAME",
  company: "COMPANY_NAME",
  companyDetail: "ONE_LINE_DESCRIPTION",
  industry: "INDUSTRY",
  teamSize: "~XX",
  painNumber: "XX–XX",
  painPercent: "XX",
  annualCost: "XXXK–XXXK",

  competitors: {
    line: "HEADLINE_STAT",
    detail: "COMPETITOR_DETAILS",
    source: "SOURCE_YEAR",
  },
  automations: [
    // Paste 3-5 automation objects from research output here
  ],
};
// ▲▲▲ END PROSPECT BLOCK ▲▲▲

/* ═══ CSS ═══ */
const CSS = `
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  @keyframes float0{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  @keyframes float1{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  @keyframes float2{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
  @keyframes dashMove{to{stroke-dashoffset:-16}}
  @keyframes pulseRing{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.2);opacity:0}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes particleDrift{
    0%{opacity:0;transform:translate(0,0) scale(0)}
    15%{opacity:.7;transform:translate(var(--dx1),var(--dy1)) scale(1)}
    100%{opacity:0;transform:translate(var(--dx2),var(--dy2)) scale(0)}
  }
  @keyframes tickerScroll{
    0%{transform:translateX(0)}
    100%{transform:translateX(-50%)}
  }
  @keyframes countPulse{
    0%,100%{transform:scale(1)}
    50%{transform:scale(1.04)}
  }
  .fl0{animation:float0 4s ease-in-out infinite}
  .fl1{animation:float1 3.2s ease-in-out infinite .3s}
  .fl2{animation:float2 3.6s ease-in-out infinite .7s}
  .dash-flow line{animation:dashMove 1s linear infinite}
  .shimmer-bar{
    background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.04) 50%,transparent 100%);
    background-size:200% 100%;animation:shimmer 2.5s ease-in-out infinite;
  }
`;

/* ═══ HOOKS ═══ */
function useVis(thr = 0.18) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: thr });
    o.observe(el); return () => o.disconnect();
  }, [thr]);
  return [r, v];
}

function Num({ end, suf = "", pre = "", go, dur = 1400 }) {
  const [v, setV] = useState(0);
  const f = useRef(null);
  useEffect(() => {
    if (!go) return; let t0 = 0;
    const tick = ts => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / dur, 1); setV(Math.round((1 - (1 - p) ** 3) * end)); if (p < 1) f.current = requestAnimationFrame(tick); };
    f.current = requestAnimationFrame(tick); return () => cancelAnimationFrame(f.current);
  }, [go, end, dur]);
  return <span>{pre}{v}{suf}</span>;
}

/* ═══ COMPONENTS ═══ */

function Particles({ color, on, count = 8 }) {
  if (!on) return null;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: count }).map((_, i) => {
        const dx1 = (Math.random() - 0.5) * 40, dy1 = -15 - Math.random() * 20;
        const dx2 = dx1 * 2.5, dy2 = -50 - Math.random() * 40;
        return (
          <div key={i} style={{
            position: "absolute", left: `${15 + Math.random() * 70}%`, bottom: `${10 + Math.random() * 30}%`,
            width: 3 + Math.random() * 3, height: 3 + Math.random() * 3, borderRadius: "50%", background: color, opacity: 0,
            "--dx1": `${dx1}px`, "--dy1": `${dy1}px`, "--dx2": `${dx2}px`, "--dy2": `${dy2}px`,
            animation: `particleDrift ${2.5 + Math.random() * 2}s ease-out ${Math.random() * 3}s infinite`,
          }} />
        );
      })}
    </div>
  );
}

function FlowDiagram({ steps, color, vis }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, padding: "4px 0" }}>
      {steps.map((s, j) => (
        <div key={j} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className={`fl${j}`} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderRadius: 13, width: "100%", maxWidth: 240,
            background: j === 1 ? `${color}10` : "rgba(255,255,255,0.02)",
            border: j === 1 ? `1px solid ${color}28` : "1px solid rgba(255,255,255,0.04)",
            opacity: vis ? 1 : 0, transform: vis ? "translateY(0) scale(1)" : "translateY(14px) scale(0.9)",
            transition: `all 0.55s cubic-bezier(.34,1.56,.64,1) ${0.1 + j * 0.16}s`,
            position: "relative", overflow: "hidden",
          }}>
            {j === 1 && <div className="shimmer-bar" style={{ position: "absolute", inset: 0, borderRadius: 13 }} />}
            <span style={{ fontSize: 18, lineHeight: 1, position: "relative" }}>{s.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: j === 1 ? color : "#8e8e9e", position: "relative" }}>{s.label}</span>
            {/* Pulse ring on middle node */}
            {j === 1 && vis && (
              <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 8, height: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, opacity: 0.6 }} />
                <div style={{ position: "absolute", inset: -2, borderRadius: "50%", border: `1px solid ${color}`, animation: "pulseRing 2s ease-out infinite" }} />
              </div>
            )}
          </div>
          {j < steps.length - 1 && (
            <svg width="2" height="24" viewBox="0 0 2 24" className="dash-flow" style={{ opacity: vis ? 0.5 : 0, transition: `opacity 0.4s ease-out ${0.3 + j * 0.15}s`, margin: "1px 0" }}>
              <line x1="1" y1="0" x2="1" y2="24" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function AutoCard({ a, i }) {
  const [ref, vis] = useVis(0.12);
  const c = a.color;
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(44px)", transition: "all 0.75s cubic-bezier(.25,.46,.45,.94)" }}>
      <div style={{ background: "#0e0e17", borderRadius: 22, border: `1px solid ${c}14`, overflow: "hidden", position: "relative" }}>
        <Particles color={c} on={vis} />
        {/* Top accent */}
        <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${c}, transparent)`, opacity: vis ? 0.4 : 0, transition: "opacity 0.8s 0.2s" }} />

        <div style={{ padding: "24px 20px 20px", position: "relative" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: `${c}0c`, border: `1px solid ${c}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: c, fontWeight: 800, fontSize: 13 }}>0{i + 1}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>{a.title}</h3>
          </div>

          {/* Description */}
          <p style={{ color: "#7a7a8d", fontSize: 13, lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 50 }}>{a.desc}</p>



          {/* Flow + Before/After 2-col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "start" }}>
            {/* Flow */}
            <div style={{ background: "rgba(255,255,255,0.012)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 16, padding: "18px 12px", display: "flex", justifyContent: "center" }}>
              <FlowDiagram steps={a.flow} color={c} vis={vis} />
            </div>

            {/* Before / After / Saved */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                background: "rgba(244,63,94,0.03)", border: "1px solid rgba(244,63,94,0.07)", borderRadius: 13, padding: "14px 12px", textAlign: "center",
                opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(18px)", transition: "all 0.55s ease-out 0.25s",
              }}>
                <div style={{ fontSize: 9, color: "#f87171", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 5 }}>Now</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#fca5a5", marginBottom: 1 }}>{a.before.value}</div>
                <div style={{ fontSize: 10, color: "#4b4b5a" }}>{a.before.sub}</div>
              </div>
              <div style={{ textAlign: "center", opacity: vis ? 1 : 0, transition: "opacity 0.3s ease-out 0.4s" }}>
                <svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 3v12M5 11l4 4 4-4" fill="none" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /></svg>
              </div>
              <div style={{
                background: `${c}06`, border: `1px solid ${c}12`, borderRadius: 13, padding: "14px 12px", textAlign: "center", position: "relative", overflow: "hidden",
                opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(18px)", transition: "all 0.55s ease-out 0.45s",
              }}>
                <div className="shimmer-bar" style={{ position: "absolute", inset: 0, borderRadius: 13 }} />
                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: 9, color: c, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 5 }}>With AI</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 1 }}>{a.after.value}</div>
                  <div style={{ fontSize: 10, color: "#4b4b5a" }}>{a.after.sub}</div>
                </div>
              </div>
              {/* Saved badge */}
              <div style={{
                textAlign: "center", padding: "7px 10px", borderRadius: 10, background: `${c}08`, border: `1px solid ${c}12`,
                opacity: vis ? 1 : 0, transition: "opacity 0.5s ease-out 0.6s",
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: c }}>🕐 {a.saved} saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ FLOATING CTA ═══ */
function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > window.innerHeight * 1.2);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div style={{
      position: "fixed", bottom: 20, left: "50%", transform: `translateX(-50%) translateY(${show ? 0 : 80}px)`,
      zIndex: 60, transition: "transform 0.4s cubic-bezier(.25,.46,.45,.94)",
      pointerEvents: show ? "auto" : "none",
    }}>
      <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" style={{
        display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 999,
        background: "linear-gradient(90deg, #f59e0b, #f97316)", color: "#fff", fontWeight: 700, fontSize: 13,
        textDecoration: "none", boxShadow: "0 6px 30px rgba(245,158,11,0.3), 0 0 0 1px rgba(245,158,11,0.4)",
        cursor: "pointer", whiteSpace: "nowrap",
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
        Interested? Let's talk
      </a>
    </div>
  );
}

/* ═══ MAIN ═══ */
export default function Brief() {
  const [heroRef, heroVis] = useVis(0.1);
  const [proofRef, proofVis] = useVis(0.3);
  const [urgRef, urgVis] = useVis(0.2);
  const [sumRef, sumVis] = useVis(0.2);
  const [ctaRef, ctaVis] = useVis(0.15);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#08080e", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif", color: "#fff", overflowX: "hidden" }}>
      <style>{CSS}</style>
      <FloatingCTA />

      {/* ─── TOP BAR ─── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px",
        background: scrollY > 60 ? "rgba(8,8,14,0.92)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(16px)" : "none", WebkitBackdropFilter: scrollY > 60 ? "blur(16px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={SCOOPER_LOGO} alt="Scooper AI" style={{ width: 26, height: 26, borderRadius: 7, objectFit: "cover" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Scooper AI</span>
        </div>
        <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", color: "#f59e0b", fontSize: 11, fontWeight: 600, textDecoration: "none" }}>
          Book a Call
        </a>
      </div>

      {/* ═══ 1. HERO ═══ */}
      <section ref={heroRef} style={{
        minHeight: "100vh", minHeight: "100dvh",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "5%", left: "50%", transform: `translateX(-50%) translateY(${scrollY * 0.12}px)`, width: "70%", maxWidth: 450, aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 560 }}>
          {/* Badge */}
          <div style={{ ...tr(heroVis, 0), display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.1)", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", animation: "pulseRing 2.5s ease-out infinite" }} />
            <span style={{ fontSize: 10, color: "#777", letterSpacing: 1.5, textTransform: "uppercase" }}>Prepared for {PROSPECT.name} at {PROSPECT.company}</span>
          </div>

          {/* Headline */}
          <h1 style={{ ...tr(heroVis, 0.1), fontSize: "clamp(28px, 6.5vw, 50px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 16px" }}>
            <span style={{ color: "#fff" }}>Hi {PROSPECT.name}, your team spends</span><br />
            <span style={{ background: "linear-gradient(135deg, #f43f5e, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{PROSPECT.painNumber} hrs/week</span><br />
            <span style={{ color: "#fff" }}>on work AI does in minutes.</span>
          </h1>

          <p style={{ ...tr(heroVis, 0.22), color: "#555", fontSize: 14, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 20px" }}>
            We researched {PROSPECT.company} and found {PROSPECT.automations.length} automations that could reclaim that time — worth an estimated <span style={{ color: "#fbbf24", fontWeight: 700 }}>${PROSPECT.annualCost}/year</span>.
          </p>

          {/* Scroll prompt */}
          <div style={{ ...tr(heroVis, 0.32), display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 10, color: "#3a3a45", letterSpacing: 1.5, textTransform: "uppercase" }}>Scroll to explore</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="fl0">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(245,158,11,0.18)" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="2" fill="rgba(245,158,11,0.35)"><animate attributeName="cy" values="7;14;7" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite" /></circle>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ 2. SOCIAL PROOF + COMPETITIVE PRESSURE ═══ */}
      <section ref={proofRef} style={{ padding: "40px 16px 20px", maxWidth: 640, margin: "0 auto" }}>
        {/* Trust bar */}
        <div style={{
          ...tr(proofVis, 0), borderRadius: 16, background: "#0e0e17", border: "1px solid rgba(255,255,255,0.04)",
          padding: "16px 20px", textAlign: "center", marginBottom: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: "#555", fontWeight: 600 }}>We've built AI systems for</span>
            <span style={{ fontSize: 13, color: "#fff", fontWeight: 800 }}>50+ businesses</span>
            <div style={{ display: "flex", gap: 4 }}>
              {[1, 2, 3, 4, 5].map(s => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12"><polygon points="6,0 7.5,4 12,4 8.5,6.5 9.7,11 6,8 2.3,11 3.5,6.5 0,4 4.5,4" fill="#f59e0b" /></svg>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive warning */}
        <div style={{
          ...tr(proofVis, 0.12), borderRadius: 16, background: "rgba(244,63,94,0.03)", border: "1px solid rgba(244,63,94,0.08)",
          padding: "16px 20px",
        }}>
          <div style={{ display: "flex", alignItems: "start", gap: 10 }}>
            <span style={{ fontSize: 16, lineHeight: 1, marginTop: 1 }}>⚡</span>
            <div>
              <p style={{ color: "#f87171", fontSize: 13, fontWeight: 700, marginBottom: 3 }}>
                {PROSPECT.competitors.line} <span style={{ color: "#6b7280", fontWeight: 400 }}>({PROSPECT.competitors.source})</span>
              </p>
              <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.5 }}>{PROSPECT.competitors.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. AUTOMATION CARDS ═══ */}
      <section style={{ padding: "32px 16px 40px", maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
        {PROSPECT.automations.map((a, i) => (
          <AutoCard key={i} a={a} i={i} />
        ))}
      </section>

      {/* ═══ 4. COST OF INACTION ═══ */}
      <section ref={urgRef} style={{ padding: "20px 16px 40px", maxWidth: 640, margin: "0 auto" }}>
        <div style={{
          ...tr(urgVis, 0), borderRadius: 22, background: "linear-gradient(135deg, rgba(244,63,94,0.04), rgba(244,63,94,0.01))",
          border: "1px solid rgba(244,63,94,0.1)", padding: "28px 24px", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <Particles color="#f43f5e" on={urgVis} count={5} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 10, color: "#f87171", textTransform: "uppercase", letterSpacing: 2.5, fontWeight: 700, marginBottom: 12 }}>Every month without AI</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[
                { v: 300, s: "+", p: "", sub: "hours of manual work", c: "#fca5a5" },
                { v: 25, s: "K+", p: "$", sub: "in opportunity cost", c: "#fca5a5" },
                { v: 0, s: "", p: "", sub: "data advantage built", c: "#f87171", raw: "Zero" },
              ].map((m, i) => (
                <div key={i} style={{ opacity: urgVis ? 1 : 0, transform: urgVis ? "scale(1)" : "scale(0.9)", transition: `all 0.5s ease-out ${0.15 + i * 0.1}s` }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: m.c, lineHeight: 1, marginBottom: 4 }}>
                    {m.raw || <Num end={m.v} suf={m.s} pre={m.p} go={urgVis} />}
                  </div>
                  <div style={{ fontSize: 10, color: "#6b7280" }}>{m.sub}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#555", fontSize: 11, marginTop: 16, lineHeight: 1.5 }}>
              AI systems improve with data. Agencies that start building this advantage now will be increasingly difficult to catch.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. SUMMARY ═══ */}
      <section ref={sumRef} style={{ padding: "20px 16px 40px", maxWidth: 640, margin: "0 auto" }}>
        <div style={{
          ...tr(sumVis, 0), borderRadius: 22, background: "#0e0e17", border: "1px solid rgba(245,158,11,0.1)",
          padding: "32px 24px", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <Particles color="#f59e0b" on={sumVis} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 2.5, marginBottom: 18, fontWeight: 600 }}>What AI unlocks for your team</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { v: 80, s: " hrs", p: "~", sub: "freed up every week" },
                { v: 350, s: "K", p: "$", sub: "in reclaimed capacity" },
                { v: 2, s: "–3x", p: "", sub: "more clients without new hires" },
              ].map((m, i) => (
                <div key={i} style={{ opacity: sumVis ? 1 : 0, transform: sumVis ? "scale(1)" : "scale(0.9)", transition: `all 0.5s ease-out ${0.15 + i * 0.1}s` }}>
                  <div style={{ fontSize: "clamp(26px, 5vw, 34px)", fontWeight: 900, background: "linear-gradient(135deg, #fbbf24, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: 5 }}>
                    <Num end={m.v} suf={m.s} pre={m.p} go={sumVis} />
                  </div>
                  <div style={{ fontSize: 11, color: "#555" }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. HOW SCOOPER WORKS + CTA ═══ */}
      <section ref={ctaRef} style={{ padding: "20px 16px 100px", maxWidth: 540, margin: "0 auto" }}>
        <div style={{ ...tr(ctaVis, 0), textAlign: "center", marginBottom: 32 }}>

          <h2 style={{ fontSize: 24, fontWeight: 900, margin: "0 0 4px", color: "#fff" }}>How Scooper AI Works</h2>
          <p style={{ color: "#555", fontSize: 13 }}>On-demand AI engineering — no retainers, no bloat</p>
        </div>

        <div style={{ marginBottom: 40 }}>
          {[
            { icon: "💬", t: "You describe it", d: "A workflow, a pain point, an idea." },
            { icon: "⚡", t: "We build it custom", d: "Not templates. Engineered for your team." },
            { icon: "🔄", t: "It runs for you", d: "Deployed, monitored, continuously improved." },
          ].map((s, i) => (
            <div key={i} style={{
              ...tr(ctaVis, 0.12 + i * 0.1), display: "flex", alignItems: "center", gap: 16, padding: "18px 0",
              borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.03)" : "none",
            }}>
              <span style={{ fontSize: 24, lineHeight: 1, width: 36, textAlign: "center", flexShrink: 0 }}>{s.icon}</span>
              <div style={{ flex: 1 }}><div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 1 }}>{s.t}</div><div style={{ color: "#555", fontSize: 12 }}>{s.d}</div></div>
              <span style={{ color: "rgba(245,158,11,0.12)", fontWeight: 900, fontSize: 17 }}>0{i + 1}</span>
            </div>
          ))}
        </div>

        <div style={{ ...tr(ctaVis, 0.45), textAlign: "center" }}>
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 999,
            background: "linear-gradient(90deg, #f59e0b, #f97316)", color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 4px 30px rgba(245,158,11,0.2), 0 0 0 1px rgba(245,158,11,0.3)", cursor: "pointer",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            </svg>
            Let's Build These for You
          </a>
          <p style={{ color: "#3a3a45", fontSize: 11, marginTop: 14 }}>15 min · No commitment · Custom to {PROSPECT.company}</p>
        </div>
      </section>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.03)", padding: "20px 24px", textAlign: "center" }}>
        <span style={{ fontSize: 10, color: "#2a2a30" }}>Built by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" style={{ color: "#3a3a45", textDecoration: "none" }}>Scooper AI</a></span>
      </div>
    </div>
  );
}

/* ═══ TRANSITION HELPER ═══ */
function tr(vis, delay = 0) {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.65s cubic-bezier(.25,.46,.45,.94) ${delay}s`,
  };
}