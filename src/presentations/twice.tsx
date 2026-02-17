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
  MessageSquare,
  Zap,
  Package,
  Star,
  BarChart3,
  Sparkles,
  Database,
  FileText,
  Brain,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Twice',
  description: 'AI Automation Proposal — From Reactive Operations to Predictive Intelligence',
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
              src="/twice-logo.png"
              alt="Twice"
              className="h-14 sm:h-18 md:h-20 w-auto mx-auto mb-3 invert"
            />
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $200K–$500K+
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered revenue and operational efficiency?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '2+ mo', label: 'Hero product stockout', icon: Package },
              { value: '50-65%', label: 'Capacity on manual ops', icon: Clock },
              { value: '5+', label: 'Data silos across channels', icon: Database },
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
                5 AI modules to <span className="text-white font-bold">predict demand</span> before stockouts, generate <span className="text-white font-bold">ad creative at 10x velocity</span>, unify <span className="text-white font-bold">cross-channel intelligence</span>, and provide <span className="text-white font-bold">24/7 AI support</span>
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

    // Slide 2: Operational Reality
    {
      id: 'reality',
      render: () => {
        const tasks = [
          { task: 'Checking inventory across Shopify, Amazon, Target, CVS, Wegmans', time: '4-6 hrs/wk', change: 'AI demand model flags reorder triggers 30-90 days before stockout' },
          { task: 'Deciding reorder quantities from manufacturers', time: '3-5 hrs/cycle', change: 'AI generates recommended PO quantities based on predicted demand curves' },
          { task: 'Producing ad creative for 7+ platforms', time: '10-15 hrs/wk', change: 'AI generates 50+ variants per campaign, auto-tests and kills underperformers' },
          { task: 'Answering same customer questions via email', time: '5-8 hrs/wk', change: 'AI product advisor resolves 70-80% of inquiries instantly' },
          { task: 'Reconciling data across channels for strategic decisions', time: '3-5 hrs/wk', change: 'AI intelligence hub provides live, unified cross-channel dashboard' },
          { task: 'Monitoring competitor activity manually', time: '2-3 hrs/wk', change: 'AI agent scrapes and summarizes competitor activity weekly' },
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
                Managing 6+ product categories across 5+ sales channels with a team of 1-10 — your people <em>are</em> the integration layer.
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
                Estimated <span className="text-white font-bold">50-65% of team capacity</span> consumed by tasks AI could handle — leaving insufficient time for strategic and creative work.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: The Hidden Cost
    {
      id: 'cost',
      render: () => {
        const costs = [
          { icon: Package, value: '2+ mo', metric: 'The Stockout Tax', desc: 'Immunity Rinse OOS — 1,000+ waitlist, 5-10x more left without buying' },
          { icon: Sparkles, value: '5-10x', metric: 'Creative Velocity Gap', desc: 'HiSmile tests 50-100+ ad variants while Twice tests 5-10/mo' },
          { icon: Database, value: '5+ silos', metric: 'The Data Silo Tax', desc: 'Every strategic decision made with incomplete cross-channel picture' },
          { icon: MessageSquare, value: 'Email only', metric: 'Support Response Gap', desc: 'Pre-purchase questions go unanswered in real-time' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Hidden Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Reactive Operations Actually Cost
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
                Estimated Annual Opportunity: <span className="text-white font-bold">$200K – $500K+</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In recovered revenue, reduced COGS, lower CAC, and operational savings</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                98% of companies report integrating AI into supply chains (Shopify, Q1 2025). 71% of CPG leaders adopted AI in at least one function (McKinsey, 2024).
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Competitive Gap
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
            Competitors Run on <GradientText>AI Infrastructure</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-3 sm:mb-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">HiSmile</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">~$1B revenue</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">AI-driven ad creative at massive scale, AI demand sensing for limited-edition drops, AI-powered DTC personalization</p>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm sm:text-base font-medium">Quip</p>
                  <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs">Subscription-native</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">AI-driven demand modeling at SKU-customer level — knows exactly when each customer needs a refill, optimizing manufacturing and cash flow</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-amber-500/5 rounded-lg sm:rounded-xl border border-amber-500/10">
              <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1">The Compounding Effect</p>
              <p className="text-gray-400 text-xs sm:text-sm">AI advantages don't plateau — they compound. Every month their models ingest more data, predictions get more accurate. The gap widens exponentially.</p>
            </div>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Star size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
              <div>
                <p className="text-white text-sm sm:text-base font-semibold mb-1">Twice's Unfair Advantage</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  4.89★ across 1,785 reviews, 500K+ customers, Lenny Kravitz as CCO, Bristle microbiome partnership, Glo Good Foundation. The brand is built — AI doesn't replace what makes Twice special, it <span className="text-emerald-400 font-medium">amplifies it</span>.
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
          { area: 'Demand planning', today: 'Spreadsheet-based — hope you don\'t stockout', ai: 'AI predicts demand per SKU per channel 30-90 days out' },
          { area: 'Ad creative', today: '5-10 variants per campaign, weeks to test', ai: '50+ variants auto-tested, underperformers killed in 48 hrs' },
          { area: 'Customer support', today: 'Every inquiry answered manually via email', ai: 'AI resolves 70-80% instantly with product-science responses' },
          { area: 'Channel intelligence', today: 'Export CSVs, build manual reports', ai: 'Real-time unified dashboard with anomaly detection' },
          { area: 'Content & SEO', today: '5 blog posts/month, hours per piece', ai: 'AI pipeline generates 15-20 drafts/month, optimized for AI search' },
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
                { icon: BarChart3, metric: '50-70%', label: 'Fewer stockout days' },
                { icon: TrendingUp, metric: '20-40%', label: 'ROAS improvement' },
                { icon: Clock, metric: '20-30 hrs', label: 'Reclaimed/week' },
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
          { num: '01', title: 'Demand Forecasting', desc: 'Predict & auto-order', icon: BarChart3, layer: 'Supply Chain' },
          { num: '02', title: 'Ad Creative Engine', desc: 'Generate & optimize', icon: Sparkles, layer: 'Creative' },
          { num: '03', title: 'AI Product Advisor', desc: '24/7 support agent', icon: MessageSquare, layer: 'Revenue' },
          { num: '04', title: 'Data Intelligence', desc: 'Unified analytics', icon: Database, layer: 'Revenue' },
          { num: '05', title: 'Content & SEO', desc: 'AI content pipeline', icon: FileText, layer: 'Creative' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Twice's AI Growth Engine — <GradientText>3 Layers</GradientText>
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Revenue & Customer Intelligence', icon: Brain, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Supply Chain & Procurement AI', icon: Package, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Generative Creative & Content AI', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
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
                Each module is custom-built for Twice's Shopify stack, channel APIs, and team workflows.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — AI Demand Forecasting
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'ML-driven demand prediction per SKU per channel (30/60/90-day horizons)',
          'Social media trend signal integration (TikTok virality, Instagram spikes)',
          'Automated purchase order generation with manufacturer lead time awareness',
          'Channel-specific inventory allocation recommendations',
          'Predicted vs. actual demand reporting for continuous improvement',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Demand Forecasting & Smart Procurement</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                The Immunity Rinse sold out for 2+ months while 1,000+ customers waited. Julian personally sent the restock email. AI demand sensing detects acceleration 6 weeks before stockout and auto-generates purchase orders.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2+ mo</p>
                  <p className="text-gray-500 text-xs">Stockout, manual waitlist</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">0 days</p>
                  <p className="text-gray-500 text-xs">Restocked before stockout</p>
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
                <span className="font-bold">Impact:</span> 50-70% reduction in stockout days, up to 30% forecast accuracy improvement (McKinsey/Drivepoint, 2025)
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Generative Ad Creative
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'AI-generated product photography variants from existing images',
          'Automated headline and copy generation aligned with Twice\'s brand voice',
          'Platform-specific formatting (TikTok vertical, Instagram carousel, Amazon A+)',
          'Real-time performance monitoring with automated budget reallocation',
          'Competitive creative analysis — scans competitor ad libraries for gaps',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Generative Ad Creative Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A 1-10 person team producing 5-10 ad variants for 7+ platforms while HiSmile tests 50-100+. AI generates on-brand creative at 10-50x velocity, auto-tests across platforms, and compounds learnings with every campaign.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5-10</p>
                  <p className="text-gray-500 text-xs">Variants/month, weeks to test</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">50+</p>
                  <p className="text-gray-500 text-xs">Per campaign, tested in 72 hrs</p>
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
                <span className="font-bold">Impact:</span> 20-40% ROAS improvement through scaled creative testing (Admetrics DTC benchmark, 2025)
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — AI Product Advisor
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          '24/7 AI advisor trained on Twice\'s ingredient science and oral wellness expertise',
          'Real-time Shopify integration — accurate order tracking, inventory status, pricing',
          'Automated email triage — classifies, prioritizes, auto-resolves routine inquiries',
          'Cross-sell intelligence — recommends products based on conversation context',
          'Weekly insight reports — recurring questions, product gaps, competitor comparisons',
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
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Product Advisor & Support Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A customer wonders if hydroxyapatite is as effective as fluoride. Today they'd email contact@twicetwicellc.com and wait. With an AI advisor trained on Twice's science, they get an instant answer — and a product recommendation — in seconds.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours</p>
                  <p className="text-gray-500 text-xs">Email-only, no real-time help</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">70-80%</p>
                  <p className="text-gray-500 text-xs">Inquiries auto-resolved instantly</p>
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
                <span className="font-bold">Impact:</span> 70-80% reduction in routine support volume, measurable pre-purchase conversion lift
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Cross-Channel Data Intelligence
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Cross-channel customer deduplication and unified LTV calculation',
          'Real-time inventory position across all channels in a single view',
          'AI-powered anomaly detection (conversion drops, return spikes, ad degradation)',
          'Automated marketing budget allocation based on marginal ROAS',
          'Product affinity mapping — which products drive the highest LTV together',
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
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cross-Channel Data Intelligence Hub</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Julian asks "What's our most profitable acquisition channel?" Team exports Shopify, Amazon, and ad data. Builds a spreadsheet. 4 hours later, a rough answer. With AI: real-time answer in 10 seconds with budget reallocation recommendations.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4+ hrs</p>
                  <p className="text-gray-500 text-xs">Manual CSV exports & pivots</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">10 sec</p>
                  <p className="text-gray-500 text-xs">Real-time AI dashboard</p>
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
                <span className="font-bold">Impact:</span> 10-20% marketing efficiency improvement through data-driven budget allocation
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — AI Content & SEO Pipeline
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'AI topic identification from search trends, customer questions, and competitive gaps',
          'Brand-voice content generation for blog, email, social, and product pages',
          'Answer Engine Optimization — structured for ChatGPT, Perplexity, Google AI Overviews',
          'Automated multi-format repurposing (blog → email → social → product page)',
          'Amazon listing optimization — AI-generated A+ content and search-optimized titles',
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
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Content & SEO Pipeline</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                47 customers asked about kids' safety this week? AI automatically drafts "Is Hydroxyapatite Toothpaste Safe for Kids?" targeting that exact search intent — optimized for both Google and AI search engines where wellness consumers increasingly discover products.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5/mo</p>
                  <p className="text-gray-500 text-xs">Blog posts, 3-4 hrs each</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15-20</p>
                  <p className="text-gray-500 text-xs">AI drafts, 30-45 min review</p>
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
                <span className="font-bold">Impact:</span> 3-5x content velocity, early-mover advantage in AI search visibility
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
          { icon: BarChart3, metric: 'Forecast Accuracy', before: 'Spreadsheet guesses', after: '+20-30% accuracy' },
          { icon: TrendingUp, metric: 'Ad ROAS', before: 'Limited testing', after: '+20-40% improvement' },
          { icon: Clock, metric: 'Hours Reclaimed', before: '50-65% on manual ops', after: '20-30 hrs/wk saved' },
          { icon: MessageSquare, metric: 'Support Resolution', before: 'Email-only, hours', after: '70-80% auto-resolved' },
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

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Annual Impact: <span className="text-amber-400">$200K–$500K+</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Equivalent to adding 0.5-0.75 FTE capacity — without a single new hire</p>
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
          { area: 'AI demand forecasting & procurement', hours: '5-8 hrs/wk' },
          { area: 'AI creative generation & testing', hours: '8-12 hrs/wk' },
          { area: 'AI customer support auto-resolution', hours: '4-6 hrs/wk' },
          { area: 'Automated cross-channel reporting', hours: '3-5 hrs/wk' },
          { area: 'AI content generation (drafts)', hours: '3-4 hrs/wk' },
        ];

        const redirected = [
          { role: 'Julian & leadership', focus: 'Strategic planning, retail expansion, investor relations' },
          { role: 'Marketing lead', focus: 'Brand strategy, influencer partnerships, creative direction' },
          { role: 'Operations', focus: 'Manufacturer relationships, new product development, QA' },
          { role: 'Customer facing', focus: 'VIP relationships, community building, Glo Good Foundation' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              <GradientText>23-35 Hours/Week</GradientText> Back to Your Team
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~23-35 hours/week reclaimed</p>
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
            time: 'Weeks 1-4',
            status: 'Phase 1',
            items: ['Data audit & integration', 'AI support agent live', 'Demand model training'],
          },
          {
            title: 'Core AI Engine Build',
            time: 'Weeks 5-8',
            status: 'Phase 2',
            items: ['AI demand forecasting live', 'Generative ad creative launched', 'Intelligence dashboard operational'],
          },
          {
            title: 'Optimization & Content Scale',
            time: 'Weeks 9-12',
            status: 'Phase 3',
            items: ['AI content pipeline active', 'Demand model refined', 'Full system integration'],
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
                <span className="text-white font-medium">Built on your existing Shopify stack</span> — no rip-and-replace. Human-in-the-loop on all critical decisions. AI recommends, your team decides. First AI chatbot delivering value by Week 2.
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
              Custom-built AI systems for growth-stage brands — not off-the-shelf templates. Every module is designed for Twice's specific operation, product catalog, and growth stage. We add intelligence layers to your existing stack, not replacements.
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
              AI systems improve with data — demand models get more accurate, creative engines learn what works, support agents expand their knowledge. We manage this continuous improvement.
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
            Ready to Build Twice's <GradientText>AI Growth Engine</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            The brand is proven — 500K+ customers, 4.89★ reviews, retail in Target and CVS. Now add the AI infrastructure to predict demand, generate creative at scale, and turn data into decisions.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '$200K+', label: 'Annual impact' },
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
