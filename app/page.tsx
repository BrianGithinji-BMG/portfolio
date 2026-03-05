'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, BarChart2, ChevronDown } from 'lucide-react'

const TICKER_ITEMS = [
  'Financial Engineering',
  'Quantitative Research',
  'Derivatives Pricing',
  'Risk Management',
  'Portfolio Optimisation',
  'Algorithmic Trading',
  'Stochastic Calculus',
  'Fixed Income Analysis',
  'African Capital Markets',
  'CFA Level I',
]

export default function HomePage() {
  const tickerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Top bar — market data strip */}
        <div className="absolute top-0 left-0 right-0 h-8 border-b border-[#1e2329] flex items-center overflow-hidden bg-[#0d1117]/80 backdrop-blur-sm z-10">
          <div className="flex items-center gap-8 animate-[ticker_30s_linear_infinite] whitespace-nowrap px-4">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-[#6b7280] tracking-widest uppercase flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-[#c9a84c] inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
                  Financial Engineer
                </span>
              </div>

              <h1
                className="font-display text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6"
                style={{ fontFamily: 'DM Serif Display, serif' }}
              >
                Brian{' '}
                <span
                  className="italic"
                  style={{ color: 'var(--accent)', fontStyle: 'italic' }}
                >
                  Githinji
                </span>
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed mb-4 max-w-lg">
                Building at the intersection of{' '}
                <span className="text-[#e8eaed]">quantitative finance</span>,{' '}
                <span className="text-[#e8eaed]">machine learning</span>, and{' '}
                <span className="text-[#e8eaed]">African capital markets</span>.
              </p>

              <p className="text-[#6b7280] text-sm leading-relaxed mb-8 max-w-lg">
                Final-year BSc Financial Engineering @ JKUAT · CFA Level I Candidate (Nov 2026) ·
                Quantitative Research · Derivatives Pricing · Portfolio Optimisation
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View Projects <ArrowRight size={14} />
                </Link>
                <Link href="/research" className="btn-outline">
                  Research
                </Link>
                <Link href="/about" className="btn-outline">
                  About
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#1e2329]">
                {[
                  { value: '6+', label: 'individual projects' },
                  { value: '3rd', label: 'CFA Challenge' },
                  { value: 'L1', label: 'CFA Candidate' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="stat-number">{value}</div>
                    <div className="text-[11px] font-mono text-[#6b7280] tracking-widest uppercase mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — decorative panel */}
            <div className="hidden lg:block relative">
              <div className="relative border border-[#1e2329] bg-[#0d1117] p-6 glow-accent">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#1e2329]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-4 font-mono text-[11px] text-[#6b7280] tracking-widest">
                    brian@quant:~$ portfolio.py
                  </span>
                </div>
                {/* Code content */}
                <div className="font-mono text-sm space-y-1">
                  <div>
                    <span className="text-[#6b7280]">{'# '}</span>
                    <span className="text-[#8b949e]">Quantitative Profile</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#79c0ff]">profile</span>
                    <span className="text-[#e8eaed]"> = {'{'}</span>
                  </div>
                  {[
                    ['degree', '"BSc Financial Engineering"'],
                    ['institution', '"JKUAT, Kenya"'],
                    ['cfa_level', '"Level I — Nov 2026"'],
                    ['specialisation', '"Investment Strategies, Risk Management, & Market Analysis"'],
                    ['markets', '"NSE, African Equities,NYSE,NASDAQ"'],
                  ].map(([key, val]) => (
                    <div key={key} className="pl-4">
                      <span className="text-[#c9a84c]">"{key}"</span>
                      <span className="text-[#e8eaed]">: </span>
                      <span className="text-[#3fb950]">{val}</span>
                      <span className="text-[#e8eaed]">,</span>
                    </div>
                  ))}
                  <div>
                    <span className="text-[#e8eaed]">{'}'}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-[#79c0ff]">skills</span>
                    <span className="text-[#e8eaed]"> = [</span>
                  </div>
                  {[
                    '"Derivatives Pricing"',
                    '"Monte Carlo Simulation"',
                    '"Portfolio Optimisation"',
                    '"VaR / CVaR Modelling"',
                    '"Algorithmic Trading"',
                  ].map((skill) => (
                    <div key={skill} className="pl-4">
                      <span className="text-[#3fb950]">{skill}</span>
                      <span className="text-[#e8eaed]">,</span>
                    </div>
                  ))}
                  <div>
                    <span className="text-[#e8eaed]">]</span>
                  </div>
                  <div className="mt-3 text-[#6b7280]">
                    <span className="text-[#c9a84c]">█</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <ChevronDown size={16} className="text-[#c9a84c]" />
        </div>
      </section>

      {/* ── Expertise strip ── */}
      <section className="border-y border-[#1e2329] bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1e2329]">
          {[
            {
              icon: <TrendingUp size={20} className="text-[#c9a84c]" />,
              title: 'Quantitative Research',
              desc: 'Stochastic calculus, financial time series, algorithmic strategy development and backtesting on African equity markets.',
            },
            {
              icon: <Shield size={20} className="text-[#c9a84c]" />,
              title: 'Risk & Derivatives',
              desc: 'Options pricing via Black-Scholes & Monte Carlo, VaR/CVaR modelling, and extreme risk management frameworks.',
            },
            {
              icon: <BarChart2 size={20} className="text-[#c9a84c]" />,
              title: 'Portfolio Engineering',
              desc: 'Mean-variance optimisation, Black-Litterman, factor models, and systematic strategy construction.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="px-8 py-8 group">
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3
                  className="text-sm font-semibold tracking-wide text-[#e8eaed] uppercase"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {title}
                </h3>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
                Selected Work
              </span>
            </div>
            <h2
              className="font-display text-3xl text-[#e8eaed]"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#c9a84c] transition-colors font-mono"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: '01',
              title: 'NSE Option Pricing & VaR Dashboard',
              desc: 'Black-Scholes + Monte Carlo pricing engine with real-time VaR and Greeks visualisation for Nairobi Securities Exchange derivatives.',
              tags: ['Quant', 'Derivatives', 'Risk'],
              tech: 'Python · Streamlit · SciPy',
            },
            {
              id: '02',
              title: 'Agricultural Credit Scoring Model',
              desc: 'XGBoost credit risk model with SHAP explainability achieving 89% accuracy for 500+ smallholder farmers. Multi-source data pipeline for agri-fintech deployment.',
              tags: ['ML', 'Credit Risk', 'Fintech'],
              tech: 'Python · XGBoost · SHAP',
            },
            {
              id: '03',
              title: 'ARDL-XGBOOST Hybrid model for Repo Rate Forecasting',
              desc: 'Combining ARDL time series analysis with XGBoost regression to forecast Central Bank of Kenya repo rate movements.',
              tags: ['Time Series', 'Econometrics'],
              tech: 'Python · arch · statsmodels',
            },
            {
              id: '04',
              title: 'REThink – AI-Powered Reinsurance Decision Support',
              desc: 'AI-powered facultative reinsurance system developed for Kenya Reinsurance Corporation hackathon. Placed 4th place. Automates submission processing, risk analysis, and underwriting recommendations.',
              tags: ['AI', 'Reinsurance', 'InsurTech'],
              tech: 'React · Python · FastAPI · Gemini',
            },
            {
              id: '05',
              title: 'Melanin-Centered Skincare Recommendation System',
              desc: 'AI-powered skincare recommender for women of color using ML and NLP. Achieves 99% hit rate with hybrid filtering approach. Moringa Data Science final project.',
              tags: ['ML', 'Data Science', 'AI', 'Beauty Tech'],
              tech: 'Python · Streamlit · TensorFlow · NLP',
            },
          ].map(({ id, title, desc, tags, tech }) => (
            <div
              key={id}
              className="card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[11px] text-[#c9a84c] tracking-widest">
                  {id}
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#6b7280] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all"
                />
              </div>
              <h3 className="text-[#e8eaed] font-semibold mb-2 text-[15px] leading-snug">
                {title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#6b7280] hidden md:block">
                  {tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/projects" className="btn-outline w-full justify-center">
            All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1e2329] bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-display text-2xl md:text-3xl text-[#e8eaed] mb-2"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Open to opportunities in quant finance.
            </h2>
            <p className="text-[#6b7280] text-sm">
              Asset management · Hedge funds · Investment banking · Risk analytics
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
