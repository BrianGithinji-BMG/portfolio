import type { Metadata } from 'next'
import { GraduationCap, Award, Users, Target, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Financial Engineering student at JKUAT, CFA Level I Candidate. Building quantitative research capabilities for African capital markets.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            About
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1
              className="font-display text-4xl md:text-5xl text-[#e8eaed] mb-6"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Building the next generation of African{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                quant finance.
              </span>
            </h1>
            <p className="text-[#9ca3af] leading-relaxed mb-4">
              I am a final-year BSc Financial Engineering student at JKUAT and a CFA Level I
              candidate (November 2026). My work sits at the intersection of quantitative
              methods, machine learning, and African capital markets — specifically the Nairobi
              Securities Exchange.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              I believe the next wave of quantitative finance innovation will come from emerging
              markets. My goal is to contribute rigorous, data-driven research to that
              conversation — whether in asset management, hedge fund strategy, or risk analytics.
            </p>
            <div className="flex items-center gap-2 text-[#6b7280] font-mono text-sm mt-6">
              <MapPin size={13} className="text-[#c9a84c]" />
              Juja, Kiambu County, Kenya
            </div>
          </div>

          {/* Vision box */}
          <div className="bg-[#0d1117] border border-[#1e2329] p-6">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-4">
              Vision Statement
            </div>
            <p className="text-[#e8eaed] leading-relaxed text-[15px] italic" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem' }}>
              "To apply quantitative rigour to African financial markets — building
              tools, strategies, and research that unlock value in markets too often
              overlooked by global quant finance."
            </p>
            <div className="mt-6 pt-6 border-t border-[#1e2329] grid grid-cols-3 gap-4">
              {[
                { v: 'Quant', sub: 'Research' },
                { v: 'African', sub: 'Markets' },
                { v: 'AI +', sub: 'Fintech' },
              ].map(({ v, sub }) => (
                <div key={v} className="text-center">
                  <div className="font-mono text-[#c9a84c] text-lg font-light">{v}</div>
                  <div className="font-mono text-[10px] text-[#6b7280] tracking-widest uppercase mt-1">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap size={16} className="text-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Education
          </span>
        </div>
        <div className="space-y-6">
          {[
            {
              institution: 'CFA Institute',
              degree: 'CFA Level I Candidate',
              period: 'Expected: November 2026',
              detail:
                'Self-study programme covering Quantitative Methods, Economics, Financial Reporting & Analysis, Corporate Finance, Equity Investments, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management.',
              tags: ['CFA', 'Investment Analysis', 'Ethics'],
            },
            {
              institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
              degree: 'BSc Financial Engineering',
              period: 'Expected: December 2026 · Second Class Upper Division',
              detail:
                'Key coursework: Financial Modelling, Corporate Finance, Algorithmic Trading, Portfolio Optimisation, Stochastic Calculus, Financial Time Series, Extreme Financial Risk Management.',
              tags: [
                'Financial Engineering',
                'Stochastic Calculus',
                'Derivatives',
                'Algorithmic Trading',
              ],
            },
            {
              institution: 'Moringa School',
              degree: 'Data Science Bootcamp',
              period: 'April 2024 – November 2024',
              detail:
                'Built predictive models, recommendation systems and dashboards using Python, SQL, R, and Tableau. Practical focus on machine learning and data engineering.',
              tags: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
            },
          ].map(({ institution, degree, period, detail, tags }) => (
            <div key={institution} className="card p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <div className="font-mono text-[10px] tracking-widest text-[#6b7280] uppercase">
                  {period}
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-[#e8eaed] font-semibold mb-1">{degree}</div>
                <div className="font-mono text-[11px] text-[#c9a84c] mb-2">{institution}</div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{detail}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="tag-blue tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-8">
          <Award size={16} className="text-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Experience
          </span>
        </div>
        <div className="space-y-6">
          {[
            {
              company: 'Sowphie',
              role: 'Data Science Intern',
              period: 'Jan 2025 – Mar 2025 · Remote',
              points: [
                'Developed XGBoost credit scoring model achieving 89% accuracy for 500+ smallholder farmers',
                'Built multi-source data aggregation pipeline integrating agricultural and financial metrics',
                'Generated synthetic datasets to strengthen model robustness and scenario analysis',
                'Embedded credit-risk logic aligned with fintech and agri-finance standards',
              ],
            },
            {
              company: 'Fahamisha Investing',
              role: 'Financial Research & Analysis Consultant',
              period: 'Nov 2025 – Dec 2025 · Remote',
              points: [
                'Prepared financial market summaries, investment reports and client presentations',
                'Supported automation of investment research via the "Systems to Scale" project',
                'Analysed company financial statements and updated financial models for equity research',
                'Drafted financial newsletters and investment posts for client communication',
              ],
            },
            {
              company: 'Leadway Group Limited',
              role: 'Finance & Insurance Research Trainee',
              period: 'May 2025 – Aug 2025 · Parklands, Nairobi',
              mentor: 'Mentored by Justus Mutiga, Former CEO, ICEA LION',
              points: [
                'Conducted analyses in capital budgeting, private equity valuation, actuarial models & pension structures',
                'Performed financial mathematics tasks: premium pricing, depreciation schedules, TVM, equations of value',
                'Explored corporate finance, derivatives, insurance products, and risk management frameworks',
                'Developed personal business and career growth roadmap under executive mentorship',
              ],
            },
          ].map(({ company, role, period, mentor, points }) => (
            <div key={company} className="card p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <div className="font-mono text-[10px] tracking-widest text-[#6b7280] uppercase leading-relaxed">
                  {period}
                </div>
                {mentor && (
                  <div className="font-mono text-[10px] text-[#c9a84c] mt-2 italic">
                    {mentor}
                  </div>
                )}
              </div>
              <div className="md:col-span-3">
                <div className="text-[#e8eaed] font-semibold mb-1">{role}</div>
                <div className="font-mono text-[11px] text-[#c9a84c] mb-3">{company}</div>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="text-[#6b7280] text-sm flex gap-2">
                      <span className="text-[#c9a84c] mt-[5px] flex-shrink-0">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-8">
          <Users size={16} className="text-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Leadership & Activities
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'CFA Research Challenge 2025–2026',
              sub: 'Team Lead — JKUAT | 3rd Place, CFA Society East Africa',
              desc: 'Led a team of 5 in full company valuation, equity research, and financial modelling. Prepared institutional-grade investment report with DCF, relative valuation, industry analysis, and risk assessment.',
              tag: 'CFA',
            },
            {
              title: 'JKUAT Financial Engineers Association',
              sub: 'Vice Chair (JKUAFE)',
              desc: 'Organised financial literacy workshops, engaged external partners for collaborations, and led club projects bridging academic finance with industry practice.',
              tag: 'Leadership',
            },
            {
              title: 'NSE Stock Challenge',
              sub: 'Finalist — Top 10 (2023)',
              desc: 'Competed in the Nairobi Securities Exchange national stock challenge, finishing in the top 10 nationally.',
              tag: 'Investing',
            },
            {
              title: 'Africa Investment Conference (AFIC)',
              sub: '2025 Participant',
              desc: 'Engaged with industry practitioners and gained insights into emerging investment trends and opportunities across the African investment landscape.',
              tag: 'Industry',
            },
          ].map(({ title, sub, desc, tag }) => (
            <div key={title} className="card p-5">
              <div className="flex items-start justify-between mb-2">
                <span className="tag">{tag}</span>
              </div>
              <h3 className="text-[#e8eaed] font-semibold text-[14px] mt-3 mb-1">{title}</h3>
              <div className="font-mono text-[10px] text-[#c9a84c] mb-2">{sub}</div>
              <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Target size={16} className="text-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Skills & Toolkit
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: 'Quantitative / Finance',
              items: [
                'Financial Modelling',
                'Derivatives Pricing',
                'Portfolio Optimisation',
                'VaR / CVaR',
                'Monte Carlo Simulation',
                'Stochastic Calculus',
                'GARCH / Time Series',
                'Equity Research',
              ],
            },
            {
              category: 'Technical',
              items: [
                'Python',
                'SQL',
                'R',
                'Excel / VBA',
                'Tableau',
                'Git',
                'Streamlit',
                'PowerPoint',
              ],
            },
            {
              category: 'ML / Data Science',
              items: [
                'XGBoost / Scikit-learn',
                'SHAP Explainability',
                'Pandas / NumPy',
                'SciPy / cvxpy',
                'Data Pipelines',
                'Predictive Modelling',
                'Feature Engineering',
                'Backtesting',
              ],
            },
          ].map(({ category, items }) => (
            <div key={category} className="bg-[#0d1117] border border-[#1e2329] p-6">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-4">
                {category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
