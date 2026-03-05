import type { Metadata } from 'next'
import { ExternalLink, BookOpen, TrendingUp, BarChart2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Financial analysis publications covering bond markets, NSE equities, investment strategies, and African capital market research.',
}

// ── To add a new article, add an entry to this array ──
const ARTICLES = [
  {
    id: 'nse-bond-market-2024',
    title: 'Kenya Government Bond Market: Yield Curve Analysis & Investment Implications',
    excerpt:
      'An analysis of the Kenya government bond yield curve, term premium decomposition, and duration risk management strategies for domestic fixed income investors.',
    category: 'Fixed Income',
    date: 'December 2024',
    readTime: '8 min',
    tags: ['Bonds', 'Yield Curve', 'Kenya', 'Fixed Income'],
    url: 'https://fahamisha.com', // replace with actual blog link
  },
  {
    id: 'nse-equity-momentum',
    title: 'Cross-Sectional Momentum in NSE Equities: Evidence & Strategy Construction',
    excerpt:
      'Empirical study of price momentum factors on the Nairobi Securities Exchange, strategy construction methodology, and realistic transaction cost analysis for implementation.',
    category: 'Equity Research',
    date: 'November 2024',
    readTime: '12 min',
    tags: ['NSE', 'Momentum', 'Equity', 'Quant'],
    url: 'https://fahamisha.com',
  },
  {
    id: 'african-markets-fintech',
    title: 'Fintech Infrastructure and Capital Market Development in Sub-Saharan Africa',
    excerpt:
      'Exploring how mobile money penetration, digital lending infrastructure, and regulatory frameworks are reshaping investment opportunities across African capital markets.',
    category: 'Market Commentary',
    date: 'October 2024',
    readTime: '6 min',
    tags: ['Africa', 'Fintech', 'Market Development'],
    url: 'https://fahamisha.com',
  },
  {
    id: 'var-modelling-emerging',
    title: 'Value-at-Risk Modelling in Emerging Markets: Challenges & Best Practices',
    excerpt:
      'Why standard VaR assumptions break down in thin, volatile emerging markets and how to adapt parametric, historical simulation, and Monte Carlo approaches accordingly.',
    category: 'Risk Management',
    date: 'September 2024',
    readTime: '10 min',
    tags: ['VaR', 'Risk', 'Emerging Markets'],
    url: 'https://fahamisha.com',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Fixed Income': 'tag',
  'Equity Research': 'tag-green tag',
  'Market Commentary': 'tag-blue tag',
  'Risk Management': 'tag',
}

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Research & Articles
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h1
              className="font-display text-4xl md:text-5xl text-[#e8eaed] mb-4"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Financial Analysis &{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                Market Research
              </span>
            </h1>
            <p className="text-[#9ca3af] leading-relaxed">
              Published analysis covering bond markets, NSE equity research, investment
              strategies, risk management, and African capital market development.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="https://fahamisha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <ExternalLink size={14} /> All Articles
            </a>
          </div>
        </div>

        {/* Research focus areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[
            {
              icon: <TrendingUp size={16} className="text-[#c9a84c]" />,
              area: 'Equity Research',
              desc: 'NSE-listed companies, valuation, sector analysis',
            },
            {
              icon: <BarChart2 size={16} className="text-[#c9a84c]" />,
              area: 'Fixed Income',
              desc: 'Government bonds, yield curve, duration management',
            },
            {
              icon: <BookOpen size={16} className="text-[#c9a84c]" />,
              area: 'Market Strategy',
              desc: 'Investment themes, risk management, macro overlay',
            },
          ].map(({ icon, area, desc }) => (
            <div
              key={area}
              className="border border-[#1e2329] bg-[#0d1117] p-4 flex items-start gap-3"
            >
              {icon}
              <div>
                <div className="text-[#e8eaed] text-sm font-medium">{area}</div>
                <div className="text-[#6b7280] text-xs mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles list */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {ARTICLES.map((article, i) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 group flex flex-col md:flex-row md:items-start gap-4 hover:border-[rgba(201,168,76,0.3)] block"
            >
              <div className="flex-shrink-0 w-full md:w-48">
                <div className="font-mono text-[10px] text-[#6b7280] mb-1">{article.date}</div>
                <div className="font-mono text-[10px] text-[#6b7280]">{article.readTime} read</div>
                <span
                  className={`mt-2 inline-block ${CATEGORY_COLORS[article.category] ?? 'tag'}`}
                >
                  {article.category}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-[#e8eaed] font-semibold text-[15px] leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {article.title}
                  </h2>
                  <ExternalLink
                    size={14}
                    className="text-[#6b7280] group-hover:text-[#c9a84c] flex-shrink-0 mt-0.5 transition-colors"
                  />
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{article.excerpt}</p>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Add article guide */}
        <div className="mt-8 bg-[#0d1117] border border-[#1e2329] p-5">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-2">
            Adding a New Article
          </div>
          <p className="text-[#6b7280] text-sm">
            Add a new entry to the{' '}
            <code className="font-mono text-[#c9a84c] bg-[#080a0c] px-1.5 py-0.5 text-[11px]">
              ARTICLES
            </code>{' '}
            array at the top of{' '}
            <code className="font-mono text-[#c9a84c] bg-[#080a0c] px-1.5 py-0.5 text-[11px]">
              app/research/page.tsx
            </code>
            . For full MDX blog support with local markdown files, run{' '}
            <code className="font-mono text-[#c9a84c] bg-[#080a0c] px-1.5 py-0.5 text-[11px]">
              npm install next-mdx-remote gray-matter
            </code>{' '}
            and create posts in{' '}
            <code className="font-mono text-[#c9a84c] bg-[#080a0c] px-1.5 py-0.5 text-[11px]">
              /content/research/
            </code>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
