import type { Metadata } from 'next'
import { Download, FileText } from 'lucide-react'
import valuations from '@/data/valuations.json'

export const metadata: Metadata = {
  title: 'Valuation & Reports',
  description:
    'Equity valuation models and research reports — DCF, relative valuation, and financial modelling for NSE-listed companies.',
}

export default function ValuationReportsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Valuation & Reports
          </span>
        </div>
        <div className="max-w-2xl">
          <h1
            className="font-display text-4xl md:text-5xl text-[#e8eaed] mb-4"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Equity{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              Valuation Models
            </span>
          </h1>
          <p className="text-[#9ca3af] leading-relaxed">
            Downloadable financial models and written reports built for NSE-listed and
            regional companies — DCF, relative valuation, and comparable company analysis.
          </p>
        </div>
      </section>

      {/* HOW TO ADD A NEW VALUATION — developer comment */}
      {/* Edit /data/valuations.json to add a new entry. Place model/report files in /public/valuations/. */}

      {/* Valuation list */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {valuations.map((v) => (
            <div key={v.id} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] text-[#6b7280] tracking-widest uppercase">
                  {v.date}
                </span>
                {v.ticker && (
                  <span className="font-mono text-[10px] text-[#c9a84c] tracking-widest">
                    {v.ticker}
                  </span>
                )}
              </div>

              <h2 className="text-[#e8eaed] font-semibold text-[16px] leading-snug mb-3">
                {v.company}
              </h2>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-4 flex-1">
                {v.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {v.method.map((m) => (
                    <span key={m} className="tag-green tag">
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-[#1e2329]">
                  {v.model && (
                    <a
                      href={v.model}
                      download
                      className="btn-outline flex items-center gap-2 text-[11px] flex-1 justify-center"
                    >
                      <Download size={13} /> Model (.xlsx)
                    </a>
                  )}
                  {v.report && (
                    <a
                      href={v.report}
                      download
                      className="btn-outline flex items-center gap-2 text-[11px] flex-1 justify-center"
                    >
                      <FileText size={13} /> Report (.pdf)
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
