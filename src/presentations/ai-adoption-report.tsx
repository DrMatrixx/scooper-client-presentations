import type { PresentationConfig } from '../types/presentation';
import {
  TrendingUp, Clock, Zap, Shield, Building2, ArrowRight, ArrowUp,
  CheckCircle, Lightbulb, Brain, DollarSign, BarChart3, Bot, Key
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie,
  Cell, AreaChart, Area, ComposedChart, Line
} from 'recharts';

// Chart data
const adoptionData = [
  { name: 'Full Production', value: 7, fill: '#22c55e' },
  { name: 'Active Pilots', value: 62, fill: '#3b82f6' },
  { name: 'Early/Ad-hoc', value: 31, fill: '#64748b' },
];

const roiData = [
  { name: 'Transformational', value: 37.6, fill: '#22c55e' },
  { name: 'Modest/Positive', value: 44.3, fill: '#3b82f6' },
  { name: 'Neutral', value: 13, fill: '#64748b' },
  { name: 'Negative', value: 5, fill: '#ef4444' },
];

const impactData = [
  { category: 'Time Savings', share: 35, fill: '#22c55e' },
  { category: 'Output', share: 14.5, fill: '#3b82f6' },
  { category: 'Quality', share: 14.4, fill: '#a855f7' },
  { category: 'New Capabilities', share: 12, fill: '#14b8a6' },
  { category: 'Decisions', share: 8.8, fill: '#f97316' },
  { category: 'Cost Savings', share: 7.9, fill: '#22c55e' },
  { category: 'Revenue', share: 4.2, fill: '#f97316' },
  { category: 'Risk', share: 3.4, fill: '#ef4444' },
];

const impactIcons = [
  { name: 'Time Savings', pct: '35.0%', icon: Clock, count: 865 },
  { name: 'Output', pct: '14.5%', icon: ArrowUp, count: 358 },
  { name: 'Quality', pct: '14.4%', icon: CheckCircle, count: 356 },
  { name: 'New Capabilities', pct: '12.0%', icon: Lightbulb, count: 296 },
  { name: 'Decisions', pct: '8.8%', icon: Brain, count: 218 },
  { name: 'Cost Savings', pct: '7.9%', icon: DollarSign, count: 195 },
  { name: 'Revenue', pct: '4.2%', icon: BarChart3, count: 105 },
  { name: 'Risk', pct: '3.4%', icon: Shield, count: 84 },
];

const orgSizeData = [
  { size: '1-50', roi: 17.6 },
  { size: '51-200', roi: 9.3 },
  { size: '201-1K', roi: 4.6 },
  { size: '1K-5K', roi: 0.9 },
  { size: '5000+', roi: 7.2 },
];

const agentVsNonAgent = [
  { name: 'High ROI', agent: 44, nonAgent: 37 },
  { name: 'Transform.', agent: 17, nonAgent: 11 },
];

const presentation: PresentationConfig = {
  title: 'Enterprise AI Adoption & ROI',
  description: '2024-2025 Research Report: What Organizations Are Actually Getting Value From',
  slides: [
    {
      id: 'cover',
      render: () => (
        <div className="text-center space-y-4 sm:space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm">
            2024–2025 Research Report
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Enterprise AI Adoption & ROI
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            What Organizations Are Actually Getting Value From
          </p>
          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-xs sm:text-sm text-neutral-500">
            <span>1,000+ Organizations</span>
            <span className="hidden sm:inline">•</span>
            <span>~3,500 Use Cases</span>
          </div>
        </div>
      ),
    },
    {
      id: 'key-findings',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Findings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {[
              { icon: TrendingUp, text: 'Most organizations already seeing positive ROI', color: 'text-green-400' },
              { icon: Clock, text: 'ROI expectations: months, not years', color: 'text-blue-400' },
              { icon: Zap, text: 'Automation & agents outperform basic tools', color: 'text-yellow-400' },
              { icon: Building2, text: 'Systematic adopters see greatest returns', color: 'text-purple-400' },
            ].map((item, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl p-4 sm:p-6 border border-neutral-800 flex sm:block items-center gap-4">
                <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} sm:mb-4 flex-shrink-0`} />
                <p className="text-sm sm:text-lg text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'adoption-state',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Current Adoption State</h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1">Nearly all enterprises use AI — but depth varies</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <div className="w-full sm:w-1/2 h-48 sm:h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={adoptionData} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {adoptionData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full sm:w-1/2 space-y-3">
              {adoptionData.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: d.fill }} />
                  <span className="text-neutral-300 text-sm sm:text-base">{d.name}</span>
                  <span className="ml-auto font-mono text-base sm:text-lg text-white">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'agents-rise',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Rise of AI Agents</h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1">Production deployment accelerated dramatically</p>
          </div>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer>
              <AreaChart data={[{ quarter: 'Q1 2025', value: 11 }, { quarter: 'Q3 2025', value: 42 }]}>
                <defs>
                  <linearGradient id="agentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} domain={[0, 50]} />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fill="url(#agentGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 sm:p-4 text-center text-sm sm:text-base">
            <span className="text-blue-400">11% → 42%</span> <span className="text-white">with production agents in 6 months</span>
          </div>
        </div>
      ),
    },
    {
      id: 'spend-growth',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">AI Spend Is Growing</h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1">Despite skepticism, budgets are increasing</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 border border-neutral-800">
              <p className="text-neutral-400 text-xs sm:text-sm mb-2">Average Annual AI Spend</p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="text-center">
                  <p className="text-neutral-500 text-xs">Early 2025</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">$114M</p>
                </div>
                <ArrowRight className="text-green-400 w-5 h-5" />
                <div className="text-center">
                  <p className="text-neutral-500 text-xs">Late 2025</p>
                  <p className="text-2xl sm:text-3xl font-bold text-green-400">$130M</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 border border-neutral-800 flex flex-col justify-center items-center">
              <p className="text-4xl sm:text-6xl font-bold text-green-400">90%+</p>
              <p className="text-neutral-400 text-sm mt-1">planning increased spend</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'roi-distribution',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">ROI Distribution</h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1">What organizations are seeing today</p>
          </div>
          <div className="h-48 sm:h-56">
            <ResponsiveContainer>
              <BarChart data={roiData} layout="vertical">
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} domain={[0, 50]} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} width={100} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {roiData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">82% Positive ROI</span>
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">Only 5% Negative</span>
          </div>
        </div>
      ),
    },
    {
      id: 'impact-categories',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Buying Back Time</h2>
            <p className="text-neutral-400 text-sm mt-1">Time-to-value dominates</p>
          </div>
          <div className="h-64 sm:h-72">
            <ResponsiveContainer>
              <BarChart data={impactData} layout="vertical">
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} domain={[0, 40]} tickFormatter={v => `${v}%`} />
                <YAxis type="category" dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} width={90} />
                <Bar dataKey="share" radius={[0, 4, 4, 0]}>
                  {impactData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400">1. Time 35%</span>
            <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">2. Output 14.5%</span>
            <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">3. Quality 14.4%</span>
          </div>
        </div>
      ),
    },
    {
      id: 'impact-breakdown',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Impact Categories</h2>
            <p className="text-neutral-400 text-sm mt-1">Primary benefit split (n=2,477)</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {impactIcons.map((item, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl p-3 sm:p-4 border border-neutral-800 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <p className="text-xs font-medium text-white">{item.name}</p>
                <p className="text-blue-400 font-bold text-sm mt-1">{item.pct}</p>
                <p className="text-neutral-500 text-xs">({item.count})</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'time-savings',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Time Savings Compound</h2>
            <p className="text-neutral-400 text-sm mt-1">Even "minor" gains create big impact</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-8 border border-neutral-800 text-center">
              <p className="text-neutral-400 text-xs sm:text-sm mb-1">Most Common</p>
              <p className="text-3xl sm:text-5xl font-bold text-blue-400">~5 hrs</p>
              <p className="text-neutral-500 text-xs sm:text-sm mt-1">per week</p>
            </div>
            <div className="bg-neutral-900 rounded-xl p-4 sm:p-8 border border-neutral-800 text-center">
              <p className="text-neutral-400 text-xs sm:text-sm mb-1">Annual</p>
              <p className="text-3xl sm:text-5xl font-bold text-green-400">7 wks</p>
              <p className="text-neutral-500 text-xs sm:text-sm mt-1">recovered</p>
            </div>
          </div>
          <p className="text-center text-neutral-500 text-xs sm:text-sm">10 hours/week = ~10 work weeks annually</p>
        </div>
      ),
    },
    {
      id: 'org-size',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">ROI by Org Size</h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              { size: '1–50', pattern: 'Highest transformational impact', color: 'bg-green-500', pct: '17.6%' },
              { size: '51–200', pattern: 'Strong conversion', color: 'bg-blue-500', pct: '9.3%' },
              { size: '201–1K', pattern: 'Output focus', color: 'bg-blue-400', pct: '4.6%' },
              { size: '1K–5K', pattern: 'Integration challenges', color: 'bg-neutral-500', pct: '0.9%' },
              { size: '5,000+', pattern: 'Measured ROI', color: 'bg-purple-500', pct: '7.2%' },
            ].map((d, i) => (
              <div key={i} className="bg-neutral-900 rounded-lg p-3 border border-neutral-800 flex items-center gap-3">
                <div className={`w-1.5 h-8 rounded-full ${d.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-white">{d.size} employees</p>
                  <p className="text-neutral-400 text-xs truncate">{d.pattern}</p>
                </div>
                <span className="font-mono text-sm text-blue-400 flex-shrink-0">{d.pct}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'org-size-chart',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Who Wins Big</h2>
            <p className="text-neutral-400 text-sm mt-1">Smaller orgs convert faster to transformation</p>
          </div>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer>
              <ComposedChart data={orgSizeData}>
                <XAxis dataKey="size" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} domain={[0, 20]} tickFormatter={v => `${v}%`} />
                <Bar dataKey="roi" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="roi" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400">🏆 Small orgs 17.6%</span>
            <span className="px-2 py-1 rounded-full bg-neutral-700 text-neutral-300">1K-5K lowest 0.9%</span>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-center text-xs text-blue-300">
            Large enterprises face complexity and integration debt
          </div>
        </div>
      ),
    },
    {
      id: 'agent-revolution',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Agent Revolution</h2>
            <p className="text-neutral-400 text-sm mt-1">Autonomous agents deliver higher ROI</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1 h-40 sm:h-48">
              <ResponsiveContainer>
                <BarChart data={agentVsNonAgent}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} domain={[0, 50]} tickFormatter={v => `${v}%`} />
                  <Bar dataKey="agent" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="nonAgent" fill="#64748b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex sm:flex-col gap-2 justify-center">
              <span className="px-2 py-1 rounded-full bg-blue-500 text-white text-xs flex items-center gap-1"><Bot className="w-3 h-3" /> 130 Agents</span>
              <span className="px-2 py-1 rounded-full bg-green-500 text-white text-xs flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 44% High ROI</span>
              <div className="hidden sm:flex gap-2 text-xs text-neutral-400 mt-2">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded" /> Agent</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-neutral-500 rounded" /> Other</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <p className="font-semibold text-green-400 text-sm mb-2 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Success Patterns</p>
              <ul className="text-xs text-neutral-300 space-y-1">
                <li>• Customer support triage</li>
                <li>• Backlog prioritization</li>
                <li>• Deployment validation</li>
                <li>• Partner prospecting</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <p className="font-semibold text-yellow-400 text-sm mb-2 flex items-center gap-1"><Key className="w-3 h-3" /> Keys to Success</p>
              <ul className="text-xs text-neutral-300 space-y-1">
                <li>• Tool access (APIs)</li>
                <li>• Knowledge grounding</li>
                <li>• Guardrails & error handling</li>
                <li>• Human review</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'automation-wins',
      render: () => (
        <div className="space-y-4 sm:space-y-8 w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Automation Wins</h2>
          <p className="text-neutral-400 text-sm">Highest-performing use cases:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Workflow Automation', 'End-to-End Agents', 'Multi-step Orchestration'].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 sm:p-6 border border-blue-500/30 text-center">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
                <p className="font-medium text-sm text-white">{t}</p>
              </div>
            ))}
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 border border-neutral-800 text-center">
            <p className="text-base sm:text-xl text-white">The next wave of AI value:</p>
            <p className="text-lg sm:text-2xl font-bold text-green-400 mt-2">Doing work, not just assisting</p>
          </div>
        </div>
      ),
    },
    {
      id: 'takeaways',
      render: () => (
        <div className="space-y-4 sm:space-y-6 w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Strategic Takeaways</h2>
          <div className="space-y-2">
            {[
              'ROI is real and already materializing',
              'Automation & agents are highest-leverage',
              'Time savings powerful — not the end goal',
              'Risk reduction drives transformation',
              'Systematic adoption beats pilots',
              'Rethink ROI measurement frameworks',
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-neutral-900 rounded-lg p-3 border border-neutral-800">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-xs flex-shrink-0">{i + 1}</span>
                <p className="text-sm text-white">{t}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/30 text-center">
            <p className="text-sm text-neutral-300">Not "Does AI deliver value?" but:</p>
            <p className="text-base sm:text-lg font-bold mt-1 text-white">Who will move fast enough to capture it?</p>
          </div>
        </div>
      ),
    },
  ],
};

export default presentation;
