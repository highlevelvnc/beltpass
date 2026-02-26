'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/i18n/context'
import { MagneticButton } from '../ui'

// Curated BJJ/MMA photos from Pexels & Unsplash (free commercial use)
const HERO_IMAGES = [
  '/images/pexels-6253305.jpeg',
  '/images/pexels-6253300.jpeg',
  '/images/pexels-5067745.jpeg',
]

export function HeroSection() {
  const { t } = useI18n()
  const h = t.hero

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Photo background with video fallback */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Static photo (loads instantly) */}
        <Image
          src={HERO_IMAGES[0]}
          alt="BJJ training"
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.38 }}
          sizes="100vw"
          unoptimized
        />
        {/* Video overlay (enhances on load) */}
        <video
          autoPlay muted loop playsInline preload="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28 }}
        >
          <source src="https://videos.pexels.com/video-files/8611716/8611716-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(4,4,6,0.94) 0%, rgba(4,4,6,0.70) 50%, rgba(4,4,6,0.90) 100%)',
        }} />
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(42,245,176,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(42,245,176,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Content */}
      <div className="section-wrap" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--bp-s2)',
            border: '1px solid var(--bp-border)',
            borderRadius: '100px',
            padding: '6px 14px 6px 8px',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '0.68rem',
            color: 'var(--bp-accent)',
            letterSpacing: '0.08em',
            marginBottom: '32px',
          }}
        >
          <span style={{ width: '6px', height: '6px', background: 'var(--bp-accent)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          {h.badge}
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: 'clamp(3rem,7vw,6.5rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
          }}
        >
          {h.h1a}
          <br />
          <span style={{ color: 'var(--bp-accent)' }}>{h.h1b}</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1rem,1.8vw,1.18rem)',
            color: 'var(--bp-muted2)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '40px',
            fontWeight: 300,
          }}
        >
          {h.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '60px' }}
        >
          <MagneticButton>
            <Link href="/#signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--bp-accent)', color: 'var(--bp-black)',
              padding: '14px 28px',
              borderRadius: '10px',
              fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#22e8a0'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(42,245,176,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)'; e.currentTarget.style.boxShadow = '' }}
            >
              {h.ctaPrimary}
              <span style={{ marginLeft: '4px' }}>→</span>
            </Link>
          </MagneticButton>

          <Link href="/#verify" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'var(--bp-white)',
            padding: '14px 28px',
            borderRadius: '10px',
            border: '1px solid var(--bp-border-strong)',
            fontWeight: 600, fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--bp-accent)'; e.currentTarget.style.color = 'var(--bp-accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bp-border-strong)'; e.currentTarget.style.color = 'var(--bp-white)' }}
          >
            {h.ctaSecondary}
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}
        >
          {[h.trustGlobal, h.trustTamper, h.trustQR].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {i > 0 && <div style={{ width: '1px', height: '20px', background: 'var(--bp-border)' }} />}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-jetbrains)', fontSize: '0.7rem',
                color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                <span style={{ width: '5px', height: '5px', background: 'var(--bp-accent)', borderRadius: '50%', opacity: 0.7 }} />
                {item}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(transparent, var(--bp-black))',
        zIndex: 1,
      }} />

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
      `}</style>
    </section>
  )
}
