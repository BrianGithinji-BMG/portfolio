'use client'

import type { Metadata } from 'next'
import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      // Using Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
      // Get a free form at https://formspree.io
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#1e2329]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase">
            Contact
          </span>
        </div>
        <h1
          className="font-display text-4xl md:text-5xl text-[#e8eaed] mb-4"
          style={{ fontFamily: 'DM Serif Display, serif' }}
        >
          Let&rsquo;s{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>connect.</span>
        </h1>
        <p className="text-[#9ca3af] max-w-lg leading-relaxed">
          Open to opportunities in quantitative research, asset management, hedge funds,
          investment banking, and risk analytics — particularly in African and emerging markets.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — contact info */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-6">
            Direct
          </div>

          <div className="space-y-4 mb-10">
            {[
              {
                icon: <Mail size={15} className="text-[#c9a84c]" />,
                label: 'Email',
                value: 'briangithinji564@gmail.com',
                href: 'mailto:briangithinji564@gmail.com',
              },
              {
                icon: <MapPin size={15} className="text-[#c9a84c]" />,
                label: 'Location',
                value: 'Juja, Kiambu County, Kenya',
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#0d1117] border border-[#1e2329] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#6b7280] uppercase tracking-widest">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#e8eaed] text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[#e8eaed] text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-4">
            Social & Professional
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                icon: <Github size={15} />,
                label: 'GitHub',
                handle: '@briangithinji',
                href: 'https://github.com/briangithinji',
              },
              {
                icon: <Linkedin size={15} />,
                label: 'LinkedIn',
                handle: 'Brian M. Githinji',
                href: 'https://linkedin.com/in/briangithinji',
              },
              {
                icon: <ExternalLink size={15} />,
                label: 'Blog / Articles',
                handle: 'Fahamisha Investing',
                href: 'https://fahamisha.com',
              },
            ].map(({ icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 bg-[#0d1117] border border-[#1e2329] flex items-center justify-center text-[#6b7280] group-hover:text-[#c9a84c] group-hover:border-[rgba(201,168,76,0.3)] transition-all flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#6b7280] uppercase tracking-widest">
                    {label}
                  </div>
                  <div className="text-[#e8eaed] text-sm group-hover:text-[#c9a84c] transition-colors">
                    {handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CV download */}
          <div className="mt-10 pt-10 border-t border-[#1e2329]">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-3">
              Resume / CV
            </div>
            <a
              href="/Brian_M__Githinji_-_CV.pdf"
              download
              className="btn-outline flex items-center gap-2 w-full justify-center"
            >
              <FileText size={14} /> Download CV
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase mb-6">
            Send a Message
          </div>

          {status === 'sent' ? (
            <div className="bg-[#0d1117] border border-[rgba(63,185,80,0.3)] p-8 text-center">
              <div className="tag-green tag mb-3">Message Sent</div>
              <p className="text-[#e8eaed] text-sm">
                Thanks for reaching out! I&apos;ll respond as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                {
                  id: 'subject',
                  label: 'Subject',
                  type: 'text',
                  placeholder: 'Internship opportunity / Collaboration / ...',
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[#6b7280] block mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                    className="w-full bg-[#0d1117] border border-[#1e2329] text-[#e8eaed] text-sm px-4 py-3 font-mono placeholder-[#6b7280] focus:outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-[#6b7280] block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full bg-[#0d1117] border border-[#1e2329] text-[#e8eaed] text-sm px-4 py-3 font-mono placeholder-[#6b7280] focus:outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 font-mono text-xs">
                  Something went wrong. Email me directly at briangithinji564@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              <p className="font-mono text-[10px] text-[#6b7280]">
                Powered by Formspree — replace YOUR_FORM_ID in contact/page.tsx with your free
                Formspree ID from formspree.io
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
