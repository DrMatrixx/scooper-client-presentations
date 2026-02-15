import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Users,
  Clock,
  MessageSquare,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  Rocket,
  AlertCircle,
  Sparkles,
  Zap,
  Shield,
  Star,
  RotateCcw,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Activation Products',
  description: 'AI Automation Proposal - Scaling Customer Health Journeys Through Intelligent Automation',
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
              src="/activation-logo.webp"
              alt="Activation Products"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for your team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $250K–$600K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in revenue, savings, and customer lifetime value?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '150K+', label: 'Customers underserved', icon: Users },
              { value: '25-35%', label: 'Team on repetitive tasks', icon: Clock },
              { value: '70%+', label: 'Carts abandoned', icon: ShoppingCart },
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
                5 automation modules to achieve <span className="text-white font-bold">30–40% fewer support tickets</span>, <span className="text-white font-bold">15–25% more repeat purchases</span>, and <span className="text-white font-bold">$250K–$600K annual impact</span>
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
          { task: 'Subscription support requests', time: '20-30 min/ticket', issue: 'Manual pause, skip, swap, cancel processing via Gorgias' },
          { task: 'Post-purchase product education', time: '3-5 hrs/wk', issue: 'Answering "how do I use this?" and "when will I see results?"' },
          { task: 'Abandoned cart follow-up', time: 'Revenue loss', issue: 'Generic or no recovery — no health-goal personalization' },
          { task: 'Affiliate inquiry management', time: '15-20 min each', issue: 'Onboarding, commissions, promo assets via manual email' },
          { task: 'Review & social proof management', time: '2-3 hrs/wk', issue: '7,467+ reviews across platforms — no automated routing' },
          { task: 'Order & shipping inquiries (WISMO)', time: '30-40% tickets', issue: '"Where is my order?" consuming Gorgias capacity' },
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
                A family-founded DTC supplement brand with ~50 employees, 150,000+ customers, and a subscription-first model — creating operational demands that consume your team's bandwidth daily.
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
                This adds up to <span className="text-white font-bold">25-35% of team capacity</span> consumed by repetitive tasks that automation could handle.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Cost
    {
      id: 'cost',
      render: () => {
        const metrics = [
          { icon: ShoppingCart, value: '$150K-$400K', metric: 'Cart Abandonment', desc: '70% carts lost, no health-goal recovery' },
          { icon: RotateCcw, value: '20-30%', metric: 'Subscription Churn', desc: 'No pause/swap at cancellation intent' },
          { icon: MessageSquare, value: '$19.5K-$45.5K', metric: 'Support Drain', desc: '15-25 hrs/wk on automatable inquiries' },
          { icon: Shield, value: 'Trust Risk', metric: 'Data Fragmentation', desc: 'Gorgias + Shopify + email disconnected' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What This Actually Costs
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
                Total estimated annual impact: <span className="text-white font-bold">$250,000 – $600,000</span>
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
          { name: 'Dr. Mercola', features: 'Sophisticated post-purchase education sequences, AI-driven product recommendation quizzes, subscription management portals' },
          { name: 'Ancient Nutrition', features: 'Automated onboarding flows, personalized product pairing, one-click pause/swap subscription management' },
          { name: 'Garden of Life', features: 'Multi-step education sequences, intelligent abandoned cart recovery, proactive replenishment reminders' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Competitive Gap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Your Competitors Are Already <GradientText>Automating</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="space-y-3 sm:space-y-4">
                {competitors.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{item.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                Activation Products wins on <span className="text-amber-400 font-bold">founder trust and product quality</span>.
                But when competitors automate education and retention, the <span className="text-white font-bold">experience gap compounds every quarter</span>.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Opportunity - Today vs Automated
    {
      id: 'opportunity',
      render: () => {
        const comparisons = [
          { process: 'New customer buys Ease Magnesium', today: 'Order confirmation only. No education.', automated: '7-day onboarding: Day 1 guide, Day 3 expectations, Day 7 cross-sell' },
          { process: 'Cart abandoned with Black Cumin Oil', today: 'Generic reminder email (if any)', automated: '1hr immunity email → 24hr bundle suggestion → 72hr FAQ' },
          { process: 'Subscriber wants to skip a month', today: 'Emails support → 15-30 min manual process', automated: 'Self-service portal: skip in 2 clicks, zero tickets' },
          { process: '"Where is my order?" inquiry', today: 'Gorgias ticket → manual lookup (10-15 min)', automated: 'Proactive updates + auto-response with live tracking' },
          { process: 'Customer hasn\'t reordered in 60 days', today: 'No re-engagement. Silent churn.', automated: 'Day 45 check-in → Day 60 replenishment → Day 75 win-back' },
        ];
        const summaryMetrics = [
          { icon: TrendingUp, metric: '$250K-$600K', label: 'Annual Impact' },
          { icon: Clock, metric: '<2 min', label: 'Response Time' },
          { icon: Sparkles, metric: '15-25 hrs', label: 'Reclaimed/Week' },
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
          { num: '01', title: 'Cart Recovery', desc: 'Health-goal-aware flows', icon: ShoppingCart, layer: 'Revenue' },
          { num: '02', title: 'Onboarding', desc: 'Post-purchase education', icon: BookOpen, layer: 'Operations' },
          { num: '03', title: 'Subscription', desc: 'Lifecycle autopilot', icon: RotateCcw, layer: 'Operations' },
          { num: '04', title: 'WISMO', desc: 'Proactive support', icon: HelpCircle, layer: 'Operations' },
          { num: '05', title: 'Intelligence', desc: 'Replenishment & VIP', icon: Users, layer: 'Intelligence' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations That <GradientText>Transform</GradientText> Operations
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

    // Slide 7: Module 1 - Cart & Browse Recovery
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Categorize by health interest from browse/cart behavior (immunity, gut, joint, etc.)',
          '1hr → 24hr → 72hr progressive email sequences with relevant social proof',
          'Dynamic product recommendations & customer testimonials per segment',
          'SMS backup for high-value carts (bundles >$100)',
          'Revenue attribution tracking per recovery email',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <ShoppingCart size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 01 — Revenue Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cart & Browse Recovery Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Health-goal-aware recovery flows that personalize messaging based on customer's interest — immunity, gut health, joint health, detox — instead of generic "you left something behind" emails.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">~70%</p>
                  <p className="text-gray-500 text-xs">Carts lost, $0 recovered</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15-25%</p>
                  <p className="text-gray-500 text-xs">Recovery rate increase</p>
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
                <span className="font-bold">Impact:</span> $150,000–$400,000 in annual recovered revenue
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 2 - Wellness Onboarding
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Day 1: "How to Get the Most From [Product]" — specific usage instructions',
          'Day 3: "What to Expect This Week" — managing expectations + founder story',
          'Day 7: Complementary product suggestion based on purchase mapping',
          'Dynamic content: first-time buyer vs. returning customer trying new product',
          'Built-in Day 7 feedback capture ("How\'s your experience so far?")',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <BookOpen size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 02 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Wellness Onboarding System</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Product-specific education sequences for the first 30 days — dosing protocols, application methods, expected timelines, and cross-sell suggestions. Each product gets its own tailored onboarding journey.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  Customer buys Ease Magnesium ($39). Today: receives order confirmation, silence until next promo email. Automated: Day 1 application guide (20-40 sprays, best absorption points), Day 3 "what to expect," Day 7 Perfect K2D3 suggestion for calcium-magnesium balance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">No follow-up</p>
                  <p className="text-gray-500 text-xs">Usage Qs flood Gorgias</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">+15-25%</p>
                  <p className="text-gray-500 text-xs">Repeat purchase rate</p>
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
                <span className="font-bold">Impact:</span> 20-30% reduction in product usage support tickets
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Module 3 - Subscription Lifecycle
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          '7-day and 3-day proactive renewal reminder emails',
          'Self-service portal: pause, skip, swap product, adjust frequency',
          'Cancellation intervention flow with alternative offers (pause, swap)',
          'Churn-risk scoring based on engagement and ordering patterns',
          'Win-back sequences at Day 30, 60, and 90 after cancellation',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <RotateCcw size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 03 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Subscription Lifecycle Autopilot</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Turns the 60-day minimum subscription with 10-business-day cancellation notice from a friction point into a retention advantage — with proactive reminders, self-service management, and intelligent save flows.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-rose-500/50">
                <p className="text-gray-500 text-xs mb-1">Today's reality:</p>
                <p className="text-gray-400 text-xs sm:text-sm italic">
                  Customer emails support to skip a month → waits for response → team member verifies subscription, checks timing → processes change → confirms via email. Total: 15-30 minutes per request. Customer who wants to cancel has to plan 10 days ahead — friction that creates negative sentiment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15-30 min</p>
                  <p className="text-gray-500 text-xs">Per subscription change</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2 clicks</p>
                  <p className="text-gray-500 text-xs">Zero-ticket self-service</p>
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
                <span className="font-bold">Impact:</span> 20-30% reduction in subscription support tickets, 10-15% retention improvement
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Module 4 - WISMO Deflection
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Proactive shipping milestone notifications (shipped, in transit, delivered)',
          'Gorgias auto-response for WISMO queries with real-time tracking data',
          'Intelligent ticket categorization and routing for non-routine inquiries',
          'Post-delivery satisfaction check-in (feeds into review collection)',
          'Self-service return/exchange initiation portal',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <HelpCircle size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Module 04 — Operations Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Proactive Support & WISMO Deflection</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Eliminates 30-40% of Gorgias ticket volume by sending proactive shipping notifications and auto-resolving order status inquiries — so your support team focuses on complex, high-value interactions.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">30-40%</p>
                  <p className="text-gray-500 text-xs">Tickets are WISMO</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">-50-60%</p>
                  <p className="text-gray-500 text-xs">WISMO tickets eliminated</p>
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
                <span className="font-bold">Impact:</span> 30-40% reduction in total Gorgias ticket volume
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Module 5 - Customer Intelligence
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          'Product-specific replenishment timing (e.g., Ease Magnesium 250ml ≈ 6-8 weeks)',
          'Automated replenishment reminders with one-click reorder links',
          'Customer health scoring based on engagement, purchase frequency, and support',
          'VIP segmentation with personalized offers and early access',
          'Churn prediction based on behavioral signals (declining engagement, missed windows)',
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
                <p className="text-amber-400 text-xs">Module 05 — Intelligence Layer</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Intelligence & Replenishment</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                AI-driven customer segmentation that tracks purchase patterns and product usage timelines to trigger perfectly-timed replenishment reminders, cross-sell suggestions, and VIP recognition.
              </p>

              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border-l-2 border-amber-500/50">
                <p className="text-gray-500 text-xs mb-1">Real scenario:</p>
                <p className="text-gray-300 text-xs sm:text-sm italic">
                  Customer finishes their bottle of Solaris. Today: no reminder, they drift away. Automated: Day 40 — "Running low on Solaris? Reorder now." Day 55 — "It's been a while — how's your experience?" Day 70 — personalized win-back with health stack suggestion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Reactive</p>
                  <p className="text-gray-500 text-xs">Customers churn silently</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Predictive</p>
                  <p className="text-gray-500 text-xs">Perfectly-timed reminders</p>
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
                <span className="font-bold">Impact:</span> 10-20% increase in repeat purchase rate, 15-25% LTV improvement
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
          { icon: Clock, metric: 'Response Time', before: 'Hours/Days', after: '<2 minutes' },
          { icon: ShoppingCart, metric: 'Cart Recovery', before: '~0%', after: '15-25%' },
          { icon: RotateCcw, metric: 'Sub Tickets', before: 'All manual', after: '-20-30%' },
          { icon: Star, metric: 'Repeat Purchases', before: 'Baseline', after: '+15-25%' },
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
                Estimated Annual Revenue Impact: <span className="text-amber-400">$250,000 – $600,000</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Cart recovery + subscription retention + labor savings + LTV uplift</p>
            </div>

            <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-3 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Equivalent to adding <span className="text-white font-bold">1-2 full-time team members</span> — without a single new hire
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
          { icon: TrendingUp, title: 'Brand Momentum', desc: 'Recently refreshed website and branding, active campaigns — signals investment in growth that automation amplifies' },
          { icon: Users, title: '150,000+ Customer Base', desc: 'At this scale, manual processes compound. Every month widens the gap between current and potential performance' },
          { icon: Shield, title: 'Tool-Rich, Disconnected', desc: 'Shopify, Gorgias, Shogun, Facebook Pixel all in place — they just need the connective tissue to work together' },
          { icon: AlertCircle, title: 'Competitors Are Automating', desc: 'Dr. Mercola, Ancient Nutrition, Garden of Life already run automated onboarding, quizzes, and subscription portals' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Why Now</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The <GradientText>Inflection Point</GradientText>
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
                A customer who receives a personalized onboarding sequence in Month 1 has <span className="text-white font-bold">higher lifetime value in Month 12, 24, and beyond</span>. The compounding effect is real.
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
            status: 'First Revenue',
            items: ['Discovery & tool stack audit', 'WISMO auto-resolve', 'Cart recovery v1 (3-email)'],
            result: '20-30% WISMO reduction in 2 weeks. First recovered revenue in 7 days.',
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5-8',
            status: 'Full System',
            items: ['Wellness onboarding (top 5 products)', 'Subscription autopilot', 'Browse abandonment'],
            result: 'Repeat purchases improving. Subscription tickets declining.',
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9-12',
            status: 'Optimized',
            items: ['Replenishment engine', 'VIP segmentation', 'A/B testing all flows'],
            result: 'All 5 modules live. Measurable ROI across the board.',
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
                Built on your existing stack — <span className="text-white font-bold">Shopify, Gorgias, and email/SMS platform</span>. No rip-and-replace required.
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
              We build custom intelligent systems for DTC brands. Every automation is designed around your specific workflows, tools, and team — never off-the-shelf. We build directly into your existing stack — Shopify, Gorgias, Klaviyo — no disruptive migrations.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Tool-Native', desc: 'Into your existing stack' },
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
            Ready to <GradientText>Transform</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Activation Products has built a brand trusted by 150,000+ customers.
            Let's build the intelligent infrastructure that lets your team, products, and customer relationships generate exponentially more value.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full deployment' },
              { value: '$250K+', label: 'Annual opportunity' },
              { value: '15-25 hrs', label: 'Reclaimed weekly' },
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
