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
  Headphones,
  PenTool,
  BarChart3,
  Sparkles,
  Eye,
  Package,
  MessageSquare,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Mockberg',
  description: 'AI Automation Proposal — Scaling Mockberg\'s Growth Through AI-Powered Intelligence',
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
              src="/mockberg-logo.svg"
              alt="Mockberg"
              className="h-8 sm:h-10 md:h-12 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Scaling Mockberg's Growth Through AI-Powered Intelligence</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              10–26 MSEK
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered revenue, efficiency, and growth capacity?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '3–8M', label: 'SEK lost to stockouts yearly', icon: Package },
              { value: '0%', label: 'Site personalization today', icon: Eye },
              { value: '7', label: 'People running 115.7M SEK', icon: Users },
            ].map((item, i) => (
              <div key={i} className="group relative p-3 sm:p-4 glass bg-white/5 rounded-2xl border border-rose-500/20 shadow-lg shadow-rose-500/5 hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <item.icon size={16} className="text-rose-400/70 mx-auto mb-2 sm:w-5 sm:h-5" />
                  <p className="text-rose-400 text-lg sm:text-xl font-bold">{item.value}</p>
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
                5 AI modules to reduce stockouts by <span className="text-white font-bold">20–40%</span>, lift conversion by <span className="text-white font-bold">10–23%</span>, and let a 7-person team operate like <span className="text-white font-bold">20</span>
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
          { task: 'Forecasting production quantities for upcoming drops', time: '5–8 hrs/wk', change: 'AI demand forecast per SKU per market replaces spreadsheets + gut feel' },
          { task: 'Creating ad creative, social content, and email campaigns across SE/EN/DE', time: '10–15 hrs/wk', change: 'Generative AI produces 10x variants for testing; team curates, not creates' },
          { task: 'Responding to customer emails (orders, returns, sizing) in multiple languages', time: '10–15 hrs/wk', change: 'AI support agent resolves 60%+ instantly in SE/EN/DE, 24/7' },
          { task: 'Reading reviews and social comments for product insights', time: '3–5 hrs/wk', change: 'NLP Voice-of-Customer extracts themes from 4,273+ reviews automatically' },
          { task: 'Deciding which products to feature on homepage and collections', time: '3–5 hrs/wk', change: 'AI personalization dynamically orders products per visitor in real-time' },
          { task: 'Tracking competitor moves (Edblad, Daniel Wellington, About Vintage)', time: '3–5 hrs/wk', change: 'AI competitive monitor delivers weekly digest with trend detection' },
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
                115.7 MSEK with 7 employees = ~16.5 MSEK revenue per person. Every operational bottleneck hits exponentially harder — and AI has outsized impact.
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
                <span className="text-white font-bold">78%</span> of businesses use AI in at least one function (McKinsey, 2025). Shopify + Klaviyo make AI integration possible without rebuilding infrastructure.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Hidden Cost of Staying Manual
    {
      id: 'cost',
      render: () => {
        const costs = [
          { icon: Package, value: '3–8M', metric: 'SEK Lost to Stockouts', desc: '"Meddela mig" (Notify me) buttons on product pages confirm demand going unfulfilled across drops' },
          { icon: Eye, value: '10–23%', metric: 'Conversion Lift Missed', desc: 'Industry benchmark for AI personalization. Every visitor sees the same static site regardless of history.' },
          { icon: PenTool, value: '60–80%', metric: 'Content Time Saveable', desc: '7 people managing 6+ drops across SE/EN/DE markets. AI generates 10x content variants in minutes.' },
          { icon: TrendingUp, value: 'Widening', metric: 'Competitor AI Gap', desc: 'AI models improve with data over time. Competitors who adopt first build a compounding intelligence advantage.' },
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
                Estimated Annual Opportunity: <span className="text-white font-bold">8–20 MSEK</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In combined lost revenue + operational inefficiency across all five modules</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                German market expansion multiplies complexity — AI must arrive before the complexity does, not after. 89% of retail/CPG companies are already using or testing AI (NVIDIA, 2025).
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
            The Opportunity to <GradientText>Lead</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-3 sm:mb-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Edblad</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">107 employees</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Acquired by Ceder Capital (PE). With 107 employees vs. Mockberg's 7, they can absorb inefficiency that Mockberg cannot. AI levels the playing field.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Daniel Wellington</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Dedicated data team</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Pioneered influencer marketing at scale. Has a dedicated data/analytics function. AI gives Mockberg equivalent intelligence without matching their headcount.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">About Vintage</p>
                  <span className="px-2 py-1 bg-gray-500/10 rounded-full text-gray-400 text-xs">No visible AI</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Copenhagen-based, similar Scandinavian minimalist positioning. Shopify-based, no visible AI differentiation. Both brands are ripe for AI — who moves first wins.</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-amber-500/5 rounded-lg sm:rounded-xl border border-amber-500/10">
              <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1">The Compounding Effect</p>
              <p className="text-gray-400 text-xs sm:text-sm">AI capabilities compound. Recommendation models, demand forecasts, and creative optimization all improve with more data. The earlier Mockberg starts, the wider the AI moat grows.</p>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
              <div>
                <p className="text-white text-sm sm:text-base font-semibold mb-1">Mockberg's First-Mover Advantage</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  No Scandinavian affordable-luxury jewelry brand has deployed advanced AI. Mockberg's drop-based model and influencer collaborations generate high-velocity data that AI can <span className="text-emerald-400 font-medium">amplify into a permanent competitive edge</span>.
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
          { area: 'Drop Demand Planning', today: 'Spreadsheet estimates + gut feel for production quantities', ai: 'ML demand forecast per SKU per market per drop, with confidence intervals' },
          { area: 'Product Merchandising', today: 'Static collection pages, same for all visitors', ai: 'AI-personalized product ranking and recommendations per visitor, improving with each interaction' },
          { area: 'Content Creation', today: 'Team manually creates each ad, email, post across SE/EN/DE', ai: 'Generative AI produces 10x creative variants; team curates best performers' },
          { area: 'Customer Support', today: 'Email-only, business hours, Swedish primarily', ai: '24/7 AI agent in SE/EN/DE resolving 60%+ instantly, smart escalation for complex cases' },
          { area: 'Customer Intelligence', today: 'Manual review reading, gut-feel product decisions', ai: 'NLP analysis of 4,273+ reviews → automated VoC reports driving collection decisions' },
          { area: 'Campaign Targeting', today: 'Broad Klaviyo segments, standard flows', ai: 'Predictive LTV scoring, churn risk identification, AI-optimized send times per customer' },
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
                { icon: TrendingUp, metric: '5–12%', label: 'Revenue uplift' },
                { icon: PenTool, metric: '60–80%', label: 'Content time saved' },
                { icon: Clock, metric: '31–48', label: 'Hours/week reclaimed' },
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
          { num: '01', title: 'Demand Forecasting', desc: 'ML time-series prediction', icon: BarChart3 },
          { num: '02', title: 'Personalization', desc: 'Collaborative filtering + behavioral ML', icon: Eye },
          { num: '03', title: 'Creative Pipeline', desc: 'LLM + diffusion models', icon: Sparkles },
          { num: '04', title: 'Support Agent', desc: 'LLM + RAG on catalog data', icon: Headphones },
          { num: '05', title: 'VoC Intelligence', desc: 'NLP sentiment + topic modeling', icon: MessageSquare },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Mockberg's AI Intelligence Layer — <GradientText>3 Layers</GradientText>
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Revenue & Customer Intelligence', icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Generative Creative & Content', icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Customer Experience', icon: Headphones, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
              ].map((layer, i) => (
                <div key={i} className={`${layer.bg} rounded-lg sm:rounded-xl border ${layer.border} p-2 sm:p-3 text-center`}>
                  <layer.icon size={16} className={`${layer.color} mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5`} />
                  <p className={`${layer.color} text-xs sm:text-sm font-medium`}>{layer.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {modules.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all ${
                    i === modules.length - 1 && modules.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
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
                Built on Mockberg's existing Shopify + Klaviyo stack. All 5 modules pass the AI Substance Test. Module 4 is fastest to deploy. Modules 1 & 2 deliver highest ROI.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — AI Demand Forecasting Engine
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'SKU-level demand prediction per market (SE, DE, International) with confidence intervals',
          'Drop-specific production sizing with pre-launch signal analysis from Klaviyo + social',
          'Automatic stockout risk alerts with reorder recommendations 4–6 weeks before launch',
          'Seasonal and trend-adjusted forecasting using Google Trends + historical drop performance',
          'Team reviews and approves all production orders — AI recommends, humans decide',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <BarChart3 size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Demand Forecasting Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Visible "Meddela mig" (Notify me) buttons on product pages confirm demand going unfulfilled. With 90% YoY growth and international expansion, manual forecasting becomes increasingly risky. Each drop is a high-stakes inventory commitment — AI turns gut estimates into precision.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Gut Feel</p>
                  <p className="text-gray-500 text-xs">Spreadsheets + past experience</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">20–40%</p>
                  <p className="text-gray-500 text-xs">Fewer stockouts, per market</p>
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
                <span className="font-bold">Impact:</span> 3–8 MSEK/year | Tool: Prediko (Shopify-native) | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — AI Personalization & Product Recommendations
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Real-time personalized product carousels on homepage, PDPs, and cart pages',
          'Collaborative filtering: "Others who bought this also loved..." based on purchase behavior',
          'Dynamic collection ordering per visitor — returning customers see different rankings than new visitors',
          'Personalized Klaviyo email product blocks based on individual browsing + purchase history',
          'Merchandising team sets business rules; AI optimizes within those constraints',
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
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Personalization & Recommendations</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                With 200+ SKUs across watches, earrings, necklaces, bracelets, and rings — the catalog is large enough for meaningful personalization. Industry data: AI personalization lifts conversion by 10–23% and drives 10–30% of e-commerce revenue. At 115.7 MSEK, even a 5% uplift is significant.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Static</p>
                  <p className="text-gray-500 text-xs">Same grid for every visitor</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">8–15%</p>
                  <p className="text-gray-500 text-xs">Conversion rate lift</p>
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
                <span className="font-bold">Impact:</span> 4–10 MSEK/year | Tools: Nosto or LimeSpot + Klaviyo AI | Complexity: Low–Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Generative AI Creative & Content Pipeline
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Multi-language ad creative generation (SE/EN/DE) from a single brief per drop',
          'A/B test variant generation at scale — 20–50 creative variants per drop launch',
          'Email campaign copy and subject line generation in Mockberg\'s brand voice',
          'Product description generation for new SKUs across all markets simultaneously',
          'Creative team approves all final assets — AI generates drafts, humans curate',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Sparkles size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Generative AI Creative & Content Pipeline</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                7 employees managing 6+ active drops, international markets, and social presence across Instagram/TikTok/YouTube. Content creation is the primary bottleneck. Generative AI doesn't replace your designers — it multiplies their output. Critical for the German market expansion.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Each piece created per market</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">10x</p>
                  <p className="text-gray-500 text-xs">Content volume, 3 languages</p>
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
                <span className="font-bold">Impact:</span> 2–5 MSEK/year | Tools: Pencil + Jasper/Claude | Complexity: Low–Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — AI Customer Support Agent
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'LLM trained on Mockberg product catalog, sizing guides, 60-day return policy, and FAQ',
          'Real-time Shopify order data integration for instant order status and return initiation',
          'Product recommendation based on stated preferences and browsing context',
          'Operates 24/7 in Swedish, English, and German without additional headcount',
          'Complex or sensitive inquiries escalated to human team with full context summary',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Headphones size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Customer Support Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Currently email-only support (contact@mockberg.com) with no chat widget. International expansion will multiply support volume. With 7 employees, support is already stealing time from higher-value work. A 60-day return policy means return-related inquiries are a significant portion.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Email Only</p>
                  <p className="text-gray-500 text-xs">Business hours, manual response</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">50–70%</p>
                  <p className="text-gray-500 text-xs">Auto-resolved, 24/7, 3 languages</p>
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
                <span className="font-bold">Impact:</span> 1–3 MSEK/year | Tool: Gorgias AI (Shopify-native) | Complexity: Low
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — NLP Voice-of-Customer Intelligence
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Automated sentiment scoring per product and per SKU from 4,273+ Stamped + 309+ Trustpilot reviews',
          'Topic clustering: quality, design, sizing, gifting, value, competitive comparisons',
          'Trend detection: rising/falling themes month-over-month with real-time spike alerts',
          'Product development priority suggestions based on customer demand signals',
          'Product and design team reviews insights and makes all strategic decisions',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <MessageSquare size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">NLP Voice-of-Customer Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                4,273+ verified reviews contain structured sentiment data about product quality, sizing, design preferences, and gifting occasions — likely sitting unused beyond star ratings. AI-powered VoC systematizes this: instead of reading reviews manually, the team gets automated intelligence on what customers love and what they want next.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Anecdotal review reading</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4,500+</p>
                  <p className="text-gray-500 text-xs">Reviews analyzed continuously</p>
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
                <span className="font-bold">Impact:</span> 1–3 MSEK/year | Tools: Stamped API + NLP pipeline | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Measurable Results
    {
      id: 'results',
      render: () => {
        const results = [
          { icon: BarChart3, metric: 'Revenue from Reduced Stockouts', before: 'Gut estimates', after: '3–8 MSEK/yr', basis: 'Module 1' },
          { icon: Eye, metric: 'Incremental Revenue from Personalization', before: 'Static site', after: '4–10 MSEK/yr', basis: 'Module 2' },
          { icon: Sparkles, metric: 'Content Efficiency + ROAS', before: 'Manual creative', after: '2–5 MSEK/yr', basis: 'Module 3' },
          { icon: Headphones, metric: 'Operational Savings from AI Support', before: 'Email-only', after: '1–3 MSEK/yr', basis: 'Module 4' },
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
                Annual Impact: <span className="text-amber-400">10–26 MSEK</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">~9–22% of current revenue. Conservative estimates, all ranges evidence-based.</p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Capacity Reclaimed
    {
      id: 'capacity',
      render: () => {
        const savings = [
          { area: 'Module 1: Demand Forecasting (production planning)', hours: '5–8 hrs/wk' },
          { area: 'Module 2: Personalization (merchandising decisions)', hours: '3–5 hrs/wk' },
          { area: 'Module 3: Creative Pipeline (content creation)', hours: '10–15 hrs/wk' },
          { area: 'Module 4: Support Agent (ticket response)', hours: '10–15 hrs/wk' },
          { area: 'Module 5: VoC Intelligence (review reading, monitoring)', hours: '3–5 hrs/wk' },
        ];

        const redirected = [
          { role: 'Design team', focus: 'New collection development, brand creative direction' },
          { role: 'Marketing', focus: 'Influencer relationships, new market entry strategy' },
          { role: 'Operations', focus: 'German expansion, wholesale partnerships' },
          { role: 'Leadership', focus: 'Strategic growth decisions with AI-powered data' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              <GradientText>31–48 Hours/Week</GradientText> Back to Your Team
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Equivalent to adding 3–5 team members — without a single new hire.</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~31–48 hours/week reclaimed</p>
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
                The team that built 90% YoY growth gets to focus entirely on growth. This is how a 7-person team scales to 200+ MSEK.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: 90-Day Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Data Foundation & Quick Wins',
            time: 'Weeks 1–4',
            status: 'Phase 1',
            items: ['Shopify + Klaviyo data audit', 'Activate Klaviyo dormant AI (free)', 'Gorgias AI support agent live', 'Shopify Search & Discovery configured'],
          },
          {
            title: 'Core AI Engines Live',
            time: 'Weeks 5–8',
            status: 'Phase 2',
            items: ['Prediko demand forecasting trained', 'Nosto/LimeSpot personalization A/B testing', 'Generative content pipeline: brand-voice trained', 'First AI-generated creative variants in market'],
          },
          {
            title: 'Optimization & Full Integration',
            time: 'Weeks 9–12',
            status: 'Phase 3',
            items: ['NLP VoC: first monthly report delivered', 'All modules interconnected', 'German market content pipeline live', '90-day performance review vs. projections'],
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
                <span className="text-white font-medium">Built on your existing Shopify + Klaviyo stack.</span> Human-in-the-loop on all critical decisions. AI recommends, your team decides. First AI support agent delivering value by Week 2.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 15: About Scooper AI
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
              Custom-built AI systems for growth-stage brands — not off-the-shelf templates. Every module is designed for Mockberg's specific workflows, Shopify stack, and international growth trajectory. We add intelligence layers to your existing infrastructure, not replacements.
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
              AI systems improve with data — demand forecasts sharpen, personalization gets more accurate, support agents expand their knowledge. We manage this continuous improvement.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 16: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Scale Mockberg's <GradientText>Next Growth Era</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            90% YoY growth. 22.7% profit margin. 4.7-star reputation. German expansion ahead. The foundation is exceptional — now add the AI intelligence that lets a 7-person team operate like 20.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '10M+ SEK', label: 'Annual impact' },
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
