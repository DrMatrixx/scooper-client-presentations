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
  MessageSquare,
  Target,
  ShoppingCart,
  Package,
  RefreshCw,
  PenTool,
  Megaphone,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Mother Root',
  description: 'AI Automation Proposal — Scaling Mother Root\'s Feel-Good Revolution Through AI-Powered Intelligence',
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
              src="/mother-root-logo.jpg"
              alt="Mother Root"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Bethan & the Mother Root team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              £500K–£1.5M
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in protected and additional revenue?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '180%', label: 'YTD sales growth in 2025', icon: TrendingUp },
              { value: '5', label: 'Sales channels, fragmented data', icon: ShoppingCart },
              { value: '29–47 hrs', label: 'Weekly manual work AI can handle', icon: Clock },
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
                5 AI modules to boost repeat purchases by <span className="text-white font-bold">15–25%</span>, cut content production time by <span className="text-white font-bold">60–75%</span>, and improve ROAS by <span className="text-white font-bold">20–35%</span>
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
          { task: 'Forecasting production batches across Shopify, Amazon, Waitrose (87 stores), Sainsbury\'s, and Ocado', time: '6–10 hrs/wk', change: 'ML demand forecasting with multi-channel, multi-signal intelligence' },
          { task: 'Creating content for blog, recipes, email, social, Amazon listings, and retail sell-sheets', time: '10–15 hrs/wk', change: 'Generative AI content pipeline trained on Bethan\'s brand voice' },
          { task: 'Designing, launching, and optimizing ad campaigns across Meta, Google, and TikTok', time: '5–8 hrs/wk', change: 'AI ad creative generation + marginal ROAS budget optimization' },
          { task: 'Monitoring customer reviews across Trustpilot, on-site widget, Amazon, and Instagram', time: '3–5 hrs/wk', change: 'NLP sentiment analysis with automated theme detection and alerts' },
          { task: 'Managing post-purchase queries about delivery, dosage, and product usage', time: '3–5 hrs/wk', change: 'AI customer support agent powered by product knowledge + order data' },
          { task: 'Tracking which customers reorder and which disappear after first purchase', time: '2–4 hrs/wk', change: 'ML churn prediction with auto-triggered retention workflows' },
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
                £2M+ revenue with ~12 employees across 5 sales channels. Every operational bottleneck multiplies — and AI has outsized impact at this stage.
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
                <span className="text-white font-bold">29–47 hours/week</span> consumed by tasks AI could handle — nearly 1 full-time team member. Post-Dragons' Den, this only intensifies.
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
          { icon: Package, value: '£200K–500K', metric: 'Retail Listing Risk', desc: 'One missed Waitrose reorder = listing risk on shelf space that took months to win. 5 channels without demand forecasting.' },
          { icon: Target, value: '15–30%', metric: 'Ad Spend Wasted', desc: 'Broad targeting without LTV-based optimization means every £1 of the £1.1M raise spent on ads works less efficiently.' },
          { icon: RefreshCw, value: '15–25%', metric: 'Repeat Buyers Lost', desc: 'At £27.95/bottle, repeat purchase is the primary revenue driver. No visible subscription or replenishment flow.' },
          { icon: TrendingUp, value: 'Widening', metric: 'Competitor AI Gap', desc: 'Seedlip (Diageo-backed) runs AI demand forecasting and retail analytics today. The gap compounds monthly.' },
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
                Estimated Annual Opportunity: <span className="text-white font-bold">£500K–£1.5M</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In combined lost revenue + operational inefficiency across all five modules</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                Post-Dragons' Den awareness is a decaying asset — every week without AI-powered conversion means wasted awareness lift. 53% of UK adults have now tried low/no alcohol drinks (Mintel 2025).
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
                  <p className="text-white text-sm sm:text-base font-medium">Seedlip (Diageo)</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Enterprise AI</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Backed by Diageo's AI infrastructure — supply chain optimization, demand forecasting, and retail analytics at global scale. Competing for the same Waitrose and Sainsbury's shelf space.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Ghia (US)</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">DTC personalization</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Sophisticated DTC with subscription model, multi-SKU recommendations, and personalized e-commerce. Mother Root has a single product through a standard Shopify storefront.</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Botivo (UK)</p>
                  <span className="px-2 py-1 bg-gray-500/10 rounded-full text-gray-400 text-xs">No visible AI</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Similar ACV-based positioning. No visible AI capabilities. Both brands are ripe for AI — who moves first wins.</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-amber-500/5 rounded-lg sm:rounded-xl border border-amber-500/10">
              <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1">AI in Beverages: $12.7B → $104.8B by 2035</p>
              <p className="text-gray-400 text-xs sm:text-sm">23.5% CAGR. This is not theoretical — it's where the industry is moving. Seedlip's demand models get more accurate every week. Manual processes don't improve with time.</p>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
              <div>
                <p className="text-white text-sm sm:text-base font-semibold mb-1">Mother Root's First-Mover Opportunity</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  No UK premium non-alcoholic aperitif brand uses AI-powered content generation or sentiment analysis. Mother Root's ACV + gut-health positioning aligns with functional beverage trends where <span className="text-emerald-400 font-medium">AI-driven personalization is emerging as a category differentiator</span>.
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
          { area: 'Demand Planning', today: 'Spreadsheet forecasts; Rhubarb edition sold out in 6 hours; reactive production', ai: 'ML forecasts per SKU per channel; production scheduled 8+ weeks ahead with confidence intervals' },
          { area: 'Customer Retention', today: 'No visibility into who\'s about to churn; no replenishment prompts', ai: 'Predicted reorder window per customer; auto-triggered personalized re-engagement before churn' },
          { area: 'Content Production', today: 'Team manually writes blog, recipes, social, email, Amazon listings', ai: 'AI drafts in Bethan\'s brand voice; human edits and publishes in 20% of the time' },
          { area: 'Customer Sentiment', today: 'Manual review reading across 4+ platforms; issues surface weeks late', ai: 'NLP dashboard with real-time theme detection; alerts for emerging issues like Evri delays' },
          { area: 'Ad Performance', today: 'Broad targeting; manual creative testing; budget split by intuition', ai: 'LTV-segmented audiences; AI creative variants; marginal ROAS-optimized budget allocation' },
          { area: 'New Customer Education', today: 'Static FAQ; high review polarization from misuse of product', ai: 'AI product advisor guiding preparation, dilution ratio, and serving suggestions' },
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
                { icon: TrendingUp, metric: '20–35%', label: 'ROAS improvement' },
                { icon: RefreshCw, metric: '15–25%', label: 'Repeat purchase lift' },
                { icon: PenTool, metric: '60–75%', label: 'Content time saved' },
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
          { num: '02', title: 'LTV & Retention', desc: 'Supervised ML + churn scoring', icon: RefreshCw },
          { num: '03', title: 'Content Pipeline', desc: 'LLM + RAG brand-voice', icon: Sparkles },
          { num: '04', title: 'Sentiment & VoC', desc: 'NLP topic modeling', icon: MessageSquare },
          { num: '05', title: 'Ad Optimization', desc: 'Generative AI + ROAS ML', icon: Megaphone },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Mother Root's AI Intelligence Layer — <GradientText>4 Layers</GradientText>
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Revenue & Customer Intelligence', icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Supply Chain & Demand', icon: Package, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { label: 'Generative Creative & Content', icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Customer Experience & Insight', icon: MessageSquare, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
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
                Built on Mother Root's existing Shopify stack. All 5 modules designed for a ~12-person team — low-maintenance, autonomous outputs, human-in-the-loop on all decisions.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Demand Forecasting
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Weekly demand forecasts per SKU per channel (DTC, Amazon, Waitrose, Sainsbury\'s, Ocado)',
          'Incorporates media/PR events as demand signals — predicts Dragons\' Den-style spikes',
          'Recommends production batch sizes accounting for 2-month ACV fermentation lead time',
          'Alerts team to stockout risk before it impacts retail listings',
          'Scenario modeling for new launches (e.g., "What if we launch Turmeric Switchel in 200 stores?")',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Multi-Channel Demand Forecasting</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Rhubarb Switchel sold out in 6 hours. Dragons' Den triggered a 2,000%+ sales spike. With 5 channels and a 2-month fermentation lead time, manual forecasting can't keep up. One missed Waitrose reorder risks a listing that took months to win.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Gut Feel</p>
                  <p className="text-gray-500 text-xs">Spreadsheets + founder intuition</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">20–35%</p>
                  <p className="text-gray-500 text-xs">Fewer stockouts across channels</p>
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
                <span className="font-bold">Impact:</span> £200K–£500K/yr in protected retail listings | Tool: Prediko (Shopify-native) | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — LTV & Retention Engine
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Predicts individual customer LTV at point of first purchase',
          'Scores churn risk daily and auto-triggers retention workflows at optimal timing',
          'Identifies predicted reorder window per customer for personalized re-engagement',
          'Exports high-LTV segments to Meta/Google for lookalike targeting',
          'Segment dashboards showing retention rates, LTV trends, and CAC efficiency by cohort',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <RefreshCw size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Customer LTV & Retention Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                At £27.95/bottle with a single core SKU, repeat purchase is the primary revenue driver. Reviews show a passionate but polarized base — some on their "3rd bottle," others won't reorder. Identifying who will become loyal vs. who needs intervention is the growth lever.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Blind</p>
                  <p className="text-gray-500 text-xs">No visibility into churn risk</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15–25%</p>
                  <p className="text-gray-500 text-xs">Repeat purchase rate lift</p>
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
                <span className="font-bold">Impact:</span> £300K–£700K/yr revenue uplift | Tools: Shopify + Klaviyo AI | Complexity: Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Content Pipeline
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Generates channel-adapted content (Instagram ≠ email ≠ Amazon listing ≠ Waitrose sell-sheet)',
          'Maintains Bethan\'s distinctive brand voice — warm, bold, "wholebeing," never apologetic',
          'Creates educational content explaining switchel to new audiences at retail scale',
          'Produces recipe variations and serving suggestion content at volume',
          'Optimizes Amazon listings and retail copy for search and discoverability',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Brand-Voice Content Pipeline</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A ~12-person team managing 5 sales channels, blog, recipes, social media, email, and PR post-Dragons' Den. Bethan's brand voice is a competitive asset, but it doesn't scale without AI. Many consumers don't know what a switchel is — constant education content is required.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Each piece hand-crafted</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">60–75%</p>
                  <p className="text-gray-500 text-xs">Production time reduction</p>
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
                <span className="font-bold">Impact:</span> 8–15 hrs/week reclaimed | Tools: LLM + RAG on brand assets | Complexity: Low–Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Sentiment & VoC
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Classifies sentiment across 5+ review/comment platforms in real-time',
          'Extracts themes: taste, delivery, price, preparation guidance, health claims',
          'Detects emerging issues before escalation (e.g., Evri delivery problems flagged weeks faster)',
          'Compares Mother Root sentiment against Seedlip, Ghia, Botivo on shared platforms',
          'Generates suggested review response drafts maintaining brand voice',
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
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Sentiment & Voice of Customer</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Mother Root's product is polarizing by design — ACV is divisive. Understanding which specific elements drive love vs. rejection, and how sentiment shifts after the Dragons' Den influx, is critical. 174+ Trustpilot reviews, Amazon reviews, Instagram comments — all currently read manually.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Reviews read one-by-one</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Real-time</p>
                  <p className="text-gray-500 text-xs">Automated multi-platform analysis</p>
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
                <span className="font-bold">Impact:</span> 3–5 hrs/week reclaimed + early issue detection | Tools: NLP pipeline + platform APIs | Complexity: Low–Medium
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Ad Optimization
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Generates segment-specific ad creative at 10–20x current volume',
          'Continuously tests and ranks creative variants by performance',
          'Allocates budget by marginal ROAS across Meta, Google, TikTok',
          'Uses LTV predictions to optimize for customer quality, not just conversion volume',
          'Adapts creative to seasonal moments (Dry January, summer) and media events',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Megaphone size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Ad Creative & Budget Optimizer</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Trustpilot reviews mention being "targeted by ads for ages" — significant paid spend without intelligent optimization. Post-Dragons' Den, Mother Root has a massive awareness lift to capitalize on. AI-driven optimization is the difference between spending the £1.1M raise efficiently and burning it.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Broad</p>
                  <p className="text-gray-500 text-xs">Untargeted spend, few variants</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">20–35%</p>
                  <p className="text-gray-500 text-xs">ROAS improvement</p>
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
                <span className="font-bold">Impact:</span> 20–35% ROAS lift + 15–25% CAC reduction | Tools: AI creative gen + ML budget allocation | Complexity: Medium
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
          { icon: BarChart3, metric: 'Stockout Reduction (Retail)', before: 'Gut estimates', after: '20–35%', basis: 'Module 1' },
          { icon: RefreshCw, metric: 'Repeat Purchase Rate Lift', before: 'No retention flows', after: '15–25%', basis: 'Module 2' },
          { icon: Sparkles, metric: 'Content Production Efficiency', before: '10–15 hrs/week', after: '60–75% saved', basis: 'Module 3' },
          { icon: Megaphone, metric: 'ROAS Improvement', before: 'Broad targeting', after: '20–35%', basis: 'Modules 2+5' },
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
                Annual Impact: <span className="text-amber-400">£500K–£1.5M</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">In protected and additional revenue. Conservative ranges, all evidence-based.</p>
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
          { area: 'Module 1: Demand Forecasting', hours: '4–6 hrs/wk' },
          { area: 'Module 2: LTV & Retention', hours: '2–4 hrs/wk' },
          { area: 'Module 3: Content Pipeline', hours: '8–12 hrs/wk' },
          { area: 'Module 4: Sentiment Analysis', hours: '3–5 hrs/wk' },
          { area: 'Module 5: Ad Optimization', hours: '3–5 hrs/wk' },
        ];

        const redirected = [
          { role: 'Bethan', focus: 'Brand storytelling, retailer relationships, new product development' },
          { role: 'Alice (COO)', focus: 'Strategic partnerships and operational scaling' },
          { role: 'Marketing', focus: 'Creative direction, community building, brand experiences' },
          { role: 'Operations', focus: 'Production quality, manufacturer relationships — not spreadsheets' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              <GradientText>20–32 Hours/Week</GradientText> Back to Your Team
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Equivalent to adding 1–2 team members — without a single new hire.</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~20–32 hours/week reclaimed</p>
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
                With Steven Bartlett's investment and 5 channels growing simultaneously, AI capacity reclamation is how a 12-person team operates like 14.
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
            items: ['Full data audit across Shopify, Amazon, retail feeds', 'Activate Shopify Magic + dormant AI features', 'Module 3 (Content Pipeline) MVP — brand-voice trained', 'Module 4 (Sentiment Engine) MVP on Trustpilot + on-site reviews'],
          },
          {
            title: 'Core AI Engines Live',
            time: 'Weeks 5–8',
            status: 'Phase 2',
            items: ['Module 1 (Demand Forecasting) live on Shopify + Amazon', 'Module 2 (LTV & Retention) scoring customers', 'Module 5 (Ad Optimization) generating creative variants', 'First automated retention flows triggered'],
          },
          {
            title: 'Optimization & Full Integration',
            time: 'Weeks 9–12',
            status: 'Phase 3',
            items: ['Retail data integration (Waitrose/Sainsbury\'s if available)', 'Cross-module connections (Sentiment → Churn, LTV → Ad targeting)', 'All 5 modules refined with live data', 'Team training and performance review vs. projections'],
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
                <span className="text-white font-medium">Built on your existing Shopify stack.</span> Human-in-the-loop on all critical decisions. AI recommends, your team decides. Content pipeline and sentiment analysis delivering value by Week 3.
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
              Custom-built AI systems for growth-stage brands — not off-the-shelf templates. Every module is designed for Mother Root's specific workflows, Shopify stack, and omnichannel growth trajectory. We add intelligence layers to your existing infrastructure.
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
              AI systems improve with data — demand forecasts sharpen, retention models get smarter, sentiment analysis deepens. We manage this continuous improvement so your team doesn't have to.
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
            Ready to Scale the <GradientText>Feel-Good Revolution</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            180% growth. Dragons' Den validation. Steven Bartlett on board. 5 channels live. The foundation is exceptional — now add the AI intelligence that lets a 12-person team operate like 14, and turns £1.1M of investment into compounding operational advantage.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '£500K+', label: 'Annual impact' },
              { value: 'Week 3', label: 'First AI results' },
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
