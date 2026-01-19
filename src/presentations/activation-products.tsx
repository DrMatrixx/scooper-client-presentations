import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  TrendingUp, DollarSign, Users, Clock, Target, CheckCircle,
  ArrowRight, Bot, Shield, Rocket, Layers, Sparkles, Package, RotateCcw,
  BookOpen, HelpCircle, Star, FileText, MessageSquare
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Activation Products',
  description: 'Strategic Automation Roadmap - Transforming Customer Experience Through Intelligent Automation',
  slides: [
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
              src="/activation-logo.webp"
              alt="Activation Products"
              className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for your team</p>
          </div>

          {/* Value proposition question */}
          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could save</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              40–60%
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">on support costs while reducing churn by 25%?</p>
          </div>

          {/* Key pain points they'll recognize - with icons and glassmorphism */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '~80%', label: 'Tickets manual', icon: MessageSquare },
              { value: '6-8%', label: 'Monthly churn', icon: RotateCcw },
              { value: '5-7 days', label: 'Returns process', icon: Clock },
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
                  <Sparkles size={14} className="text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                8 automations across 90 days to achieve <span className="text-white font-bold">40-60% ticket deflection</span>, <span className="text-white font-bold">15-25% churn reduction</span>, and <span className="text-white font-bold">3-4 month payback</span>
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
              { icon: Target, label: 'Opportunity', text: 'AI-driven support, subscriptions & lifecycle', color: 'from-amber-500/20 to-amber-600/10' },
              { icon: TrendingUp, label: 'Impact', text: '40-60% cost reduction, 25% less churn', color: 'from-emerald-500/20 to-emerald-600/10' },
              { icon: Clock, label: 'Timeline', text: '90 days with quick wins in 30 days', color: 'from-cyan-500/20 to-cyan-600/10' },
              { icon: DollarSign, label: 'ROI', text: '3-4 month payback period', color: 'from-violet-500/20 to-violet-600/10' }
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
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <Package size={16} className="text-amber-400" />
              <p className="text-white font-medium text-sm">About Activation Products</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { text: 'DTC Supplements & Oils', icon: '💊' },
                { text: 'US, CA, UK, AU Markets', icon: '🌍' },
                { text: 'Subscription-First Model', icon: '🔄' },
                { text: 'Shopify + Gorgias Stack', icon: '🛒' }
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-gray-300 text-sm border border-white/5 hover:border-white/10 transition-colors">
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'currentState',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Current State</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Challenges & <GradientText>Opportunity</GradientText></h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: MessageSquare, title: 'Support Overload', pain: 'Manual triage, slow response times', stat: '~80%', statLabel: 'tickets manual' },
              { icon: RotateCcw, title: 'Subscription Churn', pain: 'No proactive save flows in place', stat: '6-8%', statLabel: 'monthly churn' },
              { icon: Package, title: 'Returns Friction', pain: 'Email-based return initiation', stat: '5-7 days', statLabel: 'processing time' },
              { icon: BookOpen, title: 'Education Gap', pain: 'Limited post-purchase nurturing', stat: '↑', statLabel: 'refund rates' }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-rose-500/5 to-transparent rounded-2xl border border-rose-500/10 p-5 hover:border-rose-500/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <item.icon size={18} className="text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{item.pain}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-rose-400 font-bold text-2xl">{item.stat}</span>
                  <span className="text-gray-500 text-sm">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl border border-amber-500/10 p-5">
            <p className="text-amber-400/80 text-xs uppercase tracking-wider mb-4 text-center font-medium">Market Opportunity</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '$83B', label: 'AI customer service market by 2033' },
                { value: '12x', label: 'Cost difference: human vs AI support' },
                { value: '60%', label: 'DTC revenue from repeat customers' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-white font-bold text-xl sm:text-2xl mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'vision',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">The Vision</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">AI-Powered <GradientText>Operating System</GradientText></h2>
          </div>
          <div className="relative">
            {[
              { name: 'AI Layer', desc: 'Ticket triage, personalization, education, summaries', icon: Sparkles, color: 'from-amber-500 to-orange-500', opacity: 'opacity-100' },
              { name: 'Automation', desc: 'Orchestration via n8n/Zapier/Make', icon: Layers, color: 'from-amber-600/80 to-orange-600/80', opacity: 'opacity-95' },
              { name: 'Subscription', desc: 'Self-serve portal + churn prevention', icon: RotateCcw, color: 'from-amber-700/60 to-orange-700/60', opacity: 'opacity-90' },
              { name: 'Support', desc: 'Gorgias + Knowledge Base', icon: HelpCircle, color: 'from-amber-800/40 to-orange-800/40', opacity: 'opacity-85' },
              { name: 'Storefront', desc: 'Shopify orders + customers', icon: Package, color: 'from-amber-900/30 to-orange-900/30', opacity: 'opacity-80' }
            ].map((layer, i) => (
              <div
                key={i}
                className={`relative mb-2 last:mb-0`}
                style={{ marginLeft: `${i * 16}px`, marginRight: `${i * 16}px` }}
              >
                <div className={`bg-gradient-to-r ${layer.color} rounded-xl p-4 sm:p-5 flex items-center justify-between border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-default`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <layer.icon size={18} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-base">{layer.name}</span>
                  </div>
                  <span className="text-white/70 text-xs sm:text-sm hidden sm:block">{layer.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl border border-amber-500/20 p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target size={16} className="text-amber-400" />
              <p className="text-amber-400 font-semibold text-sm">North Star</p>
            </div>
            <p className="text-gray-300 text-sm">Single customer record + event stream triggering smart actions across all touchpoints</p>
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
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Eight Automation <GradientText>Opportunities</GradientText></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'AI Support Triage', desc: 'Auto-classify, draft, route', icon: MessageSquare, priority: true },
              { num: '02', title: 'Self-Serve Returns', desc: 'Eligibility + RMA automation', icon: Package, priority: true },
              { num: '03', title: 'Subscription Ops', desc: 'Save flows + churn reduction', icon: RotateCcw, priority: true },
              { num: '04', title: 'Product Education', desc: 'Automated usage journeys', icon: BookOpen, priority: true },
              { num: '05', title: 'Order Status', desc: 'WISMO bot + proactive alerts', icon: HelpCircle, priority: false },
              { num: '06', title: 'Wholesale & Affiliate', desc: 'Pipeline + onboarding', icon: Users, priority: false },
              { num: '07', title: 'Review Ops', desc: 'Collection + escalation', icon: Star, priority: false },
              { num: '08', title: 'Content Engine', desc: 'Blog to email to FAQ', icon: FileText, priority: false }
            ].map((solution, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all hover:scale-[1.02] ${solution.priority ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-500/20 hover:border-amber-500/40' : 'bg-white/[0.03] border-white/10 hover:border-white/20'}`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl font-bold ${solution.priority ? 'text-amber-500/30' : 'text-white/10'}`}>{solution.num}</span>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${solution.priority ? 'bg-amber-500/20' : 'bg-white/10'}`}>
                      <solution.icon size={16} className={solution.priority ? 'text-amber-400' : 'text-gray-400'} />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{solution.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs mr-2">Priority</span>
              First 4 automations form the core 90-day implementation
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'deepdive-support',
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Support & Returns Automation</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <MessageSquare size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">AI Support Triage</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Auto-classify tickets, extract data, draft responses, route medical queries to humans.</p>
              <ul className="space-y-2.5 mb-6">
                {['Intent classification (Order, Returns, Subscription, Medical)', 'Auto-extract order numbers & sentiment', 'Knowledge Base response drafts', 'Risk flags auto-escalate'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">40-60%</p>
                  <p className="text-gray-500 text-xs mt-1">ticket deflection</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                  <p className="text-cyan-400 font-bold text-2xl">70%</p>
                  <p className="text-gray-500 text-xs mt-1">faster response</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Package size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Self-Serve Returns</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Eliminate email-based return initiation with automated eligibility checks.</p>
              <ul className="space-y-2.5 mb-6">
                {['Self-serve form with order lookup', 'Auto-check 60-day window & unopened status', 'Generate RMA + instructions instantly', 'Status updates: received → inspected → refunded'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">60%</p>
                  <p className="text-gray-500 text-xs mt-1">fewer tickets</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                  <p className="text-cyan-400 font-bold text-2xl">3x</p>
                  <p className="text-gray-500 text-xs mt-1">faster refunds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white/[0.03] rounded-xl border border-white/10 p-4 flex items-center justify-center gap-3">
            <Layers size={14} className="text-gray-500" />
            <p className="text-gray-400 text-sm"><span className="text-gray-300">Tech Stack:</span> Gorgias AI Agent + Shopify + n8n/Zapier</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Retention & Education</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <RotateCcw size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Subscription Ops & Churn</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Proactive save flows before the 10-day cancellation cutoff.</p>
              <ul className="space-y-2.5 mb-6">
                {['AI identifies cancellation reason', 'Offer alternatives: pause, reduce, swap', 'Proactive reminders before cutoff', 'Failed payment & address monitoring'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">15-25%</p>
                  <p className="text-gray-500 text-xs mt-1">churn reduction</p>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/10">
                  <p className="text-violet-400 font-bold text-2xl">+LTV</p>
                  <p className="text-gray-500 text-xs mt-1">subscription value</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <BookOpen size={18} className="text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Product Education Journeys</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Post-purchase nurturing to reduce returns and increase repeat purchases.</p>
              <ul className="space-y-2.5 mb-6">
                {['Triggered education series per product', 'Day 1/7/21: usage tips, expectations, pairings', 'AI concierge with appropriate disclaimers', '"When to contact support" guidance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/10">
                  <p className="text-emerald-400 font-bold text-2xl">20-30%</p>
                  <p className="text-gray-500 text-xs mt-1">fewer returns</p>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/10">
                  <p className="text-violet-400 font-bold text-2xl">+RPR</p>
                  <p className="text-gray-500 text-xs mt-1">repeat purchases</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white/[0.03] rounded-xl border border-white/10 p-4 flex items-center justify-center gap-3">
            <Layers size={14} className="text-gray-500" />
            <p className="text-gray-400 text-sm"><span className="text-gray-300">Tech Stack:</span> Subscription Portal + Email/SMS Platform + Gorgias KB</p>
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
                { phase: '1', timeline: 'Days 0-30', title: 'Quick Wins', desc: 'Foundation & immediate impact', items: ['Gorgias AI triage', 'Order status bot', 'Returns intake form'], color: 'from-amber-500 to-amber-600', iconColor: 'bg-amber-500' },
                { phase: '2', timeline: 'Days 30-60', title: 'Retention', desc: 'Reduce churn & save subscribers', items: ['Cancellation save-flows', 'Subscription reminders', 'Failed payment automation'], color: 'from-orange-500 to-orange-600', iconColor: 'bg-orange-500' },
                { phase: '3', timeline: 'Days 60-90', title: 'Growth', desc: 'Scale & optimize operations', items: ['Education journeys', 'Review ops', 'Wholesale pipeline'], color: 'from-orange-600 to-rose-500', iconColor: 'bg-rose-500' }
              ].map((phase, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className={`relative z-10 w-14 h-14 rounded-2xl ${phase.iconColor} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/20 shrink-0 hidden sm:flex`}>
                    {phase.phase}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 overflow-hidden hover:border-amber-500/20 transition-colors">
                    <div className={`bg-gradient-to-r ${phase.color} p-5 flex items-center justify-between`}>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="sm:hidden w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">{phase.phase}</span>
                          <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                        </div>
                        <p className="text-white/70 text-sm mt-1 hidden sm:block">{phase.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-4 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium">{phase.timeline}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-wrap gap-2">
                      {phase.items.map((item, j) => (
                        <span key={j} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-gray-300 text-sm border border-white/5">
                          <CheckCircle size={12} className="text-emerald-400" />
                          {item}
                        </span>
                      ))}
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
      id: 'impact',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projected <GradientText>Impact</GradientText></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            {[
              { title: 'Support Efficiency', icon: MessageSquare, color: 'from-emerald-500/20 to-emerald-600/10', metrics: [{ label: 'Ticket deflection', value: '40-60%' }, { label: 'Response time', value: '-70%' }, { label: 'Agent productivity', value: '+35%' }] },
              { title: 'Revenue Protection', icon: TrendingUp, color: 'from-violet-500/20 to-violet-600/10', metrics: [{ label: 'Subscription churn', value: '-15-25%' }, { label: 'Return rate', value: '-20-30%' }, { label: 'LTV improvement', value: '+10-15%' }] },
              { title: 'Operational Savings', icon: DollarSign, color: 'from-cyan-500/20 to-cyan-600/10', metrics: [{ label: 'Cost per ticket', value: '-50%' }, { label: 'Hours saved', value: '800+/yr' }, { label: 'Payback', value: '3-4 mo' }] }
            ].map((category, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-gradient-to-br ${category.color}`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <category.icon size={18} className="text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-base">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.metrics.map((metric, j) => (
                      <div key={j} className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{metric.label}</span>
                        <span className="text-white font-bold text-lg">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={16} className="text-amber-400" />
              <p className="text-white font-medium text-sm">Guardrails for Supplements</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, text: 'Medical queries auto-escalate' },
                { icon: CheckCircle, text: 'FDA-compliant disclaimers' },
                { icon: Users, text: 'Human approval layer' },
                { icon: Layers, text: 'Weekly QA reviews' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                  <item.icon size={14} className="text-amber-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'nextSteps',
      render: () => (
        <div className="w-full max-w-4xl px-6 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="text-center mb-8">
            <p className="text-amber-400 text-xs tracking-[0.2em] uppercase mb-3 font-medium">Action Plan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Recommended Next Steps</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {[
              { num: '1', title: '30-Day Pilot', desc: 'Launch AI triage, order status bot, and returns automation', icon: Rocket },
              { num: '2', title: 'Measure & Refine', desc: 'Track deflection, response time, CSAT — adjust AI guidance', icon: TrendingUp },
              { num: '3', title: 'Expand to Retention', desc: 'Deploy save flows once support baseline is established', icon: Users },
              { num: '4', title: 'Full Platform', desc: 'Roll out education journeys, wholesale ops, content engine', icon: Layers }
            ].map((step, i) => (
              <div key={i} className="group bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 p-6 flex items-start gap-5 hover:border-amber-500/20 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-amber-400 font-bold text-xl">{step.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon size={14} className="text-amber-400" />
                    <h3 className="text-white font-semibold text-base">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl border border-amber-500/20 p-6 text-center">
            <p className="text-white text-lg font-medium mb-2">Start with support automation. Prove ROI. Then scale.</p>
            <p className="text-gray-400 text-sm">Quick wins build confidence and fund expansion</p>
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
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">Let's discuss how AI automation can drive measurable results for Activation Products.</p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: '90 days', label: 'Full deployment', color: 'from-amber-500/20 to-amber-600/10' },
              { value: '3-4 mo', label: 'Payback period', color: 'from-emerald-500/20 to-emerald-600/10' },
              { value: '40-60%', label: 'Ticket deflection', color: 'from-cyan-500/20 to-cyan-600/10' }
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
