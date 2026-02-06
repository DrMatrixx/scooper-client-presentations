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
  Mail,
  Target,
  Globe,
  Award,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Eskenzi PR',
  description: 'Operational Transformation Through Intelligent Automation — AI Proposal for Eskenzi PR',
  theme: 'light',
  slides: [
    // Slide 1: Title
    {
      id: 'title',
      render: () => (
        <div className="text-center w-full max-w-3xl px-4">
          <style>{`
            @keyframes glow {
              0%, 100% { filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.4)); }
              50% { filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.7)); }
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
            .glass-light { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          `}</style>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-50 border border-amber-200 mb-4 sm:mb-5 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700 text-xs sm:text-sm font-medium">AI Automation Proposal</span>
          </div>

          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <img
              src="/eskenzi-2-removebg-preview.png"
              alt="Eskenzi PR"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Eskenzi PR</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-600 text-base sm:text-lg mb-2">What if your team could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              £400K–£600K
            </span>
            <p className="text-gray-600 text-sm sm:text-base mt-1">per year in new capacity and protected revenue?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '2-3 hrs', label: 'Daily monitoring time', icon: Clock },
              { value: '15-25%', label: 'Opportunities missed', icon: Target },
              { value: '5-8 hrs', label: 'Monthly per client reports', icon: FileText },
            ].map((item, i) => (
              <div key={i} className="group relative p-3 sm:p-4 glass-light bg-rose-50 rounded-2xl border border-rose-200 shadow-lg shadow-rose-100/50 hover:shadow-rose-200/50 hover:border-rose-300 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <item.icon size={16} className="text-rose-500 mx-auto mb-2 sm:w-5 sm:h-5" />
                  <p className="text-rose-600 text-xl sm:text-2xl font-bold">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-lg mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-400">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-2xl animate-border-glow opacity-60 blur-[1px]" />
            <div className="relative glass-light bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Zap size={14} className="text-emerald-600" />
                </div>
                <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                5 custom automations to cut monitoring/reporting by <span className="text-gray-900 font-bold">60-70%</span>, enable <span className="text-gray-900 font-bold">24/7 reactive coverage</span>, and free capacity for <span className="text-gray-900 font-bold">2-3 more clients</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
            <span>Press</span>
            <div className="px-2.5 py-1.5 bg-gray-100 rounded-lg text-gray-600 font-mono text-xs border border-gray-200 shadow-inner">→</div>
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
          { task: 'Media monitoring & coverage tracking', time: '2-3 hrs/day', issue: 'Multiplied across global time zones' },
          { task: 'Client coverage reports & clip books', time: '5-8 hrs/client/mo', issue: 'Pulls from Cision, TrendKite, socials' },
          { task: 'Pitch coordination & follow-ups', time: '2-3 hrs/day', issue: 'Embargo management, journalist scheduling' },
          { task: 'Content creation workflow', time: 'Variable', issue: 'Briefing, drafting, reviews, approvals' },
          { task: 'Event management (4+ events/year)', time: 'Significant', issue: 'Nominations, judging, logistics' },
          { task: 'New client onboarding', time: '2-3 weeks', issue: 'Research, media lists, messaging setup' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Where Time Goes Today
            </h2>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-5 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                A 17-person team serving global clients across multiple time zones, running 4 major annual events, while maintaining 30 years of cybersecurity PR excellence. Every hour of operational efficiency matters.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-100">
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-800 text-sm sm:text-base font-medium">{item.task}</p>
                      <p className="text-gray-500 text-xs hidden sm:block">{item.issue}</p>
                    </div>
                    <div className="text-amber-600 font-semibold text-xs sm:text-sm whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                This adds up to <span className="text-gray-800 font-bold">40-60% of team hours</span> on tasks that could be automated.
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
          { icon: Clock, value: '60-96 hrs', metric: 'Monthly Reporting', desc: 'Equivalent to one FTE on reports alone' },
          { icon: Target, value: '15-25%', metric: 'Opportunities Missed', desc: 'Reactive delays cost placements' },
          { icon: Users, value: '30-40%', metric: 'Churn Risk Factor', desc: 'From slow response times' },
          { icon: TrendingUp, value: '2-3', metric: 'Clients Capacity Gap', desc: 'Team is maxed out' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What This Actually Costs
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {metrics.map((item, i) => (
                <div key={i} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <item.icon size={16} className="text-rose-500 sm:w-5 sm:h-5" />
                    <p className="text-rose-600 text-lg sm:text-2xl font-bold">{item.value}</p>
                  </div>
                  <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">{item.metric}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 p-3 sm:p-4 text-center">
              <p className="text-rose-600 text-xs sm:text-sm">
                Total value at stake: <span className="text-gray-900 font-bold">£400,000–£600,000/year</span> in revenue capacity, protected revenue, and operational savings
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
          'Manual scanning of 20+ news sources across time zones',
          'Hours compiling each client coverage report',
          'Pitch tracking via scattered spreadsheets and emails',
          'Manual coordination of interviews across time zones',
          'Event nominations manually sorted and tracked',
        ];
        const automatedItems = [
          'AI monitors and alerts instantly with relevance scoring',
          'Auto-generated reports with SOV, sentiment, highlights',
          'Centralized pitch tracker with automated follow-ups',
          'Scheduling assistant handles availability matching',
          'Automated intake, categorization, and judge assignment',
        ];
        const summaryMetrics = [
          { icon: Clock, metric: '60-70%', label: 'Less monitoring' },
          { icon: Globe, metric: '24/7', label: 'Coverage' },
          { icon: Users, metric: '2-3', label: 'More clients' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              What If This Was <GradientText>Automated</GradientText>?
            </h2>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-5 shadow-sm">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Today</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {todayItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-amber-600 text-xs uppercase tracking-wider mb-2 sm:mb-3">Automated</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {automatedItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
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
                <div key={i} className="bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 p-2 sm:p-4 text-center">
                  <item.icon size={16} className="text-emerald-600 mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5" />
                  <p className="text-gray-800 text-base sm:text-xl font-bold">{item.metric}</p>
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
          { num: '01', title: 'Media Monitoring', desc: 'AI-powered alerts', icon: Bell },
          { num: '02', title: 'Auto Reporting', desc: 'Coverage reports', icon: BarChart3 },
          { num: '03', title: 'Pitch Manager', desc: 'Outreach tracking', icon: Mail },
          { num: '04', title: 'Event Ops', desc: 'Awards automation', icon: Award },
          { num: '05', title: 'Onboarding', desc: 'Client setup', icon: FileText },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> Operations
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4 text-center hover:border-amber-300 hover:shadow-md transition-all ${
                    i === automations.length - 1 && automations.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg bg-amber-100 flex items-center justify-center mb-2 sm:mb-3">
                    <item.icon size={16} className="text-amber-600 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <p className="text-amber-600 text-xs mb-0.5 sm:mb-1">{item.num}</p>
                  <p className="text-gray-800 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Each automation is built specifically for cybersecurity PR workflows and Eskenzi's global "follow the sun" operations.
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
          'Real-time monitoring across 500+ cybersecurity and tech media sources globally',
          'Automatic client-mention detection and categorization by relevance',
          'Breaking news alerts for commentary opportunities (data breaches, regulations)',
          'Competitor mention tracking and share of voice calculation',
          'Automatic identification of journalist coverage patterns and interests',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Bell size={16} className="text-amber-600 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-600 text-xs">Automation 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Intelligent Media Monitoring</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 mb-3 sm:mb-4 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                AI-powered system that continuously monitors cybersecurity news across UK, US, Europe, APAC, and Middle East. Automatically categorizes mentions by client, sentiment, and importance — pushes prioritized alerts to the relevant account team.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 text-center">
                  <p className="text-rose-500 text-xs mb-1">Before</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">2-3 hrs/day</p>
                  <p className="text-gray-500 text-xs">Scanning sources</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 text-center">
                  <p className="text-emerald-500 text-xs mb-1">After</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">~20 min/day</p>
                  <p className="text-gray-500 text-xs">Reviewing priority alerts</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-500 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200 p-2 sm:p-3 text-center">
              <p className="text-amber-700 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 15+ hours/week recovered; 25-30% more reactive opportunities captured
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Automation 2 - Client Reporting
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Auto-aggregation of all coverage across print, digital, broadcast, and social',
          'Share of voice calculations against named competitors',
          'Sentiment analysis and coverage quality scoring',
          'Automated formatting into branded report templates',
          'Scheduled delivery with account manager review step',
          'Historical trend tracking and benchmark comparisons',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <BarChart3 size={16} className="text-amber-600 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-600 text-xs">Automation 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Automated Client Reporting</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 mb-3 sm:mb-4 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Automatically generates weekly and monthly client reports by pulling coverage data from Cision, media platforms, and social — calculating share of voice, analyzing sentiment, and formatting into branded, client-ready documents.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 text-center">
                  <p className="text-rose-500 text-xs mb-1">Before</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">5-8 hrs</p>
                  <p className="text-gray-500 text-xs">Per client per month</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 text-center">
                  <p className="text-emerald-500 text-xs mb-1">After</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">~1 hr</p>
                  <p className="text-gray-500 text-xs">Review & add commentary</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-500 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200 p-2 sm:p-3 text-center">
              <p className="text-amber-700 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 50-70 hours/month recovered; more consistent and data-rich reporting
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Automation 3 - Pitch Management
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Journalist database with engagement history and topic preferences',
          'Automated, personalized follow-up sequences (configurable timing)',
          'Embargo tracking with automatic release triggers',
          'Pitch performance analytics (open rates, response rates, placements)',
          'AI-suggested journalist matches based on story topic and past coverage',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Mail size={16} className="text-amber-600 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-600 text-xs">Automation 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Pitch & Outreach Management</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 mb-3 sm:mb-4 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Centralized system for managing media outreach — tracking which journalists have been pitched, automating personalized follow-ups, managing embargoes, and flagging best-fit journalists based on historical engagement.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 text-center">
                  <p className="text-rose-500 text-xs mb-1">Before</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">Scattered</p>
                  <p className="text-gray-500 text-xs">Emails, spreadsheets, memory</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 text-center">
                  <p className="text-emerald-500 text-xs mb-1">After</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">Centralized</p>
                  <p className="text-gray-500 text-xs">Automated sequences & tracking</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-500 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200 p-2 sm:p-3 text-center">
              <p className="text-amber-700 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 20-30% better response rates; 10+ hours/week saved on follow-up admin
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Automation 4 - Event Operations
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Online nomination forms with automatic categorization and eligibility screening',
          'Judge assignment and scoring portal with deadline reminders',
          'Automated nominee/winner notification sequences',
          'Attendee registration tracking and confirmation workflows',
          'Speaker/panelist scheduling with availability matching',
          'Sponsor deliverable tracking and communication sequences',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Award size={16} className="text-amber-600 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-600 text-xs">Automation 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Event & Awards Management</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 mb-3 sm:mb-4 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Automated workflow system for managing Eskenzi's major annual events — Most Inspiring Women in Cyber, Bloggers Awards, Unsung Heroes, Analyst & CISO Forum. Handles nominations, judging, logistics, and communications.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 text-center">
                  <p className="text-rose-500 text-xs mb-1">Before</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">Manual</p>
                  <p className="text-gray-500 text-xs">Spreadsheets & email chains</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 text-center">
                  <p className="text-emerald-500 text-xs mb-1">After</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">Automated</p>
                  <p className="text-gray-500 text-xs">End-to-end pipeline</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-500 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200 p-2 sm:p-3 text-center">
              <p className="text-amber-700 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 40-50% less event admin; capacity to potentially scale to more events
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Automation 5 - Client Onboarding
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Automated competitor landscape analysis and share of voice benchmarking',
          'Auto-generated media contact lists based on vertical and geography',
          'Client briefing templates pre-populated with company and market data',
          'Internal knowledge base with messaging, spokespeople, and media history',
          'Trigger-based onboarding task sequences ensuring nothing is missed',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <FileText size={16} className="text-amber-600 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-600 text-xs">Automation 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Client Onboarding System</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 mb-3 sm:mb-4 shadow-sm">
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Streamlined onboarding workflow for new clients — automatically setting up monitoring, generating initial competitive landscape reports, building media lists, and creating knowledge bases the team can reference instantly.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-50 rounded-lg sm:rounded-xl border border-rose-200 text-center">
                  <p className="text-rose-500 text-xs mb-1">Before</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">2-3 weeks</p>
                  <p className="text-gray-500 text-xs">Manual setup & research</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 text-center">
                  <p className="text-emerald-500 text-xs mb-1">After</p>
                  <p className="text-gray-800 text-xl sm:text-2xl font-bold">3-5 days</p>
                  <p className="text-gray-500 text-xs">Automated setup & research</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-amber-500 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg sm:rounded-xl border border-amber-200 p-2 sm:p-3 text-center">
              <p className="text-amber-700 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 50-60% faster onboarding; more consistent first impressions
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
          { icon: Bell, metric: 'Media Monitoring', before: '15-20 hrs/wk (team)', after: '3-5 hrs/wk' },
          { icon: BarChart3, metric: 'Report Generation', before: '5-8 hrs/client/mo', after: '1-2 hrs/client/mo' },
          { icon: Target, metric: 'Opportunity Capture', before: '70-75%', after: '90-95%' },
          { icon: FileText, metric: 'Onboarding Time', before: '2-3 weeks', after: '3-5 days' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">Expected Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What This Delivers</h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
              {results.map((item, i) => (
                <div key={i} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <item.icon size={14} className="text-amber-500 sm:w-[18px] sm:h-[18px]" />
                    <p className="text-gray-800 font-semibold text-xs sm:text-base">{item.metric}</p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-3">
                    <div className="flex-1 p-1.5 sm:p-2 bg-gray-50 rounded-lg text-center border border-gray-100">
                      <p className="text-gray-500 text-xs">Before</p>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm">{item.before}</p>
                    </div>
                    <ArrowRight size={12} className="text-amber-500 shrink-0 sm:w-4 sm:h-4" />
                    <div className="flex-1 p-1.5 sm:p-2 bg-emerald-50 rounded-lg text-center border border-emerald-200">
                      <p className="text-emerald-600 text-xs">After</p>
                      <p className="text-gray-800 font-medium text-xs sm:text-sm">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg sm:rounded-xl border border-amber-200 p-3 sm:p-4 text-center">
              <p className="text-gray-800 text-sm sm:text-lg font-semibold">
                Annual Value: <span className="text-amber-600">£400,000–£600,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">New revenue capacity + protected revenue + operational savings</p>
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
            items: ['Media monitoring & alert system', 'Cision/HubSpot integration', 'Reporting templates & pipelines'],
          },
          {
            title: 'Core Automations',
            time: 'Weeks 5-8',
            status: 'Core System',
            items: ['Pitch & outreach management', 'Event management workflows', 'Client onboarding automation'],
          },
          {
            title: 'Intelligence',
            time: 'Weeks 9-12',
            status: 'Full Operation',
            items: ['AI journalist matching & pitch optimization', 'Agency-wide dashboards', 'Training & documentation'],
          },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">Implementation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Phased <GradientText>Rollout</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {phases.map((item, i) => (
                <div key={i} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm sm:text-base">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.time}</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-amber-50 rounded-full text-amber-600 text-xs hidden sm:inline border border-amber-200">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-gray-50 rounded-lg text-gray-600 text-xs sm:text-sm border border-gray-100">
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
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-700 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-600 text-xs tracking-widest uppercase mb-2">Your Implementation Partner</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <GradientText>Scooper AI</GradientText>
          </h2>

          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-5 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Bot size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div>
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-lg sm:text-xl font-bold hover:text-amber-600 transition-colors">Scooper AI</a>
                <p className="text-gray-500 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
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
                <div key={i} className="p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl text-center border border-gray-100">
                  <p className="text-amber-600 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Give Your Team <GradientText>Superpowers</GradientText>?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            You built a world-class agency on relationships and instinct.
            Automation handles everything else — so your team can focus on what made Eskenzi the industry's golden standard.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '12 wks', label: 'To deploy' },
              { value: '60-70%', label: 'Less admin time' },
              { value: '£400K+', label: 'Annual value' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-4 shadow-sm">
                <p className="text-amber-600 text-lg sm:text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://cal.com/scooper-ai/discover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity text-sm sm:text-base shadow-lg shadow-amber-200"
          >
            <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
            Schedule Discovery Call
          </a>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Bot size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-gray-500 text-sm">
              Prepared by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Scooper AI</a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
