import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Users,
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  AlertCircle,
  Mail,
  Zap,
  FileText,
  ClipboardList,
  BarChart3,
  Target,
  Layout,
  UserCheck,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'First Event',
  description: 'Scaling First Event\'s Client Delivery Engine Through Intelligent Automation — AI Proposal by Scooper AI',
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
              src="/first-event-logo.png"
              alt="First Event"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for First Event</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if your team could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              £200K–£450K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered revenue and reclaimed capacity?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '25-40%', label: 'Admin overhead', icon: Clock },
              { value: 'Hours', label: 'Lead response delay', icon: Mail },
              { value: '4-6 hrs', label: 'Per event report', icon: FileText },
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
                5 custom automations to respond to leads in <span className="text-white font-bold">under 5 minutes</span>, set up events across 6 departments in <span className="text-white font-bold">30 minutes</span>, and reclaim <span className="text-white font-bold">30–50 hours/week</span>
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
          { task: 'New enquiry processing — review, qualify, route, respond', time: '20-30 min/lead', issue: 'After-hours and peak-period enquiries wait hours or get missed' },
          { task: 'Resource allocation — matching 90+ staff skills to events', time: '2-4 hrs/week', issue: 'Dependent on institutional knowledge and spreadsheets' },
          { task: 'Cross-department event setup — brief 6 teams per event', time: '30-45 min/event', issue: 'Each handoff is an opportunity for details to slip' },
          { task: 'Client update coordination — compile multi-dept status', time: '3-5 hrs/week', issue: 'Senior PMs compiling rather than strategising' },
          { task: 'Post-event reporting — data from registration, feedback, AV', time: '4-6 hrs/event', issue: 'Critical for retention but delays client delivery' },
          { task: 'Supplier & vendor coordination — confirmations, docs, payments', time: '3-5 hrs/week', issue: 'Manual email chains across dozens of vendors per event' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Your Operational Reality Today
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                Every event your 90+ person team delivers involves a chain of manual coordination across six departments — consuming senior talent's time on tasks that don't require their expertise.
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
                Conservative estimate: <span className="text-white font-bold">25–40% of operations team capacity</span> consumed by coordination and manual data handling.
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
          { icon: Mail, value: '£150–400K', metric: 'Lost Pipeline', desc: '2-3 qualified leads/quarter lost to slow response' },
          { icon: Clock, value: '21×', metric: 'Speed Factor', desc: 'Drop in qualification odds: 5 min vs 30 min (MIT)' },
          { icon: Users, value: '2-3 FTEs', metric: 'Admin Drain', desc: 'Equivalent capacity consumed across 6 departments' },
          { icon: AlertCircle, value: 'Growing', metric: 'Data Risk', desc: 'Details fragmented across email, PM tools, notes' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Hidden Cost of Staying Manual
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

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-rose-400 text-xs sm:text-sm text-center">
                Conservative Annual Opportunity Cost: <span className="text-white font-bold">£200K–£500K</span>
              </p>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-amber-400 font-semibold">Why now:</span> As an employee-owned business, every efficiency gain flows directly to every team member. The 2026 events market is projected to grow 6-8% CAGR — demand will intensify.
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
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Competitive Landscape</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            The Automation Inflection Point
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 sm:mb-4">Industry movement</p>
            <div className="space-y-2 sm:space-y-3">
              {[
                { stat: '$15.5B → $34.7B', desc: 'Event management software market by 2029 — 17.4% CAGR' },
                { stat: '50% → 75%', desc: 'Event professionals now using AI, up from near-zero two years ago' },
                { stat: '75%+', desc: 'Organisers now use marketing automation software' },
                { stat: '1 in 5', desc: 'Enterprise orgs have actually integrated event + martech platforms' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp size={14} className="text-amber-400 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{item.stat}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
              <Target size={16} className="text-rose-400 mb-2 sm:w-5 sm:h-5" />
              <p className="text-white font-semibold text-sm sm:text-base mb-1">Competitors Building</p>
              <p className="text-gray-500 text-xs">Bizzabo offers AI matchmaking, automated registration, CRM pipelines as standard</p>
            </div>
            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
              <Zap size={16} className="text-emerald-400 mb-2 sm:w-5 sm:h-5" />
              <p className="text-white font-semibold text-sm sm:text-base mb-1">Your Advantage</p>
              <p className="text-gray-500 text-xs">In-house web & app dev capability — connect build expertise with automated back-office</p>
            </div>
          </div>

          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
            <p className="text-gray-300 text-xs sm:text-sm">
              First Event already builds custom event websites and apps in-house. The opportunity: <span className="text-amber-400 font-semibold">pair that capability with automated operations</span> competitors can't match.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Vision of Automated Operation
    {
      id: 'vision',
      render: () => {
        const todayItems = [
          'Manual enquiry review, qualification, and response',
          '2-3 hours manual event setup across 6 departments',
          'Spreadsheet-based resource matching for 90+ staff',
          'Weekly manual status compilation per client',
          '4-6 hours manual post-event report building',
        ];
        const automatedItems = [
          'AI-qualified, routed, and responded in under 5 min',
          'One-click kickoff cascades to all departments',
          'AI suggests optimal team composition instantly',
          'Client portal with live progress — PMs flag exceptions only',
          'Auto-generated report in 24 hours, PM reviews in 30 min',
        ];
        const summaryMetrics = [
          { icon: Zap, metric: '<5 min', label: 'Lead Response' },
          { icon: Clock, metric: '70-80%', label: 'Setup Time Saved' },
          { icon: BarChart3, metric: '75-85%', label: 'Reporting Saved' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Vision of the <GradientText>Automated</GradientText> Operation
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
          { num: '01', title: 'Enquiry Capture & Routing', desc: 'AI-qualified lead response', icon: Mail, layer: 'Layer 1' },
          { num: '02', title: 'Event Kickoff System', desc: 'Cross-dept auto-setup', icon: ClipboardList, layer: 'Layer 2' },
          { num: '03', title: 'Resource Intelligence', desc: 'AI staff matching', icon: UserCheck, layer: 'Layer 2+3' },
          { num: '04', title: 'Client Experience Portal', desc: 'Live progress dashboards', icon: Layout, layer: 'Layer 2' },
          { num: '05', title: 'Post-Event Intelligence', desc: 'Auto reports & insights', icon: BarChart3, layer: 'Layer 3' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Solution Architecture</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Modules That <GradientText>Transform</GradientText> Operations
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Layer 1', desc: 'Lead & Revenue Ops' },
                { label: 'Layer 2', desc: 'Workflow Automation' },
                { label: 'Layer 3', desc: 'Intelligence & Decisions' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
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
                Each module is custom-built for First Event's specific workflows and team structure.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Enquiry Capture & Intelligent Routing
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          '24/7 intelligent auto-response with event-type-specific content and case studies',
          'AI-powered lead scoring and priority flagging — high-urgency pings the right director instantly',
          'Smart routing: conferences → account directors, blockchain/tech → specialist expertise, incentive → travel team',
          'Pre-populated lead research briefs for sales team with company data and suggested talking points',
          'Response time tracking and reporting dashboard',
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
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Enquiry Capture & Intelligent Routing</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A corporate client submits an enquiry at 6pm Friday for a 500-person conference. Today: generic confirmation, wait till Monday. <span className="text-white font-semibold">After:</span> personalised acknowledgement in 2 minutes referencing relevant case studies, account director briefed instantly.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours/Days</p>
                  <p className="text-gray-500 text-xs">Manual review during business hours</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;5 min</p>
                  <p className="text-gray-500 text-xs">AI-qualified, routed, acknowledged 24/7</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 3-5× lead qualification improvement · 15-25% enquiry-to-proposal conversion increase
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Cross-Department Event Kickoff
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Event-type-specific automation templates (conference, incentive, hybrid, experiential, virtual)',
          'Auto-generated department briefs: creative, web, AV/tech, marketing — each tailored to their needs',
          'Milestone-based task assignment with smart deadline calculation from event date',
          'Automated kickoff notification cascade to all relevant team members',
          'Integration with resource management for simultaneous team allocation',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <ClipboardList size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cross-Department Event Kickoff</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A new incentive travel programme for 200 delegates to Lisbon is confirmed. Today: 2 hours setting up workspace, emailing 5 department heads. <span className="text-white font-semibold">After:</span> within 10 minutes, every department has their brief, tasks assigned, resource engine suggests team, client portal is live.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-3 hrs</p>
                  <p className="text-gray-500 text-xs">Manual multi-dept coordination</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;30 min</p>
                  <p className="text-gray-500 text-xs">One-click cascades to all teams</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 70-80% event setup time reduction · Near-zero information gaps between departments
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Resource Intelligence & Matching
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Dynamic staff skills and availability profiles across 90+ team members',
          'AI-powered team composition recommendations based on event type and expertise',
          'Workload balancing alerts — prevent burnout, flag over-allocation early',
          'Historical performance matching: who delivered best on similar events?',
          'Capacity forecasting for upcoming quarters — plan growth, not firefight',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <UserCheck size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Resource Intelligence & Matching</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Today: Resource Manager reviews spreadsheets, mentally maps skills to requirements, emails department heads, confirms assignments over 1-2 days. <span className="text-white font-semibold">After:</span> within minutes, a recommended team composition appears — factoring in capacity, expertise, and historical performance.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1-2 days</p>
                  <p className="text-gray-500 text-xs">Manual matching + email confirmation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Minutes</p>
                  <p className="text-gray-500 text-xs">AI-recommended, manager approves</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 60-70% resource allocation time reduction · Improved utilisation · Reduced over-allocation risk
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Client Experience Portal
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Branded, client-facing event progress dashboard extending First Event\'s web capability',
          'Real-time milestone tracking across all departments — auto-updates as work completes',
          'Automated weekly summary emails to client stakeholders from live portal data',
          'Exception-based alerts for PMs: only flag what needs attention, not routine progress',
          'Document sharing and approval workflows within the portal',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Layout size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Experience Portal & Auto-Updates</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A PM managing three concurrent events spends 3-4 hours weekly compiling updates from creative, web, AV, and operations into client emails. <span className="text-white font-semibold">After:</span> clients log into their branded portal for live progress. The PM only flags exceptions — freeing 3-4 hours weekly.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">3-4 hrs</p>
                  <p className="text-gray-500 text-xs">Weekly manual compilation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Live</p>
                  <p className="text-gray-500 text-xs">Client portal + exception alerts</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 60-75% client update time reduction · Improved satisfaction · Competitive differentiation
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Post-Event Intelligence Generator
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Automated data aggregation from registration, event app, feedback surveys, and social media',
          'Standardised report templates with First Event branding — consistent quality every time',
          'Benchmark comparisons against previous events and industry averages',
          'Automated NPS and satisfaction scoring with trend analysis',
          'AI-generated insight highlights and recommendations for client review',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Post-Event Intelligence Generator</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                After a 500-person conference, a PM spends a full day pulling data from registration, app analytics, feedback forms, and social posts. <span className="text-white font-semibold">After:</span> 24 hours post-event, a draft intelligence report is ready with visualisations and benchmarks. PM adds commentary in 30-45 minutes.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4-6 hrs</p>
                  <p className="text-gray-500 text-xs">Manual compilation, 1-2 week delivery</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30-45 min</p>
                  <p className="text-gray-500 text-xs">PM review only, 24-48hr delivery</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-400 shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 75-85% reporting time reduction · 24-48hr delivery vs 1-2 weeks · Deeper insights driving repeat business
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
          { icon: Mail, metric: 'Lead Response', before: 'Hours/days', after: '<5 min' },
          { icon: TrendingUp, metric: 'Enquiry Conversion', before: 'Baseline', after: '+15-25%' },
          { icon: Clock, metric: 'Admin Reclaimed', before: '25-40%', after: '30-50 hrs/week' },
          { icon: FileText, metric: 'Report Delivery', before: '1-2 weeks', after: '24-48 hours' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Measurable Transformation
            </h2>

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
                Annual Estimated Impact: <span className="text-amber-400">£200K–£450K</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Recovered lead revenue £150-300K + admin capacity savings £50-150K</p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Capacity Reclaimed
    {
      id: 'capacity',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Capacity</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Like Adding <GradientText>2–3 Team Members</GradientText> — Without Hiring
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="text-center mb-4 sm:mb-5">
              <p className="text-amber-400 text-3xl sm:text-4xl font-bold mb-1">28–44 hrs</p>
              <p className="text-gray-400 text-sm">reclaimed per week</p>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {[
                { area: 'Event setup automation', hours: '~8-12 hrs/week' },
                { area: 'Resource allocation support', hours: '~4-6 hrs/week' },
                { area: 'Client update automation', hours: '~6-10 hrs/week' },
                { area: 'Post-event reporting', hours: '~6-10 hrs/week' },
                { area: 'Lead management automation', hours: '~4-6 hrs/week' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                  <p className="text-gray-300 text-sm sm:text-base">{item.area}</p>
                  <p className="text-emerald-400 font-semibold text-xs sm:text-sm">{item.hours}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-3">
              {[
                { role: 'Project Managers', benefit: 'Focus on client strategy and upselling additional services' },
                { role: 'Sales Team', benefit: 'Relationship-building and proactive outreach instead of lead admin' },
                { role: 'Creative & Web Teams', benefit: 'Cleaner, more complete briefs — fewer revision cycles' },
                { role: 'Leadership', benefit: 'Real-time visibility into capacity for smarter growth decisions' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Users size={14} className="text-emerald-400 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{item.role}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
            <p className="text-gray-300 text-xs sm:text-sm">
              As an <span className="text-white font-semibold">employee-owned business</span>, every efficiency gain flows directly to every team member through the EOT structure. Automation amplifies the impact of the team First Event has built.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 14: 90-Day Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation & Quick Wins',
            time: 'Weeks 1–4',
            status: 'Quick Wins',
            items: ['Discovery & audit', 'Enquiry capture & routing (Module 1)', 'Staff skills profiles', 'Event templates'],
            result: 'Within 2 weeks, every new enquiry gets an intelligent response within minutes, 24/7.',
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5–8',
            status: 'Core System',
            items: ['Event kickoff system (Module 2)', 'Resource intelligence engine (Module 3)', 'Integration layer'],
            result: 'New events fully set up across all departments within 30 minutes. AI resource recommendations live.',
          },
          {
            title: 'Intelligence & Optimisation',
            time: 'Weeks 9–12',
            status: 'Full Operation',
            items: ['Client experience portal (Module 4)', 'Post-event intelligence (Module 5)', 'Optimisation & refinement'],
            result: 'Full end-to-end automation. Client portal live. 30-50 hours/week reclaimed.',
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
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm">
                        {itm}
                      </span>
                    ))}
                  </div>
                  <p className="text-emerald-400 text-xs sm:text-sm">
                    <CheckCircle size={10} className="inline mr-1" />
                    {item.result}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 sm:mt-4 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Built on your existing stack — no rip-and-replace. Your team's workflow evolves, not overhauls.
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
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-bold hover:text-amber-400 transition-colors">Scooper AI</a>
                <p className="text-gray-400 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              We build custom intelligent systems for businesses. We don't sell off-the-shelf software — we design, build, and deploy automation that fits exactly how you operate.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Integration-First', desc: 'Works with existing tools' },
                { title: 'Done-for-You', desc: 'Team stays focused on events' },
                { title: 'Event Expertise', desc: 'We know multi-dept delivery' },
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
              We handle everything — design to deployment to optimisation.
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
            Ready to <GradientText>Scale</GradientText> Without Limits?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            First Event has spent 25 years building a world-class team and reputation. 2026 is the year to build the operational infrastructure that lets that team scale without limits.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To deploy' },
              { value: '£200–450K', label: 'Annual value' },
              { value: '30-50 hrs', label: 'Reclaimed/week' },
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

          <p className="mt-4 text-gray-600 text-xs italic">
            Based on publicly available information. Metrics refined during discovery.
          </p>
        </div>
      ),
    },
  ],
};

export default presentation;
