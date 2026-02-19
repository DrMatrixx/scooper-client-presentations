import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Rocket,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Target,
  Newspaper,
  FileText,
  Brain,
  PenTool,
  Database,
  Eye,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'The Last Layer',
  description: 'AI Automation Proposal — Amplify Your Agency\'s Impact Through AI-Powered PR Intelligence',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      render: () => (
        <div className="text-center w-full max-w-3xl px-4">
          <style>{`
            @keyframes glow {
              0%, 100% { filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3)); }
              50% { filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.6)); }
            }
            @keyframes borderGlow {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 1; }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-glow { animation: glow 3s ease-in-out infinite; }
            .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }
            .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
            .animation-delay-100 { animation-delay: 0.1s; opacity: 0; }
            .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
            .animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
            .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
            .glass { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          `}</style>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-gray-400 text-xs sm:text-sm">AI Automation Proposal — February 2026</span>
          </div>

          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <img
              src="/the-last-layer-logo.svg"
              alt="The Last Layer"
              className="h-14 sm:h-18 md:h-20 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Katie & The Last Layer team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $150K–$350K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in reclaimed capacity across your team?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '50+', label: 'Brands monitored manually', icon: Eye },
              { value: '68–125', label: 'Hrs/wk on manual ops', icon: Clock },
              { value: '60–70%', label: 'Time on ops vs. strategy', icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="group relative p-3 sm:p-4 glass bg-white/5 rounded-2xl border border-rose-500/20 shadow-lg shadow-rose-500/5 hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <item.icon size={16} className="text-rose-400/70 mx-auto mb-2 sm:w-5 sm:h-5" />
                  <p className="text-rose-400 text-xl sm:text-2xl font-bold">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-lg mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-400">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl animate-border-glow opacity-60 blur-[1px]" />
            <div className="relative glass bg-gray-950/80 rounded-2xl p-4 sm:p-5 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Zap size={14} className="text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                6 AI modules to reclaim <span className="text-white font-bold">50–80 hours/week</span>, deliver real-time media intelligence across all <span className="text-white font-bold">50+ brands</span>, and expand your influencer pool by <span className="text-white font-bold">3–5x</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
            <span>Press</span>
            <div className="px-2.5 py-1.5 bg-white/10 rounded-lg text-gray-400 font-mono text-xs border border-white/10 shadow-inner">→</div>
            <span>to see how</span>
          </div>
        </div>
      ),
    },

    // Slide 2: Operational Reality Mirror
    {
      id: 'reality',
      render: () => {
        const tasks = [
          { task: 'Monitoring media mentions across 50+ client brands (news, social, print, broadcast)', time: '15–25 hrs/wk', change: 'AI NLP engine monitors 2B+ sources in real-time with daily briefings per client' },
          { task: 'Compiling monthly coverage reports for each client (screenshots, metrics, narratives)', time: '20–40 hrs/wk', change: 'AI auto-generates branded reports with metrics, summaries, and trend analysis' },
          { task: 'Drafting press releases, pitches, and personalized journalist outreach across clients', time: '15–25 hrs/wk', change: 'Generative AI produces first drafts in brand voice; team refines with strategy' },
          { task: 'Researching and vetting influencers for gifting campaigns across all client brands', time: '8–15 hrs/wk', change: 'ML platform scores thousands of influencers on demographics, authenticity, brand fit' },
          { task: 'Scanning for emerging parenting/lifestyle trends to inform client strategy', time: '5–10 hrs/wk', change: 'NLP trend detection across 500K+ sources, 2–4 weeks ahead of mainstream' },
          { task: 'Tracking competitive media landscape for client brands', time: '5–10 hrs/wk', change: 'AI competitive monitor auto-tracks mentions, launches, and media share' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Where Your Team's Time Goes
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                50+ brands serviced by a ~6-person team. No AI-powered media monitoring or reporting automation — every operational task is manual.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs sm:text-sm font-medium">{item.task}</p>
                      <p className="text-gray-500 text-xs hidden sm:block">{item.change}</p>
                    </div>
                    <div className="text-amber-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                An estimated <span className="text-white font-bold">60–70% of team capacity</span> consumed by operational tasks — leaving only 30–40% for the strategic relationship work that is The Last Layer's core competitive advantage.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Hidden Cost
    {
      id: 'cost',
      render: () => {
        const costs = [
          { icon: Clock, value: '68–125', metric: 'Hrs/Wk Manual Ops', desc: 'A ~6-person team could serve 2–3x more clients — or deliver significantly deeper strategic work — with AI support.' },
          { icon: Newspaper, value: 'Hours/Days', metric: 'Coverage Detection Lag', desc: 'Competitors using Meltwater or Brand24 detect mentions in minutes. Manual monitoring creates multi-hour or multi-day delays.' },
          { icon: TrendingUp, value: 'Compounding', metric: 'AI Advantage Gap', desc: 'Agencies adopting AI build data advantages that compound over time — their operations scale without proportional headcount.' },
          { icon: Target, value: '88%', metric: 'Orgs Using AI (McKinsey)', desc: 'Professional services saw the biggest year-over-year increase in AI adoption. The industry is moving fast.' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Hidden Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Staying Manual Actually Costs
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {costs.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <item.icon size={16} className="text-rose-400 sm:w-5 sm:h-5" />
                    <p className="text-rose-400 text-lg sm:text-2xl font-bold">{item.value}</p>
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.metric}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center mb-3 sm:mb-4">
              <p className="text-rose-400 text-xs sm:text-sm">
                Estimated Annual Opportunity: <span className="text-white font-bold">$150,000–$350,000</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In reclaimed capacity value (50–80 hrs/week at blended agency rates)</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                The influencer marketing industry hit $32.55B in 2025, driven by AI-powered platforms. Agencies not using AI for influencer intelligence are competing with one hand tied behind their back.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Competitive AI Gap
    {
      id: 'competitive',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Competitive Gap</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            The Race for <GradientText>AI Advantage</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-3 sm:mb-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Edelman / Large Agencies</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Enterprise AI</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Meltwater for real-time intelligence, AI-powered sentiment analysis, automated journalist targeting, predictive analytics. Serve 10x clients per person.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Interdependence PR</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">AI-Native</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Proprietary "Interviewed AI Technology" for journalist profiling, predictive media interest modeling, and personalized pitches at scale.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Boutique Competitors</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Adopting AI Tools</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">GRIN (with Gia AI), Brand24, and CoverageBook for influencer vetting, media monitoring, and automated client reporting.</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-amber-500/5 rounded-lg sm:rounded-xl border border-amber-500/10">
              <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1">42% of businesses use GenAI in marketing & sales (McKinsey 2024)</p>
              <p className="text-gray-400 text-xs sm:text-sm">AI models improve with data. Every campaign feeds the system. Agencies that start building this advantage now will be increasingly difficult to catch.</p>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
              <div>
                <p className="text-white text-sm sm:text-base font-semibold mb-1">The Last Layer's Unbeatable Moat</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  14 years of personal relationships with editors, influencers, and tastemakers that <span className="text-emerald-400 font-medium">no AI can replicate</span>. AI handles the operational overhead so your team can do more of what only they can do.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Today vs AI-Powered
    {
      id: 'vision',
      render: () => {
        const comparisons = [
          { area: 'Media Monitoring', today: 'Manual scanning of news, social, email alerts for 50+ brands; coverage discovered hours/days late', ai: 'AI monitors all sources in real-time; instant alerts, sentiment shifts, and AI-generated daily briefings per client' },
          { area: 'Client Reporting', today: 'Manual clipping, screenshots, metrics; hours per report; narrative from scratch', ai: 'AI auto-generates branded reports with metrics, AI-written summaries; team reviews and adds strategy' },
          { area: 'Influencer Selection', today: 'Manual profile-by-profile review; spreadsheet tracking; limited to known network', ai: 'ML scores thousands on demographics, authenticity, brand fit; team makes final selection with data' },
          { area: 'Trend Intelligence', today: 'Personal instinct, network, and manual social scanning', ai: 'AI scans 500K+ sources daily; surfaces signals 2–4 weeks early; Katie validates with editorial judgment' },
          { area: 'Press & Pitch Creation', today: 'Every pitch written from scratch; journalist personalization impossible at scale', ai: 'AI generates first drafts in brand voice, personalized to each journalist; team refines' },
          { area: 'Campaign Intelligence', today: 'Learnings in email threads and team heads; no queryable system', ai: 'AI knowledge graph connects all data; team instantly surfaces patterns and winning strategies' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Transformation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Today vs. <GradientText>AI-Powered</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {comparisons.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
                  <p className="text-amber-400 text-xs font-semibold mb-1.5 sm:mb-2">{item.area}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                      <span className="text-gray-400 text-xs sm:text-sm">{item.today}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="text-gray-300 text-xs sm:text-sm">{item.ai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Clock, metric: '50–80 hrs', label: 'Reclaimed weekly' },
                { icon: Zap, metric: 'Real-time', label: 'Media intelligence' },
                { icon: Users, metric: '3–5x', label: 'Influencer pool' },
              ].map((item, i) => (
                <div key={i} className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-2 sm:p-4 text-center">
                  <item.icon size={16} className="text-emerald-400 mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5" />
                  <p className="text-white text-base sm:text-xl font-bold">{item.metric}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    // Slide 6: Solution Architecture
    {
      id: 'architecture',
      render: () => {
        const modules = [
          { num: '01', title: 'Media Monitoring', desc: 'NLP sentiment + anomaly', icon: Eye },
          { num: '02', title: 'Report Generation', desc: 'NLP summarization + gen AI', icon: FileText },
          { num: '03', title: 'Influencer Intel', desc: 'ML scoring + discovery', icon: Users },
          { num: '04', title: 'Trend Detection', desc: 'NLP + predictive analytics', icon: TrendingUp },
          { num: '05', title: 'Pitch Generation', desc: 'Gen AI + journalist NLP', icon: PenTool },
          { num: '06', title: 'Knowledge Graph', desc: 'Entity resolution + search', icon: Database },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Last Layer's AI Intelligence — <GradientText>4 Layers</GradientText>
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'PR Operations Intelligence', icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Influencer & Talent Intelligence', icon: Users, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { label: 'Generative Content & Pitch', icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Strategic Intelligence', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
              ].map((layer, i) => (
                <div key={i} className={`${layer.bg} rounded-lg sm:rounded-xl border ${layer.border} p-2 sm:p-3 text-center`}>
                  <layer.icon size={16} className={`${layer.color} mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5`} />
                  <p className={`${layer.color} text-xs sm:text-sm font-medium`}>{layer.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {modules.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center mb-2 sm:mb-3">
                    <item.icon size={16} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <p className="text-amber-400 text-xs mb-0.5 sm:mb-1">{item.num}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Modules 1–2 are quick wins. 3–5 are core engines. Module 6 is the long-term strategic foundation. All designed for a ~6-person team — low-maintenance, autonomous outputs, human-in-the-loop.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Media Monitoring
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Real-time brand mention detection across online, print, broadcast, social, and podcasts',
          'NLP sentiment analysis classifying coverage as positive, negative, neutral with emotion detection',
          'Anomaly detection alerting team to unusual coverage spikes or sentiment shifts',
          'AI-generated daily/weekly media briefings per client — delivered before the day starts',
          'Competitive media share tracking and comparison across all 50+ client brands',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Eye size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Media Monitoring & Sentiment Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                With 50+ brands to monitor manually, the team is missing coverage, reacting late to sentiment shifts, and spending 15–25 hours/week on monitoring AI can do in real-time. This is the single highest-impact quick win.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours/Days</p>
                  <p className="text-gray-500 text-xs">To detect coverage</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Minutes</p>
                  <p className="text-gray-500 text-xs">Real-time detection</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 15–25 hrs/week reclaimed | Tools: Agility PR / Brand24 or custom | Complexity: Low
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Report Generation
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Automated coverage collection and metric aggregation (reach, DA, social shares, impressions)',
          'AI-generated executive summaries in The Last Layer\'s brand voice',
          'Coverage impact scoring and media value estimation per placement',
          'Month-over-month trend tracking and visualization for each client',
          'Branded, client-ready templates in multiple formats (PDF, PPT, dashboard)',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <FileText size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Client Report Generation Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Client reporting is the #1 time sink for PR agencies. With 50+ clients, the team spends 20–40 hours/week compiling reports manually. Automated reporting frees this time entirely and delivers richer, more consistent reports.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4–6 hrs</p>
                  <p className="text-gray-500 text-xs">Per client report</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15–20 min</p>
                  <p className="text-gray-500 text-xs">Review + strategic commentary</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 20–40 hrs/week reclaimed | Tools: CoverageBook + AI or custom | Complexity: Low–Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Influencer Intelligence
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'ML-powered influencer discovery across Instagram, TikTok, YouTube (millions of profiles)',
          'Audience authenticity and fake follower detection for brand safety',
          'Demographic and psychographic audience analysis (age, location, parenting stage)',
          'Campaign performance tracking and predictive ROI modeling per influencer',
          'Centralized gifting logistics, outreach tracking, and content approval workflow',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Users size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Influencer Discovery & Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Influencer gifting is a core service for nearly every client — Babylist, Silver Cross, Bobbie, Canopy, Lalo, and more. AI expands the discovery pool 100x while maintaining quality through ML-powered vetting, and tracks everything at scale.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hundreds</p>
                  <p className="text-gray-500 text-xs">Manual profile review</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">3–5x</p>
                  <p className="text-gray-500 text-xs">Vetted pool expansion</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 50–70% less research time + 3–5x pool | Tools: GRIN/Gia, HypeAuditor, or Traackr | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Trend Detection
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Continuous monitoring of social, search, and news signals across parenting/lifestyle/wellness',
          'Early trend detection with 2–4 week predictive lead time before mainstream',
          'Topic clustering and velocity tracking (growing, peaking, or declining?)',
          'Competitive trend analysis — what trends are competitor brands capitalizing on?',
          'AI-generated weekly trend briefs with client-specific angle recommendations',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <TrendingUp size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Trend Detection & Market Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                The Last Layer is positioned as "a growth predictor of macro trends." Currently this relies on Katie's instinct and network. AI doesn't replace that instinct — it amplifies it with data. When Katie senses a trend, AI validates it. When AI detects a signal Katie hasn't seen, it surfaces it for her judgment.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Instinct</p>
                  <p className="text-gray-500 text-xs">Manual social scanning</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2–4 wks</p>
                  <p className="text-gray-500 text-xs">Early trend detection</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Data-backed strategy + differentiated advisory | Tools: Pressmaster.ai or custom | Complexity: Medium–High
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Pitch Generation
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Brand-voice-trained content generation for each of 50+ client brands',
          'Personalized journalist pitch customization based on NLP profiling of beat and style',
          'Multiple pitch angle suggestions per product/story for A/B approach testing',
          'Press release, media alert, and product description generation in seconds',
          'Thought leadership outline generation from brand positioning data',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <PenTool size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Press Material & Pitch Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                With 50+ brands requiring continuous editorial outreach, product launches, and personalized journalist pitches, the volume is immense. AI generates first drafts in seconds that the team refines with editorial instinct — turning a 45-minute task into a 10-minute review.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">45 min</p>
                  <p className="text-gray-500 text-xs">Per pitch from scratch</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">60–75%</p>
                  <p className="text-gray-500 text-xs">Time reduction on drafts</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 60–75% draft time saved; higher personalization at scale | Tools: LLM + journalist DB | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Module 6 — Knowledge Graph
    {
      id: 'module6',
      render: () => {
        const capabilities = [
          'Unified entity graph connecting brands, campaigns, journalists, outlets, influencers, outcomes',
          'Natural language querying: "Best journalists for baby gear launches in Q4?"',
          'ML pattern recognition on successful campaign strategies across 14 years of data',
          'Automated media target recommendations based on historical response rates',
          'New team member onboarding accelerated through queryable institutional knowledge',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Database size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 06</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Campaign Knowledge Graph</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                14 years of campaign intelligence lives in email threads, Katie's memory, and scattered spreadsheets. If a team member leaves, campaign intelligence walks out the door. An AI knowledge graph captures and makes queryable the collective intelligence of The Last Layer's entire history.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Tribal</p>
                  <p className="text-gray-500 text-xs">Knowledge in people's heads</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30–50%</p>
                  <p className="text-gray-500 text-xs">Faster campaign planning</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Preserve 14 years of knowledge; 30–50% faster planning | Complexity: High (data digitization phase)
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Measurable Results
    {
      id: 'results',
      render: () => {
        const results = [
          { icon: Eye, metric: 'Coverage Detection Speed', before: 'Hours/days', after: 'Minutes', basis: 'Module 1' },
          { icon: FileText, metric: 'Report Turnaround', before: '4–6 hrs/report', after: '15–20 min', basis: 'Module 2' },
          { icon: Users, metric: 'Influencer Pool Expansion', before: 'Hundreds (manual)', after: '3–5x larger', basis: 'Module 3' },
          { icon: PenTool, metric: 'Draft Creation Time', before: '45 min/pitch', after: '60–75% saved', basis: 'Module 5' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Measurable Transformation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What This Delivers</h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {results.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <item.icon size={14} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                    <p className="text-white font-semibold text-xs sm:text-sm">{item.metric}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-3">
                    <div className="flex-1 p-1.5 sm:p-2 bg-white/5 rounded-lg text-center">
                      <p className="text-gray-500 text-xs">Before</p>
                      <p className="text-gray-400 font-medium text-xs sm:text-sm">{item.before}</p>
                    </div>
                    <ArrowRight size={12} className="text-amber-400 shrink-0 sm:w-4 sm:h-4" />
                    <div className="flex-1 p-1.5 sm:p-2 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-emerald-400 text-xs">After</p>
                      <p className="text-white font-medium text-xs sm:text-sm">{item.after}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mt-1 text-right">{item.basis}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Annual Impact: <span className="text-amber-400">$150,000–$350,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">In reclaimed capacity value. 50–80 hours/week back to strategic work.</p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: Capacity Reclaimed
    {
      id: 'capacity',
      render: () => {
        const savings = [
          { area: 'Module 1: Media Monitoring', hours: '15–25 hrs/wk' },
          { area: 'Module 2: Client Reporting', hours: '20–40 hrs/wk' },
          { area: 'Module 3: Influencer Intelligence', hours: '8–15 hrs/wk' },
          { area: 'Module 4: Trend Detection', hours: '5–10 hrs/wk' },
          { area: 'Module 5: Pitch Generation', hours: '10–20 hrs/wk' },
        ];

        const redirected = [
          { role: 'Katie', focus: 'Deepening journalist relationships, VIP placements, and strategic advisory' },
          { role: 'Senior Team', focus: 'Personal deskside pitches, event networking, client strategy' },
          { role: 'Account Managers', focus: 'Creative campaign ideation and high-touch brand work' },
          { role: 'The Agency', focus: 'Taking on 2–3 additional brand clients without new hires' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              <GradientText>50–80 Hours/Week</GradientText> Back to Your Team
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Equivalent to adding 1.5–2 full-time team members — without a single new hire.</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~50–80 hours/week reclaimed (after overlap reduction)</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">What your team does instead</p>
              <div className="space-y-1.5 sm:space-y-2">
                {redirected.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Users size={12} className="text-amber-400 shrink-0 mt-1 sm:w-[14px] sm:h-[14px]" />
                    <div>
                      <span className="text-white text-xs sm:text-sm font-medium">{item.role}:</span>{' '}
                      <span className="text-gray-400 text-xs sm:text-sm">{item.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Katie is speaking at SXSW 2026 on CPG brand building. AI operational efficiency enables growth without losing the boutique culture and personal touch that clients love.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 15: 90-Day Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Data Foundation & Quick Wins',
            time: 'Weeks 1–4',
            status: 'Phase 1',
            items: ['Full audit of tools, data sources, and workflows', 'Deploy AI media monitoring (Module 1) across all brands', 'Deploy AI reporting (Module 2) for 5 pilot clients', 'Begin data digitization for historical campaign records'],
          },
          {
            title: 'Core AI Engines Live',
            time: 'Weeks 5–8',
            status: 'Phase 2',
            items: ['Roll out AI reporting to all clients', 'Deploy AI influencer platform (Module 3) and train team', 'Launch AI pitch generator (Module 5) for top 10 clients', 'Begin AI trend detection pilot (Module 4)'],
          },
          {
            title: 'Optimization & Full Integration',
            time: 'Weeks 9–12',
            status: 'Phase 3',
            items: ['Expand brand-voice training to all 50+ clients (Module 5)', 'Full AI trend intelligence with weekly briefings (Module 4)', 'Begin AI knowledge graph build (Module 6)', 'Optimize all modules based on team feedback'],
          },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Implementation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              90-Day <GradientText>Rollout</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {phases.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-sm sm:text-base">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.time}</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs hidden sm:inline">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm">
                        {itm}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-white font-medium">Human-in-the-loop on all decisions.</span> AI recommends, your team decides. Real-time media monitoring delivering value by Week 2. Full AI infrastructure live by Week 12.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 16: About Scooper AI
    {
      id: 'aboutUs',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Your Implementation Partner</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            About <GradientText>Scooper AI</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Bot size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div>
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-bold hover:text-amber-400 transition-colors">
                  Scooper AI
                </a>
                <p className="text-gray-400 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              Custom-built AI systems for growth-stage businesses — not off-the-shelf templates. Every module is designed for The Last Layer's specific PR workflows, client portfolio, and operational reality. We add intelligence layers to your existing infrastructure.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Integration-First', desc: 'Works with your stack' },
                { title: 'Done-for-You', desc: 'We handle the build' },
                { title: 'Ongoing', desc: 'Continuous optimization' },
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              AI systems improve with data — media monitoring sharpens, trend detection deepens, knowledge graphs grow richer. We manage this continuous improvement so your team doesn't have to.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 17: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Amplify Your <GradientText>Agency's Impact</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            You've built something remarkable on relationships and instinct — 50+ brands, 5+ year retention, 100% word-of-mouth. AI doesn't replace that. It handles the operational weight so your team can do more of what only they can do.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '$150K+', label: 'Annual impact' },
              { value: 'Week 2', label: 'First AI results' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-4">
                <p className="text-amber-400 text-lg sm:text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://cal.com/scooper-ai/discover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
            Schedule Discovery Call
          </a>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Bot size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-gray-400 text-sm">
              Prepared by{' '}
              <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors">
                Scooper AI
              </a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
