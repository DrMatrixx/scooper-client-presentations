import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  TrendingUp, DollarSign, Users, Clock, Target, CheckCircle,
  ArrowRight, Bot, Shield, Rocket, Layers, Sparkles, Package, RotateCcw,
  BookOpen, HelpCircle, Star, ShoppingCart, MessageSquare
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Activation Products',
  description: 'AI Automation Proposal - Scaling Customer Health Journeys Through Intelligent Automation',
  slides: [
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
                  <Sparkles size={14} className="text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                5 automation modules across 90 days to achieve <span className="text-white font-bold">30–40% fewer support tickets</span>, <span className="text-white font-bold">15–25% more repeat purchases</span>, and <span className="text-white font-bold">$250K–$600K annual impact</span>
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
    {
      id: 'overview',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Overview</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Executive Summary</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Target, label: 'Opportunity', text: 'Connect existing tools into an intelligent customer journey', color: 'from-amber-500/20 to-amber-600/10' },
              { icon: TrendingUp, label: 'Impact', text: '$250K–$600K annual recovered revenue & savings', color: 'from-emerald-500/20 to-emerald-600/10' },
              { icon: Clock, label: 'Timeline', text: '90 days with quick wins in Week 1', color: 'from-cyan-500/20 to-cyan-600/10' },
              { icon: DollarSign, label: 'Capacity', text: '15–25 hrs/week freed from repetitive work', color: 'from-violet-500/20 to-violet-600/10' }
            ].map((item, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-white/10 p-5 bg-gradient-to-br ${item.color}`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-white" />
                  </div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-white text-sm font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-5">
              <div className="flex items-center gap-3 mb-4">
                <Package size={16} className="text-amber-400" />
                <p className="text-white font-medium text-sm">About Activation Products</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: 'DTC Natural Supplements', icon: '💊' },
                  { text: 'Cobourg, Ontario, Canada', icon: '🍁' },
                  { text: 'Family-Founded Brand', icon: '👨‍👩‍👦' },
                  { text: '~$16.5M Revenue', icon: '💰' },
                  { text: '~50 Employees', icon: '👥' },
                  { text: '150,000+ Customers', icon: '🌍' }
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl text-gray-300 text-xs border border-white/5">
                    <span>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-5">
              <div className="flex items-center gap-3 mb-4">
                <Layers size={16} className="text-amber-400" />
                <p className="text-white font-medium text-sm">Detected Tool Stack</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Shopify', 'Gorgias', 'Facebook Pixel', 'Shogun'].map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 bg-amber-500/10 rounded-lg text-amber-300 text-xs border border-amber-500/10">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="bg-amber-500/5 rounded-xl p-3 border border-amber-500/10">
                <p className="text-amber-400/80 text-xs font-medium mb-1">Maturity: Tool-Rich, Disconnected</p>
                <p className="text-gray-400 text-xs leading-relaxed">You have the right pieces in place — they need the connective tissue.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'operationalReality',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Current Reality</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Your Team Handles <GradientText>Every Day</GradientText></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { icon: RotateCcw, title: 'Subscription Support', time: '20–30 min/ticket', desc: 'Manual pause, skip, swap, cancel processing through Gorgias' },
              { icon: BookOpen, title: 'Product Education', time: '3–5 hrs/week', desc: 'Answering "how do I use this?" and "when will I see results?"' },
              { icon: ShoppingCart, title: 'Cart Abandonment', time: 'Revenue loss', desc: 'Generic or no recovery — no health-goal personalization' },
              { icon: Users, title: 'Affiliate Inquiries', time: '15–20 min each', desc: 'Onboarding, commissions, promo assets via manual email' },
              { icon: Star, title: 'Review Management', time: '2–3 hrs/week', desc: '7,467+ reviews across platforms — no automated routing' },
              { icon: HelpCircle, title: 'WISMO Inquiries', time: '30–40% of tickets', desc: '"Where is my order?" consuming support capacity' }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-rose-500/5 to-transparent rounded-2xl border border-rose-500/10 p-4 hover:border-rose-500/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center">
                    <item.icon size={16} className="text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <span className="text-rose-400 text-xs font-medium">{item.time}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-rose-500/5 via-rose-500/10 to-rose-500/5 rounded-2xl border border-rose-500/10 p-5 text-center">
            <p className="text-rose-400 font-bold text-2xl mb-1">25–35%</p>
            <p className="text-gray-400 text-sm">of team capacity consumed by repetitive tasks that could be automated</p>
          </div>
        </div>
      ),
    },
    {
      id: 'hiddenCosts',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">The Cost of Staying Manual</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Revenue You're <GradientText>Leaving Behind</GradientText></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Unrecovered Carts', value: '$150K–$400K', desc: '70.22% average abandonment rate. Products at $39–$99 AOV. Top brands recover 8x more than average.', icon: ShoppingCart, color: 'from-rose-500/10 to-rose-600/5', borderColor: 'border-rose-500/20', valueColor: 'text-rose-400' },
              { title: 'Subscription Churn', value: '20–30%', desc: 'Subscribers lost who would have stayed if offered pause or swap at the moment of cancellation intent.', icon: RotateCcw, color: 'from-orange-500/10 to-orange-600/5', borderColor: 'border-orange-500/20', valueColor: 'text-orange-400' },
              { title: 'Support Capacity Drain', value: '$19.5K–$45.5K', desc: '15–25 hours/week on automatable inquiries at $25–35/hr. WISMO, subscription changes, product usage Qs.', icon: MessageSquare, color: 'from-amber-500/10 to-amber-600/5', borderColor: 'border-amber-500/20', valueColor: 'text-amber-400' },
              { title: 'Data Fragmentation', value: 'Trust Risk', desc: 'Disconnected Gorgias, Shopify, and email data. Customers with issues still get promos for problem products.', icon: Shield, color: 'from-violet-500/10 to-violet-600/5', borderColor: 'border-violet-500/20', valueColor: 'text-violet-400' }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl border ${item.borderColor} p-5`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon size={18} className={item.valueColor} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <span className={`${item.valueColor} text-lg font-bold`}>{item.value}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl border border-amber-500/20 p-6 text-center">
            <p className="text-amber-400/80 text-xs uppercase tracking-wider mb-2 font-medium">Estimated Total Annual Opportunity</p>
            <p className="text-white font-bold text-3xl sm:text-4xl mb-2">$250,000–$600,000</p>
            <p className="text-gray-400 text-sm">in recovered revenue, reduced costs, and increased customer lifetime value</p>
          </div>
        </div>
      ),
    },
    {
      id: 'solutions',
      render: () => (
        <div className="w-full max-w-5xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Solution Architecture</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Five Automation <GradientText>Modules</GradientText></h2>
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-2">
              {[
                { layer: 'Layer 1', name: 'Lead & Revenue Ops', color: 'from-amber-500 to-orange-500' },
                { layer: 'Layer 2', name: 'Workflow & Process', color: 'from-amber-600/80 to-orange-600/80' },
                { layer: 'Layer 3', name: 'Intelligence & Decisions', color: 'from-amber-700/60 to-orange-700/60' }
              ].map((l, i) => (
                <div key={i} className={`bg-gradient-to-r ${l.color} rounded-xl p-3 text-center border border-white/10`}>
                  <p className="text-white/60 text-xs">{l.layer}</p>
                  <p className="text-white font-semibold text-sm">{l.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Cart & Browse Recovery', desc: 'Health-goal-aware abandoned cart flows', icon: ShoppingCart, impact: '$150K–$400K', complexity: 'Low' },
              { num: '02', title: 'Wellness Onboarding', desc: 'Product-specific post-purchase education', icon: BookOpen, impact: '+15–25% RPR', complexity: 'Medium' },
              { num: '03', title: 'Subscription Autopilot', desc: 'Self-service, churn prevention, win-back', icon: RotateCcw, impact: '-40–60% tickets', complexity: 'Medium' },
              { num: '04', title: 'WISMO Deflection', desc: 'Proactive shipping & auto-resolve inquiries', icon: HelpCircle, impact: '-30–40% volume', complexity: 'Low' },
              { num: '05', title: 'Customer Intelligence', desc: 'Replenishment, VIP scoring, churn prediction', icon: Users, impact: '+10–20% LTV', complexity: 'High' }
            ].map((module, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-500/20 hover:border-amber-500/40 p-4 transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-500/30 font-bold text-2xl">{module.num}</span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <module.icon size={14} className="text-amber-400" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{module.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{module.desc}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-xs">Impact</span>
                      <span className="text-emerald-400 text-xs font-medium">{module.impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-xs">Complexity</span>
                      <span className="text-amber-400 text-xs font-medium">{module.complexity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Built on your existing stack — <span className="text-gray-300">Shopify + Gorgias + email/SMS platform</span> — no rip-and-replace required</p>
          </div>
        </div>
      ),
    },
    {
      id: 'deepdive-revenue',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20">
              <span className="text-amber-400 font-bold text-lg">01-02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Revenue Recovery & Onboarding</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <ShoppingCart size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Cart & Browse Recovery</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Health-goal-aware recovery flows that personalize based on immunity, gut health, joint health, etc.</p>
              <ul className="space-y-2.5 mb-6">
                {['Categorize by health interest from browse/cart behavior', '1hr → 24hr → 72hr progressive email sequences', 'Dynamic product recs & relevant customer testimonials', 'SMS backup for high-value carts (bundles >$100)', 'Revenue attribution tracking per recovery email'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">15–25%</p>
                  <p className="text-gray-500 text-xs mt-1">recovery increase</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                  <p className="text-cyan-400 font-bold text-2xl">$150K+</p>
                  <p className="text-gray-500 text-xs mt-1">annual recovery</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <BookOpen size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Wellness Onboarding System</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Product-specific education sequences for first 30 days — dosing, application, timelines, and cross-sells.</p>
              <ul className="space-y-2.5 mb-6">
                {['Day 1: "How to Get the Most From [Product]"', 'Day 3: "What to Expect This Week" + founder story', 'Day 7: Complementary product suggestion', 'Dynamic content: first-time vs. returning customer', 'Built-in Day 7 feedback capture'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">+15–25%</p>
                  <p className="text-gray-500 text-xs mt-1">repeat purchases</p>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/10">
                  <p className="text-violet-400 font-bold text-2xl">-20–30%</p>
                  <p className="text-gray-500 text-xs mt-1">usage support tickets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white/[0.03] rounded-xl border border-white/10 p-4 flex items-center justify-center gap-3">
            <Layers size={14} className="text-gray-500" />
            <p className="text-gray-400 text-sm"><span className="text-gray-300">Tech Stack:</span> Shopify + Email/SMS Platform (Klaviyo) + Existing Blog Content</p>
          </div>
        </div>
      ),
    },
    {
      id: 'deepdive-retention',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20">
              <span className="text-amber-400 font-bold text-lg">03-04</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Subscription & Support Automation</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <RotateCcw size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Subscription Lifecycle Autopilot</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Turn the 60-day minimum / 10-day notice from a friction point into a retention advantage.</p>
              <ul className="space-y-2.5 mb-6">
                {['7-day & 3-day proactive renewal reminders', 'Self-service portal: pause, skip, swap, adjust frequency', 'Cancellation intervention with alternative offers', 'Churn-risk scoring from engagement patterns', 'Win-back sequences at Day 30/60/90'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">-20–30%</p>
                  <p className="text-gray-500 text-xs mt-1">sub support tickets</p>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/10">
                  <p className="text-violet-400 font-bold text-2xl">+10–15%</p>
                  <p className="text-gray-500 text-xs mt-1">sub retention</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <HelpCircle size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Proactive Support & WISMO Deflection</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Eliminate 30–40% of Gorgias ticket volume with proactive notifications and auto-resolution.</p>
              <ul className="space-y-2.5 mb-6">
                {['Proactive shipping milestone notifications', 'Gorgias auto-response for WISMO with live tracking', 'Intelligent ticket categorization & routing', 'Post-delivery satisfaction check-in', 'Self-service return/exchange initiation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">-30–40%</p>
                  <p className="text-gray-500 text-xs mt-1">total ticket volume</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                  <p className="text-cyan-400 font-bold text-2xl">-50–60%</p>
                  <p className="text-gray-500 text-xs mt-1">WISMO tickets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white/[0.03] rounded-xl border border-white/10 p-4 flex items-center justify-center gap-3">
            <Layers size={14} className="text-gray-500" />
            <p className="text-gray-400 text-sm"><span className="text-gray-300">Tech Stack:</span> Gorgias + Shopify + Subscription App + Shipping Carrier APIs</p>
          </div>
        </div>
      ),
    },
    {
      id: 'impact',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Measurable Transformation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projected <GradientText>Impact</GradientText></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Response Time', value: '90–95%', sub: 'reduction', desc: 'From hours to minutes for common inquiries', color: 'from-emerald-500/20 to-emerald-600/10' },
              { label: 'Cart Recovery', value: '15–25%', sub: 'increase', desc: 'Health-goal personalization above industry avg', color: 'from-cyan-500/20 to-cyan-600/10' },
              { label: 'Hours Reclaimed', value: '15–25', sub: 'per week', desc: 'Equivalent of 1–2 full-time team members', color: 'from-violet-500/20 to-violet-600/10' },
              { label: 'Repeat Purchases', value: '15–25%', sub: 'increase', desc: 'From onboarding + replenishment reminders', color: 'from-amber-500/20 to-amber-600/10' }
            ].map((metric, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-white/10 p-5 bg-gradient-to-br ${metric.color}`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">{metric.label}</p>
                  <p className="text-white font-bold text-2xl">{metric.value}</p>
                  <p className="text-white/60 text-xs mb-2">{metric.sub}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl border border-amber-500/20 p-6 mb-6">
            <div className="text-center mb-4">
              <p className="text-amber-400/80 text-xs uppercase tracking-wider mb-2 font-medium">Estimated Annual Impact</p>
              <p className="text-white font-bold text-3xl sm:text-4xl">$250,000–$600,000</p>
            </div>
            <div className="grid grid-cols-4 gap-3 text-center">
              {[
                { label: 'Cart Recovery', value: '$150K–$400K' },
                { label: 'Sub Retention', value: '$50K–$100K' },
                { label: 'Labor Savings', value: '$20K–$45K' },
                { label: 'LTV Uplift', value: '$30K–$55K' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Users size={16} className="text-amber-400" />
              <p className="text-white font-medium text-sm">Capacity Reclaimed = 1–2 Full-Time Team Members</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              23–40 hours/week freed from repetitive tasks. Your team refocuses on high-value customer conversations, content creation, affiliate growth, and product development — the work that actually grows the business.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'roadmap',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Implementation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">90-Day <GradientText>Roadmap</GradientText></h2>
          </div>
          <div className="relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-orange-600 hidden sm:block" />
            <div className="space-y-4">
              {[
                { phase: '1', timeline: 'Weeks 1–4', title: 'Foundation & Quick Wins', desc: 'Immediate impact from day one', items: ['Discovery & tool stack audit', 'Gorgias WISMO auto-resolve', 'Cart recovery flow v1 (3-email)', 'Proactive shipping notifications'], result: '20–30% WISMO reduction in 2 weeks. First recovered revenue in 7 days.', color: 'from-amber-500 to-amber-600', iconColor: 'bg-amber-500' },
                { phase: '2', timeline: 'Weeks 5–8', title: 'Core Automation Build', desc: 'Onboarding, subscriptions, and retention', items: ['Wellness onboarding for top 5 products', 'Subscription lifecycle autopilot', 'Browse abandonment extension', 'Cancellation intervention flows'], result: 'Measurable repeat purchase improvement. Subscription tickets declining.', color: 'from-orange-500 to-orange-600', iconColor: 'bg-orange-500' },
                { phase: '3', timeline: 'Weeks 9–12', title: 'Intelligence & Optimization', desc: 'AI-driven personalization and scaling', items: ['Replenishment engine for full catalog', 'Customer health scoring & VIP segmentation', 'A/B testing across all flows', 'Churn prediction from behavioral signals'], result: 'Full system operational. All 5 modules live and generating measurable ROI.', color: 'from-orange-600 to-rose-500', iconColor: 'bg-rose-500' }
              ].map((phase, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className={`relative z-10 w-14 h-14 rounded-2xl ${phase.iconColor} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/20 shrink-0 hidden sm:flex`}>
                    {phase.phase}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 overflow-hidden hover:border-amber-500/20 transition-colors">
                    <div className={`bg-gradient-to-r ${phase.color} p-4 flex items-center justify-between`}>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="sm:hidden w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">{phase.phase}</span>
                          <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                        </div>
                        <p className="text-white/70 text-xs mt-1 hidden sm:block">{phase.desc}</p>
                      </div>
                      <span className="px-4 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium">{phase.timeline}</span>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {phase.items.map((item, j) => (
                          <span key={j} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl text-gray-300 text-xs border border-white/5">
                            <CheckCircle size={10} className="text-emerald-400" />
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-emerald-400/80 text-xs"><span className="font-medium">Expected:</span> {phase.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-3xl px-6">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-8">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-amber-300/90 text-sm font-medium">Let's Build Something Great</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Ready to <GradientText>Transform</GradientText>?</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Activation Products has built a brand trusted by 150,000+ customers. The next chapter isn't about working harder — it's about building the intelligent infrastructure that lets your team, products, and customer relationships generate exponentially more value.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: '90 days', label: 'Full deployment', color: 'from-amber-500/20 to-amber-600/10' },
              { value: '$250K+', label: 'Annual opportunity', color: 'from-emerald-500/20 to-emerald-600/10' },
              { value: '15–25 hrs', label: 'Weekly capacity freed', color: 'from-cyan-500/20 to-cyan-600/10' }
            ].map((item, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-white/10 p-5 bg-gradient-to-br ${item.color}`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-white text-2xl sm:text-3xl font-bold mb-1">{item.value}</p>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 transition-all text-base">
            <Rocket size={20} />
            Schedule Discovery Call
            <ArrowRight size={18} />
          </a>
          <a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="mt-10 flex items-center justify-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Bot size={22} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-300 text-sm font-medium group-hover:text-amber-400 transition-colors">Prepared by Scooper AI</p>
              <p className="text-gray-500 text-xs">AI Automation Solutions</p>
            </div>
          </a>
        </div>
      ),
    },
  ],
};

export default presentation;
