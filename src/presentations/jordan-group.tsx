import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Clock,
  Users,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Bot,
  Rocket,
  ArrowRight,
  Zap,
  BarChart3,
  Database,
  Mail,
  RefreshCcw,
  Calendar,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Jordan Group',
  description: 'Operational Transformation Through Intelligent Automation',
  slides: [
    // ==================== SLIDE 1: TITLE ====================
    {
      id: 'title',
      render: () => (
        <div className="text-center w-full max-w-3xl px-4">
          {/* CSS for animations */}
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

          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-gray-400 text-xs sm:text-sm">AI Automation Proposal</span>
          </div>

          {/* Company logo - centered */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <img
              src="/jordan-logo-white-purple.png"
              alt="Jordan Group Krakow"
              className="h-14 sm:h-16 md:h-20 w-auto mx-auto rounded-lg shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for your travel business</p>
          </div>

          {/* Value proposition question */}
          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              PLN 200K–400K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost rebookings and operational efficiency?</p>
          </div>

          {/* Key pain points they'll recognize - with icons and glassmorphism */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '40-60%', label: 'Missed follow-ups', icon: RefreshCcw },
              { value: '4-8 hrs', label: 'Response delays', icon: Clock },
              { value: '55-65%', label: 'Time on admin', icon: Users },
            ].map((item, i) => (
              <div key={i} className="group relative p-3 sm:p-4 glass bg-white/5 rounded-2xl border border-rose-500/20 shadow-lg shadow-rose-500/5 hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-300">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <item.icon size={16} className="text-rose-400/70 mx-auto mb-2 sm:w-5 sm:h-5" />
                  <p className="text-rose-400 text-xl sm:text-2xl font-bold">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we'll show them - animated gradient border */}
          <div className="relative max-w-lg mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-400">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl animate-border-glow opacity-60 blur-[1px]" />
            <div className="relative glass bg-gray-950/80 rounded-2xl p-4 sm:p-5 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Zap size={14} className="text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                5 custom automations to achieve <span className="text-white font-bold">&lt;30 second</span> response times, boost rebookings by <span className="text-white font-bold">25-40%</span>, and free <span className="text-white font-bold">60%+ team capacity</span>
              </p>
            </div>
          </div>

          {/* Subtle CTA to continue */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
            <span>Press</span>
            <div className="px-2.5 py-1.5 bg-white/10 rounded-lg text-gray-400 font-mono text-xs border border-white/10 shadow-inner">→</div>
            <span>to see how</span>
          </div>
        </div>
      ),
    },

    // ==================== SLIDE 2: CURRENT REALITY ====================
    {
      id: 'currentReality',
      render: () => {
        const tasks = [
          { task: 'Post-booking confirmations & docs', issue: 'Delayed vouchers, inconsistent formatting, occasional missed sends', time: '2-3 hrs/day' },
          { task: 'Follow-up & check-ins', issue: 'Clients fall through the cracks, rebooking opportunities lost', time: '1-2 hrs/day' },
          { task: 'Data entry & CRM updates', issue: 'Duplicate records, outdated profiles, time wasted searching', time: '1.5-2 hrs/day' },
          { task: 'Client queries & responses', issue: 'Same 20 questions answered repeatedly, slow peak-season response', time: '2-3 hrs/day' },
          { task: 'Document processing', issue: 'Manual invoices, itineraries, insurance — one at a time', time: '1-2 hrs/day' },
          { task: 'Internal reporting', issue: 'Reports always a week old, compiled manually', time: '~1 hr/day' },
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
                Every day, your team spends the majority of productive hours on tasks that don't require human judgment. Based on industry benchmarks for mid-size travel agencies:
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
                This adds up to <span className="text-white font-bold">60-70% of productive hours</span> on repetitive tasks that could run without human involvement.
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 3: THE COST ====================
    {
      id: 'theCost',
      render: () => {
        const metrics = [
          { icon: RefreshCcw, value: '40-60%', metric: 'Missed Follow-ups', desc: 'Clients never receive a post-trip follow-up' },
          { icon: Clock, value: '4-8 hrs', metric: 'Response Time', desc: 'Average during peak season' },
          { icon: Users, value: '55-65%', metric: 'Agent Time on Admin', desc: 'Best sellers buried in paperwork' },
          { icon: Database, value: '15-25%', metric: 'Data Inconsistencies', desc: 'Records incomplete or outdated' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What Manual Processes Are Costing You
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
                Estimated annual impact: <span className="text-white font-bold">PLN 180,000-350,000</span> in lost rebookings, wasted agent hours, and operational inefficiencies
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 4: THE OPPORTUNITY ====================
    {
      id: 'theOpportunity',
      render: () => {
        const todayItems = [
          'Confirmations sent manually, 15-30 min delay',
          'Follow-ups depend on agent memory and free time',
          'Agents answer same questions repeatedly',
          'Data scattered across spreadsheets and tools',
          'Reports compiled manually each week',
          '4-8 hr response delays during peak',
        ];

        const automatedItems = [
          'Instant confirmations within 30 seconds',
          'Every client gets timely, personalised sequences',
          'AI handles 70-80% of routine queries, 24/7',
          'Single source of truth, auto-synced',
          'Live dashboards updated automatically',
          '<30 second response — always on',
        ];

        const summaryMetrics = [
          { icon: TrendingUp, metric: '+25-40%', label: 'Rebooking rate' },
          { icon: Clock, metric: '60-70%', label: 'Manual work reduced' },
          { icon: Zap, metric: '24/7', label: 'Response coverage' },
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

    // ==================== SLIDE 5: SOLUTION OVERVIEW ====================
    {
      id: 'solutionOverview',
      render: () => {
        const automations = [
          { num: '01', icon: Mail, title: 'Post-Booking Engine', desc: 'Instant confirmations & docs' },
          { num: '02', icon: RefreshCcw, title: 'Smart Follow-Up', desc: 'Automated nurture sequences' },
          { num: '03', icon: MessageSquare, title: 'Client Query Assistant', desc: 'AI chatbot 24/7' },
          { num: '04', icon: Database, title: 'CRM Sync & Enrichment', desc: 'Unified client data' },
          { num: '05', icon: BarChart3, title: 'Live Ops Dashboard', desc: 'Real-time analytics' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Custom Automations for <GradientText>Jordan Group</GradientText>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              Each automation is custom-built for your workflows, integrated with your existing booking and CRM systems. No off-the-shelf software.
            </p>

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
                All integrated with your existing booking systems, CRM, email, and WhatsApp.
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 6: AUTOMATION 1 - POST-BOOKING ENGINE ====================
    {
      id: 'auto1PostBooking',
      render: () => {
        const capabilities = [
          'Auto-generate branded confirmation emails with booking details',
          'Create PDF vouchers and day-by-day itineraries instantly',
          'Include dynamic content: weather forecasts, visa notes, local tips',
          'Multi-language support (Polish, English, German)',
          'Trigger payment receipt and insurance documents automatically',
          'Consistent, professional output every time',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Mail size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Post-Booking Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Eliminates the 2-3 hours your team spends daily sending confirmations and preparing documents. Every booking triggers an automatic sequence: confirmation email, voucher generation, itinerary PDF, and payment receipt — all personalised and branded.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15-30 min</p>
                  <p className="text-gray-500 text-xs">Manual delay per booking</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;30 sec</p>
                  <p className="text-gray-500 text-xs">Instant automated</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                <span className="font-bold">Impact:</span> <span className="text-white font-bold">2-3 hrs/day recovered</span> for the team, zero missed confirmations
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 7: AUTOMATION 2 - SMART FOLLOW-UP ====================
    {
      id: 'auto2FollowUp',
      render: () => {
        const capabilities = [
          'Pre-departure: packing tips, weather update, transfer details',
          'Post-trip: satisfaction survey + review request on Google/TripAdvisor',
          'Rebooking: personalised destination suggestions based on travel history',
          'Birthday & anniversary trip reminders for VIP clients',
          'WhatsApp and email delivery with smart channel selection',
          'Full lifecycle nurture from booking to rebooking',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <RefreshCcw size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Smart Follow-Up System</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Builds a complete follow-up lifecycle for every client. From pre-departure excitement messages to post-trip review requests and strategic rebooking offers — all timed, personalised, and hands-free.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">40-60%</p>
                  <p className="text-gray-500 text-xs">Never hear back post-trip</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">100%</p>
                  <p className="text-gray-500 text-xs">Get automated sequences</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                <span className="font-bold">Impact:</span> <span className="text-white font-bold">+25-40% improvement</span> in repeat bookings through automated nurture
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 8: AUTOMATION 3 - CLIENT QUERY ASSISTANT ====================
    {
      id: 'auto3QueryAssistant',
      render: () => {
        const capabilities = [
          'Trained on your destinations, policies, and booking procedures',
          'Handles visa requirements, transfer options, packing guides',
          'Processes booking modifications and cancellation requests',
          'Seamless handoff to human agent when needed (with full context)',
          'Available on website chat widget + WhatsApp Business',
          'Consistent, accurate answers every time',
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
                <p className="text-amber-400 text-xs">Automation 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Query Assistant</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An intelligent assistant trained on Jordan Group's destinations, policies, and FAQs. Handles common queries about visas, transfers, luggage, destinations, and booking changes — available 24/7 on your website and WhatsApp.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4-8 hrs</p>
                  <p className="text-gray-500 text-xs">Peak season response</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;30 sec</p>
                  <p className="text-gray-500 text-xs">24/7 instant response</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                <span className="font-bold">Impact:</span> <span className="text-white font-bold">70-80% of routine queries</span> handled automatically, 24/7 client support
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 9: AUTOMATION 4 - CRM SYNC ====================
    {
      id: 'auto4CRMSync',
      render: () => {
        const capabilities = [
          'Bi-directional sync between booking system and CRM',
          'Auto-enrich profiles: travel history, preferences, spend tier',
          'Flag VIP clients and high-value rebooking opportunities',
          'Duplicate detection and automatic record merging',
          'Tag clients by destination interest, travel style, budget',
          'One click to see complete client history and preferences',
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
                <p className="text-amber-400 text-xs">Automation 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">CRM Sync & Data Enrichment</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Connects your booking system, CRM, and communication tools into one unified data layer. Every booking automatically updates client profiles, flags VIPs, tracks preferences, and ensures your team always has the complete picture.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">75-80%</p>
                  <p className="text-gray-500 text-xs">Data accuracy</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">95-99%</p>
                  <p className="text-gray-500 text-xs">Single source of truth</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                <span className="font-bold">Impact:</span> <span className="text-white font-bold">95-99% data accuracy</span> — from scattered spreadsheets to reliable truth
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 10: AUTOMATION 5 - LIVE DASHBOARD ====================
    {
      id: 'auto5Dashboard',
      render: () => {
        const capabilities = [
          'Real-time booking count, revenue, and conversion metrics',
          'Pipeline view: enquiries → quotes → bookings → departures',
          'Agent performance: response times, bookings, client ratings',
          'Destination analytics: trending, declining, seasonal patterns',
          'Automated weekly summary email to management',
          'Alerts for anomalies (drop in bookings, surge in queries)',
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
                <p className="text-amber-400 text-xs">Automation 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Live Ops Dashboard</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A custom dashboard that pulls from all your systems to give you a live view of what matters. No more compiling weekly reports manually. See bookings, revenue, agent performance, and pipeline health at a glance.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1+ hr/week</p>
                  <p className="text-gray-500 text-xs">Manual reporting</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Real-time</p>
                  <p className="text-gray-500 text-xs">Always current</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
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
                <span className="font-bold">Impact:</span> <span className="text-white font-bold">1+ hr/week saved</span> on reporting, plus real-time decision-making capability
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 11: HOW IT CONNECTS ====================
    {
      id: 'workflow',
      render: () => {
        const steps = [
          { icon: Calendar, title: 'Booking Received', desc: 'System triggered instantly' },
          { icon: Mail, title: 'Post-Booking Engine', desc: 'Confirmation + voucher + itinerary (<30 sec)' },
          { icon: Database, title: 'CRM Sync & Enrich', desc: 'Profile updated, VIP flagged (<1 min)' },
          { icon: RefreshCcw, title: 'Smart Follow-Up', desc: 'Pre-trip, post-trip, rebooking sequences' },
          { icon: MessageSquare, title: 'Client Query Bot', desc: 'Handles questions 24/7' },
          { icon: BarChart3, title: 'Live Dashboard', desc: 'Tracks everything in real-time' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">End-to-End</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              How It All <GradientText>Connects</GradientText>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              From the moment a booking is made to the next rebooking — fully automated.
            </p>

            <div className="space-y-2 sm:space-y-3">
              {steps.map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="flex-1 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                    <p className="text-white font-semibold text-sm sm:text-base">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight size={16} className="text-amber-400/50 shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Everything is tracked: open rates, response times, rebooking conversions, query resolution, agent KPIs.
              </p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 12: EXPECTED RESULTS ====================
    {
      id: 'expectedResults',
      render: () => {
        const results = [
          { icon: Clock, metric: 'Response Time', before: '4-8 hrs', after: '<2 min' },
          { icon: TrendingUp, metric: 'Rebooking Rate', before: '5-10%', after: '20-35%' },
          { icon: Users, metric: 'Manual Admin Time', before: '55-65%', after: '15-20%' },
          { icon: Database, metric: 'Data Accuracy', before: '75-80%', after: '95-99%' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">The Transformation in Numbers</h2>

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
                Estimated Annual Value: <span className="text-amber-400">PLN 200,000-400,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Recovered through increased rebookings, time savings, reduced errors, and improved retention</p>
            </div>
          </div>
        );
      },
    },

    // ==================== SLIDE 13: IMPLEMENTATION ROADMAP ====================
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation',
            time: 'Weeks 1-4',
            status: 'Quick Wins',
            items: ['Discovery & workflow mapping', 'Post-Booking Engine deployed', 'CRM integration & data migration'],
          },
          {
            title: 'Core Automation',
            time: 'Weeks 5-8',
            status: 'Core System',
            items: ['Smart Follow-Up sequences live', 'Client Query Assistant deployed', 'Email & WhatsApp integration'],
          },
          {
            title: 'Intelligence',
            time: 'Weeks 9-12',
            status: 'Full Operation',
            items: ['Live Ops Dashboard built', 'Advanced analytics & reporting', 'Full handover & documentation'],
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
              12 Weeks to <GradientText>Full Automation</GradientText>
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

    // ==================== SLIDE 14: ABOUT US ====================
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
              We build custom intelligent systems that automate the work your team shouldn't be doing manually.
              Not off-the-shelf software. Not generic templates. Systems designed around how you actually operate.
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
              We handle everything — discovery to deployment to optimization.
            </p>
          </div>
        </div>
      ),
    },

    // ==================== SLIDE 15: CLOSING/CTA ====================
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to <GradientText>Transform</GradientText> Jordan Group?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Let's discuss how these automations can work for your specific setup.
            No obligation — just a 30-minute conversation about what's possible.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '12 wks', label: 'To deploy' },
              { value: 'PLN 200-400K', label: 'Annual value' },
              { value: '60-70%', label: 'Admin reduced' },
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

          <p className="text-gray-500 text-xs sm:text-sm mt-3">
            First automation is on us — no obligation whatsoever.
          </p>

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
