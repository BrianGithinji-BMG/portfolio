import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-[80px] text-[#1e2329] font-light leading-none">404</div>
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase mt-2 mb-6">
          Page Not Found
        </div>
        <Link href="/" className="btn-outline">
          Return Home
        </Link>
      </div>
    </div>
  )
}
