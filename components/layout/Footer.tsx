import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2329] bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Brian M. Githinji
          </span>
          <span className="text-[11px] text-[#6b7280] font-mono">
            Financial Engineering · Quantitative Research · Risk & Derivatives
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/BrianGithinji-BMG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-githinji-a9903023a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:briangithinji564@gmail.com"
            className="text-[#6b7280] hover:text-[#c9a84c] transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        <span className="font-mono text-[10px] text-[#6b7280] tracking-widest uppercase">
          © 2026 Brian Githinji. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
