import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Users,
  Clock,
  MessageSquare,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  AlertCircle,
  Sparkles,
  Zap,
  DollarSign,
  Shield,
  Star,
  Handshake,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'TreadWright',
  description: 'Scaling DTC Growth Through Intelligent Automation',
  slides: [
    // Slide 1: Enhanced Title
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
              src="/treadwright-logo.avif"
              alt="TreadWright Tires"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for TreadWright Tires</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $500K–$900K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost revenue and operational inefficiency?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '~70%', label: 'Carts abandoned', icon: ShoppingCart },
              { value: '40-60 hrs', label: 'Weekly manual work', icon: Clock },
              { value: 'Hours/Days', label: 'Response time', icon: MessageSquare },
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
                5 custom automations to recover <span className="text-white font-bold">$500K–$900K/year</span>, cut response time to <span className="text-white font-bold">under 5 minutes</span>, and reclaim <span className="text-white font-bold">25-40 hrs/week</span>
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

    // Slide 2: Current Reality
    {
      id: 'reality',
      render: () => {
        const tasks = [
          { task: 'Customer inquiry & pre-sales support', time: '15-20 hrs/wk', issue: 'Delayed responses lose sales to faster competitors' },
          { task: 'Warranty claims processing', time: '8-12 hrs/wk', issue: 'Slow resolution drives negative reviews' },
          { task: 'Order fulfillment coordination', time: '10-15 hrs/wk', issue: 'Manual tracking across inventory & shipping' },
          { task: 'Distributor & wholesale onboarding', time: '5-8 hrs/wk', issue: 'Email-based pipeline doesn\'t scale' },
          { task: 'Review & reputation management', time: '3-5 hrs/wk', issue: 'Many reviews go unanswered for weeks' },
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
                A 60,000 sq. ft. Houston facility producing 10,000 remolded tires/month, sold 90%+ through DTC e-commerce — creating unique operational demands that consume your team's bandwidth.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm sm:text-base font-medium truncate">{item.task}</p>
                      <p className="text-gray-500 text-xs hidden sm:block">{item.issue}</p>
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
                This adds up to <span className="text-white font-bold">40-60 hours per week</span> — the equivalent of 1-1.5 full-time roles on repetitive tasks.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Cost of Problem
    {
      id: 'cost',
      render: () => {
        const metrics = [
          { icon: ShoppingCart, value: '$320K-$637K', metric: 'Cart Abandonment', desc: '~70% carts lost with no recovery' },
          { icon: Clock, value: '$109K-$182K', metric: 'Delayed Responses', desc: 'Sales lost to faster competitors' },
          { icon: Shield, value: '$75K-$150K', metric: 'Warranty Churn', desc: 'Slow claims drive negative reviews' },
          { icon: Users, value: '$80K-$120K', metric: 'Manual Admin', desc: '1-1.5 FTEs on repetitive tasks' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What This Actually Costs
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {metrics.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <item.icon size={16} className="text-rose-400 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-rose-400 text-lg sm:text-2xl font-bold mb-1">{item.value}</p>
                  <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.metric}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                Total estimated annual impact: <span className="text-white font-bold">$584,000 – $1,089,000</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Competitive Gap
    {
      id: 'competitive',
      render: () => {
        const competitors = [
          { name: 'Discount Tire', features: 'Instant chat, real-time inventory, same-day appointments, automated follow-ups' },
          { name: 'Priority Tire', features: 'Two-day shipping, instant fitment verification, responsive service' },
          { name: 'SimpleTire / TireRack', features: 'AI fitment tools, recommendation engines, streamlined checkout' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Competitive Gap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Your Competitors Are Already <GradientText>Automating</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="space-y-3 sm:space-y-4">
                {competitors.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                TreadWright wins on price — <span className="text-amber-400 font-bold">40% lower cost</span> than premium brands.
                But when competitors respond in minutes and ship in days, the <span className="text-white font-bold">price advantage is negated by the trust deficit</span>.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Opportunity - Vision
    {
      id: 'opportunity',
      render: () => {
        const comparisons = [
          { process: 'Tire fitment question', today: 'Wait for Zendesk agent; hours/days', automated: 'AI answers instantly 24/7 from product database' },
          { process: 'Cart abandonment', today: 'Customer leaves → no follow-up', automated: '3-email + SMS sequence within 1 hour' },
          { process: 'Warranty claim', today: 'Manual review, back-and-forth over weeks', automated: 'Auto-validated, decision-ready brief in <1 hour' },
          { process: 'Distributor inquiry', today: 'Email to Anthony, manual follow-up', automated: 'Instant qualification, auto info packet, CRM entry' },
          { process: 'Review response', today: 'Many go unanswered for weeks/months', automated: 'AI-drafted response queued within 24 hours' },
        ];
        const summaryMetrics = [
          { icon: TrendingUp, metric: '$500K-$900K', label: 'Annual Recovery' },
          { icon: Clock, metric: '<5 min', label: 'Response Time' },
          { icon: Sparkles, metric: '24/7', label: 'Coverage' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What If This Was <GradientText>Automated</GradientText>?
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-4 sm:mb-5">
              <div className="space-y-2 sm:space-y-3">
                {comparisons.map((item, i) => (
                  <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <p className="text-amber-400 text-xs font-semibold mb-1">{item.process}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                        <span className="text-gray-400 text-xs">{item.today}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span className="text-gray-300 text-xs">{item.automated}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {summaryMetrics.map((item, i) => (
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
      id: 'whatChanges',
      render: () => {
        const automations = [
          { num: '01', title: 'Tire Fitment AI', desc: '24/7 sales assistant', icon: MessageSquare, layer: 'Revenue' },
          { num: '02', title: 'Cart Recovery', desc: 'Automated sequences', icon: ShoppingCart, layer: 'Revenue' },
          { num: '03', title: 'Warranty Hub', desc: 'Claims automation', icon: Shield, layer: 'Operations' },
          { num: '04', title: 'Distributor CRM', desc: 'Wholesale pipeline', icon: Handshake, layer: 'Operations' },
          { num: '05', title: 'Reputation Engine', desc: 'Reviews & nurture', icon: Star, layer: 'Intelligence' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> Operations
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all ${
                    i === automations.length - 1 && automations.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''
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

            <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: 'Layer 1: Revenue', desc: 'Lead & conversion operations' },
                { label: 'Layer 2: Operations', desc: 'Workflow & process automation' },
                { label: 'Layer 3: Intelligence', desc: 'Data visibility & insights' },
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm mb-0.5">{item.label}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 - Tire Fitment AI
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          '24/7 instant response to fitment, pricing, and product comparison questions',
          'Vehicle-specific tire recommendations based on year/make/model lookup',
          'Answers questions about remolding technology, warranty, financing & shipping',
          'Automatic escalation to human support with full conversation context',
          'Integration with Shopify for real-time inventory and shipping estimates',
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
                <p className="text-amber-400 text-xs">Module 01 — Revenue Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">24/7 Tire Fitment & Sales Assistant</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                AI-powered chat trained on TreadWright's complete product catalog — every size, tread pattern, load rating, and wear option — to answer pre-sales questions instantly and guide visitors to the right tire.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  "Will your 285/75R16 Wardens fit my 2019 Ram 1500 with a 2-inch leveling kit?" — asked at 8 PM Saturday.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-rose-500/10 rounded-lg text-center">
                    <p className="text-rose-400 text-xs">Today</p>
                    <p className="text-white text-sm font-bold">No reply until Monday</p>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-center">
                    <p className="text-emerald-400 text-xs">Automated</p>
                    <p className="text-white text-sm font-bold">Answer in 30 seconds</p>
                  </div>
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
                <span className="font-bold">Impact:</span> 15-25% increase in chat-to-sale conversion, recapturing 3-8 sales/week
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 - Cart Recovery
    {
      id: 'auto2',
      render: () => {
        const sequence = [
          { time: '1 hour', channel: 'Email #1', action: 'Personalized reminder with specific tires in cart + product image' },
          { time: '4 hours', channel: 'SMS', action: 'Brief text reminder with direct cart link' },
          { time: '24 hours', channel: 'Email #2', action: 'Social proof (review for that tire model) + objection handling' },
          { time: '72 hours', channel: 'Email #3', action: 'Urgency — limited stock notification or free shipping incentive' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <ShoppingCart size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02 — Revenue Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Abandoned Cart Recovery Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Multi-channel recovery sequences triggered by Shopify cart abandonment — personalized messaging based on specific tires, vehicle type, and browsing behavior.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~70%</p>
                  <p className="text-gray-500 text-xs">Carts abandoned, $0 recovered</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5-10%</p>
                  <p className="text-gray-500 text-xs">Carts recovered automatically</p>
                </div>
              </div>

              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Recovery Sequence</p>
              <div className="space-y-1.5 sm:space-y-2">
                {sequence.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                    <span className="text-amber-400 text-xs font-mono whitespace-nowrap w-14 sm:w-16 shrink-0">{item.time}</span>
                    <span className="text-white text-xs font-semibold w-14 sm:w-16 shrink-0">{item.channel}</span>
                    <span className="text-gray-400 text-xs">{item.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Estimated $320,000–$637,000 in annual recovered revenue
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 - Warranty Hub
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Structured intake form with real-time validation (rejects incomplete submissions)',
          'Automated warranty eligibility check (purchase date, warranty type, mileage)',
          'Photo quality validation (minimum resolution, required angles)',
          'Claim categorization and priority routing (safety concerns flagged urgent)',
          'Customer-facing status tracker: Received → Under Review → Decision → Resolution',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Shield size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Warranty & Claims Automation Hub</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Automated intake, validation, and routing for warranty claims — pre-checks purchase date, warranty type, and photo documentation before surfacing a decision-ready brief to the warranty team.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-rose-500/50">
                <p className="text-gray-500 text-xs mb-1">Today's reality:</p>
                <p className="text-gray-400 text-xs sm:text-sm italic">
                  Customer emails about cracked sidewall → Team asks for photos → Photos arrive a week later → Team asks for order number → Discovers warranty expired 2 months ago. Three weeks elapsed. Customer posts 1-star review.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1-4 wks</p>
                  <p className="text-gray-500 text-xs">Claim resolution time</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-5 days</p>
                  <p className="text-gray-500 text-xs">70-80% faster resolution</p>
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
                <span className="font-bold">Impact:</span> $75K-$150K in preserved customer lifetime value annually
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 - Distributor Pipeline
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Automated partner qualification and territory availability check',
          'Instant info packet delivery with territory-specific pricing & margin calculator',
          'CRM pipeline management: Inquiry → Qualified → Proposal → Signed',
          'Automated follow-up sequences with engagement-based triggers',
          'Territory and exclusivity management dashboard',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Handshake size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Distributor & Wholesale Pipeline</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                CRM-integrated workflow for managing the growing wholesale channel — from initial inquiry through territory assignment, pricing setup, and ongoing partner communication.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  Tire shop owner in rural Montana sees TreadWright at a trade show, emails expressing interest. Today: email sits for 2 weeks during busy production. Automated: Within 5 min they receive a professional info packet — sales team calls the next morning.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Weeks</p>
                  <p className="text-gray-500 text-xs">Manual email follow-up</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5 min</p>
                  <p className="text-gray-500 text-xs">Instant qualification + info</p>
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
                <span className="font-bold">Impact:</span> 40-60% reduction in wholesale sales cycle, enabling faster national expansion
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 - Reputation Engine
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Multi-platform review monitoring (Trustpilot, BBB, Google, Yelp, forums)',
          'AI-drafted personalized responses with sentiment-appropriate tone',
          'Post-purchase nurture sequences (30/60/90-day care tips & rotation reminders)',
          'Proactive review solicitation from satisfied customers',
          'Monthly reputation health dashboard with trend analysis',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Star size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05 — Intelligence Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Experience & Reputation Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Automated review monitoring, AI-drafted responses, post-purchase nurture sequences, and sentiment dashboard — turning TreadWright's online reputation from a liability into a growth driver.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Weeks</p>
                  <p className="text-gray-500 text-xs">Reviews go unanswered</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;24 hrs</p>
                  <p className="text-gray-500 text-xs">AI-drafted, team-approved</p>
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
                <span className="font-bold">Impact:</span> 25-40% improvement in review response rate, 0.3-0.5 point Trustpilot rating lift
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Expected Results
    {
      id: 'results',
      render: () => {
        const results = [
          { icon: Clock, metric: 'Response Time', before: 'Hours/Days', after: '<5 minutes' },
          { icon: ShoppingCart, metric: 'Cart Recovery', before: '~0%', after: '5-10%' },
          { icon: Shield, metric: 'Warranty Resolution', before: '1-4 weeks', after: '2-5 days' },
          { icon: Zap, metric: 'Manual Hours', before: '40-60 hrs/wk', after: '15-20 hrs/wk' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Measurable Transformation</h2>

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

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center mb-3">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Estimated Annual Revenue Impact: <span className="text-amber-400">$500,000 – $900,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Cart recovery + faster response conversions + warranty retention</p>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Equivalent to adding <span className="text-white font-bold">1-2 full-time team members</span> — without a single new hire
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Why Now
    {
      id: 'whyNow',
      render: () => {
        const reasons = [
          { icon: TrendingUp, title: '$100M Growth Target', desc: 'Plans for 2 new manufacturing facilities and national wholesale distribution — manual processes won\'t scale' },
          { icon: Users, title: 'Wholesale Expansion', desc: 'Every new distributor, tire size, and territory multiplies coordination burden' },
          { icon: DollarSign, title: 'Rising Costs', desc: '25%+ freight cost increases require operational efficiency to protect margins' },
          { icon: AlertCircle, title: 'Reputation at Risk', desc: 'BBB F rating and mixed reviews compound daily — automation stops the bleeding' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Why Now</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The <GradientText>Inflection Point</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {reasons.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                Building automation infrastructure now means <span className="text-white font-bold">every new growth initiative scales on top of systems</span> — not on top of people.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation & Quick Wins',
            time: 'Weeks 1-4',
            status: 'First Revenue',
            items: ['Cart recovery sequences', 'Warranty intake form', 'Review monitoring'],
            result: 'First recovered cart revenue within 2 weeks',
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5-8',
            status: 'Full System',
            items: ['AI Tire Fitment Assistant', 'Distributor CRM pipeline', 'Post-purchase nurture'],
            result: 'Chat-to-sale conversion improvement measurable',
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9-12',
            status: 'Optimized',
            items: ['Reputation engine', 'Sentiment dashboard', 'Cross-module optimization'],
            result: 'Full suite operational, all KPIs improving',
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

            <div className="space-y-2 sm:space-y-3 mb-4">
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
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm">
                        {itm}
                      </span>
                    ))}
                  </div>
                  <p className="text-emerald-400 text-xs">{item.result}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Built on your existing stack — <span className="text-white font-bold">Shopify, Zendesk, and email</span>. No rip-and-replace required.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 15: About Us
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
            About <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors"><GradientText>Scooper AI</GradientText></a>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Bot size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-white text-lg sm:text-xl font-bold">Scooper AI</p>
                <p className="text-gray-400 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              We're an AI automation agency that builds custom intelligent systems for businesses.
              We don't sell off-the-shelf software — we design, build, and deploy automation that
              fits exactly how you operate.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Full Integration', desc: 'With existing tools' },
                { title: 'Ongoing Support', desc: 'Continuous optimization' },
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
              We handle everything — design to deployment to optimization.
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
            Ready to Scale the <GradientText>Growth Engine</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            TreadWright is already building America's best-value tire.
            Let's build the operational engine that matches that ambition.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full deployment' },
              { value: '$500K-$900K', label: 'Annual opportunity' },
              { value: '25-40 hrs', label: 'Reclaimed weekly' },
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
              Prepared by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors">Scooper AI</a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
