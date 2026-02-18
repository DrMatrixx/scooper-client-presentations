import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Rocket,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Bot,
  Zap,
  Target,
  Shield,
  Phone,
  Calendar,
  BarChart3,
  Filter,
  RefreshCw,
  Building2,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Centered Insurance Partners',
  description: 'AI Automation Proposal — Lead Response & Revenue Automation for Commercial P&C Insurance',
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
              src="/centered-partners-logo.png"
              alt="Centered Insurance Partners"
              className="h-14 sm:h-18 md:h-22 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Centered Insurance Partners</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could capture</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              40–60%
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">more leads by responding in seconds, not hours?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: 'Hours', label: 'After-hours leads lost to competitors', icon: Phone },
              { value: 'Manual', label: 'Producers buried in admin follow-up', icon: Clock },
              { value: 'Missed', label: 'Renewal & cross-sell touchpoints dropped', icon: Calendar },
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
                5 automation systems to respond to leads in <span className="text-white font-bold">under 60 seconds</span>, cover calls <span className="text-white font-bold">24/7</span>, and ensure <span className="text-white font-bold">zero missed renewals</span>
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

    // Slide 2: The Challenge — Speed-to-Lead
    {
      id: 'challenge',
      render: () => {
        const challenges = [
          { icon: Phone, title: 'After-Hours Blind Spots', desc: 'Most inbound web leads and callback requests arrive outside business hours. Without automation, prospects wait until morning — and a competitor with an automated response has already opened the conversation.' },
          { icon: Clock, title: 'Producer Bandwidth', desc: 'Producers spend a disproportionate amount of time on admin follow-up, qualification calls, and chasing cold leads — time that could be spent on complex coverage analysis and closing.' },
          { icon: RefreshCw, title: 'Inconsistent Outreach', desc: 'Renewal reminders, mid-term check-ins, and cross-sell nudges depend entirely on individual producers remembering to act. Staff turnover or workload spikes mean touchpoints get missed.' },
          { icon: Building2, title: 'Vertical Complexity', desc: 'A construction contractor, a senior care facility, and a law firm have distinct coverage priorities and decision timelines. Generic outreach underperforms — tailored AI sequences convert significantly better.' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Challenge</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Speed-to-Lead in <GradientText>Commercial Insurance</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                When a construction firm, healthcare group, or logistics company decides to explore new coverage, they contact multiple brokers simultaneously. The conversation goes to whoever demonstrates <span className="text-white font-semibold">responsiveness and expertise first</span> — often measured in minutes, not hours.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {challenges.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={14} className="text-rose-400 sm:w-4 sm:h-4" />
                      <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                    </div>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                The first agency to make meaningful contact converts at <span className="text-white font-bold">dramatically higher rates</span> — yet most brokerages still depend on manual call-backs and reactive email chains.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Today vs AI-Powered
    {
      id: 'vision',
      render: () => {
        const comparisons = [
          { area: 'Inbound Calls', today: 'Voicemail after hours; prospect waits until morning', ai: 'AI voice agent answers 24/7, captures details, routes to producer in real time' },
          { area: 'Lead Response', today: 'Manual callback 2–24 hours later; competitor already talking', ai: 'SMS + email in under 60 seconds; AI follow-up call if no response in 2 hours' },
          { area: 'Lead Qualification', today: 'Producers spend equal time on hot leads and tire-kickers', ai: 'AI scores leads hot/warm/cold automatically; producers focus on closers' },
          { area: 'Nurture & Renewals', today: 'Depends on producers remembering; missed during busy periods', ai: 'Automated vertical-specific sequences with 90/60/30-day renewal triggers' },
          { area: 'Pipeline Visibility', today: 'Fragmented across CRM, email, spreadsheets', ai: 'Unified dashboard with real-time lead velocity, conversion rates by vertical' },
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
                { icon: Phone, metric: '24/7', label: 'Call coverage' },
                { icon: Zap, metric: '<60s', label: 'Lead response' },
                { icon: RefreshCw, metric: '0', label: 'Missed renewals' },
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

    // Slide 4: Solution Architecture
    {
      id: 'architecture',
      render: () => {
        const modules = [
          { num: '01', title: 'AI Voice Agent', desc: '24/7 call coverage', icon: Phone },
          { num: '02', title: 'Instant Response', desc: 'Sub-60s outreach', icon: Zap },
          { num: '03', title: 'Lead Qualification', desc: 'AI scoring & routing', icon: Filter },
          { num: '04', title: 'Nurture Engine', desc: 'Automated follow-up', icon: RefreshCw },
          { num: '05', title: 'CRM & Dashboard', desc: 'Full pipeline visibility', icon: BarChart3 },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Blueprint</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Core Systems — <GradientText>Compounding Effect</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Each system builds on the last. The AI voice agent feeds the instant response layer, which feeds qualification, which feeds nurture — creating a fully automated revenue pipeline aligned with Centered's "Client Centered Cycle" philosophy.
              </p>

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
            </div>

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold mb-1">Centered's Advantage</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Multi-vertical commercial book across construction, healthcare, transportation, real estate, and law firms. The "Client Centered Cycle" philosophy is the foundation — AI <span className="text-emerald-400 font-medium">ensures every touchpoint is delivered</span>, regardless of workload or staff turnover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Module 1 — AI Voice Agent
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Caller details, business type, and coverage area captured in the first 90 seconds',
          'Agent identifies vertical (construction, healthcare, transport, etc.) and routes accordingly',
          'Urgent or high-value inquiries trigger an immediate SMS to the on-call producer',
          'All call data logged to your CRM automatically with full transcript and AI summary',
          'After-hours callers receive a personalised follow-up SMS within 2 minutes of hanging up',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Phone size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI Voice Agent: 24/7 Inbound Call Coverage</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An AI voice agent deployed on your inbound phone line to answer calls around the clock. It speaks naturally, introduces itself as part of the Centered team, and immediately begins a structured intake conversation.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Voicemail</p>
                  <p className="text-gray-500 text-xs">After-hours leads wait until morning</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">24/7 Live</p>
                  <p className="text-gray-500 text-xs">Every call answered, every lead captured</p>
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
                <span className="font-bold">Outcome:</span> Zero missed calls. Every prospect feels heard, even at 11pm on a Friday.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 6: Module 2 — Instant Lead Response
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Personalised SMS sent within 60 seconds, referencing the prospect\'s industry and coverage enquired about',
          'Simultaneous email sent with brief intro, your value proposition, and one-click scheduling link',
          'If no response in 2 hours, a follow-up call is placed by the AI voice agent',
          'All messaging customised per vertical — a contractor gets different language than a law firm',
          'Producing brokers receive real-time notification with full lead context before they even dial',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Zap size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Instant Lead Response: Sub-60-Second Outreach</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                The moment a lead enters your system — via web form, referral intake, or any other source — an automated multi-channel outreach sequence fires immediately. Speed of first contact is the single highest-impact lever in insurance sales.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2–24 hrs</p>
                  <p className="text-gray-500 text-xs">Manual callback — competitor already talking</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;60 sec</p>
                  <p className="text-gray-500 text-xs">SMS + email before they close the browser</p>
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
                <span className="font-bold">Outcome:</span> First-mover advantage on every single lead, 24 hours a day.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 3 — Lead Qualification & Routing
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'AI conducts structured qualification via SMS or voice — gathering premium size, coverage type, timeline, and decision authority',
          'Leads scored hot / warm / cold and assigned to the appropriate producer or nurture track',
          'Hot leads (clear need, near-term decision, right-fit vertical) escalated to a producer within minutes',
          'Warm leads enrolled in a nurture sequence rather than being abandoned',
          'Disqualified leads logged for future marketing — today\'s cold lead is next year\'s renewal',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Filter size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Lead Qualification & Intelligent Routing</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Not all inbound leads are equal. Our AI qualification layer scores and sorts leads automatically so your team knows exactly where to focus — rather than treating every enquiry with the same urgency.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {[
                  { label: 'Hot', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', desc: 'Escalated to producer in minutes' },
                  { label: 'Warm', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', desc: 'Enrolled in nurture sequence' },
                  { label: 'Cold', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'Logged for future outreach' },
                ].map((item, i) => (
                  <div key={i} className={`${item.bg} rounded-lg sm:rounded-xl border ${item.border} p-3 sm:p-4 text-center`}>
                    <p className={`${item.color} text-lg sm:text-xl font-bold mb-1`}>{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
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
                <span className="font-bold">Outcome:</span> Producers spend their time closing, not sorting. Conversion rates improve measurably.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 4 — Automated Nurture & Follow-Up
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Warm leads receive a 10–14 day drip sequence: mix of SMS, email, and AI voice check-ins',
          'Content is vertical-specific — construction leads receive market insights, healthcare leads receive compliance updates',
          'Sequence pauses automatically if the prospect responds or books a call; resumes if they go quiet',
          'Renewal sequences fire 90, 60, and 30 days before policy expiration with personalised renewal proposals',
          'Cross-sell triggers identify existing clients carrying one line but not another (e.g., GL but no umbrella)',
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
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Automated Nurture & Follow-Up Sequences</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Most leads don't convert on first contact. This system runs entirely on autopilot, delivering personalised touchpoints by vertical and funnel stage until the prospect is ready to act — and ensures zero missed renewals across your entire book.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Depends on producers remembering</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Autopilot</p>
                  <p className="text-gray-500 text-xs">Vertical-specific, always-on sequences</p>
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
                <span className="font-bold">Outcome:</span> A systemised pipeline that converts leads on their timeline, not yours.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 5 — CRM Integration & Dashboard
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Bi-directional CRM sync compatible with HubSpot, Salesforce, AgencyZoom, AMS360, and others',
          'Live dashboard: lead volume by source, response times, conversion rates by vertical, revenue pipeline',
          'Weekly AI-generated performance summary emailed to leadership',
          'Automated A/B testing on follow-up messaging — the system continuously improves its own conversion rates',
          'Full audit trail of every automated touchpoint for compliance and review purposes',
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
                <p className="text-amber-400 text-xs">Module 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">CRM Integration & Reporting Dashboard</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Every automation layer feeds data back into your CRM and a unified reporting dashboard, giving Centered leadership real-time visibility into what's working and where leads are dropping off.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {[
                  { icon: BarChart3, label: 'Lead Velocity', desc: 'Volume by source & vertical' },
                  { icon: TrendingUp, label: 'Conversion Rates', desc: 'By vertical & channel' },
                  { icon: Target, label: 'Response Times', desc: 'Tracked per lead' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
                    <item.icon size={16} className="text-amber-400 mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5" />
                    <p className="text-white text-xs sm:text-sm font-medium">{item.label}</p>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                  </div>
                ))}
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
                <span className="font-bold">Outcome:</span> Data-driven growth decisions. Clear ROI visibility from day one.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Implementation Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Discovery & Configuration',
            time: 'Weeks 1–2',
            status: 'Phase 1',
            items: ['Audit inbound channels, CRM setup, and lead sources', 'First automation configured, tested, and deployed', 'AI voice agent live on inbound line', 'Zero cost — first automation is free'],
          },
          {
            title: 'Qualification & Routing Go-Live',
            time: 'Weeks 3–4',
            status: 'Phase 2',
            items: ['Lead scoring logic and routing rules built', 'Connected to your CRM', 'Producers onboarded to new notification workflow', 'Vertical-specific messaging templates deployed'],
          },
          {
            title: 'Nurture Sequences & Optimisation',
            time: 'Month 2',
            status: 'Phase 3',
            items: ['Follow-up cadences built per vertical', 'Renewal sequences activated for existing clients', 'Cross-sell triggers configured', 'System begins capturing data for optimisation'],
          },
          {
            title: 'Full Visibility & Scale',
            time: 'Month 3+',
            status: 'Phase 4',
            items: ['Reporting dashboard provides full conversion metrics', 'A/B testing runs continuously', 'Additional channels layered in based on results', 'Continuous optimisation cycle begins'],
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
              Phased <GradientText>Rollout</GradientText>
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

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4 text-center">
              <p className="text-emerald-400 text-xs sm:text-sm">
                <span className="text-white font-bold">Zero-risk start</span> — We configure your first automation completely free. You see results before committing to anything further.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: About Scooper AI
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
            Why <GradientText>Scooper AI</GradientText>
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

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { icon: Users, title: '50+ Businesses', desc: 'AI-driven revenue automation across insurance, real estate, professional services, and more' },
                { icon: Shield, title: 'Insurance-Native', desc: 'Sequences built around insurance buyer psychology — renewal cycles, multi-carrier dynamics, vertical risk profiles' },
                { icon: Target, title: 'Your Existing Stack', desc: 'Whether you use AgencyZoom, HubSpot, Salesforce, or a custom AMS — we connect without changes' },
                { icon: Zap, title: 'Zero-Risk Start', desc: 'First automation configured completely free. See results before committing further' },
              ].map((item, i) => (
                <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={14} className="text-amber-400 sm:w-4 sm:h-4" />
                    <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                  </div>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm sm:text-base">
              Custom-built AI systems for Centered's specific workflows, vertical mix, and growth trajectory. We add intelligence layers to your existing infrastructure — not replacements.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 12: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Never Miss a <GradientText>Lead Again</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Centered's multi-vertical commercial book, "Client Centered Cycle" philosophy, and deep expertise across construction, healthcare, transportation, and more — the foundation is exceptional. Now add the AI layer that ensures you're first to every lead, every time.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '<60s', label: 'Lead response time' },
              { value: '24/7', label: 'Call coverage' },
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
