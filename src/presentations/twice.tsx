import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Rocket,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bot,
  MessageSquare,
  Heart,
  Zap,
  Package,
  RefreshCw,
  ShoppingCart,
  Star,
  Mail,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Twice',
  description: 'AI Automation Proposal — Scaling Oral Wellness Through Intelligent Automation',
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
              src="/twice-logo.png"
              alt="Twice"
              className="h-14 sm:h-18 md:h-20 w-auto mx-auto mb-3 invert"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for Julian Levine & team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $150K–$400K+
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost revenue and operational efficiency?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '72%', label: 'Carts abandoned', icon: ShoppingCart },
              { value: '2+ mo', label: 'Hero product stockout', icon: Package },
              { value: '0', label: 'Subscription options', icon: RefreshCw },
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
                5 custom automations to recover <span className="text-white font-bold">abandoned carts</span>, launch <span className="text-white font-bold">subscriptions</span>, eliminate <span className="text-white font-bold">stockouts</span>, and provide <span className="text-white font-bold">24/7 AI support</span>
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
          { task: 'Monitoring inventory across Shopify, Amazon, Target, CVS, Wegmans', time: '3-5 hrs/wk', issue: 'Reactive restocking led to 2+ month Immunity Rinse stockout' },
          { task: 'Customer support via email & phone only', time: '5-8 hrs/wk', issue: 'No chat — pre-purchase questions go unanswered for hours' },
          { task: 'Marketing across 7+ social channels + Amazon', time: '8-12 hrs/wk', issue: 'Inconsistent posting, missed viral moments' },
          { task: 'Order reconciliation across 5+ sales channels', time: '3-5 hrs/wk', issue: 'No unified view of true customer LTV' },
          { task: 'Blog content that captures zero email addresses', time: '4-6 hrs/wk', issue: '5 posts/month driving traffic with no lead capture' },
          { task: 'Manual back-in-stock notifications to 1,000+ waitlist', time: '1-2 hrs/event', issue: 'Julian personally sends restock emails' },
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
                Managing 6+ product categories across 5+ sales channels with a team of 1-10 means your people <em>are</em> the integration layer.
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
                Estimated <span className="text-white font-bold">40-55% of team capacity</span> consumed by manual operations that should be automated.
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
          { icon: ShoppingCart, value: '~72%', metric: 'Cart Abandonment', desc: 'No recovery sequence in place' },
          { icon: RefreshCw, value: '$0', metric: 'Subscription Revenue', desc: 'Competitors all have subscriptions' },
          { icon: Package, value: '2+ months', metric: 'Hero Product Stockout', desc: '1,000+ on waitlist, revenue lost' },
          { icon: Mail, value: '0 emails', metric: 'Blog Lead Capture', desc: '5 posts/mo, zero signups collected' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Hidden Cost</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              What You're Leaving on the Table
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
                Estimated Annual Opportunity Cost: <span className="text-white font-bold">$150K – $400K+</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">In recoverable revenue and operational savings</p>
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
          { name: 'HiSmile', has: 'Subscription + influencer automation', maturity: 'High' },
          { name: 'Quip', has: 'Subscription-native + referral program', maturity: 'High' },
          { name: 'Bite', has: 'Subscription-default purchase flow', maturity: 'Medium' },
          { name: 'Snow', has: 'Strong email + influencer system', maturity: 'Med-High' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Competitive Gap</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Competitors Are <GradientText>Compounding</GradientText> Advantages
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <div className="space-y-2 sm:space-y-3">
                {competitors.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm sm:text-base font-medium">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.has}</p>
                    </div>
                    <span className="px-2 py-1 bg-rose-500/10 rounded-full text-rose-400 text-xs whitespace-nowrap">
                      {item.maturity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Star size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold mb-1">Twice's Unfair Advantage</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    4.89★ across 1,785 reviews, 500K+ customers, Lenny Kravitz as CCO, Glo Good Foundation mission, and Bristle microbiome partnership. The brand is built — now build the <span className="text-emerald-400 font-medium">operational engine</span> to match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Today vs Automated
    {
      id: 'opportunity',
      render: () => {
        const todayItems = [
          'Cart abandoned → revenue lost forever',
          'Customer question → wait hours for email reply',
          'Immunity Rinse stocks out → 2+ months with manual waitlist',
          'First-time buyer → generic Shopify confirmation, then silence',
          'Blog readers leave without giving email',
        ];
        const automatedItems = [
          '3-email + SMS sequence recovers 10-15% of carts',
          'AI chatbot answers in seconds, 24/7',
          'Threshold alerts + instant back-in-stock notifications',
          'Post-purchase nurture → cross-sell → subscription offer',
          'Exit-intent capture feeds automated nurture sequences',
        ];
        const summaryMetrics = [
          { icon: TrendingUp, metric: '10-15%', label: 'Carts Recovered' },
          { icon: RefreshCw, metric: '2-3x', label: 'LTV from Subscribers' },
          { icon: Clock, metric: '15-25 hrs', label: 'Reclaimed/wk' },
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

    // Slide 6: Solution Overview
    {
      id: 'whatChanges',
      render: () => {
        const automations = [
          { num: '01', title: 'Cart Recovery', desc: 'Multi-touch abandonment', icon: ShoppingCart },
          { num: '02', title: 'Subscriptions', desc: 'Auto-replenishment', icon: RefreshCw },
          { num: '03', title: 'Inventory Intel', desc: 'Back-in-stock alerts', icon: Package },
          { num: '04', title: 'Lifecycle CRM', desc: 'Cross-sell & nurture', icon: Heart },
          { num: '05', title: 'AI Support', desc: 'Product advisor bot', icon: MessageSquare },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              5 Automations to <GradientText>Scale</GradientText> Twice
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

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Each automation is custom-built for Twice's Shopify stack, product catalog, and team workflows.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Automation 1 — Cart Recovery
    {
      id: 'auto1',
      render: () => {
        const capabilities = [
          'Automated 3-email + SMS abandoned cart sequence',
          'Dynamic product images and review snippets in emails',
          'Cross-sell recommendations (toothpaste → mouthwash)',
          'First-time vs. returning customer segmentation',
          'A/B testing on subject lines, timing, and incentives',
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
                <p className="text-amber-400 text-xs">Automation 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Smart Cart Recovery Engine</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A customer adds Charcoal Icy Mint 3-pack to cart, gets distracted, and leaves. Today that revenue is gone. With automation, a personalized 3-email + SMS sequence brings them back — and cross-sells the Immunity Rinse.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">72%</p>
                  <p className="text-gray-500 text-xs">Carts abandoned, zero follow-up</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">10-15%</p>
                  <p className="text-gray-500 text-xs">Carts recovered automatically</p>
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
                <span className="font-bold">Impact:</span> $3.65 revenue per recipient (Klaviyo benchmark)
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Automation 2 — Subscription System
    {
      id: 'auto2',
      render: () => {
        const capabilities = [
          'Subscribe & save option on all consumable product pages',
          'Smart frequency defaults (90-day toothpaste, 60-day mouthwash)',
          'Pre-shipment email: "Your Twice order ships soon — need to adjust?"',
          '"Add to your next box" cross-sell within subscription flow',
          'Win-back automation for cancelled subscribers',
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
                <p className="text-amber-400 text-xs">Automation 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Subscription & Auto-Replenishment</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Twice sells products used twice daily with a natural 2-3 month replenishment cycle — yet there's no subscription option. Quip, Bite, and HiSmile all generate predictable recurring revenue this way. Subscribers deliver 2-3x higher LTV.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1x</p>
                  <p className="text-gray-500 text-xs">One-time purchase only</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2-3x</p>
                  <p className="text-gray-500 text-xs">Subscriber LTV increase</p>
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
                <span className="font-bold">Impact:</span> 15-25% LTV increase from subscription adoption
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Automation 3 — Inventory Intelligence
    {
      id: 'auto3',
      render: () => {
        const capabilities = [
          'Configurable inventory threshold alerts per SKU per channel',
          'Automated "Notify Me" form on out-of-stock products',
          'Instant multi-channel back-in-stock notifications (email + SMS)',
          'Waitlist segmentation by signup date for VIP early access',
          'Demand velocity reporting for smarter reorder decisions',
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
                <p className="text-amber-400 text-xs">Automation 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Inventory Intelligence & Restock</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                The Immunity Rinse sold out for 2+ months with 1,000+ customers waiting. Julian personally sent the restock email. Automated alerts, "Notify Me" capture, and instant back-in-stock sequences ensure demand is never lost again.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">2+ mo</p>
                  <p className="text-gray-500 text-xs">Stockout, manual waitlist</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;5 min</p>
                  <p className="text-gray-500 text-xs">Auto restock alert & notify</p>
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
                <span className="font-bold">Impact:</span> Capture demand that currently evaporates during stockouts
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 10: Automation 4 — Customer Lifecycle
    {
      id: 'auto4',
      render: () => {
        const capabilities = [
          'Exit-intent popup & blog email capture with lead magnet',
          'Post-purchase welcome: usage tips → cross-sell → reorder reminder',
          'Behavioral cross-sell (toothpaste buyer → Immunity Rinse at Day 14)',
          'Automated review solicitation at optimal post-delivery timing',
          'VIP tier: early access, birthday rewards, Glo Good mission updates',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Heart size={16} className="text-amber-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-amber-400 text-xs">Automation 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Lifecycle & Cross-Sell</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Today: a customer buys toothpaste, gets a Shopify confirmation, and nothing else. They may never learn Twice sells mouthwash, whitening strips, or floss. Automated lifecycle sequences turn one-time buyers into loyal advocates.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">1 email</p>
                  <p className="text-gray-500 text-xs">Shopify order confirmation</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Full Journey</p>
                  <p className="text-gray-500 text-xs">Welcome → cross-sell → VIP</p>
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
                <span className="font-bold">Impact:</span> 15-30% increase in repeat purchase rate
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 11: Automation 5 — AI Customer Support
    {
      id: 'auto5',
      render: () => {
        const capabilities = [
          '24/7 AI chatbot trained on Twice\'s product catalog & ingredient science',
          'Instant answers: "fluoride vs. fluoride-free?", "which bundle for me?"',
          'Real-time inventory status: "Is Immunity Rinse in stock?"',
          'Smart escalation to human team with full conversation context',
          'Lead capture from non-purchasing chat visitors',
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
                <p className="text-amber-400 text-xs">Automation 05</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">AI-Powered Product Advisor</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                A customer wonders if fluoride-free toothpaste is effective. Today, they'd need to email contact@twicetwicellc.com and wait. With an AI advisor trained on Twice's science, they get an instant answer — and a product recommendation — in seconds.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours</p>
                  <p className="text-gray-500 text-xs">Email-only support</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">&lt;60 sec</p>
                  <p className="text-gray-500 text-xs">AI-powered, 24/7</p>
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
                <span className="font-bold">Impact:</span> 15-25% reduction in email support volume
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
          { icon: ShoppingCart, metric: 'Cart Recovery', before: '0% recovered', after: '10-15% recovered' },
          { icon: TrendingUp, metric: 'Customer LTV', before: 'One-time only', after: '+15-25% via subs' },
          { icon: Users, metric: 'Manual Hours', before: '24-38 hrs/wk', after: '15-25 hrs saved' },
          { icon: Clock, metric: 'Support Speed', before: 'Hours/days', after: '<60 seconds' },
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
                Annual Value Impact: <span className="text-amber-400">$150K–$400K+</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Equivalent to adding 0.5-0.75 FTE capacity — without hiring</p>
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
            title: 'Quick Wins & Foundation',
            time: 'Weeks 1-4',
            status: 'Quick Wins',
            items: ['Abandoned cart recovery live', 'Email capture popup deployed', 'Back-in-stock automation'],
          },
          {
            title: 'Core Automation Build',
            time: 'Weeks 5-8',
            status: 'Core System',
            items: ['Subscription system launched', 'Post-purchase lifecycle live', 'AI chatbot deployed'],
          },
          {
            title: 'Intelligence & Optimization',
            time: 'Weeks 9-12',
            status: 'Full Operation',
            items: ['VIP tier & loyalty', 'Inventory demand forecasting', 'Unified analytics dashboard'],
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
              90-Day Structured <GradientText>Rollout</GradientText>
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

            <div className="mt-4 sm:mt-5 text-center">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                Built on your existing Shopify stack — no rip-and-replace. First recovered cart revenue expected in Week 2.
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
                <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-bold hover:text-amber-400 transition-colors">
                  Scooper AI
                </a>
                <p className="text-gray-400 text-sm">AI Automation Agency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
              We build custom intelligent systems for growth-stage DTC brands. Every automation is designed around your specific workflows, tools, and team — never off-the-shelf. We build directly into your existing Shopify, Klaviyo, and analytics stack.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Shopify-Native', desc: 'No migrations needed' },
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
              From strategy to implementation to testing — we handle everything. Your team stays focused on growing the brand.
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
            Ready to <GradientText>Scale</GradientText> Twice?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            The product-market fit is proven — 500K+ customers, 4.89★ reviews, retail in Target and CVS. Now let's build the operational engine to match the brand.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '90 days', label: 'To full deploy' },
              { value: '$150K+', label: 'Annual value' },
              { value: 'Week 2', label: 'First results' },
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
