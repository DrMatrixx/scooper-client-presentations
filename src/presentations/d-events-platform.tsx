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
  Globe,
  ClipboardList,
  Brain,
  Package,
  BarChart3,
  Target,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'd events platform',
  description: 'Scaling d events platform\'s Client Delivery Engine Through Intelligent Automation — AI Proposal by Scooper AI',
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
              src="/deventsplatform-logo.jpg"
              alt="d events platform"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for d events platform</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              €65,000–€150,000
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost leads, admin overhead, and missed opportunities?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '40-55%', label: 'Admin overhead', icon: Clock },
              { value: 'Hours', label: 'Lead response time', icon: Mail },
              { value: 'No CRM', label: 'Zero automation', icon: AlertCircle },
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
                5 custom automations to respond to leads in <span className="text-white font-bold">under 5 minutes</span>, cut admin time by <span className="text-white font-bold">50–70%</span>, and reclaim <span className="text-white font-bold">25–35 hours/week</span> for strategic work
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

    // Slide 2: Operational Reality Today
    {
      id: 'reality',
      render: () => {
        const tasks = [
          { task: 'Prospect inquiry → manual inbox check → personalized reply', time: '30–90 min/inquiry', issue: 'Inquiries sit unanswered for hours/days during peak weeks' },
          { task: 'Win project → collect brief → create folders → notify team', time: '2–4 hrs/project', issue: 'Details lost across email threads; different brief versions' },
          { task: 'Coordinate 5–15 suppliers via separate email threads & calls', time: '5–10 hrs/event', issue: 'One missed update cascades into on-site problems' },
          { task: 'Compile periodic client status reports from supplier updates', time: '3–5 hrs/cycle', issue: 'Senior team reports instead of creative strategy' },
          { task: 'Translate & maintain website across ESP/CAT/ENG', time: '2–3 hrs/update', issue: 'Content stale — footer reads ©2023' },
          { task: 'Post-event: compile results, gather feedback, archive', time: '3–6 hrs/event', issue: 'Insights not systematically captured for future proposals' },
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
                With 20+ years of expertise, d events platform delivers world-class corporate events. But behind every successful event, manual processes consume the majority of team capacity.
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
                Estimated admin overhead: <span className="text-white font-bold">40–55% of team capacity</span> consumed by coordination and manual data handling.
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
          { icon: Mail, value: '€15–40K', metric: 'Lead Loss', desc: '2–3 qualified leads/month going cold from slow response' },
          { icon: Clock, value: '21×', metric: 'Speed Advantage', desc: 'More likely to qualify a lead within 5 minutes (HBR)' },
          { icon: Users, value: '1–1.5 FTEs', metric: 'Admin Capacity Drain', desc: '2–3 team members at 40–55% admin time' },
          { icon: AlertCircle, value: '€35–75K', metric: 'Capacity Cost', desc: 'Annual cost of non-revenue admin work' },
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
                Estimated Annual Opportunity Cost: <span className="text-white font-bold">€65,000–€150,000</span>
              </p>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-amber-400 font-semibold">Why now:</span> 50% of event professionals plan to incorporate AI in 2025, and 79% already use an Event Management System. The adoption window is narrowing.
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
          { name: 'Iventions', detail: 'Fully integrated digital platform, data-driven positioning, sophisticated CRM stack' },
          { name: 'Dicom Events', detail: 'In-house integrated project capability, digitized design-through-execution workflows' },
          { name: 'CREA Group', detail: 'Multi-city destination management tools, standardized processes across Barcelona & Madrid' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Competitive Landscape</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Competitive Gap
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 sm:mb-4">What we observed in Barcelona</p>
              <div className="space-y-2 sm:space-y-3">
                {competitors.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Target size={14} className="text-rose-400 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">{item.name}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
                <TrendingUp size={16} className="text-amber-400 mb-2 sm:w-5 sm:h-5" />
                <p className="text-white font-semibold text-sm sm:text-base mb-1">Compounding Effect</p>
                <p className="text-gray-500 text-xs">Faster response → more clients → more data → better proposals → higher win rates</p>
              </div>
              <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
                <Globe size={16} className="text-amber-400 mb-2 sm:w-5 sm:h-5" />
                <p className="text-white font-semibold text-sm sm:text-base mb-1">Industry Trend</p>
                <p className="text-gray-500 text-xs">Event management software: $15.5B → $34.7B by 2029 at 17.4% CAGR</p>
              </div>
            </div>

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                d events platform has the experience and relationship depth competitors lack. The opportunity: <span className="text-amber-400 font-semibold">pair that expertise with intelligent automation.</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Vision of Automated Operation
    {
      id: 'vision',
      render: () => {
        const todayItems = [
          'Manual email check, handwritten reply (hours/days)',
          'Email exchanges, manual folders, team notification',
          'Proposals from scratch, manual price lookups',
          'Separate email threads for each supplier',
          'Manual compilation for status reports',
        ];
        const automatedItems = [
          'Smart intake, personalized reply in under 2 minutes',
          'Digital brief auto-generates workspace & roles',
          'AI-assisted drafts from templates & pricing history',
          'Centralized portal with real-time dashboard',
          'Auto-generated reports from live data',
        ];
        const summaryMetrics = [
          { icon: Zap, metric: '<5 min', label: 'Lead Response' },
          { icon: Clock, metric: '70-80%', label: 'Setup Time Saved' },
          { icon: BarChart3, metric: '80%', label: 'Reporting Time Saved' },
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
          { num: '01', title: 'Lead Qualification & Response', desc: 'Capture & respond first', icon: Mail, layer: 'Layer 1' },
          { num: '02', title: 'Client Onboarding Automator', desc: 'Brief-to-workspace pipeline', icon: ClipboardList, layer: 'Layer 2' },
          { num: '03', title: 'Supplier Coordination Tracker', desc: 'Milestones & reminders', icon: Package, layer: 'Layer 2' },
          { num: '04', title: 'Proposal & Budget Builder', desc: 'AI-assisted drafting', icon: Brain, layer: 'Layer 3' },
          { num: '05', title: 'Reporting & Post-Event Intel', desc: 'Auto reports & insights', icon: BarChart3, layer: 'Layer 3' },
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
                { label: 'Layer 1', desc: 'Lead & Revenue Ops', color: 'amber' },
                { label: 'Layer 2', desc: 'Workflow Automation', color: 'amber' },
                { label: 'Layer 3', desc: 'Intelligence & Decisions', color: 'amber' },
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
                Each module is custom-built for d events platform's specific workflows and team structure.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Lead Qualification & Response Engine
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Smart intake form captures event type, date, guest count, budget range, location',
          'Personalized acknowledgment with next steps + calendar link in under 60 seconds',
          'Auto-scored by event size, timeline, and budget — high-value leads trigger instant notification',
          'CRM record created with full details, source tracking, and follow-up sequence',
          'Multilingual AI responses in ESP/CAT/ENG',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Instant Lead Qualification & Response</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Your current 3-field contact form with no auto-response means prospects wait hours or days. This engine transforms every inquiry into an instant, personalized experience that books meetings automatically.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours/Days</p>
                  <p className="text-gray-500 text-xs">Manual email follow-up</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;2 min</p>
                  <p className="text-gray-500 text-xs">Personalized + meeting booked</p>
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
                <span className="font-bold">Impact:</span> 3–5× lead-to-meeting conversion · Priority: High · No dependencies
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Client Onboarding & Project Launch
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Structured digital brief form pre-populated from lead data',
          'Auto-generates project workspace with timeline, milestones, and deliverables',
          'Team auto-assigned by availability and event type',
          'Supplier shortlist generated from database matching event requirements',
          'Branded kickoff confirmation sent to client automatically',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Onboarding & Project Launch</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Currently 2–4 hours of manual setup per project: email exchanges for briefs, folder creation, team notification. This module automates the entire brief-to-kickoff pipeline.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2–4 hrs</p>
                  <p className="text-gray-500 text-xs">5–8 emails for brief collection</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15–30 min</p>
                  <p className="text-gray-500 text-xs">1 form → workspace in minutes</p>
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
                <span className="font-bold">Impact:</span> 70–80% setup time reduction · Event-type templates (congress/launch/gala)
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Supplier Coordination & Milestone Tracker
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Standardized briefs with specific deliverables and deadlines per supplier',
          'Milestone checklists: venue confirmed → floor plan → AV setup → walkthrough',
          'Automated reminders at 7, 3, and 1 day before deadlines',
          'Self-service milestone confirmation via simple link (no app needed)',
          'Real-time red/yellow/green dashboard with overdue flagging + performance history',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Package size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Supplier Coordination & Milestone Tracker</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                With 5–15 suppliers per event coordinated via separate emails and calls (5–10 hours/event), one missed update can cascade into on-site problems. This module centralizes everything.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5–10 hrs</p>
                  <p className="text-gray-500 text-xs">Per event, separate threads</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2–4 hrs</p>
                  <p className="text-gray-500 text-xs">One dashboard, auto reminders</p>
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
                <span className="font-bold">Impact:</span> 50–60% coordination time reduction · Zero missed supplier deadlines
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Intelligent Proposal & Budget Builder
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'System suggests proposal structure from similar past events',
          'Budget auto-populates from historical pricing data',
          'AI drafts standard sections — team focuses on creative differentiation',
          'System handles 60% structural → team focuses on 40% creative',
          'Branded PDF/presentation output in ESP/CAT/ENG',
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
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Intelligent Proposal & Budget Builder</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Each proposal currently starts from scratch — 4–8 hours of manual pricing, writing, and formatting. 20 years of institutional knowledge lives in heads, not systems. This module changes that.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4–8 hrs</p>
                  <p className="text-gray-500 text-xs">Blank document, manual research</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30 min</p>
                  <p className="text-gray-500 text-xs">AI draft ready for review</p>
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
                <span className="font-bold">Impact:</span> 50–70% proposal time reduction · Template library + pricing intelligence
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Client Reporting & Post-Event Intelligence
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Auto-generated weekly status reports from project data',
          'Branded update sent after 15-minute team review (vs. 3-hour compilation)',
          'Post-event survey triggered within 24 hours automatically',
          'AI-compiled results report with benchmarks and analysis',
          'Searchable knowledge base — 20 years of expertise becomes a queryable asset',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Reporting & Post-Event Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                3–5 hours per report cycle, manually compiled. Post-event analysis is inconsistent. 20 years of knowledge not systematically captured. This module turns operational data into a compounding asset.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">3–5 hrs</p>
                  <p className="text-gray-500 text-xs">Manual compilation per cycle</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15 min</p>
                  <p className="text-gray-500 text-xs">Review auto-generated report</p>
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
                <span className="font-bold">Impact:</span> 80% reporting time reduction · Institutional knowledge preserved
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
          { icon: FileText, metric: 'Proposal Speed', before: '4–8 hours', after: '30 min review' },
          { icon: Clock, metric: 'Admin Reclaimed', before: '40–55%', after: '25–35 hrs/week' },
          { icon: BarChart3, metric: 'Reporting Speed', before: '3–5 hours', after: '15 minutes' },
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
                Estimated Annual Impact: <span className="text-amber-400">€65,000–€150,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Lead loss €15–40K + admin capacity €35–75K + error reduction €15–35K</p>
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
            Like Adding <GradientText>0.7–1.0 FTEs</GradientText> — Without Hiring
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="text-center mb-4 sm:mb-5">
              <p className="text-amber-400 text-3xl sm:text-4xl font-bold mb-1">25–35 hrs</p>
              <p className="text-gray-400 text-sm">reclaimed per week</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {[
                { role: 'Elena & founders', benefit: 'More time for creative strategy and business development' },
                { role: 'Coordinators', benefit: 'More time for quality control and on-site excellence' },
                { role: 'The business', benefit: '2–4 additional clients per year without hiring, or expanded service offerings' },
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
              The bottleneck isn't knowledge or talent. It's <span className="text-white font-semibold">operational bandwidth</span>. Automation removes it.
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
            items: ['CRM setup', 'Smart lead form', 'Email automation ESP/CAT/ENG', 'Calendar booking'],
            result: 'Every inquiry gets personalized response within 2 minutes by Week 2.',
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5–8',
            status: 'Core System',
            items: ['Client onboarding pipeline', 'Supplier milestone tracker', 'Reporting framework'],
            result: 'First automated onboarding end-to-end; supplier coordination down 50%.',
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9–12',
            status: 'Full Operation',
            items: ['Proposal builder + AI drafting', 'Post-event intelligence', 'Performance dashboards'],
            result: 'Complete system live. 25–35 more hours/week of strategic capacity.',
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
                Built on your existing WordPress site. No rip-and-replace. The system adapts to you.
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
                { title: 'Custom-Built', desc: 'Around your workflows' },
                { title: 'Integration-First', desc: 'Works with existing tools' },
                { title: 'Done-for-You', desc: 'Team stays non-technical' },
                { title: 'Deep Research', desc: 'We understand you first' },
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

    // Slide 16: Strategic Next Step / Closing CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to <GradientText>Scale</GradientText> Your Delivery Engine?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Your 20 years of expertise deserves operational infrastructure that matches it. Let's explore what this looks like in your operation.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To deploy' },
              { value: '€65–150K', label: 'Annual value' },
              { value: '25–35 hrs', label: 'Reclaimed/week' },
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
