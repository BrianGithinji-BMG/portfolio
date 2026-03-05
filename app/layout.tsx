import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Brian M. Githinji | Quantitative Finance & Financial Engineering',
    template: '%s | Brian M. Githinji',
  },
  description:
    'Financial Engineering student at JKUAT, CFA Level I Candidate. Specialising in quantitative research, portfolio optimisation, derivatives pricing, and algorithmic trading.',
  keywords: [
    'Financial Engineering',
    'Investment Strategies',
    'Market Analysis',
    'Quantitative Finance',
    'Portfolio Optimization',
    'Derivatives Pricing',
    'Algorithmic Trading',
    'Risk Management',
    'Kenya',
    'NSE',
    'CFA',
    'Brian Githinji',
  ],
  authors: [{ name: 'Brian M. Githinji' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://briangithinji.vercel.app',
    title: 'Brian M. Githinji | Quantitative Finance',
    description:
      'Financial Engineering | Quantitative Research | Risk & Derivatives |Investment Strategies | Market Analysis',
    siteName: 'Brian M. Githinji',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian M. Githinji | Quantitative Finance',
    description:
      'Financial Engineering | Quantitative Research | Risk & Derivatives |Investment Strategies | Market Analysis',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080a0c] text-[#e8eaed] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
