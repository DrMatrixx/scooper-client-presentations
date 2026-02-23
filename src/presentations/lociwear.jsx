const SCOOPER_LOGO = "/scooperai-logo.png";

const PROSPECT = {
  name: "Emmanuel",
  company: "LØCI",
  companyDetail: "Luxury vegan sneaker brand backed by Leonardo DiCaprio, founded 2021",
  industry: "Sustainable Fashion / DTC Footwear",
  teamSize: "~20",
  painNumber: "70–130",
  painPercent: "55",
  annualCost: "300K–500K",

  specifics: [
    "Backed by Leonardo DiCaprio — raised $4.5M seed in first 15 months",
    "Nicki Minaj equity partner — DOPAMINE launch drove 1.3M shoppers, 3,500% traffic surge",
    "982,000+ ocean plastic bottles repurposed — handmade in Porto, Portugal",
    "Stocked at Nordstrom, Neiman Marcus, Selfridges, Bergdorf Goodman",
  ],

  competitors: {
    line: "75% of fashion executives now prioritize AI for operations",
    detail: "Allbirds uses DynamicYield AI for personalization. CARIUMA deploys AI-driven design customization. Veja implemented NewStore omnichannel POS. The AI-in-fashion market is projected to hit $7B by 2029.",
    source: "McKinsey State of Fashion 2025",
  },

  automations: [
    {
      title: "Customer Support Agent",
      desc: "Handles post-purchase inquiries, order tracking, sizing questions, and returns across your DTC store, TikTok Shop, and wholesale partners — in seconds, not hours. Scales instantly during celebrity-driven demand spikes.",
      before: { value: "4–8 hrs/day", sub: "manual ticket handling" },
      after: { value: "80% automated", sub: "AI resolves instantly" },
      flow: [
        { label: "Customer Inquiries", icon: "💬" },
        { label: "AI Support Agent", icon: "🧠" },
        { label: "Instant Resolution", icon: "⚡" },
      ],
      color: "#3b82f6",
      saved: "15–25 hrs/wk",
    },
    {
      title: "Product Content Engine",
      desc: "Generates on-brand product descriptions, email campaigns, and social captions for every sneaker drop and collab — across US, UK, and DE markets. Maintains LØCI's voice from DOPAMINE launches to Origin classics.",
      before: { value: "3–5 hrs", sub: "per product launch" },
      after: { value: "15 min review", sub: "AI-generated drafts" },
      flow: [
        { label: "Product & Brand Data", icon: "📋" },
        { label: "AI Content Agent", icon: "🧠" },
        { label: "Multi-Channel Copy", icon: "✍️" },
      ],
      color: "#f59e0b",
      saved: "10–20 hrs/wk",
    },
    {
      title: "Demand & Inventory Intelligence",
      desc: "Predicts demand spikes from celebrity moments and social buzz, syncs with your made-to-order production in Porto, and prevents the stockouts that happen when 1.3 million shoppers show up at once.",
      before: { value: "Reactive", sub: "overwhelmed by viral spikes" },
      after: { value: "Predictive", sub: "AI forecasts demand" },
      flow: [
        { label: "Sales & Social Signals", icon: "📊" },
        { label: "AI Demand Agent", icon: "🧠" },
        { label: "Smart Restock Alerts", icon: "🔔" },
      ],
      color: "#10b981",
      saved: "8–15 hrs/wk",
    },
    {
      title: "Celebrity & Influencer Tracker",
      desc: "Monitors when Ben Affleck, Kristen Bell, or Kylie Jenner are spotted in your sneakers — in real time. Surfaces partnership opportunities and tracks organic mentions so your team can capitalize on every moment.",
      before: { value: "Hours / Days", sub: "to spot celebrity mentions" },
      after: { value: "Real-time", sub: "instant detection" },
      flow: [
        { label: "Social & News Feeds", icon: "📡" },
        { label: "AI Monitoring Agent", icon: "🧠" },
        { label: "Celebrity Alert Brief", icon: "📄" },
      ],
      color: "#a855f7",
      saved: "8–12 hrs/wk",
    },
    {
      title: "Multi-Channel Retail Sync",
      desc: "Keeps inventory, pricing, and order data in sync across Shopify, TikTok Shop, Nordstrom, Neiman Marcus, Selfridges, and every other retail channel — eliminating manual updates and oversell risk.",
      before: { value: "Manual", sub: "per-channel updates" },
      after: { value: "Auto-synced", sub: "unified dashboard" },
      flow: [
        { label: "Retail Partner Data", icon: "🗂️" },
        { label: "AI Sync Agent", icon: "🧠" },
        { label: "Unified Inventory View", icon: "📈" },
      ],
      color: "#ec4899",
      saved: "10–18 hrs/wk",
    },
  ],
};

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
        <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${c}, transparent)`, opacity: vis ? 0.4 : 0, transition: "opacity 0.8s 0.2s" }} />

        <div style={{ padding: "24px 20px 20px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: `${c}0c`, border: `1px solid ${c}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: c, fontWeight: 800, fontSize: 13 }}>0{i + 1}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>{a.title}</h3>
          </div>

          <p style={{ color: "#7a7a8d", fontSize: 13, lineHeight: 1.6, margin: "0 0 6px", paddingLeft: 50 }}>{a.desc}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignItems: "start" }}>
            <div style={{ background: "rgba(255,255,255,0.012)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: 16, padding: "18px 12px", display: "flex", justifyContent: "center" }}>
              <FlowDiagram steps={a.flow} color={c} vis={vis} />
            </div>

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
        <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <img src={SCOOPER_LOGO} alt="Scooper AI" style={{ width: 26, height: 26, borderRadius: 7, objectFit: "cover" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Scooper AI</span>
        </a>
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
                { v: 450, s: "+", p: "", sub: "hours of manual work", c: "#fca5a5" },
                { v: 35, s: "K+", p: "$", sub: "in opportunity cost", c: "#fca5a5" },
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
              AI systems improve with data. Brands that start building this advantage now will be increasingly difficult to catch.
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
                { v: 70, s: " hrs", p: "~", sub: "freed up every week" },
                { v: 340, s: "K", p: "$", sub: "in reclaimed capacity" },
                { v: 2, s: "–3x", p: "", sub: "more output without new hires" },
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
