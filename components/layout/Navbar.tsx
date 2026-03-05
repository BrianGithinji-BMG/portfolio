'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a0c]/95 backdrop-blur-md border-b border-[#1e2329]'
          : 'bg-transparent'
      }`}
      style={{ top: '32px' }} // offset for ticker bar
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-[13px] tracking-widest text-[#c9a84c] uppercase"
        >
          B.GITHINJI
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/BrianGithinji-BMG"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[#6b7280] hover:text-[#c9a84c] transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="font-mono text-[11px] tracking-widest uppercase px-4 py-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#080a0c] transition-all"
          >
            Hire
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#6b7280] hover:text-[#e8eaed]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1117] border-b border-[#1e2329]">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-mono text-[12px] tracking-widest uppercase border-b border-[#1e2329] ${
                pathname === href
                  ? 'text-[#c9a84c]'
                  : 'text-[#6b7280] hover:text-[#e8eaed]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
