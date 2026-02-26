'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useI18n } from '@/i18n/context'
import type { Lang } from '@/i18n/translations'

// Small belt image shown in nav logo when scrolled
const BELT_IMG = '/images/pexels-4761663.jpeg'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { t, setLang, lang } = useI18n()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '/#how',      label: t.nav.howItWorks },
    { href: '/#verify',   label: t.nav.verify },
    { href: '/#founding', label: t.nav.founding },
    { href: '/about',     label: t.nav.about },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '18px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(4,4,6,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--bp-border)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* BJJ micro-image in logo — visible when scrolled */}
          <motion.div
            animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.7, width: scrolled ? '28px' : '0px' }}
            transition={{ duration: 0.3 }}
            style={{ position: 'relative', height: '28px', borderRadius: '7px', overflow: 'hidden', border: '1px solid var(--bp-border)', flexShrink: 0 }}
          >
            <Image src={BELT_IMG} alt="" fill unoptimized style={{ objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }} sizes="28px" />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,245,176,0.12)' }} />
          </motion.div>
          <span style={{ fontFamily: 'var(--font-sora)', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--bp-white)' }}>
            Belt<span style={{ color: 'var(--bp-accent)' }}>Pass</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0 }}
            className="hidden md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="underline-anim" style={{
                color: 'var(--bp-muted2)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--bp-white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--bp-muted2)')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Lang selector */}
          <select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
            style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '0.68rem',
              color: 'var(--bp-muted2)',
              background: 'transparent',
              border: '1px solid var(--bp-border)',
              borderRadius: '6px',
              padding: '6px 10px',
              letterSpacing: '0.05em',
            }}
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
            <option value="ptbr">PT-BR</option>
          </select>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            style={{
              width: '34px', height: '34px',
              background: 'var(--bp-s2)',
              border: '1px solid var(--bp-border)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--bp-muted2)',
              transition: 'all 0.2s',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun size={14} />
              : <Moon size={14} />}
          </button>

          {/* CTA */}
          <Link href="/#signup" className="hidden md:flex" style={{
            background: 'var(--bp-accent)',
            color: 'var(--bp-black)',
            padding: '9px 18px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.02em',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#22e8a0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)'; e.currentTarget.style.transform = '' }}
          >
            {t.nav.joinNow}
          </Link>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(v => !v)} className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--bp-white)', padding: '4px' }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'fixed',
            top: '72px', left: 0, right: 0,
            background: 'rgba(4,4,6,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--bp-border)',
            zIndex: 999,
            padding: '24px 24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--bp-white)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
              {label}
            </Link>
          ))}
          <Link href="/#signup" onClick={() => setMenuOpen(false)} style={{
            background: 'var(--bp-accent)', color: 'var(--bp-black)',
            padding: '12px 20px', borderRadius: '10px',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            textAlign: 'center', marginTop: '8px',
          }}>
            {t.nav.joinNow}
          </Link>
        </motion.div>
      )}
    </>
  )
}
