'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/i18n/context'
import { Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '/#how' },
    { label: 'Verify a Belt', href: '/#verify' },
    { label: 'Founding Offer', href: '/#founding' },
    { label: 'Security', href: '/#security' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

// Small footer belt/gi images for visual flair
const FOOTER_IMGS = [
  'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=300&h=100&fit=crop',
  'https://images.pexels.com/photos/6253308/pexels-photo-6253308.jpeg?auto=compress&cs=tinysrgb&w=300&h=100&fit=crop',
  'https://images.pexels.com/photos/6253316/pexels-photo-6253316.jpeg?auto=compress&cs=tinysrgb&w=300&h=100&fit=crop',
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer style={{ borderTop: '1px solid var(--bp-border)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle BJJ images strip at top of footer */}
      <div style={{ display: 'flex', height: '90px', overflow: 'hidden', opacity: 0.18 }}>
        {FOOTER_IMGS.map((src, i) => (
          <div key={i} style={{ position: 'relative', flex: 1 }}>
            <Image
              src={src} alt="" fill unoptimized
              style={{ objectFit: 'cover', filter: 'saturate(0.5) brightness(0.6)' }}
              sizes="33vw"
            />
          </div>
        ))}
        {/* Fade overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, var(--bp-black) 100%)' }} />
      </div>

      <div style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '48px' }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Mini BJJ image logo accent */}
              <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--bp-border)', flexShrink: 0 }}>
                <Image
                  src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                  alt="BeltPass" fill unoptimized
                  style={{ objectFit: 'cover', filter: 'saturate(0.7) brightness(0.65)' }}
                  sizes="32px"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,245,176,0.08)' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-sora)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                Belt<span style={{ color: 'var(--bp-accent)' }}>Pass</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--bp-muted2)', lineHeight: 1.7, fontWeight: 300, maxWidth: '260px' }}>
              {t.footer.desc}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <Instagram size={14} />, label: 'Instagram', href: 'https://instagram.com/beltpass.io' },
                { icon: <Linkedin size={14} />, label: 'LinkedIn', href: '#' },
                { icon: <Twitter size={14} />, label: 'Twitter', href: 'https://twitter.com/beltpass' },
                { icon: <MessageCircle size={14} />, label: 'WhatsApp', href: '#' },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: '34px', height: '34px', background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bp-muted2)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--bp-accent)'; e.currentTarget.style.color = 'var(--bp-accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bp-border)'; e.currentTarget.style.color = 'var(--bp-muted2)'; e.currentTarget.style.transform = '' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bp-muted)', marginBottom: '20px' }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}
                      style={{ color: 'var(--bp-muted2)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 300, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--bp-white)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--bp-muted2)')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--bp-border)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} BeltPass. All rights reserved. Global Infrastructure for Martial Arts.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Belt color dots — decorative */}
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {['#e8e8e8', '#1a5fa8', '#6b21a8', '#7c3d12', '#1a1a1a'].map(c => (
                <div key={c} style={{ width: '7px', height: '7px', borderRadius: '2px', background: c, opacity: 0.5 }} />
              ))}
            </div>
            {[['Privacy', '/privacy'], ['Terms', '/terms']].map(([label, href]) => (
              <Link key={label} href={href}
                style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-muted)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--bp-muted2)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--bp-muted)')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
