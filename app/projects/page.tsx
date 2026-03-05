import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import projects from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Quantitative finance projects — options pricing, portfolio optimisation, credit scoring, algorithmic trading, and risk analytics.',
}

const TAG_COLORS: Record<string, string> = {
  Quant: 'tag',
  Risk: 'tag',
  ML: 'tag-blue tag',
  Trading: 'tag',
  Fintech: 'tag-blue tag',
  'Credit Risk': 'tag',
  Portfolio: 'tag',
  Derivatives: 'tag',
  Pricing: 'tag',
  'Time Series': 'tag-blue tag',
  Econometrics: 'tag-blue tag',
  Systematic: 'tag',
  Volatility: 'tag',
  'Equity Research': 'tag-green tag',
  Valuation: 'tag-green tag',
  CFA: 'tag-green tag',
  AgriFinance: 'tag',
}

function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? 'tag'
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Projects
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h1
              className="font-display text-4xl md:text-5xl text-[#e8eaed] mb-4"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Quantitative{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                Research & Projects
              </span>
            </h1>
            <p className="text-[#9ca3af] leading-relaxed">
              Applied quantitative finance work spanning derivatives pricing, portfolio
              engineering, credit risk modelling, and algorithmic trading — with a focus on
              African capital markets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <a
              href="https://github.com/briangithinji"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <Github size={14} /> GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO ADD A NEW PROJECT — developer comment */}
      {/* Edit /data/projects.json to add a new project. Set featured: true to show it at the top. */}

      {/* Featured projects */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-8">
          Featured
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project) => (
            <div
              key={project.id}
              className="card p-6 group relative flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] text-[#6b7280] tracking-widest uppercase">
                  {project.year}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <ArrowUpRight
                    size={14}
                    className="text-[#6b7280] group-hover:text-[#c9a84c] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </div>

              <h2 className="text-[#e8eaed] font-semibold text-[16px] leading-snug mb-3">
                {project.title}
              </h2>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagClass(tag)}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-mono text-[10px] text-[#6b7280] pt-3 border-t border-[#1e2329]">
                  {project.tech.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-8">
            Other Projects
          </div>
          <div className="space-y-2">
            {others.map((project) => (
              <div
                key={project.id}
                className="card px-6 py-4 group flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="font-mono text-[10px] text-[#6b7280] w-10 flex-shrink-0">
                    {project.year}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[#e8eaed] text-sm font-medium truncate">
                      {project.title}
                    </div>
                    <div className="font-mono text-[10px] text-[#6b7280] truncate">
                      {project.tech.join(' · ')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="hidden md:flex gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={tagClass(tag)}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Add project guide */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-[#0d1117] border border-[#1e2329] p-6">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-3">
            Adding a New Project
          </div>
          <p className="text-[#6b7280] text-sm mb-3">
            To add a new project, edit{' '}
            <code className="font-mono text-[#c9a84c] bg-[#080a0c] px-1.5 py-0.5 text-[11px]">
              /data/projects.json
            </code>{' '}
            and add an entry following this schema:
          </p>
          <pre className="font-mono text-[11px] text-[#6b7280] bg-[#080a0c] border border-[#1e2329] p-4 overflow-auto leading-relaxed">
            {`{
  "id": "my-new-project",
  "title": "NSE Option Pricing & VaR Dashboard",
  "description": "Short description shown on the card.",
  "longDescription": "Full detailed description.",
  "tech": ["Python", "Streamlit", "NumPy"],
  "tags": ["Quant", "Risk", "Derivatives"],
  "github": "https://github.com/briangithinji/my-project",
  "demo": "https://my-app.streamlit.app",
  "featured": true,
  "year": 2025
}`}
          </pre>
        </div>
      </section>
    </div>
  )
}
