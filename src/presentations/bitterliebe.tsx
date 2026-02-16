import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  Zap,
  MessageSquare,
  RefreshCw,
  Target,
  DollarSign,
  Globe,
  BarChart3,
  Layers,
  Users,
  Megaphone,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'BitterLiebe',
  description: 'Scaling BitterLiebe\'s Omnichannel Growth Engine Through Intelligent Automation',
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
              src="/bitter_logo.svg"
              alt="BitterLiebe"
              className="h-12 sm:h-16 md:h-20 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Andre Sierek & Jan Stratmann</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              &euro;200K&ndash;&euro;500K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in preserved revenue and operational efficiency?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '30-40%', label: 'Team capacity on admin', icon: Clock },
              { value: '12+', label: 'Disconnected tools', icon: Layers },
              { value: '8,000+', label: 'Retail locations to sync', icon: Globe },
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
                5 automation modules to reduce churn by <span className="text-white font-bold">1&ndash;3%</span>, cut response times by <span className="text-white font-bold">70&ndash;85%</span>, and free <span className="text-white font-bold">25&ndash;40 hours/week</span> &mdash; built on your existing Shopify + Klaviyo + Recharge stack
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
            <span>Press</span>
            <div className="px-2.5 py-1.5 bg-white/10 rounded-lg text-gray-400 font-mono text-xs border border-white/10 shadow-inner">&rarr;</div>
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
          { task: 'Subscription lifecycle management', time: '3\u20135 hrs/wk', issue: 'Recharge status manually reconciled across Klaviyo, Yotpo, and Chatarmin' },
          { task: 'Product quiz \u2192 follow-up coordination', time: '2\u20133 hrs/wk', issue: 'Quiz zero-party data siloed from email segments and subscription suggestions' },
          { task: 'Multi-market campaign localization', time: '5\u20138 hrs/wk', issue: 'DE, UK, IT storefronts each need separate email flows and WhatsApp campaigns' },
          { task: 'Retail channel reporting & inventory sync', time: '4\u20136 hrs/wk', issue: '8,000+ dm, Rossmann, BUDNI locations synced manually with Shopify DTC' },
          { task: 'Affiliate program management', time: '2\u20133 hrs/wk', issue: 'Post Affiliate Pro commissions reconciled and partner comms handled manually' },
          { task: 'Customer support triage across channels', time: '8\u201312 hrs/wk', issue: 'Email, phone, callback, WhatsApp \u2014 all routed and prioritized by hand' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Your Team Is Actually Doing Every Day
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                A 39-person team managing one of the most complex omnichannel operations in the DACH supplements space &mdash; DTC, 8,000+ retail POS, Amazon, HSE24, and 3 international storefronts.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs sm:text-sm font-medium">{item.task}</p>
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
                This adds up to <span className="text-white font-bold">30&ndash;40% of team capacity</span> consumed by admin coordination and data reconciliation.
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
        const metrics = [
          { icon: RefreshCw, value: '7\u201310%', metric: 'Monthly Sub Churn', desc: 'Failed payments & missed renewals' },
          { icon: MessageSquare, value: '24\u201348 hrs', metric: 'Support Response Time', desc: 'Noted in Trustpilot reviews' },
          { icon: Globe, value: '3', metric: 'Siloed Storefronts', desc: 'DE, UK, IT without unified data' },
          { icon: DollarSign, value: '\u20AC200K\u2013500K', metric: 'Annual Opportunity Cost', desc: 'Revenue + efficiency combined' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What BitterLiebe Is Leaving on the Table
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {metrics.map((item, i) => (
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

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                Vendis Capital&apos;s growth thesis requires <span className="text-white font-bold">scalable infrastructure</span> &mdash; every manual process at DACH scale will break at European scale
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: The Competitive Gap
    {
      id: 'competitive',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Competitive Landscape</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            How Automation Is Reshaping <GradientText>Digestive Health</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-rose-500/20 p-4 sm:p-5 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Target size={16} className="text-rose-400" />
              <p className="text-white font-semibold text-sm sm:text-base">AG1 (Athletic Greens) &mdash; Fully Automated at Scale</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
              {[
                { value: 'Predictive', label: 'Churn modeling' },
                { value: 'AI-driven', label: 'Content recs' },
                { value: 'Full auto', label: 'Year-2 retention' },
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg text-center">
                  <p className="text-rose-400 text-base sm:text-lg font-bold">{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              AG1 has built a fully automated subscription engine with predictive churn modeling, personalized re-engagement, and AI-driven content &mdash; allowing a lean team to manage a global subscriber base.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-amber-500/20 p-4 sm:p-5 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-amber-400" />
              <p className="text-white font-semibold text-sm sm:text-base">The Compounding Effect</p>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              A 6-month delay in building these systems isn&apos;t just 6 months of lost efficiency &mdash; it&apos;s 6 months of customer data that competitors are collecting and learning from while BitterLiebe isn&apos;t. Each cycle widens the gap.
            </p>
          </div>

          <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4 text-center">
            <p className="text-emerald-400 text-xs sm:text-sm">
              BitterLiebe has the community (Bitter-Club), the content (Bitterwissen), and the loyalty. It needs the <span className="text-white font-bold">operational backbone</span> to convert these into compounding growth.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Today vs. Automated
    {
      id: 'opportunity',
      render: () => {
        const todayItems = [
          'Quiz data lives in silo, no follow-up',
          'Generic renewal emails from Recharge',
          'Yotpo review requests on fixed schedule',
          'Support inquiries manually triaged',
          'Campaigns built separately per market',
          'Retail inventory compiled manually',
        ];
        const automatedItems = [
          'Quiz \u2192 7-day personalized nurture by health concern',
          'Pre-renewal engagement + smart dunning cascade',
          'Review timing based on product usage cycles',
          'AI triage auto-resolves 40\u201360% of queries',
          'Templates auto-adapted for DE/UK/IT',
          'Unified inventory with auto-alerts',
        ];
        const summaryMetrics = [
          { icon: RefreshCw, metric: '1\u20133%', label: 'Churn reduction' },
          { icon: Clock, metric: '70\u201385%', label: 'Faster response' },
          { icon: TrendingUp, metric: '50\u201370%', label: 'Faster campaigns' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Today vs. <GradientText>Automated</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Today</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {todayItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-amber-400 text-xs uppercase tracking-wider mb-2 sm:mb-3">Automated</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {automatedItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
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

    // Slide 6: Solution Architecture Overview
    {
      id: 'architecture',
      render: () => {
        const automations = [
          { num: '01', title: 'Subscription Intelligence', desc: 'Churn prediction & dunning', icon: RefreshCw },
          { num: '02', title: 'Journey Orchestrator', desc: 'Unified customer profiles', icon: Users },
          { num: '03', title: 'Support Triage', desc: 'AI-powered resolution', icon: MessageSquare },
          { num: '04', title: 'Campaign Hub', desc: 'Multi-market automation', icon: Megaphone },
          { num: '05', title: 'Revenue Dashboard', desc: 'Cross-channel intelligence', icon: BarChart3 },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              3 Layers, 5 Modules That <GradientText>Transform</GradientText> Operations
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Layer 1', title: 'Lead & Revenue', color: 'amber' },
                { label: 'Layer 2', title: 'Workflow & Process', color: 'amber' },
                { label: 'Layer 3', title: 'Intelligence', color: 'amber' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
                  <p className="text-amber-400 text-xs font-semibold">{item.label}</p>
                  <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
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
                Built on your existing Shopify + Klaviyo + Recharge + Chatarmin stack &mdash; no rip-and-replace required.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Subscription Intelligence Engine
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Pre-renewal engagement scoring based on multi-channel activity (email, site, WhatsApp)',
          'Automated 3-step dunning: immediate SMS/WhatsApp \u2192 24-hour email \u2192 72-hour personal outreach',
          'Smart cancel-deflection with personalized alternatives (pause, product swap, dosage adjustment)',
          'Product swap suggestions based on purchase history and quiz data',
          'Churn cohort analysis identifying highest-risk subscription profiles',
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
                <p className="text-amber-400 text-xs">Module 01 &mdash; Lead & Revenue</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Subscription Intelligence Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Connects Recharge + Klaviyo + Chatarmin to predict churn, automate dunning, and personalize renewal experiences. Low-engagement subscribers get pre-renewal touchpoints; failed payments trigger a smart cascade; cancel requests hit a deflection flow first.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Reactive</p>
                  <p className="text-gray-500 text-xs">Generic emails, late discovery</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Predictive</p>
                  <p className="text-gray-500 text-xs">Pre-churn engagement + auto-dunning</p>
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
                <span className="font-bold">Impact:</span> 1&ndash;3 percentage point churn reduction; &euro;50K&ndash;&euro;150K preserved annual recurring revenue
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Omnichannel Customer Journey Orchestrator
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Unified customer profiles across DE/UK/IT storefronts',
          'Health-concern-based segmentation from Produktempfehlungs-Quiz flowing into Klaviyo',
          'Automated content sequences matched to product usage cycles (drops, capsules, teas)',
          'Cross-market customer recognition and journey continuity',
          'Behavioral trigger identification for upsell/cross-sell opportunities',
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
                <p className="text-amber-400 text-xs">Module 02 &mdash; Lead & Revenue</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Omnichannel Journey Orchestrator</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Unifies quiz data, purchase history, and engagement signals across DE/UK/IT into a single customer profile. Verdauung-focused customers get digestive health content; Stoffwechsel interests get metabolism tips. UK customers who previously bought from DE get continuity of experience.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Siloed</p>
                  <p className="text-gray-500 text-xs">Quiz data isolated, one-size-fits-all</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Unified</p>
                  <p className="text-gray-500 text-xs">Single profile, personalized journeys</p>
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
                <span className="font-bold">Impact:</span> 15&ndash;25% improvement in email conversion; 10&ndash;20% increase in customer lifetime value
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Intelligent Support Triage & Resolution System
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Multi-channel inbox unification (email, WhatsApp, callback requests)',
          'AI-powered categorization and intent detection (German, English, Italian)',
          'Auto-resolution for shipping status, product usage, and ingredient FAQs via Bitterwissen',
          'Smart routing of complex cases with full customer context (purchase, subscription, history)',
          'Support ticket pattern analysis for product and process improvement',
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
                <p className="text-amber-400 text-xs">Module 03 &mdash; Workflow & Process</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Intelligent Support Triage System</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                AI-powered first-response system for email, phone callbacks, and WhatsApp. Common questions (shipping, usage, ingredients) auto-resolved from FAQ/Bitterwissen content. Complex cases get routed to agents with full customer context &mdash; no manual lookups.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">24&ndash;48 hrs</p>
                  <p className="text-gray-500 text-xs">Manual read, categorize, respond</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt; 2 hrs</p>
                  <p className="text-gray-500 text-xs">40&ndash;60% auto-resolved</p>
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
                <span className="font-bold">Impact:</span> 60&ndash;75% reduction in first-response time; 40&ndash;60% fewer tickets requiring human intervention
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Multi-Market Campaign Automation Hub
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Template-based campaign creation with dynamic DE/UK/IT localization',
          'Automated A/B test deployment across markets via AB Tasty',
          'Cross-market performance benchmarking in real-time',
          'Winning variant auto-promotion; underperforming variants flagged',
          'Seasonal and event-based triggers (Bitter Month, Durchstarter, New Year)',
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
                <p className="text-amber-400 text-xs">Module 04 &mdash; Workflow & Process</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Multi-Market Campaign Hub</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Campaign templates created for the primary DE market auto-generate localized versions for UK and IT, flagging elements needing human review. A/B testing runs simultaneously across markets with shared learnings. Performance compared in real-time.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2&ndash;3 weeks</p>
                  <p className="text-gray-500 text-xs">Each market built separately</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">3&ndash;5 days</p>
                  <p className="text-gray-500 text-xs">Auto-adapted multi-market deploy</p>
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
                <span className="font-bold">Impact:</span> 50&ndash;70% faster campaign deployment; 10&ndash;20% better performance through faster learning cycles
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Cross-Channel Revenue Intelligence Dashboard
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Unified revenue view across DTC (Shopify), retail (8,000+ POS), Amazon, and HSE24',
          'Product-level performance tracking across all channels',
          'Customer acquisition cost tracking by source and market (DE/UK/IT)',
          'Subscription health metrics (MRR, churn, LTV) in real-time via Recharge',
          'Automated anomaly detection and alerting (conversion dips, stockout risks)',
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
                <p className="text-amber-400 text-xs">Module 05 &mdash; Intelligence</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cross-Channel Revenue Dashboard</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Aggregates Shopify DTC, Google Analytics, Klaviyo email attribution, Chatarmin WhatsApp revenue, and retail reporting into a live intelligence layer. Weekly automated reports for leadership with key metrics and recommended actions.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5&ndash;8 hrs/wk</p>
                  <p className="text-gray-500 text-xs">Manual data compilation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Real-time</p>
                  <p className="text-gray-500 text-xs">Live dashboard + auto-reports</p>
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
                <span className="font-bold">Impact:</span> 5&ndash;8 hours/week reclaimed; faster decision-making on inventory, pricing, and marketing allocation
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Measurable Transformation Summary
    {
      id: 'results',
      render: () => {
        const results = [
          { icon: MessageSquare, metric: 'Response Time', before: '24\u201348 hours', after: '70\u201385% faster' },
          { icon: RefreshCw, metric: 'Sub Retention', before: '7\u201310% monthly churn', after: '1\u20133pp improvement' },
          { icon: Clock, metric: 'Hours Reclaimed', before: '30\u201340% on admin', after: '25\u201340 hrs/wk saved' },
          { icon: Megaphone, metric: 'Campaign Speed', before: '2\u20133 weeks', after: '50\u201370% faster' },
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

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Annual Impact: <span className="text-amber-400">&euro;200K&ndash;&euro;500K</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Preserved revenue, reduced churn, operational efficiency, and conversion improvement</p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Capacity Reclaimed
    {
      id: 'capacity',
      render: () => {
        const breakdown = [
          { area: 'Subscription dunning & churn management', before: '3\u20135 hrs', after: '0.5 hrs' },
          { area: 'Segmentation & data reconciliation', before: '4\u20136 hrs', after: '0.5 hrs' },
          { area: 'Customer support first-response', before: '8\u201312 hrs', after: '2\u20133 hrs' },
          { area: 'Multi-market campaign coordination', before: '5\u20138 hrs', after: '1\u20132 hrs' },
          { area: 'Reporting & data compilation', before: '5\u20138 hrs', after: '0.5 hrs' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity Reclaimed</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Equivalent to <GradientText>1&ndash;2 New Hires</GradientText> &mdash; Without Hiring
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="space-y-2 sm:space-y-3">
                {breakdown.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <p className="text-white text-xs sm:text-sm font-medium flex-1 min-w-0">{item.area}</p>
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                      <span className="text-rose-400 text-xs sm:text-sm font-medium">{item.before}</span>
                      <ArrowRight size={10} className="text-gray-600 sm:w-3 sm:h-3" />
                      <span className="text-emerald-400 text-xs sm:text-sm font-bold">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-base font-semibold mb-1">
                <span className="text-emerald-400">25&ndash;40 hours/week</span> reclaimed for growth
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Redirected from admin to international expansion, product development, and brand building under Vendis Capital
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: 90-Day Implementation Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation & Quick Wins',
            time: 'Weeks 1\u20134',
            status: 'Quick Wins',
            items: ['Discovery & audit', 'Subscription Intelligence Engine', 'Support triage (top 5 FAQs)'],
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5\u20138',
            status: 'Scale Up',
            items: ['Journey Orchestrator + quiz data', 'Campaign Hub (DE/UK/IT)', 'Support WhatsApp expansion'],
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9\u201312',
            status: 'Full Power',
            items: ['Revenue Dashboard (all channels)', 'Churn prediction scoring', 'System optimization'],
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

            <div className="space-y-2 sm:space-y-3">
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
            About <GradientText>Scooper AI</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Bot size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div>
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-bold hover:text-amber-400 transition-colors">Scooper AI</a>
                <p className="text-gray-400 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              We build custom automation infrastructure for scaling consumer brands.
              Every system is built for your operation &mdash; not a template applied to your business.
              We work with your existing tools (Shopify, Klaviyo, Recharge, Chatarmin) rather than asking you to replace them.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Integration-First', desc: 'With existing tools' },
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
              We handle everything &mdash; design to deployment to optimization.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 16: Closing CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Scale <GradientText>Across Europe</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            BitterLiebe went from a grandmother&apos;s kitchen to &euro;100M+ in revenue, 8,000+ retail locations, and a Vendis Capital partnership in six years. The next phase &mdash; becoming Europe&apos;s leading digestive health brand &mdash; requires infrastructure that scales without proportionally scaling headcount.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '12 wks', label: 'To deploy' },
              { value: '\u20AC200K+', label: 'Annual value' },
              { value: '25-40 hrs', label: 'Weekly savings' },
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
