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
  BarChart3,
  Zap,
  FileText,
  Bell,
  Target,
  Globe,
  PenTool,
  FolderKanban,
  Newspaper,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'MPR — Millenium Promocija',
  description: 'AI Automation Proposal for MPR — Millenium Promocija Slovenija',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      render: () => (
        <div className="text-center w-full max-w-3xl px-4">
          <style>{`
            @keyframes glow {
              0%, 100% { filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.3)); }
              50% { filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.6)); }
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
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-gray-400 text-xs sm:text-sm">AI Automation Proposal</span>
          </div>

          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <img
              src="/MPR.jpg"
              alt="MPR — Millenium Promocija"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3 invert brightness-200"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for MPR Slovenija</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              €30K–€50K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in productive hours — with your 5-person team?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '8-10 hrs', label: 'Weekly monitoring', icon: Clock },
              { value: '4-6 hrs', label: 'Per client report', icon: FileText },
              { value: '62%', label: 'Time on content', icon: PenTool },
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
                5 custom automations to cut monitoring by <span className="text-white font-bold">80%+</span>, automate reporting <span className="text-white font-bold">60-70%</span>, and free up <span className="text-white font-bold">15-20 hrs/week</span> for client work
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
          { task: 'Media monitoring & mention tracking', time: '8-10 hrs/wk', issue: 'Slovenian + Croatian + English sources' },
          { task: 'Client coverage reports', time: '4-6 hrs each', issue: 'Screenshots, metrics, manual assembly' },
          { task: 'Content creation (press releases, pitches)', time: '2-3 hrs each', issue: '62% of PR time spent here' },
          { task: 'Journalist outreach coordination', time: '2-3 hrs/day', issue: 'Scattered contacts, no tracking' },
          { task: 'Campaign project coordination', time: '5-8 hrs/wk', issue: 'Email chains, missed deadlines' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Where Time Goes Today
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
                A 5-person team covering Slovenia and Croatia — managing PR, public affairs, creative marketing, and events. Every hour counts, yet most are spent on tasks that could run automatically.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm sm:text-base font-medium">{item.task}</p>
                      <p className="text-gray-500 text-xs hidden sm:block">{item.issue}</p>
                    </div>
                    <div className="text-violet-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                As you know: <span className="text-gray-300 italic">"In PR things are unfortunately not as structured as in digital marketing."</span> That's exactly where automation adds value.
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
          { icon: Clock, value: '15-20 hrs', metric: 'Weekly Admin', desc: 'On tasks that don\'t need humans' },
          { icon: Target, value: '20-30%', metric: 'Mentions Missed', desc: 'Manual monitoring can\'t catch all' },
          { icon: Users, value: '€30-50/hr', metric: 'Team Cost', desc: 'Spent on repetitive work' },
          { icon: TrendingUp, value: '48%', metric: 'PR Pros Struggle', desc: 'To prove ROI to clients' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What This Actually Costs
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
                Total value at stake: <span className="text-white font-bold">€30,000–€50,000/year</span> in recovered productive hours
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
          'Manual Google Alerts, sporadic media checking',
          'Hours compiling coverage reports with screenshots',
          'Journalist contacts scattered across inboxes',
          'Press releases written from scratch each time',
          'Campaign coordination via email chains',
        ];
        const automatedItems = [
          'Real-time monitoring with sentiment analysis',
          'Auto-generated branded reports in 30 minutes',
          'Centralized CRM with relationship scoring',
          'AI first-drafts in your tone, ready to refine',
          'Automated task sequences and reminders',
        ];
        const summaryMetrics = [
          { icon: Clock, metric: '80%', label: 'Less monitoring' },
          { icon: Globe, metric: 'SI + HR', label: 'Both markets' },
          { icon: Users, metric: '15-20 hrs', label: 'Weekly saved' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What If This Was <GradientText>Automated</GradientText>?
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
                  <p className="text-violet-400 text-xs uppercase tracking-wider mb-2 sm:mb-3">Automated</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {automatedItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
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

    // Slide 5: Solution Overview
    {
      id: 'whatChanges',
      render: () => {
        const automations = [
          { num: '01', title: 'Media Monitoring', desc: 'SI + HR + EN alerts', icon: Bell },
          { num: '02', title: 'Report Generator', desc: 'Auto coverage reports', icon: BarChart3 },
          { num: '03', title: 'Journalist CRM', desc: 'Contact management', icon: Newspaper },
          { num: '04', title: 'Campaign Tasks', desc: 'Workflow automation', icon: FolderKanban },
          { num: '05', title: 'Content Drafts', desc: 'AI-powered writing', icon: PenTool },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> Your Operations
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-violet-500/30 hover:bg-white/10 transition-all ${
                    i === automations.length - 1 && automations.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg bg-violet-500/20 flex items-center justify-center mb-2 sm:mb-3">
                    <item.icon size={16} className="text-violet-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <p className="text-violet-400 text-xs mb-0.5 sm:mb-1">{item.num}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Each automation is built specifically for PR workflows — designed to handle the structured work so your team can focus on relationships and storytelling.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 6: Automation 1 - Media Monitoring
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Multi-language monitoring: Slovenian + Croatian + English',
          'Automatic sentiment detection (positive/negative/neutral)',
          'Competitor mention tracking alongside client mentions',
          'Automatic categorization by client, topic, and urgency',
          'Slack/WhatsApp/email alerts for high-priority mentions',
          'Daily digest summaries for quick team review',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Bell size={16} className="text-violet-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs">Automation 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Intelligent Media Monitoring</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                AI-powered system that continuously monitors Slovenian and Croatian media sources for client brand mentions, competitor activity, and industry keywords. Real-time alerts for urgent mentions, plus automated daily briefings.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1-2 hrs/day</p>
                  <p className="text-gray-500 text-xs">Manual checking</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~5 min/day</p>
                  <p className="text-gray-500 text-xs">Review daily briefing</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-violet-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-2 sm:p-3 text-center">
              <p className="text-violet-300 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 8-10 hrs/week recovered; zero missed media mentions
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Automation 2 - Report Generator
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Paste coverage URLs → automatic screenshot + metric capture',
          'Branded report templates customized per client',
          'Summary statistics: mentions, reach, sentiment breakdown',
          'Monthly/weekly/campaign-based scheduling options',
          'Export as PDF or shareable interactive link',
          'Historical comparison for trend tracking',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <BarChart3 size={16} className="text-violet-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs">Automation 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Client Coverage Report Generator</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Automated pipeline that takes coverage URLs (or pulls from monitoring), captures screenshots, calculates metrics, and assembles branded, client-ready reports. Reporting time cut by 60-70%.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4-6 hrs</p>
                  <p className="text-gray-500 text-xs">Per client report</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30-60 min</p>
                  <p className="text-gray-500 text-xs">Review & personalize</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-violet-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-2 sm:p-3 text-center">
              <p className="text-violet-300 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 60-70% reduction in reporting time; more consistent, professional reports
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Automation 3 - Journalist CRM
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Centralized database with beat/outlet info for SI + HR journalists',
          'Automatic logging of email interactions and responses',
          'Relationship health scoring (last contact, responsiveness)',
          'Smart suggestions for best-fit journalists per story topic',
          'Shared across the team — no knowledge silos',
          'GDPR-compliant data handling',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Newspaper size={16} className="text-violet-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs">Automation 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Journalist & Media Contact CRM</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Centralized journalist relationship system covering Slovenia and Croatia. Tracks every interaction, preference, and beat — so decades of relationships are institutionalized, not stuck in individual inboxes.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Scattered</p>
                  <p className="text-gray-500 text-xs">Emails, phones, memory</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Searchable</p>
                  <p className="text-gray-500 text-xs">Full history + preferences</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-violet-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-2 sm:p-3 text-center">
              <p className="text-violet-300 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Faster pitching, better-targeted outreach, no lost relationships
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Automation 4 - Campaign Tasks
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Campaign kickoff → auto-generates all tasks with owners & deadlines',
          'Automated reminders at 48hrs and 24hrs before deadlines',
          'Client-facing status page showing campaign progress',
          'Event coordination: venue → permits → branding → media invites',
          'Integration with Google Workspace, calendar, email',
          'Status dashboards to track everything at a glance',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <FolderKanban size={16} className="text-violet-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs">Automation 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Project & Campaign Task Automation</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Automated workflow sequences for campaigns like Uber's market entry or La Roche-Posay events. Kick off a campaign template → system auto-generates tasks, sends briefs, tracks deadlines. No more email chains.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">5-8 hrs/wk</p>
                  <p className="text-gray-500 text-xs">Coordination overhead</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-3 hrs/wk</p>
                  <p className="text-gray-500 text-xs">Review dashboards</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-violet-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-2 sm:p-3 text-center">
              <p className="text-violet-300 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 30-40% less coordination overhead; fewer dropped balls
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Automation 5 - Content Drafts
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Press release first drafts from bullet points or briefs',
          'Media pitch personalization per journalist beat',
          'Social media captions for campaigns (Instagram, LinkedIn)',
          'Event announcements and invitation copy',
          'Multi-language output: Slovenian, Croatian, English',
          'Learns from team feedback — improves over time',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <PenTool size={16} className="text-violet-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs">Automation 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI-Powered Content First Drafts</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                AI content assistant trained on MPR's tone and past work. Generates first drafts of press releases, pitches, and social content that your team then refines. 62% of PR time is content creation — cut it in half.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-3 hrs</p>
                  <p className="text-gray-500 text-xs">Per press release</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30-45 min</p>
                  <p className="text-gray-500 text-xs">Refine AI draft</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-violet-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-2 sm:p-3 text-center">
              <p className="text-violet-300 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 50-60% reduction in first-draft time; consistent quality
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
          { icon: Bell, metric: 'Media Monitoring', before: '8-10 hrs/wk', after: '1-2 hrs/wk' },
          { icon: BarChart3, metric: 'Report Creation', before: '4-6 hrs each', after: '1-1.5 hrs each' },
          { icon: PenTool, metric: 'Content Drafts', before: '2-3 hrs each', after: '45-90 min each' },
          { icon: Target, metric: 'Missed Mentions', before: '20-30%', after: 'Near zero' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What This Delivers</h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {results.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <item.icon size={14} className="text-violet-400 sm:w-[18px] sm:h-[18px]" />
                    <p className="text-white font-semibold text-xs sm:text-base">{item.metric}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-3">
                    <div className="flex-1 p-1.5 sm:p-2 bg-white/5 rounded-lg text-center border border-white/5">
                      <p className="text-gray-500 text-xs">Before</p>
                      <p className="text-gray-400 font-medium text-xs sm:text-sm">{item.before}</p>
                    </div>
                    <ArrowRight size={12} className="text-violet-400 shrink-0 sm:w-4 sm:h-4" />
                    <div className="flex-1 p-1.5 sm:p-2 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                      <p className="text-emerald-400 text-xs">After</p>
                      <p className="text-white font-medium text-xs sm:text-sm">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg sm:rounded-xl border border-violet-500/20 p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-lg font-semibold">
                Annual Value: <span className="text-violet-400">€30,000–€50,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">in recovered productive hours + new client capacity</p>
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
            items: ['Media monitoring setup (SI + HR)', 'Journalist contact migration', 'Daily briefings live by week 2'],
          },
          {
            title: 'Automation',
            time: 'Weeks 5-8',
            status: 'Core System',
            items: ['Report generator deployed', 'Campaign task workflows built', 'Client dashboards configured'],
          },
          {
            title: 'Intelligence',
            time: 'Weeks 9-12',
            status: 'Full Operation',
            items: ['AI content assistant trained', 'Sentiment analysis refined', 'Full optimization pass'],
          },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">Implementation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Phased <GradientText>Rollout</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {phases.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                        <span className="text-violet-400 font-bold text-sm sm:text-base">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.time}</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-violet-500/10 rounded-full text-violet-400 text-xs hidden sm:inline border border-violet-500/20">
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

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Start small, prove value, expand. <span className="text-gray-400">No big-bang required.</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 13: Competitive Advantage
    {
      id: 'advantage',
      render: () => {
        const advantages = [
          { icon: Users, title: 'Serve More Clients', desc: 'With the same 5-person team — capacity unlock without hiring' },
          { icon: BarChart3, title: 'Better Reporting', desc: 'More consistent, data-rich reports than competitors can deliver' },
          { icon: Zap, title: 'Faster Response', desc: 'Real-time monitoring when others check manually once a day' },
          { icon: TrendingUp, title: 'Innovation Leader', desc: 'Position MPR as the most advanced agency in Slovenia' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">Competitive Edge</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Why This Matters <GradientText>Now</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
                Your competitors in Slovenia — MA Marketing, Mayer McCann, Connecta — are likely <span className="text-white font-medium">not</span> using sophisticated automation yet. The Slovenian PR market is small and traditional. By moving first:
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {advantages.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
                    <item.icon size={16} className="text-violet-400 mb-2 sm:w-5 sm:h-5" />
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                This competitive angle may resonate more than pure cost savings with the co-founders.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: About Us
    {
      id: 'aboutUs',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2">Your Implementation Partner</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            About <GradientText>Scooper AI</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Bot size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div>
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-bold hover:text-violet-400 transition-colors">Scooper AI</a>
                <p className="text-gray-500 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
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
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center border border-white/5">
                  <p className="text-violet-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
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

    // Slide 15: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to See What <GradientText>Professionals</GradientText> Can Do?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            You've been exploring automation yourself. Let us take what you've started and make it production-grade — handling the structured work so your team can focus on what PR actually requires: relationships and storytelling.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '12 wks', label: 'To deploy' },
              { value: '15-20 hrs', label: 'Weekly saved' },
              { value: '€30K+', label: 'Annual value' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-4">
                <p className="text-violet-400 text-lg sm:text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://cal.com/scooper-ai/discover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity text-sm sm:text-base shadow-lg shadow-violet-500/20"
          >
            <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
            Schedule Discovery Call
          </a>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <Bot size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-gray-500 text-sm">
              Prepared by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-violet-400 transition-colors">Scooper AI</a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
