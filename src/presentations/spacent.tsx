import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Users,
  Clock,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  AlertCircle,
  Sparkles,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Building2,
  Handshake,
  HeartPulse,
  Languages,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Spacent',
  description: 'Scaling 24-Country Growth Through Intelligent Automation',
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
              src="/spacent-logo.webp"
              alt="Spacent"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Spacent</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              €120K–€280K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered leads, saved capacity, and reduced churn?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '70:1', label: 'Locations to employees', icon: Globe },
              { value: '35-50%', label: 'Time on manual ops', icon: Clock },
              { value: 'Hours', label: 'Lead response time', icon: MessageSquare },
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
                5 custom automations to cut lead response to <span className="text-white font-bold">under 2 minutes</span>, reclaim <span className="text-white font-bold">25-40 hrs/week</span>, and scale 24 countries <span className="text-white font-bold">without scaling headcount</span>
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
          { task: 'Responding to & routing inbound B2B leads', time: '15-30 min/lead', issue: 'Prospects evaluating competitors during wait time' },
          { task: 'Coordinating sales meeting scheduling via email', time: '10-20 min/lead', issue: '2-5 day delay before first meeting' },
          { task: 'Onboarding new space partner locations', time: '2-4 hrs/location', issue: 'Limits network expansion velocity' },
          { task: 'Configuring enterprise client accounts', time: '1-3 hrs/client', issue: 'Delays time-to-value for new customers' },
          { task: 'Cross-referencing support data with client health', time: '30-60 min/review', issue: 'At-risk accounts not flagged until too late' },
          { task: 'Compiling usage/analytics reports', time: '1-2 hrs/client/mo', issue: 'Manual reporting diverts team from growth' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              15 People, 24 Countries, 1,000+ Locations
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                When a workspace-seeking company fills out the "Book a meeting" form, someone on the team — likely juggling partner management, client support, and expansion simultaneously — spots the email, evaluates the inquiry type, and manually responds.
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
                Estimated <span className="text-white font-bold">35-50% of team capacity</span> consumed by operational coordination rather than growth activities.
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
        const metrics = [
          { icon: MessageSquare, value: '15-30%', metric: 'Qualified Leads Lost', desc: 'Slow response pushes prospects to competitors' },
          { icon: Clock, value: '€80K-€150K', metric: 'Admin Labor Cost', desc: '30-40 hrs/week on automatable tasks' },
          { icon: AlertCircle, value: 'No Visibility', metric: 'Customer Health Gap', desc: 'Churn risk hidden across siloed systems' },
          { icon: Globe, value: 'Capped', metric: 'Expansion Velocity', desc: '2-4 hrs/partner limits network growth' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Staying Manual Actually Costs
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
                Estimated annual opportunity cost: <span className="text-white font-bold">€120,000 – €280,000</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">Combining lost leads, admin labor, and expansion constraints</p>
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
          { name: 'Gable', funding: 'Active', features: 'Slack, Teams, Calendar, HR integrations, event orchestration, visitor management, advanced analytics' },
          { name: 'Upflex', funding: '$41M+', features: 'AI-powered matching, Slack booking, 11,000+ locations in 135 countries, SSO/SCIM/HRIS' },
          { name: 'Desana', funding: 'Active', features: 'Real-time booking management, global network, health & safety compliance' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Competitive Gap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Automation Moat Others Are <GradientText>Building</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="space-y-3 sm:space-y-4">
                {competitors.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-white font-semibold text-sm sm:text-base">{item.name}</p>
                      <span className="text-rose-400 text-xs font-mono">{item.funding} raised</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
              <p className="text-gray-300 text-xs sm:text-sm text-center">
                Spacent's strengths — <span className="text-amber-400 font-bold">24-country coverage, single-agreement simplicity, Hybrid Workplace Simulator</span> — are strong. But without operational automation, these advantages become harder to leverage as the market matures.
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">
                The flexible workspace market is projected to reach $136B by 2032 at 17% CAGR.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Vision - Today vs Automated
    {
      id: 'opportunity',
      render: () => {
        const comparisons = [
          { process: 'B2B lead response', today: 'Form → email → schedule coordination (2-48 hrs)', automated: 'Instant classification → auto-response with calendar link (<2 min)' },
          { process: 'Space partner onboarding', today: 'Manual review → email threads → platform setup (weeks)', automated: 'Self-serve portal → auto-qualification → guided setup (days)' },
          { process: 'Enterprise client config', today: 'Manual SSO, spending limits, team imports (1-3 hrs)', automated: 'Guided onboarding flow with auto-provisioning (self-serve)' },
          { process: 'Customer health monitoring', today: 'Ad-hoc cross-referencing of Zendesk, usage, billing', automated: 'Automated health score with proactive alerts' },
          { process: 'Multi-market support', today: 'Manual language identification, manual routing', automated: 'Auto-routing by geography + language + templated responses' },
        ];
        const summaryMetrics = [
          { icon: TrendingUp, metric: '€120K-€280K', label: 'Annual Value' },
          { icon: Clock, metric: '<2 min', label: 'Lead Response' },
          { icon: Sparkles, metric: '25-40 hrs', label: 'Reclaimed/Week' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Spacent Today vs. <GradientText>Automated</GradientText>
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
          { num: '01', title: 'Lead Routing', desc: 'Smart qualification', icon: MessageSquare, layer: 'Revenue' },
          { num: '02', title: 'Partner Onboard', desc: 'Lifecycle automation', icon: Building2, layer: 'Operations' },
          { num: '03', title: 'Client Activation', desc: 'Self-serve setup', icon: Handshake, layer: 'Operations' },
          { num: '04', title: 'Health Intelligence', desc: 'Churn prevention', icon: HeartPulse, layer: 'Intelligence' },
          { num: '05', title: 'Support Orchestrator', desc: 'Multi-market routing', icon: Languages, layer: 'Operations' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations to <GradientText>Scale</GradientText> Without Scaling Headcount
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
                { label: 'Layer 3: Intelligence', desc: 'Decision support & insights' },
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

    // Slide 7: Module 1 - Inbound Qualification
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Instant form classification (client vs. partner vs. individual vs. support)',
          'Company domain enrichment for lead scoring',
          'Automated calendar booking link delivery',
          'Region/language-based routing to the right team member',
          'Automated follow-up sequences for non-responsive leads',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Inbound Qualification & Smart Routing</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Automatically captures, qualifies, and routes B2B leads and space partner inquiries from spacent.com into the right pipeline with instant acknowledgment and calendar booking.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  A facilities manager at a 500-person consulting firm submits "Book a meeting" at 4pm CET Thursday. Today: generic form confirmation, team wrapping up, response next morning — but they've already booked demos with Gable and Upflex.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-rose-500/10 rounded-lg text-center">
                    <p className="text-rose-400 text-xs">Today</p>
                    <p className="text-white text-sm font-bold">2-48 hrs response</p>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-center">
                    <p className="text-emerald-400 text-xs">Automated</p>
                    <p className="text-white text-sm font-bold">&lt;60 sec + calendar link</p>
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
                <span className="font-bold">Impact:</span> 20-40% increase in demo booking rate, 10-15 hrs/week saved
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 - Space Partner Onboarding
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Self-serve partner application portal with guided data collection',
          'Automated listing draft generation from application data',
          'Internal review and approval workflow with notifications',
          'Automated onboarding communication sequence',
          '30/60/90-day automated quality check-in cadence',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Building2 size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Space Partner Onboarding & Lifecycle</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Systematizes the process of bringing new workspace locations onto the platform — from application to go-live — across all 24 markets. Standardized quality, automated communication.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  A coworking space in Copenhagen emails expressing interest. Today: multiple email threads, manual data entry, photo coordination — 2-4 weeks. Automated: guided application form, auto-generated listing, one-click approval — live in 5 business days.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-4 wks</p>
                  <p className="text-gray-500 text-xs">Per partner onboarding</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~5 days</p>
                  <p className="text-gray-500 text-xs">50-70% faster</p>
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
                <span className="font-bold">Impact:</span> 2-3x more partners onboarded per quarter with existing team
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 - Enterprise Client Activation
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Automated post-signature welcome and onboarding sequence',
          'Self-serve admin configuration portal (spending, network, teams)',
          'Guided SSO setup with documentation and support escalation',
          'Automated first-usage milestone messaging',
          '30-day automated usage report with optimization insights',
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
                <p className="text-amber-400 text-xs">Module 03 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Enterprise Client Activation Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Automates post-sale setup for corporate clients: SSO provisioning, team imports, spending rules, and network curation with guided onboarding flows. First impressions match the platform quality.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-rose-500/50">
                <p className="text-gray-500 text-xs mb-1">Today's reality:</p>
                <p className="text-gray-400 text-xs sm:text-sm italic">
                  Enterprise client signs agreement. Office Manager emails about SSO setup, team member provides instructions, follow-up questions arise, spending limits configured manually. Three weeks later, platform is finally active for all employees.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~3 wks</p>
                  <p className="text-gray-500 text-xs">To full activation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~5 days</p>
                  <p className="text-gray-500 text-xs">Self-serve guided flow</p>
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
                <span className="font-bold">Impact:</span> 50-70% faster onboarding, improved first-impression NPS
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 - Customer Health Intelligence
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Automated multi-source health scoring (usage + support + billing)',
          'Configurable alert thresholds by account tier',
          'Proactive churn risk intervention workflows',
          'Expansion opportunity identification and upsell triggers',
          'Monthly automated account health digest for leadership',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <HeartPulse size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04 — Intelligence Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Health & Retention Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Connects Spacent platform usage data with Zendesk support patterns and billing data to generate automated account health scores and proactive alerts — before customers churn.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-rose-500/50">
                <p className="text-gray-500 text-xs mb-1">Today's reality:</p>
                <p className="text-gray-400 text-xs sm:text-sm italic">
                  A mid-market client's usage declines for 3 months. Their admin submits 2 frustrated support tickets. No one connects these signals until the cancellation email arrives.
                </p>
                <p className="text-emerald-400 text-xs sm:text-sm mt-2">
                  Automated: After the 2nd ticket, health score drops → account manager gets an alert with full context → proactive outreach → issue resolved → account retained.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Reactive</p>
                  <p className="text-gray-500 text-xs">Churn surprises</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Proactive</p>
                  <p className="text-gray-500 text-xs">Early warning system</p>
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
                <span className="font-bold">Impact:</span> 15-25% reduction in preventable churn, 10-20% increase in expansion revenue
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 - Multi-Market Support
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Auto-classification of support requests by language, geography, and type',
          'Multi-language response template library for common issues',
          'Smart routing based on account tier, geography, and issue complexity',
          'Automated satisfaction follow-up and feedback collection',
          'Support pattern analytics for product improvement insights',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Languages size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 05 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Multi-Market Support Orchestrator</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Routes support requests by geography and language, provides templated multi-language responses, and escalates based on account tier and issue severity. Consistent quality across 24 markets.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  A user in Stockholm emails support in Swedish about a booking issue. Today: Finnish team member translates, resolves in English, user switches languages. Automated: auto-classified, matched to Swedish response template, resolved in 5 minutes in their language.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Routing & translation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">40-60%</p>
                  <p className="text-gray-500 text-xs">Auto-resolved</p>
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
                <span className="font-bold">Impact:</span> 40-60% of common requests auto-resolved, 5-8 hrs/week saved
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
          { icon: Clock, metric: 'Lead Response', before: '2-48 hours', after: '<2 minutes' },
          { icon: TrendingUp, metric: 'Demo Booking Rate', before: 'Baseline', after: '+15-30%' },
          { icon: Users, metric: 'Manual Hours', before: '35-50%', after: '15-25%' },
          { icon: BarChart3, metric: 'Data Accuracy', before: 'Siloed', after: '+40-60%' },
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
                Estimated Annual Value: <span className="text-amber-400">€120,000 – €280,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Recovered leads + labor efficiency + reduced churn + expansion velocity</p>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Equivalent to adding <span className="text-white font-bold">~0.7-1.0 full-time team members</span> — without a single new hire
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
          { icon: TrendingUp, title: 'Fresh Growth Capital', desc: 'Gorilla Capital round specifically for international expansion — automation makes that capital go further' },
          { icon: Globe, title: '70:1 Location Ratio', desc: '1,000+ locations with ~15 people is already stretched. Further expansion without automation means quality trade-offs' },
          { icon: Shield, title: 'Competitors Building Moats', desc: 'Upflex ($41M+) and Gable investing heavily in integrations. The window to match efficiency is narrowing' },
          { icon: AlertCircle, title: 'Multi-Market Complexity', desc: 'Each new country adds language, timezone, and regulatory complexity that only automation can absorb' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Why Now</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The <GradientText>Scaling Window</GradientText>
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
                Automation is the infrastructure that lets Spacent <span className="text-white font-bold">3x the business without 3x the team</span>.
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
            status: 'First Impact',
            items: ['Lead qualification & routing', 'CRM setup', 'Form optimization'],
            result: 'Every lead gets a response within 2 minutes with a calendar link',
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5-8',
            status: 'Full System',
            items: ['Partner onboarding portal', 'Support routing', 'Client activation flow'],
            result: 'Partner onboarding 50%+ faster, common support auto-resolved',
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9-12',
            status: 'Optimized',
            items: ['Health scoring system', 'Leadership dashboards', 'Churn prevention'],
            result: 'Complete visibility, at-risk accounts flagged automatically',
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
                Built on your existing stack — <span className="text-white font-bold">WordPress, Zendesk, Spacent platform</span>. No rip-and-replace required.
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
              fits exactly how you operate. Specialists in helping capital-efficient companies scale
              operations without proportional headcount growth.
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
            Ready to <GradientText>Scale</GradientText> Without Scaling Headcount?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Spacent has achieved remarkable capital efficiency — 24 countries with ~15 people.
            Let's build the automation infrastructure for the next phase.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full deployment' },
              { value: '€120K-€280K', label: 'Annual value' },
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
