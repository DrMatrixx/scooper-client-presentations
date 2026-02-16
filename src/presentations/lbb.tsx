import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Clock,
  TrendingUp,
  CheckCircle,
  Bot,
  Rocket,
  BarChart3,
  Zap,
  Search,
  MessageSquare,
  Calendar,
  Database,
  Shield,
  AlertTriangle,
  UserCheck,
  Brain,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'The Little Black Book',
  description: 'Scaling Strategic Hospitality Intelligence Through Intelligent Automation — AI Proposal for The Little Black Book',
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
              src="/clandestine-events-logo-Black.webp"
              alt="The Little Black Book by Clandestine Events"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl mb-3"
              style={{ filter: 'invert(1) brightness(2)' }}
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Kelley Troia, Founder + Curator</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could unlock</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $75K–$150K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in recovered capacity and new revenue?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '30-45 min', label: 'Per recommendation', icon: Clock },
              { value: '40-55%', label: 'Hours on admin', icon: Brain },
              { value: '12-26 hrs', label: 'Monthly context rebuild', icon: Search },
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
                5 custom automations to cut recommendation prep by <span className="text-white font-bold">50–70%</span>, respond to prospects in <span className="text-white font-bold">under 5 minutes</span>, and reclaim <span className="text-white font-bold">15–25 hrs/week</span>
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
          { task: 'Venue recommendation research', time: '30–45 min/request', issue: 'Searching 300+ venues across 17 markets from memory' },
          { task: 'Member context reconstruction', time: '10–15 min/interaction', issue: 'Scattered across texts, emails, Calendly, Tally' },
          { task: 'Intake & qualification processing', time: 'Hours to respond', issue: 'Tally & Calendly disconnected, no unified CRM' },
          { task: 'Venue intelligence management', time: 'Tribal knowledge', issue: '14 years of data in one person\'s head' },
          { task: 'Member lifecycle tracking', time: 'Manual', issue: 'Renewals, engagement, churn risk tracked reactively' },
          { task: 'Event logistics & follow-ups', time: 'Variable', issue: '200+ events coordinated manually' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Where Time Goes Today
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
                14 years of execution, 200+ events, 100% client retention — built on Kelley's taste, judgment, and relationships. But every recommendation, every backup plan, every pivot runs through one brain.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {tasks.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm sm:text-base font-medium">{item.task}</p>
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
                Estimated <span className="text-white font-bold">40–55% of available working hours</span> consumed by administrative coordination.
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
          { icon: TrendingUp, value: '$12K–$54K', metric: 'Lead Conversion Leakage', desc: 'Lost annually from slow prospect response' },
          { icon: AlertTriangle, value: '1 Person', metric: 'Single Point of Failure', desc: '14 years of intel in one brain' },
          { icon: Clock, value: '12–26 hrs/mo', metric: 'Context Reconstruction', desc: 'Rebuilding what you already know' },
          { icon: Shield, value: '35 Cap', metric: 'Capacity Ceiling', desc: 'Strategic choice or constraint?' },
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
                    <p className="text-rose-400 text-lg sm:text-2xl font-bold">{item.value}</p>
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.metric}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                Total value at stake: <span className="text-white font-bold">$75,000–$150,000/year</span> in combined revenue, time savings, and reduced churn risk
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 4: Competitive Gap
    {
      id: 'gap',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Landscape</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            The <GradientText>Competitive Gap</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Hotel concierge tech has moved aggressively toward AI — platforms like Revinate Ivy and HiJiffy deliver automated, context-aware recommendations via SMS with instant response times. Corporate travel platforms increasingly bundle venue intelligence with AI-generated itineraries.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
              <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-emerald-400 text-xs uppercase tracking-wider mb-2">LBB's Moat</p>
                <div className="space-y-2">
                  {['14 years of relationship capital', 'Taste & judgment no AI can replicate', '100% client retention track record', 'Deep venue relationship knowledge'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-rose-500/10 rounded-xl border border-rose-500/20">
                <p className="text-rose-400 text-xs uppercase tracking-wider mb-2">Competitor Edge</p>
                <div className="space-y-2">
                  {['Instant automated responses', 'Searchable venue databases', 'Systematic follow-ups', 'AI-powered personalization'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <AlertTriangle size={12} className="text-rose-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-3 sm:p-4 text-center">
            <p className="text-amber-400 text-xs sm:text-sm">
              <span className="font-bold">The opportunity:</span> LBB's judgment + automated infrastructure = <span className="text-white font-bold">genuinely untouchable</span>
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Vision — Before/After
    {
      id: 'opportunity',
      render: () => {
        const comparisons = [
          { process: 'New member intake', today: 'Tally form → manual review → 48hr response', automated: 'Instant welcome + auto CRM profile + Kelley gets context brief' },
          { process: 'Venue recommendation', today: '30–45 min mental inventory search', automated: 'AI pre-filters shortlist → Kelley reviews in 5–10 min' },
          { process: 'Member preferences', today: 'Scattered across texts, emails, memory', automated: 'Every interaction auto-logged and searchable' },
          { process: 'Black Card screening', today: 'Calendly → manual qualification', automated: 'Auto qualification + fit scoring + fast-tracked outreach' },
          { process: 'Event intelligence', today: '"Didn\'t we do this last year?" → dig through messages', automated: 'One search: full history, feedback, seasonal notes' },
        ];

        const summaryMetrics = [
          { icon: Clock, metric: '< 5 min', label: 'Prospect response' },
          { icon: Search, metric: '50–70%', label: 'Less prep time' },
          { icon: Database, metric: '100%', label: 'Context captured' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Vision</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What If This Was <GradientText>Automated</GradientText>?
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-4 sm:mb-5">
              <div className="space-y-3">
                {comparisons.map((item, i) => (
                  <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-amber-400 text-xs font-semibold mb-1.5">{item.process}</p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                        <span className="text-gray-500 text-xs">{item.today}</span>
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
      id: 'architecture',
      render: () => {
        const automations = [
          { num: '01', title: 'Intake Engine', desc: 'Lead qualification', icon: UserCheck },
          { num: '02', title: 'Lifecycle Intel', desc: 'Renewal tracking', icon: Calendar },
          { num: '03', title: 'Venue KB', desc: 'Knowledge base', icon: Database },
          { num: '04', title: 'Concierge Ops', desc: 'Request orchestration', icon: MessageSquare },
          { num: '05', title: 'Dashboard', desc: 'Insights & metrics', icon: BarChart3 },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> LBB
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {automations.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 hover:bg-white/10 transition-all ${
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
                Three layers — Lead & Revenue Ops, Workflow Automation, Intelligence & Decision Support — designed to protect Kelley's irreplaceable judgment.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 1 — Intelligent Intake & Qualification
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Unified prospect database across Tally and Calendly',
          'Tier-specific automated response sequences reflecting LBB\'s voice',
          'Fit-scoring for Black Card applicants (role, company, signals)',
          'Automated waitlist management for 35-member cap',
          'High-fit applicants trigger instant Kelley notification with context brief',
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
                <p className="text-amber-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Intelligent Intake & Qualification</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Connects disconnected Tally and Calendly intake flows into a unified CRM. Every prospect receives a personalized, on-brand response within 60 seconds — Black Card applicants are automatically qualified and prioritized.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours</p>
                  <p className="text-gray-500 text-xs">To first response</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">{"< 60 sec"}</p>
                  <p className="text-gray-500 text-xs">Personalized acknowledgment</p>
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

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 30–50% improvement in prospect-to-member conversion | <span className="text-white font-bold">Low complexity, High impact</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 — Member Lifecycle & Renewal Intelligence
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Automated renewal date tracking with 60-day advance alerts',
          'Member engagement scoring based on request frequency & responsiveness',
          'Low-engagement members flagged for proactive personal outreach',
          'Post-event follow-ups automatically scheduled to capture feedback',
          'Revenue forecasting based on member status and tier',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Calendar size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Member Lifecycle & Renewal Intelligence</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Monitors member activity patterns, upcoming renewals, and engagement frequency. Kelley sees at a glance who's thriving, who needs a touchpoint, and whose renewal is approaching — with full service history pre-compiled.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Reactive</p>
                  <p className="text-gray-500 text-xs">Manual tracking, surprises</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Proactive</p>
                  <p className="text-gray-500 text-xs">60-day alerts, engagement scores</p>
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

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 10–20% reduction in churn risk through proactive engagement | <span className="text-white font-bold">Low complexity, High impact</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 — Venue Intelligence Knowledge Base
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Multi-market venue database with 15+ attributes per venue across 17 markets',
          'Searchable by occasion, group size, dietary needs, noise level, privacy',
          'Relationship contact management — who to call, what to say, rooms to request',
          'Outcome tracking — what worked, what didn\'t, member feedback per venue',
          'Seasonal intelligence — menu changes, staffing shifts, peak periods',
          'Every recommendation enriches the database automatically',
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
                <p className="text-amber-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Venue Intelligence Knowledge Base</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Transforms 14 years of tribal knowledge into a searchable, living database of 300+ venues across 17 markets. Kelley's judgment is amplified — not replaced — with structured data that enriches with every interaction.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Memory</p>
                  <p className="text-gray-500 text-xs">300+ venues in one head</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Searchable</p>
                  <p className="text-gray-500 text-xs">15+ attributes per venue</p>
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

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 50–70% reduction in recommendation prep time | <span className="text-white font-bold">Medium complexity, High impact</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 — Concierge Request Orchestration
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Multi-channel request capture — SMS, email, manual entry',
          'Automatic member context surfacing: past venues, preferences, dietary needs',
          'Pre-filtered venue recommendations based on request parameters',
          'Polished itinerary formatting — sequencing, timing, movement, backup plans',
          'SLA tracking: 48-hour Advisory, real-time Black Card',
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
                <p className="text-amber-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Concierge Request Orchestration</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                The Sunday night text scenario, transformed. When a request arrives, the system instantly surfaces complete member context and pre-filters venue recommendations — so Kelley spends 10 minutes applying judgment instead of 45 minutes starting from scratch.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30–45 min</p>
                  <p className="text-gray-500 text-xs">Per request from scratch</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~10 min</p>
                  <p className="text-gray-500 text-xs">Review & refine pre-filtered list</p>
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

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> 60–75% reduction in per-request preparation time | <span className="text-white font-bold">Medium complexity, High impact</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 — Member Experience Dashboard
    {
      id: 'module5',
      render: () => {
        const capabilities = [
          'Real-time member count and revenue metrics by tier',
          'Market demand heatmap — which cities get the most requests',
          'Venue utilization and performance tracking with outcome data',
          'Capacity management against Black Card 35-member cap',
          'Weekly automated summaries: busiest markets, trends, upcoming renewals',
          'Quarterly insights for market expansion and venue relationship planning',
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
                <h2 className="text-xl sm:text-2xl font-bold text-white">Member Experience Dashboard</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                One dashboard replaces "How many requests did we handle? Which markets are active? Are we at capacity?" with real-time answers. Data-driven decisions about pricing, expansion, and capacity — no more guessing.
              </p>

              <div className="bg-white/5 rounded-xl border border-white/10 p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Sample Dashboard View</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Black Card', value: '35/35' },
                    { label: 'Advisory', value: '12' },
                    { label: 'Requests/mo', value: '47' },
                    { label: 'Avg Response', value: '3.2 hrs' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-2 bg-white/5 rounded-lg">
                      <p className="text-amber-400 text-sm sm:text-lg font-bold">{item.value}</p>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{item.label}</p>
                    </div>
                  ))}
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

            <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
              <p className="text-amber-400 text-xs sm:text-sm">
                <span className="font-bold">Impact:</span> Strategic visibility for pricing, expansion & capacity decisions | <span className="text-white font-bold">Medium complexity, Medium impact</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: Measurable Impact
    {
      id: 'impact',
      render: () => {
        const metrics = [
          { metric: 'Prospect response time', improvement: 'Hours → < 5 min', basis: 'Automated intake acknowledgment. 5-min response = 100x conversion rate (HBR).' },
          { metric: 'Venue recommendation prep', improvement: '50–70% reduction', basis: 'From 30–45 min to 10–15 min via Knowledge Base pre-filtering.' },
          { metric: 'Admin hours reclaimed', improvement: '15–25 hrs/week', basis: 'Eliminating context reconstruction, intake processing, renewal tracking.' },
          { metric: 'Member data accuracy', improvement: 'Near-complete', basis: 'Unified CRM replacing scattered text/email/memory.' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Numbers</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Measurable <GradientText>Transformation</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {metrics.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-semibold text-sm sm:text-base">{item.metric}</p>
                    <p className="text-emerald-400 font-bold text-sm sm:text-base">{item.improvement}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{item.basis}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4 sm:p-5 text-center">
              <p className="text-gray-400 text-sm mb-2">Estimated Annual Impact</p>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                $75,000–$150,000
              </p>
              <p className="text-gray-500 text-xs">
                Combined value from recovered revenue, operational time savings, and reduced churn risk
              </p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Equivalent to adding <span className="text-white font-bold">0.5–1.0 FTE capacity</span> — without a single new hire
                </p>
              </div>
            </div>
          </div>
        );
      },
    },

    // Slide 13: 90-Day Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Foundation & Quick Wins',
            time: 'Weeks 1–4',
            status: 'First results in 2 weeks',
            items: ['Unified CRM setup (Tally + Calendly)', 'Automated intake responses', 'Member profile migration'],
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5–8',
            status: 'First requests through system',
            items: ['Venue Intelligence Knowledge Base', 'Concierge Request Orchestration', 'Member Lifecycle tracking'],
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9–12',
            status: 'Full system operational',
            items: ['Member Experience Dashboard', 'Full 300+ venue migration', 'Workflow optimization from real data'],
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
                    <span className="px-2 sm:px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs hidden sm:inline border border-amber-500/20">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.items.map((itm, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm border border-white/10">
                        {itm}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Built on your existing stack — Tally, Calendly, and your communication channels stay in place. <span className="text-white">No rip-and-replace required.</span>
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 14: About Scooper AI
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
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center border border-white/10">
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

    // Slide 15: Closing CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Make LBB <GradientText>Untouchable</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            You built something rare — 14 years of taste, judgment, and 100% client retention.
            Automation handles the operational wrapper so you can focus on what no system can replicate.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To deploy' },
              { value: '50–70%', label: 'Less prep time' },
              { value: '$75K+', label: 'Annual value' },
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
              Prepared by <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors">Scooper AI</a>
            </span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
