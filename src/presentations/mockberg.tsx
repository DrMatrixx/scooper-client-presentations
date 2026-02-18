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
  Target,
  Shield,
  Headphones,
  PenTool,
  Globe,
  BarChart3,
  Sparkles,
  Eye,
  Package,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Mockberg',
  description: 'AI Automation Proposal — Scaling Sweden\'s Fastest-Growing Jewelry & Watch Brand Through AI Intelligence',
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
            <span className="text-gray-400 text-xs sm:text-sm">AI Automation Proposal</span>
          </div>

          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <img
              src="/mockberg-logo.svg"
              alt="Mockberg"
              className="h-8 sm:h-10 md:h-12 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for the Mockberg team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              2.1M–6.1M SEK
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost revenue, ad efficiency, and operational capacity?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: 'Slutsåld', label: 'Drops selling out unpredicted', icon: Package },
              { value: '3–5/wk', label: 'Manual ad creatives vs 50+ AI', icon: PenTool },
              { value: '25+', label: 'Markets, no AI attribution', icon: Globe },
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
                5 AI modules to cut drop stockouts by <span className="text-white font-bold">15–30%</span>, boost paid social ROAS by <span className="text-white font-bold">15–30%</span>, and auto-resolve <span className="text-white font-bold">60–70%</span> of support tickets
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
          { task: 'Planning SKU production quantities per drop launch', time: '4–8 hrs/wk', change: 'ML forecasting produces demand curve per SKU per market in minutes' },
          { task: 'Selecting UGC from Sauce library for paid ad campaigns', time: '3–6 hrs/wk', change: 'AI scores every UGC piece by predicted ROAS — top assets auto-routed to ad queue' },
          { task: 'Writing ad copy for Meta campaigns in 4 languages', time: '5–10 hrs/wk', change: 'Generative AI produces 20+ copy variants in SE, EN, DE, NL in minutes' },
          { task: 'Responding to sizing, warranty, and return queries', time: '10–20 hrs/wk', change: 'LLM agent resolves 60–70% autonomously; humans handle escalations only' },
          { task: 'Analyzing international market performance for ad budget', time: '3–5 hrs/wk', change: 'AI attribution model surfaces real ROAS by market and channel in daily digest' },
          { task: 'Planning product assortment for NK vs. DTC channels', time: 'Unquantified', change: 'AI segmentation reveals which products over-index in-store vs. online per city' },
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
                You've built one of Sweden's fastest-growing DTC jewelry brands. But scaling internationally across 25+ markets with manual processes is the bottleneck.
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
                <span className="text-white font-bold">77%</span> of ecommerce professionals already use AI daily. Mockberg's team is in the 23% doing it manually.
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
          { icon: Package, value: '15–30%', metric: 'Drop Revenue Lost', desc: 'Sold-out items across multiple product lines — underforecasting on winners, overproduction on slower movers' },
          { icon: Target, value: '2–3x', metric: 'Influencer ROI Understated', desc: 'Last-click attribution undervalues influencer contribution, leading to underinvestment in your highest-ROI channel' },
          { icon: PenTool, value: '3–5/wk', metric: 'Creative Bottleneck', desc: 'Manual creative team vs AI-native competitors producing 50+ tested variants per week' },
          { icon: Eye, value: '0%', metric: 'Personalization Gap', desc: 'Swarovski drives 10% of sales from AI recommendations. Mockberg\'s visitors get static category navigation.' },
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
                Estimated Annual Opportunity: <span className="text-white font-bold">2,100,000–6,100,000 SEK</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In recovered revenue, ad efficiency, and operational capacity across all five modules</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                International expansion across 25+ markets is creating data complexity that requires AI now — each quarter without it is a quarter competitors are learning faster.
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
            Competitors Are Building <GradientText>AI Advantage</GradientText> Now
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-3 sm:mb-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Swarovski</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">AI Recs = 10% Sales</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">AI product recommendations confirmed to drive 10% of website sales. Every visitor gets a personalized product grid while Mockberg shows static categories.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">PANDORA</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">AI Demand Forecasting</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">AI-driven demand forecasting across 100+ markets enabling precise collection planning. They predict which collections perform where before production commits.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Daniel Wellington</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Shopify Plus AI</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Shopify Plus with AI personalization and automated email journeys — the closest Scandinavian comparable running ML recommendations Mockberg is not.</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-amber-500/5 rounded-lg sm:rounded-xl border border-amber-500/10">
              <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1">The Compounding Effect</p>
              <p className="text-gray-400 text-xs sm:text-sm">AI capabilities compound. Models trained on 2 years of behavior beat models trained on 6 months. The longer Mockberg waits, the larger the data advantage competitors build.</p>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
              <div>
                <p className="text-white text-sm sm:text-base font-semibold mb-1">Mockberg's Unfair Advantage</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  4,273+ verified reviews at 4.7 stars, proven influencer drop model, 25+ country distribution, Shopify with AI-ready stack. The foundation is built — AI doesn't replace Mockberg's brand, it <span className="text-emerald-400 font-medium">amplifies it globally</span>.
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
          { area: 'Drop Planning', today: 'Manual review of past drops + gut estimate on SKU quantities', ai: 'ML model produces per-SKU, per-market demand forecast 4–6 weeks before drop' },
          { area: 'Ad Creative', today: 'Copywriter + designer produce 3–5 creatives; Sauce UGC selected manually', ai: 'AI scores UGC library; generates 30+ variants in 4 languages; Advantage+ optimizes' },
          { area: 'Customer Support', today: 'Team reads and responds to each sizing/warranty query manually', ai: 'LLM resolves 60–70% of tickets instantly, 24/7, in Swedish, English, German' },
          { area: 'Product Discovery', today: 'Static navigation by category, dial shape, strap type', ai: 'Real-time personalized "complete the stack" recommendations per visitor' },
          { area: 'International Strategy', today: 'Last-click attribution; budget reallocated manually across 25+ markets', ai: 'ML attribution shows true ROAS by channel + market; AI flags underinvested markets' },
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
                { icon: Package, metric: '15–30%', label: 'Stockout reduction' },
                { icon: TrendingUp, metric: '15–30%', label: 'ROAS improvement' },
                { icon: Headphones, metric: '60–70%', label: 'Support auto-resolved' },
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
          { num: '01', title: 'Drop Forecasting', desc: 'ML demand prediction', icon: BarChart3, layer: 'Revenue' },
          { num: '02', title: 'Creative Engine', desc: 'UGC scoring + gen AI', icon: Sparkles, layer: 'Creative' },
          { num: '03', title: 'Personalization', desc: 'On-site + email AI', icon: Eye, layer: 'Creative' },
          { num: '04', title: 'Support Agent', desc: 'LLM on catalog data', icon: Headphones, layer: 'Ops' },
          { num: '05', title: 'Market Intel', desc: 'Attribution + entity resolution', icon: Globe, layer: 'Revenue' },
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
                { label: 'Revenue & Drop Intelligence', icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Creative & Customer Intelligence', icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Operations & Experience', icon: Headphones, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
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
                Built on Mockberg's existing Shopify stack. Modules 3 & 4 are fastest to deploy. Module 1 delivers highest single-module ROI.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — AI Drop Demand Forecasting
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Per-SKU demand forecast for each drop, per market, with confidence intervals',
          'Multi-signal ML: Shopify order velocity, influencer audience size, seasonal demand, geographic data',
          'Auto-generated reorder/production recommendation for supplier 4–6 weeks pre-launch',
          'Historical backtest against last 3 drops to validate forecast accuracy (MAPE target <20%)',
          'Human (ops/design lead) reviews and approves AI recommendation before placing supplier order',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Drop Demand Forecasting Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                "Slutsåld" items across multiple product lines confirm the gap. Mockberg runs 4–6 major drops per year — each one is a high-stakes inventory commitment made without ML intelligence. AI demand forecasting turns gut estimates into precision.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Gut Feel</p>
                  <p className="text-gray-500 text-xs">Manual review 2–3 weeks pre-launch</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4–6 Weeks</p>
                  <p className="text-gray-500 text-xs">ML demand curve per SKU per market</p>
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
                <span className="font-bold">Impact:</span> 500,000–1,500,000 SEK/year | Recommended tool: Prediko (Shopify-native) | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — AI Ad Creative & UGC Scoring
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Computer vision scores Sauce UGC library by visual quality, brand alignment, predicted engagement',
          'NLP model scores caption sentiment and extracts engagement signals from each piece',
          'Generative AI produces 20+ ad copy variants in Swedish, English, German, Dutch per asset',
          'Top-ranked UGC auto-flagged for ad use; marketing lead approves before Meta launch',
          'Weekly creative performance report with AI-recommended optimizations',
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
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Ad Creative & UGC Scoring Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Mockberg's growth was built on paid social. But manual UGC-to-ad pipeline creates a 2–4 week lag. AI-native competitors generate 50+ creative variants per week while Mockberg produces 3–5. This module closes that gap permanently.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">3–5/wk</p>
                  <p className="text-gray-500 text-xs">Manual creative production</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">50+/wk</p>
                  <p className="text-gray-500 text-xs">AI-generated, 4 languages</p>
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
                <span className="font-bold">Impact:</span> 300,000–900,000 SEK/year | Tools: Pencil / AdCreative.ai + Sauce API | Complexity: Medium-High
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — AI Personalization Engine
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Real-time personalized product grid on homepage, product pages, and cart ("Complete the stack")',
          'Collaborative filtering identifies complementary products per visitor behavior',
          'ML-predicted optimal email send time per individual customer via Klaviyo AI',
          'Personalized email product blocks per segment — not one-size-fits-all',
          'Model retrains weekly on new behavioral data for continuous improvement',
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
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Personalization Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Mockberg's "mix and stack" jewelry philosophy is perfectly suited for AI cross-sell. A customer who buys Bold Hoops is a strong candidate for the Thin Snake Necklace and Darling Bracelet — but only if the AI surfaces that combination in the moment. Swarovski already generates 10% of sales this way.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Static</p>
                  <p className="text-gray-500 text-xs">Same grid for every visitor</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">10–15%</p>
                  <p className="text-gray-500 text-xs">Revenue uplift from recs</p>
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
                <span className="font-bold">Impact:</span> 800,000–2,000,000 SEK/year | Tools: Rebuy Engine + Klaviyo AI | Complexity: Low-Medium
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
          'LLM trained on Mockberg product catalog, FAQ, warranty policy, and return process',
          'Real-time Shopify order data integration for order status and return status lookups',
          'Auto-resolves sizing, waterproofing, warranty, and return queries instantly',
          'Operates 24/7 in Swedish, English, German, and Dutch across all 25+ markets',
          'Seamless escalation to human agents with full context for complex cases',
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
                With 4,273+ reviews and 25+ markets, Mockberg handles a high volume of predictable queries — ring sizing, dial size, waterproofing, warranty, returns. An LLM trained on Mockberg's catalog resolves these better and faster while maintaining 4.7-star service quality at international scale.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Every query handled by humans</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">60–70%</p>
                  <p className="text-gray-500 text-xs">Auto-resolved, 24/7</p>
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
                <span className="font-bold">Impact:</span> 200,000–500,000 SEK/year | Tool: Gorgias AI (Shopify-native) | Complexity: Low-Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — AI International Market Intelligence
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'ML multi-touch attribution model replacing last-click across all channels and markets',
          'Cross-domain entity resolution: unify customer identity across mockberg.com, .us, .eu',
          'Per-market LTV and ROAS dashboard updated daily with AI-flagged opportunities',
          'Influencer ROI correctly attributed — typically 2–3x higher than last-click shows',
          'Competitive pricing and activity monitoring via NLP across 25+ markets',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Globe size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI International Market Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A customer buying from mockberg.us then mockberg.eu appears as two people — LTV is invisible, repeat purchase rates are understated. Last-click attribution systematically undervalues influencer contribution by 2–3x. This module gives Mockberg the international intelligence layer its growth demands.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Last-Click</p>
                  <p className="text-gray-500 text-xs">Fragmented across 25+ markets</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">True ROAS</p>
                  <p className="text-gray-500 text-xs">Unified customer LTV per market</p>
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
                <span className="font-bold">Impact:</span> 400,000–1,200,000 SEK/year | Tools: Custom ML + Northbeam/Triple Whale | Complexity: High
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
          { icon: Package, metric: 'Drop Stockout Reduction', before: 'Gut estimates', after: '15–30% reduction' },
          { icon: TrendingUp, metric: 'Paid Social ROAS', before: 'Manual creative', after: '15–30% improvement' },
          { icon: Headphones, metric: 'Support Auto-Resolution', before: 'Fully manual', after: '60–70% auto-resolved' },
          { icon: Eye, metric: 'Revenue from Personalization', before: 'Static navigation', after: '10–15% uplift' },
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
                    <p className="text-white font-semibold text-xs sm:text-base">{item.metric}</p>
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
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {[
                { icon: Globe, metric: 'International Ad Efficiency', before: 'Last-click attribution', after: '10–20% improvement' },
                { icon: Clock, metric: 'Team Hours Reclaimed', before: 'Manual intelligence layer', after: '27–53 hrs/wk saved' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <item.icon size={14} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                    <p className="text-white font-semibold text-xs sm:text-base">{item.metric}</p>
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
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Annual Impact: <span className="text-amber-400">2,100,000–6,100,000 SEK</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Conservative estimates, all ranges evidence-based</p>
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
          { area: 'Module 1: Drop Demand Forecasting (production planning)', hours: '4–8 hrs/wk' },
          { area: 'Module 2: AI Ad Creative & UGC (selection, copywriting)', hours: '8–16 hrs/wk' },
          { area: 'Module 3: Personalization Engine (email, product curation)', hours: '2–4 hrs/wk' },
          { area: 'Module 4: Customer Support Agent (ticket response)', hours: '10–20 hrs/wk' },
          { area: 'Module 5: International Intelligence (dashboard, budget)', hours: '3–5 hrs/wk' },
        ];

        const redirected = [
          { role: 'Design team', focus: 'New collection development, brand creative direction' },
          { role: 'Marketing', focus: 'Influencer relationships (Kenza, Hanna), new market entry' },
          { role: 'Operations', focus: 'NK store experience, wholesale partner management' },
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
              <GradientText>27–53 Hours/Week</GradientText> Back to Your Team
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Equivalent to adding 1–2 senior team members — without a single new hire.</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~27–53 hours/week reclaimed</p>
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
            items: ['Shopify data audit (18-month order history)', 'Gorgias AI support agent live', 'Klaviyo AI feature activation', 'Meta Advantage+ campaign setup'],
          },
          {
            title: 'Core AI Engines Live',
            time: 'Weeks 5–8',
            status: 'Phase 2',
            items: ['Prediko demand forecasting trained', 'Rebuy personalization deployed', 'Sauce-to-Meta UGC pipeline live', 'AI brand-voice trained (SE, EN, DE, NL)'],
          },
          {
            title: 'Full Integration & Optimization',
            time: 'Weeks 9–12',
            status: 'Phase 3',
            items: ['ML attribution model replacing last-click', 'Cross-domain entity resolution live', 'Per-market AI dashboard operational', '90-day performance review vs. projections'],
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
                <span className="text-white font-medium">Built on your existing Shopify stack</span> — Shopify, Klaviyo, Sauce, Meta Ads. Human-in-the-loop on all critical decisions. AI recommends, your team decides. First support agent delivering value by Week 2.
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
            Ready to Unlock Mockberg's <GradientText>Next Growth Era</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Timeless brand. Proven product-market fit. 25+ countries. 4.7-star reputation. The foundation is exceptional — now add the AI intelligence that lets you scale it globally without burning budget or missing drops.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '2.1M+ SEK', label: 'Annual impact' },
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
