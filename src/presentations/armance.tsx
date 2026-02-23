import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import {
  Rocket,
  Clock,
  Users,
  Globe,
  Zap,
  CheckCircle,
  Bot,
  Shield,
  BarChart3,
  Newspaper,
  Search,
  Send,
  TrendingUp,
  Palette,
  BookOpen,
} from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Armance',
  description: 'AI Automation Proposal — Intelligent PR & Communications for Art, Culture & Design',
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
            <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">armance</span>
            </div>
            <p className="text-gray-500 text-sm">Prepared exclusively for Romain & the Armance team</p>
          </div>

          <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
            <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could reclaim</p>
            <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              $200K–$400K
            </span>
            <p className="text-gray-400 text-sm sm:text-base mt-1">per year in operational capacity — without adding headcount?</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            {[
              { value: '65%', label: 'Team time on operations vs strategy', icon: Clock },
              { value: '16+', label: 'Prestige clients tracked manually', icon: Users },
              { value: '10', label: 'Cities coordinated by a team of 6', icon: Globe },
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
                4 custom AI agents to automate media monitoring, client reporting, press pitching, and cultural intelligence — freeing <span className="text-white font-bold">~50 hours every week</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
            <span>Press</span>
            <div className="px-2.5 py-1.5 bg-white/10 rounded-lg text-gray-400 font-mono text-xs border border-white/10 shadow-inner">&rarr;</div>
            <span>to see how</span>
          </div>
        </div>
      ),
    },

    // Slide 2: The Challenge
    {
      id: 'challenge',
      render: () => {
        const challenges = [
          { icon: Newspaper, title: 'Media Monitoring at Scale', desc: 'Tracking press coverage across Le Monde, The Art Newspaper, Madame Figaro, France Inter and dozens more — in French, English, and Italian — for 16+ clients. Mostly manual, easily missed.' },
          { icon: Clock, title: 'Reporting Overhead', desc: 'Each client expects regular coverage reports with press clippings, media value, and strategic analysis. With 16+ accounts, this alone consumes days every month.' },
          { icon: Send, title: 'Pitch Volume', desc: 'Personalised press pitches to cultural editors, art critics, and lifestyle journalists — each tailored to the client\'s voice, the journalist\'s beat, and the specific exhibition or event.' },
          { icon: Globe, title: 'International Coordination', desc: 'Operating across Paris, Brussels, Venice, Cork, Bordeaux, Marseille, Dijon, Bonifacio, and Rouen — a 6-person team can\'t be everywhere. Intelligence gaps are inevitable.' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Challenge</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              World-Class Clients, <GradientText>Boutique Team</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                Armance manages communications for Art Paris, Galleria Continua, Assouline, BNP Paribas Banque Privée, and Jeu de Paume — institutions that expect <span className="text-white font-semibold">precision, speed, and global reach</span>. With a team of 6 across 10 cities, the operational load is immense.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {challenges.map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={14} className="text-rose-400 sm:w-4 sm:h-4" />
                      <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                    </div>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
              <p className="text-rose-400 text-xs sm:text-sm">
                Your team's expertise is irreplaceable. But <span className="text-white font-bold">65% of their time goes to operations</span> that AI can handle — time that should be spent on strategy, relationships, and creative direction.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 3: Today vs AI-Powered
    {
      id: 'vision',
      render: () => {
        const comparisons = [
          { area: 'Media Monitoring', today: 'Manual Google Alerts and daily press scanning across 16+ clients in 3+ languages', ai: 'AI agent monitors all sources 24/7, flags coverage instantly, delivers smart summaries' },
          { area: 'Client Reporting', today: '4–6 hours per client compiling press clippings, coverage metrics, and analysis', ai: 'Auto-generated reports with coverage analysis, media value, and strategic insights in 15 minutes' },
          { area: 'Press Pitching', today: '45+ minutes crafting each pitch from scratch, tailored to journalist and client', ai: 'AI drafts in client voice, tuned to journalist beat — 10 min review and send' },
          { area: 'Cultural Intelligence', today: 'Ad hoc research across scattered sources — art fairs, exhibitions, industry moves', ai: 'Weekly AI-curated briefings on events, opportunities, and competitor activity globally' },
          { area: 'International Reach', today: 'Limited by team bandwidth across 10 cities; gaps in non-core markets', ai: 'AI extends coverage to every market — no exhibition, review, or mention goes unnoticed' },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Transformation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Today vs. <GradientText>AI-Powered</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {comparisons.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
                  <p className="text-amber-400 text-xs font-semibold mb-1.5 sm:mb-2">{item.area}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                      <span className="text-gray-400 text-xs sm:text-sm">{item.today}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="text-gray-300 text-xs sm:text-sm">{item.ai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Newspaper, metric: '~50 hrs', label: 'Freed per week' },
                { icon: Zap, metric: 'Real-time', label: 'Coverage detection' },
                { icon: Globe, metric: '10+', label: 'Cities covered by AI' },
              ].map((item, i) => (
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

    // Slide 4: Solution Architecture
    {
      id: 'architecture',
      render: () => {
        const modules = [
          { num: '01', title: 'Media Monitor', desc: 'Real-time coverage', icon: Search },
          { num: '02', title: 'Report Generator', desc: 'Auto client reports', icon: BarChart3 },
          { num: '03', title: 'Pitch Agent', desc: 'AI-drafted pitches', icon: Send },
          { num: '04', title: 'Cultural Intel', desc: 'Opportunity briefings', icon: BookOpen },
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Blueprint</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              4 AI Agents — <GradientText>One Intelligent System</GradientText>
            </h2>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-4 sm:mb-5">
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Each agent specialises in a core PR workflow. Together, they form an always-on intelligence layer that lets your team of 6 operate with the reach and speed of a team three times larger.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {modules.map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-amber-500/30 transition-all">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center mb-2 sm:mb-3">
                      <item.icon size={16} className="text-amber-400 sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <p className="text-amber-400 text-xs mb-0.5 sm:mb-1">{item.num}</p>
                    <p className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold mb-1">Armance's Advantage</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    15 years of Romain's relationships and cultural expertise — amplified by AI. The agents learn your clients' voices, your journalists' preferences, and your strategic positioning. They <span className="text-emerald-400 font-medium">extend your reach without diluting your identity</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    // Slide 5: Module 1 — Cultural Media Monitoring Agent
    {
      id: 'module1',
      render: () => {
        const capabilities = [
          'Monitors news, cultural press, social media, and podcasts in French, English, and Italian — 24/7',
          'Tracks coverage for all 16+ clients simultaneously across publications like Le Monde, The Art Newspaper, and Madame Figaro',
          'Instant alerts when a client, artist, or exhibition is mentioned — with smart summaries and context',
          'Weekly coverage digest per client: what was published, where, tone, and estimated reach',
          'Tracks competitor agencies and their clients for strategic intelligence',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Search size={16} className="text-blue-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-blue-400 text-xs">Module 01</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cultural Media Monitoring Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An always-on AI agent that scans cultural press, art publications, lifestyle media, and social platforms worldwide — detecting every mention of your clients, their artists, and their events in real time.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Hours / Days</p>
                  <p className="text-gray-500 text-xs">To find coverage manually</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Minutes</p>
                  <p className="text-gray-500 text-xs">Real-time multilingual detection</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-blue-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-lg sm:rounded-xl border border-blue-500/20 p-2 sm:p-3 text-center">
              <p className="text-blue-400 text-xs sm:text-sm">
                <span className="font-bold">Saves 10–20 hrs/wk.</span> No article, review, or mention goes unnoticed — across any language or market.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 6: Module 2 — Press Report Generator
    {
      id: 'module2',
      render: () => {
        const capabilities = [
          'Auto-generates monthly press coverage reports for each client with clippings, reach estimates, and visual summaries',
          'AI analyses tone and positioning across articles — identifies what messaging is resonating with media',
          'Compares coverage performance period-over-period and against industry benchmarks',
          'Reports delivered in branded, client-ready format — ready to review and send in 15 minutes',
          'Tracks media value and equivalent advertising value automatically across all publications',
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
                <p className="text-amber-400 text-xs">Module 02</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Press Coverage Report Generator</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An AI agent that automatically compiles, analyses, and formats press coverage reports for every client — transforming hours of manual clipping and spreadsheet work into a 15-minute review.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">4–6 hours</p>
                  <p className="text-gray-500 text-xs">Per client report</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">15 min review</p>
                  <p className="text-gray-500 text-xs">Auto-generated reports</p>
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
                <span className="font-bold">Saves 12–20 hrs/wk.</span> 16+ client reports that once took days now take an afternoon of reviews.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 7: Module 3 — Media Pitch & Content Agent
    {
      id: 'module3',
      render: () => {
        const capabilities = [
          'Drafts personalised press pitches in each client\'s voice — from Galleria Continua\'s gallery openings to Assouline\'s luxury book launches',
          'Adapts tone and angle for each journalist based on their publication, beat, and past coverage patterns',
          'Generates press releases, exhibition summaries, and media kits from event briefs and client notes',
          'Supports French and English drafting with culturally appropriate nuance for each market',
          'Learns from your team\'s edits — improving accuracy and voice matching over time',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Send size={16} className="text-emerald-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-emerald-400 text-xs">Module 03</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Media Pitch & Content Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An AI writing agent that drafts personalised press pitches, press releases, and content in each client's distinct voice — tailored to specific journalists and cultural editors across your network.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">45 min</p>
                  <p className="text-gray-500 text-xs">Per pitch from scratch</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">10 min</p>
                  <p className="text-gray-500 text-xs">Review & personalise</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-emerald-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-2 sm:p-3 text-center">
              <p className="text-emerald-400 text-xs sm:text-sm">
                <span className="font-bold">Saves 8–15 hrs/wk.</span> Your team's cultural instinct, accelerated by AI — more pitches, better targeting, faster turnaround.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 8: Module 4 — Cultural Intelligence Agent
    {
      id: 'module4',
      render: () => {
        const capabilities = [
          'Tracks upcoming art fairs, exhibitions, cultural events, and biennales globally — from Art Basel to Venice Biennale',
          'Monitors industry moves: gallery openings, museum appointments, artist signings, collection announcements',
          'Identifies PR opportunities aligned to each client\'s positioning and upcoming calendar',
          'Delivers curated weekly briefings to your team with prioritised opportunities and strategic context',
          'Tracks cultural press trends — what topics, movements, and narratives are gaining editorial attention',
        ];

        return (
          <div className="w-full max-w-3xl px-4 relative">
            <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
              <Rocket size={12} />
              Book a Call
            </a>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <BookOpen size={16} className="text-purple-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-purple-400 text-xs">Module 04</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cultural Intelligence Agent</h2>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-3 sm:mb-4">
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                An always-on research agent that tracks the global cultural landscape — art fairs, exhibitions, institutional changes, editorial trends — and delivers actionable intelligence to your team every week.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 text-center">
                  <p className="text-rose-400 text-xs mb-1">Before</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Scattered</p>
                  <p className="text-gray-500 text-xs">Across dozens of sources</p>
                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 text-center">
                  <p className="text-emerald-400 text-xs mb-1">After</p>
                  <p className="text-white text-xl sm:text-2xl font-bold">Weekly Briefing</p>
                  <p className="text-gray-500 text-xs">Curated opportunities</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <CheckCircle size={12} className="text-purple-400 shrink-0 sm:w-[14px] sm:h-[14px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-lg sm:rounded-xl border border-purple-500/20 p-2 sm:p-3 text-center">
              <p className="text-purple-400 text-xs sm:text-sm">
                <span className="font-bold">Saves 5–10 hrs/wk.</span> Your team is always informed, always prepared — spotting opportunities before competitors do.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 9: Competitive Landscape
    {
      id: 'landscape',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Industry Context</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            The Cultural PR <GradientText>AI Shift</GradientText>
          </h2>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">66%</p>
              <p className="text-gray-300 text-sm sm:text-base">of PR professionals now use AI frequently in their work</p>
              <p className="text-gray-500 text-xs mt-1">Source: USC / Muck Rack 2024</p>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {[
                { name: 'Mazarine', detail: 'Has a dedicated "AI Craftsmanship" practice — integrating AI across luxury, fashion, and cultural communications', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
                { name: 'Communic\'Art', detail: '20+ years in art PR, now scaling digital strategy and data-driven approaches for galleries and institutions', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { name: 'L\'art en plus', detail: 'Investing in content automation and digital cultural consulting for patrons and philanthropists', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-lg sm:rounded-xl border ${item.border} p-3 sm:p-4`}>
                  <p className={`${item.color} text-sm sm:text-base font-semibold mb-1`}>{item.name}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-rose-500/10 rounded-lg sm:rounded-xl border border-rose-500/20 p-3 sm:p-4 text-center">
            <p className="text-rose-400 text-xs sm:text-sm">
              AI systems improve with data. <span className="text-white font-bold">Agencies that start building this advantage now will be increasingly difficult to catch.</span>
            </p>
          </div>
        </div>
      ),
    },

    // Slide 10: Impact Summary
    {
      id: 'impact',
      render: () => (
        <div className="w-full max-w-3xl px-4 relative">
          <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
            <Rocket size={12} />
            Book a Call
          </a>
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">The Numbers</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            What AI <GradientText>Unlocks</GradientText> for Armance
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {[
              { value: '~50 hrs', label: 'Freed every week', icon: Clock },
              { value: '$310K', label: 'In reclaimed capacity', icon: TrendingUp },
              { value: '2–3x', label: 'Client capacity without new hires', icon: Users },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl sm:rounded-2xl border border-amber-500/20 p-3 sm:p-5 text-center">
                <item.icon size={20} className="text-amber-400 mx-auto mb-2 sm:mb-3 sm:w-6 sm:h-6" />
                <p className="text-amber-400 text-xl sm:text-2xl md:text-3xl font-bold mb-1">{item.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-5 mb-4 sm:mb-5">
            <p className="text-rose-400 text-xs tracking-widest uppercase mb-3 sm:mb-4 text-center">Every month without AI</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: '300+', label: 'Hours of manual work', color: 'text-rose-400' },
                { value: '$25K+', label: 'In opportunity cost', color: 'text-rose-400' },
                { value: 'Zero', label: 'Data advantage built', color: 'text-rose-500' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className={`${item.color} text-xl sm:text-2xl font-bold mb-1`}>{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4">
            <div className="space-y-2 sm:space-y-3">
              {[
                { label: 'Media Monitoring Agent', saved: '10–20 hrs/wk', color: 'bg-blue-500' },
                { label: 'Press Report Generator', saved: '12–20 hrs/wk', color: 'bg-amber-500' },
                { label: 'Media Pitch Agent', saved: '8–15 hrs/wk', color: 'bg-emerald-500' },
                { label: 'Cultural Intel Agent', saved: '5–10 hrs/wk', color: 'bg-purple-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                  <span className="text-gray-300 text-xs sm:text-sm flex-1">{item.label}</span>
                  <span className="text-white text-xs sm:text-sm font-semibold">{item.saved}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // Slide 11: Implementation Roadmap
    {
      id: 'roadmap',
      render: () => {
        const phases = [
          {
            title: 'Discovery & First Agent',
            time: 'Weeks 1–2',
            status: 'Phase 1',
            items: ['Audit current PR workflows, tools, and client roster', 'Media Monitoring Agent configured and deployed', 'Coverage alerts live for priority clients', 'Zero cost — first automation is free'],
          },
          {
            title: 'Reporting Automation',
            time: 'Weeks 3–4',
            status: 'Phase 2',
            items: ['Report Generator connected to monitoring data', 'Client report templates configured per brand', 'First automated reports generated for review', 'Team onboarded to new review workflow'],
          },
          {
            title: 'Pitch & Content Agent',
            time: 'Month 2',
            status: 'Phase 3',
            items: ['AI trained on client voices and brand guidelines', 'Journalist database and preference mapping built', 'First AI-drafted pitches in production', 'Bilingual French/English drafting active'],
          },
          {
            title: 'Full Intelligence Layer',
            time: 'Month 3+',
            status: 'Phase 4',
            items: ['Cultural Intelligence Agent delivering weekly briefings', 'All 4 agents operating as integrated system', 'Continuous improvement from team feedback', 'New client onboarding automated'],
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
              Phased <GradientText>Rollout</GradientText>
            </h2>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
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

            <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20 p-3 sm:p-4 text-center">
              <p className="text-emerald-400 text-xs sm:text-sm">
                <span className="text-white font-bold">Zero-risk start</span> — We configure your first automation completely free. You see results before committing to anything further.
              </p>
            </div>
          </div>
        );
      },
    },

    // Slide 12: About Scooper AI
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
            Why <GradientText>Scooper AI</GradientText>
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

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { icon: Users, title: '50+ Businesses', desc: 'AI systems built for agencies, professional services, and creative businesses worldwide' },
                { icon: Palette, title: 'Cultural Sensitivity', desc: 'AI tuned to the nuance of art, luxury, and cultural communications — not generic automation' },
                { icon: Globe, title: 'Multilingual', desc: 'Agents that work across French, English, and Italian — matching Armance\'s international reach' },
                { icon: Zap, title: 'Zero-Risk Start', desc: 'First automation configured completely free. See results before committing further' },
              ].map((item, i) => (
                <div key={i} className="p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={14} className="text-amber-400 sm:w-4 sm:h-4" />
                    <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                  </div>
                  <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm sm:text-base">
              Custom-built AI agents for Armance's specific workflows, client roster, and cultural positioning. We add an intelligence layer that amplifies your team's expertise — not a replacement.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 13: Closing/CTA
    {
      id: 'closing',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Scale Your <GradientText>Cultural Intelligence</GradientText>?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Armance already has what matters most — 15 years of relationships, prestigious clients from Art Paris to BNP Paribas Banque Privée, and a reputation built on cultural expertise across 10 cities. Now add the AI layer that lets your team of 6 operate like 18.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '~50 hrs', label: 'Freed every week' },
              { value: '$310K', label: 'Capacity reclaimed' },
              { value: 'Week 2', label: 'First AI results' },
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
