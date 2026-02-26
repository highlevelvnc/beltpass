'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import { Reveal, SectionLabel } from '../ui'

// Real BJJ/MMA photos from Pexels (free for commercial use)
const GALLERY = [
  {
    src: '/images/pexels-6253305.jpeg',
    label: 'BJJ Training',
    alt: 'Brazilian jiu-jitsu sparring session',
    span: 'tall',
  },
  {
    src: '/images/pexels-6253300.jpeg',
    label: 'Guard Passing',
    alt: 'BJJ ground technique training',
    span: 'wide',
  },
  {
    src: '/images/pexels-4761663.jpeg',
    label: 'Belt System',
    alt: 'BJJ belt graduation ceremony',
    span: 'square',
  },
  {
    src: '/images/pexels-6253319.jpeg',
    label: 'Gi Training',
    alt: 'BJJ kimono training',
    span: 'wide',
  },
  {
    src: '/images/pexels-5067748.jpeg',
    label: 'Master Instruction',
    alt: 'BJJ master teaching class',
    span: 'tall',
  },
  {
    src: '/images/pexels-6253302.jpeg',
    label: 'Competition Ready',
    alt: 'BJJ competition preparation',
    span: 'wide',
  },
]

export function PhotoGallery() {
  return (
    <div style={{
      borderTop: '1px solid var(--bp-border)',
      borderBottom: '1px solid var(--bp-border)',
      padding: '80px 0',
      background: 'var(--bp-surface)',
      overflow: 'hidden',
    }}>
      <div className="section-wrap">
        <Reveal>
          <SectionLabel>Global Community</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-sora)',
            fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '48px',
            maxWidth: '600px',
          }}>
            Where every mat session<br />becomes a verified record.
          </h2>
        </Reveal>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
        }} className="gallery-grid">
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                height: i === 0 || i === 4 ? '380px' : '220px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--bp-border)',
                gridColumn: i === 1 || i === 3 ? 'span 2' : 'span 1',
                cursor: 'pointer',
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill unoptimized
                style={{
                  objectFit: 'cover',
                  filter: 'brightness(0.72) saturate(0.85)',
                  transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease',
                }}
                sizes="(max-width: 900px) 100vw, 50vw"
                className="gallery-photo"
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(4,4,6,0.85) 100%)',
                transition: 'opacity 0.3s',
              }} />
              {/* Label */}
              <div style={{
                position: 'absolute', bottom: '14px', left: '16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  background: 'var(--bp-accent)',
                  borderRadius: '50%',
                }} />
                <span style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.65rem',
                  color: 'var(--bp-white)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo credits */}
        <div style={{
          marginTop: '20px',
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '0.58rem',
          color: 'var(--bp-muted)',
          letterSpacing: '0.06em',
          textAlign: 'right',
        }}>
          Photos: Pexels (free commercial use)
        </div>
      </div>

      <style>{`
        .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        @media(max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width: 500px) { .gallery-grid { grid-template-columns: 1fr !important; } }
        .gallery-photo:hover { transform: scale(1.06); filter: brightness(0.85) saturate(1) !important; }
      `}</style>
    </div>
  )
}
