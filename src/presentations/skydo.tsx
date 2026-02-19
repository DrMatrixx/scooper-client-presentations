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
  Brain,
  Target,
  Shield,
  LineChart,
  Headphones,
  PenTool,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Skydo',
  description: 'AI Automation Proposal — Build the Intelligence Layer That Makes the $5B Volume Target Inevitable',
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
              src="/skydo-logo.svg"
              alt="Skydo"
              className="h-14 sm:h-18 md:h-20 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Srivatsan Sridhar & Movin Jain</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if your teams could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $1.5M–$5M
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in pipeline uplift, churn protection, and operational efficiency?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '67%', label: 'SDR time on non-selling tasks', icon: Clock },
              { value: '30K+', label: 'Customers, no AI support', icon: Headphones },
              { value: '$0', label: 'AI-powered FX advisory', icon: LineChart },
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
                5 AI modules to give your sales team <span className="text-white font-bold">3–5x pipeline</span>, auto-resolve <span className="text-white font-bold">50–70% of support queries</span>, and deliver <span className="text-white font-bold">AI-powered FX intelligence</span> to 30K+ customers
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
          { task: 'Sales: Researching & prioritizing MSME/exporter prospects manually', time: '~67% of selling time', change: 'AI scores 50M+ Indian exporters by intent signals; daily hot prospect list delivered' },
          { task: 'Sales: Writing personalized outreach for IT, Amazon, design, freelancer segments', time: '10-15 hrs/wk', change: 'AI drafts personalized first-touch using live signals (funding, hires, platform changes)' },
          { task: 'Social: Producing segment-specific content for 4 personas across 5 platforms', time: '8-15 hrs/wk', change: 'AI content engine drafts weekly calendar; team edits and approves' },
          { task: 'Ops: Handling reconciliation, FIRA, payment status queries from 30K+ customers', time: '15-25 hrs/wk', change: 'LLM agent resolves 50-70% of tier-1 queries on WhatsApp in <10 seconds' },
          { task: 'CSM: Discovering churn only after high-volume customers stop transacting', time: 'Reactive', change: 'ML model flags declining activity 30-60 days early; automated intervention' },
          { task: 'All teams: Customers manually timing FX conversions — no AI advisory', time: 'Competitive risk', change: 'AI FX intelligence recommends optimal conversion timing via WhatsApp' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Where Your Teams' Time Goes
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                Chasing $5B in annualized volume with 77 people — your teams <em>are</em> the intelligence layer. AI changes that.
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
                SDRs using AI tools book <span className="text-white font-bold">4–7x more meetings</span> than non-AI counterparts. Your sales team is leaving a majority of pipeline on the table.
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
          { icon: Target, value: '67%', metric: 'Sales Productivity Gap', desc: 'SDRs spend 67% of time on non-selling tasks without AI (Salesforce 2025)' },
          { icon: TrendingUp, value: '78%', metric: 'LinkedIn Pipeline Gap', desc: '78% of B2B leads come from LinkedIn — without AI attribution, social optimizes for vanity, not signups' },
          { icon: Shield, value: '~50%', metric: 'Churn Blind Spot', desc: 'IT services exporters (~50% of revenue) making FX decisions manually — no AI advisory to retain them' },
          { icon: Headphones, value: '900+', metric: 'Monthly Support Burden', desc: '30K+ customers at any meaningful contact rate = high-volume repetitive queries ops handles manually' },
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
                Estimated Annual Opportunity: <span className="text-white font-bold">$1.5M – $5M</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In combined pipeline uplift, churn protection, and ops efficiency</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                $10M Series A capital is available now. The $5B target is the clock. The window to build the intelligence layer is 6–12 months.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Today vs AI-Powered
    {
      id: 'vision',
      render: () => {
        const comparisons = [
          { area: 'Sales — Prospecting', today: 'Manual list building, undifferentiated outreach to MSMEs', ai: 'AI scores 50M+ exporters by intent; daily hot prospect list with outreach ready' },
          { area: 'Sales — Outreach', today: 'SDR researches each prospect, writes individual emails', ai: 'AI pulls live signals → personalized first-touch sent; SDR focuses on warm replies' },
          { area: 'Social — Content', today: 'Manual content for 4 personas across 5 platforms', ai: 'AI generates weekly calendar with segment-specific drafts; team edits and approves' },
          { area: 'Customer Ops', today: 'WhatsApp/email queries handled manually by ops team', ai: 'LLM resolves 50-70% of queries in <10 seconds, 24/7' },
          { area: 'CSM — Retention', today: 'Churn discovered when customer stops transacting', ai: 'ML flags declining activity 30-60 days early; automated retention nudge' },
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
                { icon: TrendingUp, metric: '3–5x', label: 'Qualified pipeline' },
                { icon: Headphones, metric: '50–70%', label: 'Support auto-resolved' },
                { icon: Users, metric: '20–35%', label: 'Churn reduction' },
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
          { num: '01', title: 'Sales Intelligence', desc: 'AI outbound agent', icon: Target, layer: 'Sales' },
          { num: '02', title: 'FX Intelligence', desc: 'Conversion timing AI', icon: LineChart, layer: 'Customer' },
          { num: '03', title: 'LTV & Churn', desc: 'Predictive retention', icon: Brain, layer: 'Sales' },
          { num: '04', title: 'Support Agent', desc: 'LLM on WhatsApp', icon: MessageSquare, layer: 'Customer' },
          { num: '05', title: 'Content Engine', desc: 'AI social pipeline', icon: PenTool, layer: 'Growth' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Skydo's AI Intelligence Layer — <GradientText>3 Layers</GradientText>
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Sales Intelligence AI', icon: Target, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Customer Intelligence AI', icon: Brain, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Content & Growth AI', icon: PenTool, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
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
                Spans 3 layers, touches 4 teams. Module 4 is fastest to deploy. Modules 1 & 3 are tightly linked — sales intelligence feeds retention intelligence.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — AI Sales Intelligence
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'ML lead scoring on 75+ intent signals (funding, hires, LinkedIn activity, platform changes)',
          'NLP-powered personalized outreach in Skydo\'s brand voice per exporter segment',
          'Daily prioritized prospect list with ICP score and intent reason for each',
          'Automated first-touch via email + LinkedIn; human sales rep handles warm replies only',
          'Continuous A/B testing and model refinement from conversion outcomes',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Target size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Sales Intelligence & Outbound Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Your sales team targets 50M+ Indian MSMEs without ML-based prioritization. AI identifies the IT agency that just raised a seed round, the Amazon seller expanding to new marketplaces, the design studio hiring a finance lead — and sends personalized outreach before anyone else.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">67%</p>
                  <p className="text-gray-500 text-xs">Time on non-selling tasks</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">80%+</p>
                  <p className="text-gray-500 text-xs">Time on warm conversations</p>
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
                <span className="font-bold">Impact:</span> 3–5x qualified pipeline from same headcount; 95% more qualified leads (Persana benchmark); $132K/yr vs hiring an additional SDR
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — AI FX Conversion Intelligence
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'LSTM/transformer ML forecasting across 32 currency pairs using multi-signal inputs',
          'Personalized WhatsApp alerts with specific INR savings context per customer',
          'Optional auto-conversion rule engine (customer sets threshold, AI executes)',
          'Monthly FX savings report per customer — loyalty and retention driver',
          'Macroeconomic signal integration (RBI policy, Fed decisions, trade balance)',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <LineChart size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI FX Conversion Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A $50K/month IT exporter who converts at AI-recommended timing saves meaningfully more than one deciding manually. This module transforms WhatsApp from a notification pipe into a value-delivery channel — and gives customers a reason to stay.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Customer guesses FX timing</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15–25%</p>
                  <p className="text-gray-500 text-xs">Better FX outcomes</p>
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
                <span className="font-bold">Impact:</span> 10–20% retention improvement in high-volume segments; transforms FX from commodity to value-add service
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — ML Customer LTV & Churn Prediction
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'LTV decile scoring at signup, refreshed weekly across all 30,000+ accounts',
          'Behavioral churn detection with specific trigger identification (not just a score)',
          'Automated CSM alerts: "Optimite has had no FX conversion for 18 days — check in"',
          'WhatsApp retention nudges for mid-tier accounts with personalized savings data',
          'ICP feedback loop to sales team — which acquisition channels yield lowest-churn cohorts',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Brain size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">ML Customer LTV & Churn Prediction</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                With 30,000 customers and 77 people, the CSM team cannot give equal attention to all accounts. An ML model that flags a high-volume IT exporter who hasn't converted FX in 18 days — before they churn — is the difference between retaining and losing a $500K+/year account.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Reactive</p>
                  <p className="text-gray-500 text-xs">Churn discovered after the fact</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30–60 days</p>
                  <p className="text-gray-500 text-xs">Early warning with context</p>
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
                <span className="font-bold">Impact:</span> 20–35% reduction in high-value customer churn; improved CAC efficiency through ICP refinement
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — LLM Customer Support Agent
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Natural language responses in English and Hindi via WhatsApp and dashboard',
          'Full reconciliation breakdown: "Your ₹4,93,000 vs ₹5,00,000 invoice: FX rate 83.12 + $29 fee"',
          'Automated FIRA resend and payment status lookups in <10 seconds',
          'Seamless escalation to human ops with full conversation context pre-attached',
          'Continuous improvement from human feedback loop on resolved queries',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">LLM Support & Reconciliation Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Sagar from Primathon said it on your homepage: "Manual invoice-payment recon is unscalable." With 30,000+ customers, WhatsApp is already your notification channel. An LLM agent on WhatsApp requires zero behavioral change — customers get instant answers, ops gets their time back.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours</p>
                  <p className="text-gray-500 text-xs">Manual lookup, business hours</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">50–70%</p>
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
                <span className="font-bold">Impact:</span> 15–25 hrs/week of ops time reclaimed; 24/7 coverage for US/UK/Canada time zones; fastest module to deploy
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — AI Social Media Content Engine
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Brand-voice-trained content drafting for IT services, Amazon sellers, design agencies, freelancers',
          'Multi-platform generation: LinkedIn posts, Instagram carousels, YouTube scripts, X threads',
          'AI performance analytics: "FX savings content for IT services drives 3x more signups"',
          'Blog-to-social repurposing pipeline — automated multi-format content from each post',
          'Competitor content signal monitoring across PayGlocal, Airwallex, BRISKPE, and others',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Social Media Content Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Your LinkedIn is already segment-specific and education-forward — the strategy is right. But producing content for 4 exporter personas across 5 platforms manually doesn't scale. 78% of B2B leads come from LinkedIn. AI doubles output without doubling headcount — and tells you which content actually drives signups.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">4 personas, 5 platforms by hand</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2–3x</p>
                  <p className="text-gray-500 text-xs">Content output, same team</p>
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
                <span className="font-bold">Impact:</span> 86% of marketers report efficiency gains; 30–50% improvement in content-to-signup conversion; human-edited to avoid LinkedIn's 47% AI reach penalty
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
          { icon: TrendingUp, metric: 'Qualified Pipeline', before: 'Manual prospecting', after: '3–5x increase' },
          { icon: LineChart, metric: 'Customer FX Outcomes', before: 'Manual timing', after: '15–25% better' },
          { icon: Users, metric: 'High-Value Churn', before: 'Reactive discovery', after: '20–35% reduction' },
          { icon: Headphones, metric: 'Support Resolution', before: 'Manual, hours', after: '50–70% auto-resolved' },
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
                { icon: PenTool, metric: 'Content Output', before: 'Manual across 5 platforms', after: '2–3x same team' },
                { icon: Clock, metric: 'Team Hours Reclaimed', before: 'Manual intelligence layer', after: '48–78 hrs/wk saved' },
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
                Annual Impact: <span className="text-amber-400">$1.5M–$5M</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">In combined pipeline uplift, churn protection, and operational efficiency</p>
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
          { area: 'Sales Intelligence Agent (prospect research, outreach)', hours: '20–30 hrs/wk' },
          { area: 'LLM Support Agent (reconciliation, FIRA, status)', hours: '15–25 hrs/wk' },
          { area: 'Social Content Engine (ideation, drafting, scheduling)', hours: '8–15 hrs/wk' },
          { area: 'LTV & Churn (reactive firefighting, account reviews)', hours: '5–8 hrs/wk' },
        ];

        const redirected = [
          { role: 'Sales team', focus: 'Warm conversations, demos, and closing — zero cold research' },
          { role: 'Ops/support', focus: 'Genuine edge cases, dispute resolution, high-value account management' },
          { role: 'Social team', focus: 'Creative direction, community building, founder storytelling, video' },
          { role: 'CSM team', focus: 'Proactive top-10% account management with early-warning data' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              <GradientText>48–78 Hours/Week</GradientText> Back to Your Teams
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Equivalent to adding 10–16 focused team members — without a single new hire.</p>
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {savings.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <span className="text-gray-300 text-xs sm:text-sm">{item.area}</span>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-emerald-400 text-sm sm:text-base font-bold">Total: ~48–78 hours/week reclaimed</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">What your teams do instead</p>
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
            title: 'Quick Wins & Foundation',
            time: 'Weeks 1–4',
            status: 'Phase 1',
            items: ['LLM Support Agent MVP on WhatsApp', 'Social Content Engine brand-voice training', 'CRM & transaction DB data audit'],
          },
          {
            title: 'Revenue Intelligence Live',
            time: 'Weeks 5–8',
            status: 'Phase 2',
            items: ['AI Sales Intelligence with Clay + Persana', 'FX Intelligence model trained & pilot alerts', 'First LTV scores generated for all accounts'],
          },
          {
            title: 'Full Integration & Optimization',
            time: 'Weeks 9–12',
            status: 'Phase 3',
            items: ['LTV & Churn fully live with CSM alerts', 'FX alerts rolled out to 30K+ customers', 'Self-improving feedback loops across all modules'],
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
                <span className="text-white font-medium">Built on your existing infrastructure</span> — WhatsApp, Zoho, bank partner APIs. Human-in-the-loop on all critical decisions. AI recommends, your teams decide. First LLM support agent delivering value by Week 2.
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
              Custom-built AI systems for growth-stage companies — not off-the-shelf templates. Every module is designed for Skydo's specific teams, data infrastructure, and $5B growth trajectory. We add intelligence layers to your existing stack, not replacements.
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
              AI systems improve with data — sales models get sharper, FX predictions get more accurate, support agents expand their knowledge. We manage this continuous improvement.
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
            Ready to Build the <GradientText>Intelligence Layer</GradientText> for $5B?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            30,000+ businesses, RBI PA-CB license, $10M in fresh capital, 88% team growth. The foundation is built — now add the AI that makes every team 3–5x more effective.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full AI engine' },
              { value: '$1.5M+', label: 'Annual impact' },
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
