import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  BarChart3,
  Zap,
  MessageSquare,
  FileText,
  Target,
  UserPlus,
  Send,
  PieChart,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Mindful Agency',
  description: 'Operational Transformation Through Intelligent Automation — AI Proposal for Mindful Agency',
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
              src="/mindful-agency-logo.png"
              alt="Mindful Agency"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Mindful Agency</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $120K–$280K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered revenue and freed capacity?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '55-65%', label: 'Team hours on admin', icon: Clock },
              { value: '42+ hrs', label: 'Avg lead response time', icon: MessageSquare },
              { value: '5-10 days', label: 'Client onboarding', icon: UserPlus },
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
                5 custom automations to cut admin by <span className="text-white font-bold">50-65%</span>, respond to leads in <span className="text-white font-bold">&lt;2 minutes</span>, and scale without hiring
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
          { task: 'Media list building & journalist research', time: '2-3 hrs/day', issue: 'Stale contacts, bounced emails' },
          { task: 'Writing & personalizing pitches', time: '2-4 hrs/day', issue: 'Limits simultaneous campaigns' },
          { task: 'Client onboarding & intake', time: '1-2 hrs/client', issue: 'Delays campaign kickoff by days' },
          { task: 'Follow-up sequences (journalists & podcasts)', time: '1-2 hrs/day', issue: 'Missed windows, lost opportunities' },
          { task: 'Tracking placements & client reports', time: '1-2 hrs/day', issue: 'Manual, error-prone' },
          { task: 'Responding to inbound leads', time: '1-2 hrs/day', issue: 'Lost prospects to faster competitors' },
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
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
                From Andrew Huberman to Jim Kwik, Vishen Lakhiani to Peter Crone — you've built a powerhouse agency securing Forbes, NYT, and Joe Rogan placements. But behind every headline is a mountain of manual work.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-200 text-sm sm:text-base font-medium">{item.task}</p>
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
              <p className="text-gray-500 text-xs sm:text-sm">
                <span className="text-white font-bold">55-65% of productive hours</span> go toward tasks that don't require human creativity or judgment.
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
          { icon: MessageSquare, value: '$50-125K', metric: 'Lost Lead Revenue', desc: '2-3 lost prospects/month at $2K-$3.5K+' },
          { icon: FileText, value: '62%', metric: 'Time on Content', desc: 'Pitches are most time-consuming' },
          { icon: BarChart3, value: '150-250 hrs', metric: 'Monthly Reporting', desc: 'For 15-25+ active clients' },
          { icon: Send, value: '1.3', metric: 'Avg Follow-ups', desc: 'vs optimal 6-8 attempts' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Staying Manual Costs
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

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/30 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                Estimated annual impact: <span className="text-white font-bold">$150,000–$350,000</span> in recovered revenue, time savings, and capacity
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Opportunity
    {
      id: 'opportunity',
      render: () => {
        const todayItems = [
          'Leads wait hours or days for a response',
          'Pitches are written from scratch for every client',
          'Client onboarding takes 3-5 days of back-and-forth',
          'Follow-ups are manual and often forgotten',
          'Client reports compiled manually from 5+ sources',
        ];
        const automatedItems = [
          'Instant acknowledgment + qualification within 2 min, 24/7',
          'AI-assisted pitch drafts personalized to journalist beats',
          'Automated intake, NDA collection, briefs in 24 hours',
          'Intelligent sequences that adapt based on engagement',
          'Auto-generated dashboards showing placements in real-time',
        ];
        const summaryMetrics = [
          { icon: TrendingUp, metric: '25-40%', label: 'More capacity' },
          { icon: Clock, metric: '50-65%', label: 'Less admin' },
          { icon: Zap, metric: '24/7', label: 'Lead capture' },
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

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Today</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {todayItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-amber-400 text-xs uppercase tracking-wider mb-2 sm:mb-3">Automated</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {automatedItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {summaryMetrics.map((item, i) => (
                <div key={i} className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/30 p-2 sm:p-4 text-center">
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

    // Slide 5: Solution Overview
    {
      id: 'whatChanges',
      render: () => {
        const automations = [
          { num: '01', title: 'Lead Capture', desc: 'Instant qualification', icon: Target },
          { num: '02', title: 'Onboarding', desc: 'Client intake engine', icon: UserPlus },
          { num: '03', title: 'Follow-Ups', desc: 'Smart sequences', icon: Send },
          { num: '04', title: 'Reporting', desc: 'Placement tracking', icon: BarChart3 },
          { num: '05', title: 'CRM', desc: 'Pipeline automation', icon: PieChart },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> Your Agency
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 hover:bg-white/[0.07] transition-all ${
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

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Each automation is designed for a boutique, high-touch, relationship-driven PR agency managing high-profile personal brands.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 6: Automation 1 - Lead Capture
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Instant personalized response across website, email, and social channels',
          'Automated qualification questionnaire tailored to your service tiers ($2K vs $3.5K+)',
          'Smart routing: high-fit leads to senior publicists; lower-fit to nurture content',
          'Calendar integration for direct booking of discovery calls',
          'Lead scoring based on audience size, industry, and engagement signals',
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
                <p className="text-amber-400 text-xs">Automation 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Intelligent Lead Capture</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Captures every inbound lead from website, Instagram DMs, and email — instantly responds with a personalized acknowledgment, qualifies based on industry, audience size, goals, and budget, then routes hot leads directly to your publicists.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">6-24 hrs</p>
                  <p className="text-gray-500 text-xs">Response time</p>
                </div>
                <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">&lt;2 min</p>
                  <p className="text-gray-500 text-xs">Response time</p>
                </div>
                <div className="p-2 sm:p-4 bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                  <p className="text-amber-400 text-xs mb-1">Coverage</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">24/7</p>
                  <p className="text-gray-500 text-xs">365 days</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/30 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Recover an estimated 20-35% of currently lost inbound opportunities
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Automation 2 - Client Onboarding
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Branded, step-by-step intake forms (bio, headshot, media kit, goals, target outlets)',
          'Automated document collection (NDAs, contracts) with e-signature integration',
          'Auto-creation of client profiles in your CRM/project management tools',
          'Welcome sequence with timeline expectations and communication preferences',
          'Internal notification to assigned publicist with complete client brief',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <UserPlus size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Onboarding Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                A structured onboarding workflow triggers automatically when a client signs. It guides them through a branded intake experience — collecting everything your publicists need in one pass — and automatically organizes it in your systems.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">5-10 days</p>
                  <p className="text-gray-500 text-xs">Onboarding time</p>
                </div>
                <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">24-48 hrs</p>
                  <p className="text-gray-500 text-xs">Onboarding time</p>
                </div>
                <div className="p-2 sm:p-4 bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                  <p className="text-amber-400 text-xs mb-1">Completeness</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">~95%</p>
                  <p className="text-gray-500 text-xs">At kickoff</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/30 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Save 3-4 hours per client; campaign kickoff 3-5x faster
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Automation 3 - Smart Follow-Ups
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Automated follow-up sequences triggered by email engagement (opens, no-reply)',
          'Dynamic personalization based on journalist beat, outlet, and past interactions',
          'Escalation alerts when a journalist engages (click, reply, forward)',
          'Podcast-specific sequences with different cadence and messaging',
          'Do-not-contact rules and duplicate-pitch prevention across the team',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Send size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Smart Follow-Up Sequences</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                After an initial pitch is sent, this system manages follow-up cadence intelligently. It tracks opens, clicks, and replies, then triggers personalized follow-ups at optimal intervals — the real wins often come from the follow-up.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">1-2</p>
                  <p className="text-gray-500 text-xs">Follow-ups (manual)</p>
                </div>
                <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">4-6</p>
                  <p className="text-gray-500 text-xs">Follow-ups (auto)</p>
                </div>
                <div className="p-2 sm:p-4 bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                  <p className="text-amber-400 text-xs mb-1">Consistency</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">100%</p>
                  <p className="text-gray-500 text-xs">No pitch lost</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/30 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 30-50% increase in journalist response rates
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Automation 4 - Placement Tracking
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Automated media mention detection across publications, podcasts, and TV',
          'Real-time dashboard showing placements, estimated reach, and follower growth',
          'Auto-generated monthly/quarterly reports with branded formatting',
          'Coverage alerts sent to your team and clients when new placements go live',
          'Historical tracking to show cumulative impact over 6-12 month engagements',
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
                <p className="text-amber-400 text-xs">Automation 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Placement Tracking & Reporting</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                An automated monitoring system continuously scans for your clients' media mentions, published articles, podcast episodes, and social growth. It feeds everything into a real-time dashboard that both your team and clients can access.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">4-8 hrs</p>
                  <p className="text-gray-500 text-xs">Per client/month</p>
                </div>
                <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">Auto</p>
                  <p className="text-gray-500 text-xs">Real-time dashboard</p>
                </div>
                <div className="p-2 sm:p-4 bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                  <p className="text-amber-400 text-xs mb-1">Detection</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">Hours</p>
                  <p className="text-gray-500 text-xs">Not days</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/30 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Save 40-80 hours/month on reporting; strengthen retention through transparency
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Automation 5 - CRM & Pipeline
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Unified pipeline for prospects, active clients, and renewals with automated stage progression',
          'Journalist CRM with beat, outlet, engagement history, and pitch tracking',
          'Automated reminders for client renewals, contract expirations, and check-ins',
          'Team-wide visibility to prevent double-pitching and missed follow-ups',
          'Integration with email, calendar, and project management tools',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <PieChart size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">CRM & Pipeline Automation</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                A centralized CRM system tailored to PR workflows — managing both your client pipeline (prospects → signed → active → renewal) and your media relationships (journalist contacts, pitch history, engagement data). Automations keep it updated without manual data entry.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">Fragmented</p>
                  <p className="text-gray-500 text-xs">Across tools</p>
                </div>
                <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">Unified</p>
                  <p className="text-gray-500 text-xs">Single dashboard</p>
                </div>
                <div className="p-2 sm:p-4 bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                  <p className="text-amber-400 text-xs mb-1">Updates</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">Auto</p>
                  <p className="text-gray-500 text-xs">Activity triggers</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/30 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 20-30% improvement in client retention through proactive relationship management
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Expected Results
    {
      id: 'results',
      render: () => {
        const results = [
          { icon: MessageSquare, metric: 'Lead Response', before: '6-24 hours', after: '<2 minutes' },
          { icon: UserPlus, metric: 'Onboarding Time', before: '5-10 days', after: '24-48 hours' },
          { icon: Clock, metric: 'Admin Hours/Week', before: '25-40 hours', after: '8-15 hours' },
          { icon: BarChart3, metric: 'Monthly Reporting', before: '40-80 hrs', after: 'Auto-generated' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What This Delivers</h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {results.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <item.icon size={14} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                    <p className="text-white font-semibold text-xs sm:text-base">{item.metric}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-3">
                    <div className="flex-1 p-1.5 sm:p-2 bg-white/5 rounded-lg text-center border border-white/5">
                      <p className="text-gray-500 text-xs">Before</p>
                      <p className="text-gray-400 font-medium text-xs sm:text-sm">{item.before}</p>
                    </div>
                    <ArrowRight size={12} className="text-amber-400 shrink-0 sm:w-4 sm:h-4" />
                    <div className="flex-1 p-1.5 sm:p-2 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                      <p className="text-emerald-400 text-xs">After</p>
                      <p className="text-white font-medium text-xs sm:text-sm">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg sm:rounded-xl border border-amber-500/30 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Estimated Annual Value: <span className="text-amber-400">$120,000–$280,000</span>
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Recovered revenue + time savings + capacity for more clients</p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation',
            time: 'Weeks 1-4',
            status: 'Quick Wins',
            items: ['Lead capture with instant response', 'CRM setup & media contact migration', 'Onboarding intake forms'],
          },
          {
            title: 'Automation',
            time: 'Weeks 5-8',
            status: 'Core System',
            items: ['Smart follow-up sequences', 'Email engagement tracking', 'Client communication automations'],
          },
          {
            title: 'Intelligence',
            time: 'Weeks 9-12',
            status: 'Full Operation',
            items: ['Placement tracking dashboards', 'Pipeline analytics & forecasting', 'System optimization'],
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
              12-Week <GradientText>Rollout</GradientText>
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
                    <span className="px-2 sm:px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs hidden sm:inline border border-amber-500/30">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm border border-white/5">
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

    // Slide 13: About Us
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
                <p className="text-gray-500 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
              We build custom intelligent systems for businesses ready to operate at the next level.
              We don't sell off-the-shelf software — we design, build, and optimize automation
              tailored to your exact workflows.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Full Integration', desc: 'With existing tools' },
                { title: 'Ongoing Support', desc: 'Continuous optimization' },
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center border border-white/5">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              We handle everything — design to deployment to optimization.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 14: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform <GradientText>Mindful Agency</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            You've built something exceptional — a PR agency trusted by world-class thought leaders.
            These automations protect what makes you great while eliminating the operational drag that limits scale.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '~12 wks', label: 'To deploy' },
              { value: '50-65%', label: 'Less admin' },
              { value: '$120K+', label: 'Annual value' },
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
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity text-sm sm:text-base shadow-lg shadow-amber-500/20"
          >
            <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
            Schedule Discovery Call
          </a>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Bot size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-gray-500 text-sm">
              Prepared by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-amber-400 transition-colors">Scooper AI</a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
