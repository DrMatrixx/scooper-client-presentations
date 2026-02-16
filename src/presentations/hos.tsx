import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Users, FileText, Rocket, TrendingUp, Clock, MessageSquare, Database,
  ArrowRight, CheckCircle, Bot, RefreshCw, AlertCircle, Settings, ArrowDown
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'HOS Reality',
  description: 'Operational Transformation Through Intelligent Automation',
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
              src="/hos logo.svg"
              alt="HOS Reality"
              className="h-20 sm:h-28 md:h-32 w-auto mx-auto rounded-xl shadow-lg mb-3"
            />
            <p className="text-gray-500 text-sm">Prepared exclusively for your team</p>
          </div>

          {/* Value proposition question */}
          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              AED 2.4–3.2M
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost leads and operational inefficiency?</p>
          </div>

          {/* Key pain points they'll recognize - with icons and glassmorphism */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '30-40%', label: 'Leads lost', icon: AlertCircle },
              { value: '4-8 hrs', label: 'Response delay', icon: Clock },
              { value: '60-70%', label: 'Time on admin', icon: Users },
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
                  <Rocket size={14} className="text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                5 custom automations to achieve <span className="text-white font-bold">24/7 lead response</span>, boost conversion by <span className="text-white font-bold">40-50%</span>, and cut manual work by <span className="text-white font-bold">70%</span>
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
      id: 'reality',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Where Time Goes Today</h2>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">In a typical real estate operation, teams spend the majority of their time on repetitive, manual tasks:</p>
            <div className="space-y-2 sm:space-y-3">
              {[
                { task: 'Responding to inquiries', time: '3-4 hrs/day', issue: 'Delayed responses' },
                { task: 'Following up with leads', time: '2-3 hrs/day', issue: 'Leads fall through' },
                { task: 'Updating CRM & sheets', time: '1-2 hrs/day', issue: 'Data entry errors' },
                { task: 'Coordinating site visits', time: '1-2 hrs/day', issue: 'No-shows' },
                { task: 'Document processing', time: '2-3 hrs/day', issue: 'Delays' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs sm:text-sm font-medium">{item.task}</p>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.issue}</p>
                  </div>
                  <div className="text-amber-400 font-semibold text-xs sm:text-sm whitespace-nowrap">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">This adds up to <span className="text-white font-bold">60-70% of productive hours</span> on tasks that don't require human judgment.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cost',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Cost</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What This Actually Costs</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
            {[
              { metric: 'Leads Lost', value: '30-40%', desc: 'No timely response or follow-up', icon: AlertCircle },
              { metric: 'Response Delay', value: '4-8 hrs', desc: 'During busy periods', icon: Clock },
              { metric: 'Team Capacity', value: '60%', desc: 'Time on admin work', icon: Users },
              { metric: 'Data Quality', value: 'Poor', desc: 'Inconsistent CRM data', icon: Database }
            ].map((item, i) => (
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
            <p className="text-rose-400 text-xs sm:text-sm">Estimate: <span className="text-white font-bold">AED 2-3M/year</span> impacted by inefficiencies</p>
          </div>
        </div>
      ),
    },
    {
      id: 'opportunity',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Opportunity</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What If This Was <GradientText>Automated</GradientText>?</h2>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Today</p>
                <div className="space-y-1.5 sm:space-y-2">
                  {['Manual lead response', 'Inconsistent follow-ups', 'Spreadsheet chaos', 'Reactive operations', 'Limited visibility'].map((item, i) => (
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
                  {['Instant AI response 24/7', 'Auto nurture sequences', 'Self-updating CRM', 'Proactive alerts', 'Real-time dashboards'].map((item, i) => (
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
            {[
              { metric: '+40-50%', label: 'Leads converted', icon: TrendingUp },
              { metric: '-70%', label: 'Manual work', icon: ArrowDown },
              { metric: '24/7', label: 'Coverage', icon: Clock }
            ].map((item, i) => (
              <div key={i} className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-2 sm:p-4 text-center">
                <item.icon size={16} className="text-emerald-400 mx-auto mb-1 sm:mb-2 sm:w-5 sm:h-5" />
                <p className="text-white text-base sm:text-xl font-bold">{item.metric}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'whatChanges',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Solution</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Five Automations That <GradientText>Transform</GradientText> Operations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {[
              { num: '01', title: 'AI Chatbots', desc: 'Lead capture', icon: MessageSquare },
              { num: '02', title: 'CRM Sync', desc: 'Data automation', icon: Database },
              { num: '03', title: 'Follow-Ups', desc: 'Auto sequences', icon: RefreshCw },
              { num: '04', title: 'Documents', desc: 'Processing', icon: FileText },
              { num: '05', title: 'Dashboards', desc: 'Internal ops', icon: Settings }
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
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
            <p className="text-gray-400 text-xs sm:text-sm">Each automation is custom-built for HOS Reality's specific workflows.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'auto1',
      render: () => (
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
              <p className="text-amber-400 text-xs">Automation 01</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">AI Chatbots & Lead Capture</h2>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">An AI assistant that handles initial inquiries across WhatsApp and website — responding instantly and capturing lead information automatically.</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                <p className="text-rose-400 text-xs mb-1">Before</p>
                <p className="text-white text-xl sm:text-2xl font-bold">4-8 hrs</p>
                <p className="text-gray-500 text-xs">Response time</p>
              </div>
              <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                <p className="text-emerald-400 text-xs mb-1">After</p>
                <p className="text-white text-xl sm:text-2xl font-bold">&lt;1 min</p>
                <p className="text-gray-500 text-xs">Instant</p>
              </div>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {['Responds instantly, any time of day', 'Asks qualifying questions automatically', 'Captures and organizes lead data', 'Routes hot leads with full context', 'Handles FAQs without humans'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
            <p className="text-amber-400 text-xs sm:text-sm"><span className="font-bold">Impact:</span> 40-60% more leads captured</p>
          </div>
        </div>
      ),
    },
    {
      id: 'auto2',
      render: () => (
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
              <p className="text-amber-400 text-xs">Automation 02</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">CRM Automation & Data Sync</h2>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">Eliminate manual data entry. Information flows automatically from all channels into your CRM — always accurate, always up to date.</p>
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center justify-center gap-1 sm:gap-3 flex-wrap mb-3 sm:mb-4">
                {['WhatsApp', 'Website', 'Portals'].map((src, i) => (
                  <div key={i} className="px-2 sm:px-3 py-1 sm:py-2 bg-white/5 rounded-lg text-gray-400 text-xs">{src}</div>
                ))}
                <ArrowRight size={14} className="text-amber-400 sm:w-4 sm:h-4" />
                <div className="px-3 sm:px-4 py-1 sm:py-2 bg-amber-500/20 rounded-lg text-amber-400 text-xs sm:text-sm font-medium">CRM</div>
              </div>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {['Auto-capture leads from all channels', 'Update deal stages automatically', 'Score and prioritize leads', 'Trigger workflows based on behavior', 'Keep team synced on status'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
            <p className="text-amber-400 text-xs sm:text-sm"><span className="font-bold">Impact:</span> 90% reduction in data entry</p>
          </div>
        </div>
      ),
    },
    {
      id: 'auto3',
      render: () => (
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
              <p className="text-amber-400 text-xs">Automation 03</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Automated Follow-Up Sequences</h2>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">No lead forgotten. Automated sequences nurture every prospect with the right message at the right time.</p>
            <div className="relative pl-6 sm:pl-8 mb-3 sm:mb-4">
              <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500" />
              {[
                { time: 'Instant', action: 'Welcome + initial info' },
                { time: 'Day 1', action: 'Property recommendations' },
                { time: 'Day 3', action: 'Check-in if no response' },
                { time: 'Day 7', action: 'New listings update' },
                { time: 'Day 14+', action: 'Re-engagement trigger' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 relative">
                  <div className="absolute -left-4 sm:-left-5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500 border-2 border-gray-900" />
                  <div className="w-12 sm:w-16 text-amber-400 text-xs sm:text-sm font-medium">{item.time}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{item.action}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Sequences adapt based on engagement — hands off to team when needed.</p>
          </div>
          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
            <p className="text-amber-400 text-xs sm:text-sm"><span className="font-bold">Impact:</span> 60% reduction in lead drop-off</p>
          </div>
        </div>
      ),
    },
    {
      id: 'auto4',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <FileText size={16} className="text-amber-400 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-amber-400 text-xs">Automation 04</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Document Processing</h2>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">AI that extracts data from IDs and documents, auto-fills forms, and tracks completion — eliminating paperwork bottlenecks.</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {[
                { step: 'Extract', desc: 'Pull data from docs', icon: '📄' },
                { step: 'Process', desc: 'Validate info', icon: '⚙️' },
                { step: 'Generate', desc: 'Auto-fill forms', icon: '✨' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                  <p className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.step}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {['Extract data from Emirates ID, passport', 'Auto-fill booking forms and agreements', 'Track document collection status', 'Send reminders for missing docs', 'Maintain compliance-ready records'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <CheckCircle size={12} className="text-amber-400 shrink-0 sm:w-[14px] sm:h-[14px]" />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
            <p className="text-amber-400 text-xs sm:text-sm"><span className="font-bold">Impact:</span> 70% faster processing</p>
          </div>
        </div>
      ),
    },
    {
      id: 'auto5',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Settings size={16} className="text-amber-400 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-amber-400 text-xs">Automation 05</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Internal Ops & Dashboards</h2>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">Real-time visibility into your entire operation. Live dashboards, automated alerts, and performance tracking.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <p className="text-white font-semibold text-sm mb-2 sm:mb-3">Live Dashboards</p>
                {[
                  { label: 'Pipeline overview', status: 'Real-time' },
                  { label: 'Lead source ROI', status: 'By channel' },
                  { label: 'Agent activity', status: 'Ranked' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/5">
                    <span className="text-gray-400 text-xs sm:text-sm">{item.label}</span>
                    <span className="text-amber-400 text-xs">{item.status}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-2 sm:mb-3">Automated Alerts</p>
                {[
                  { label: 'Hot lead notification', status: 'Instant' },
                  { label: 'Stale deal warning', status: '48hr' },
                  { label: 'Target tracking', status: 'Daily' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/5">
                    <span className="text-gray-400 text-xs sm:text-sm">{item.label}</span>
                    <span className="text-orange-400 text-xs">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 p-2 sm:p-3 text-center">
            <p className="text-amber-400 text-xs sm:text-sm"><span className="font-bold">Impact:</span> Complete operational visibility</p>
          </div>
        </div>
      ),
    },
    {
      id: 'dubai',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Dubai Context</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Built for How <GradientText>Dubai</GradientText> Works</h2>
          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-3 sm:mb-4">
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">These automations are configured for Dubai real estate realities:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {[
                { title: 'WhatsApp-First', desc: 'Everything runs through WhatsApp' },
                { title: 'International Buyers', desc: 'Handles timezone differences' },
                { title: 'Off-Plan Focus', desc: 'Payment plan & milestone tracking' },
                { title: 'Golden Visa', desc: 'Auto-flag eligible leads' },
                { title: 'DLD Compliance', desc: 'RERA-aligned templates' },
                { title: 'Broker Networks', desc: 'Commission & attribution tracking' }
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'results',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Expected Results</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What This Delivers</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-5">
            {[
              { metric: 'Lead Response', before: '4-8 hrs', after: '<1 min', icon: Clock },
              { metric: 'Conversion', before: 'Baseline', after: '+40-50%', icon: TrendingUp },
              { metric: 'Manual Work', before: '60-70%', after: '20-30%', icon: Users },
              { metric: 'Data Accuracy', before: 'Inconsistent', after: '95%+', icon: Database }
            ].map((item, i) => (
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
            <p className="text-white text-sm sm:text-lg font-semibold">Annual Value: <span className="text-amber-400">AED 2.4-3.2M</span></p>
            <p className="text-gray-500 text-xs sm:text-sm">From recovered leads, time savings, conversion</p>
          </div>
        </div>
      ),
    },
    {
      id: 'roadmap',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Implementation</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Phased <GradientText>Rollout</GradientText></h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              { phase: 'Phase 1', time: 'Weeks 1-4', title: 'Foundation', items: ['AI chatbot', 'CRM integration', 'Lead scoring'], status: 'Quick wins' },
              { phase: 'Phase 2', time: 'Weeks 5-8', title: 'Automation', items: ['Follow-ups', 'Documents', 'Workflows'], status: 'Core system' },
              { phase: 'Phase 3', time: 'Weeks 9-12', title: 'Intelligence', items: ['Dashboards', 'Alerts', 'Optimization'], status: 'Full operation' }
            ].map((item, i) => (
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
                  <span className="px-2 sm:px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs hidden sm:inline">{item.status}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.items.map((itm, j) => (
                    <span key={j} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-gray-400 text-xs sm:text-sm">{itm}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'aboutUs',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Your Implementation Partner</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About <GradientText>Scooper AI</GradientText></h2>
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
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">We're an AI automation agency that builds custom intelligent systems for businesses. We don't sell off-the-shelf software — we design, build, and deploy automation that fits exactly how you operate.</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { title: 'Custom-Built', desc: 'For your workflows' },
                { title: 'Full Integration', desc: 'With existing tools' },
                { title: 'Ongoing Support', desc: 'Continuous optimization' }
              ].map((item, i) => (
                <div key={i} className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl text-center">
                  <p className="text-amber-400 font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">We handle everything — design to deployment to optimization.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to <GradientText>Transform</GradientText> Operations?</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">Let's discuss how these automations can work specifically for HOS Reality. We'll map your workflows, identify quick wins, and build a system that grows with you.</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '12 wks', label: 'To deploy' },
              { value: '2.4M+', label: 'AED/year value' },
              { value: '+50%', label: 'Conversion' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-2 sm:p-4">
                <p className="text-amber-400 text-lg sm:text-2xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity text-sm sm:text-base">
            <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
            Schedule Discovery Call
          </a>
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Bot size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-gray-400 text-sm">Prepared by <span className="text-white font-medium">Scooper AI</span></span>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
