'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import { FOUNDING_SLOTS_LEFT, FOUNDING_SLOTS_TOTAL } from '@/lib/data'

function Counter({ to, suffix = '', accent = false }: { to: number; suffix?: string; accent?: boolean }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = to / 60
    const id = setInterval(() => {
      current = Math.min(current + step, to)
      setVal(Math.round(current))
      if (current >= to) clearInterval(id)
    }, 24)
    return () => clearInterval(id)
  }, [inView, to])

  return (
    <span ref={ref}>
      <span style={{ color: accent ? 'var(--bp-accent)' : 'var(--bp-white)' }}>{val}</span>
      {suffix && <span style={{ color: 'var(--bp-accent)' }}>{suffix}</span>}
    </span>
  )
}

export function StatsBar() {
  const { t } = useI18n()

  const stats = [
    { value: 3,                     suffix: '+', accent: true,  label: t.stats.countries },
    { value: FOUNDING_SLOTS_TOTAL,  suffix: '',  accent: false, label: t.stats.slotsTotal },
    { value: FOUNDING_SLOTS_LEFT,   suffix: '',  accent: true,  label: t.stats.slotsLeft },
    { value: 100,                   suffix: '%', accent: false, label: t.stats.digital },
  ]

  return (
    <div style={{
      position: 'relative',
      background: 'var(--bp-s2)',
      borderTop: '1px solid var(--bp-border)',
      borderBottom: '1px solid var(--bp-border)',
      overflow: 'hidden',
    }}>
      {/* Faint BJJ training photo behind stats */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1400&h=300&fit=crop"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.12) saturate(0.5)', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,12,15,0.7)' }} />
      </div>
      <div className="section-wrap" style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        padding: '56px 40px',
      }}>
        {stats.map(({ value, suffix, accent, label }, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-sora)',
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              <Counter to={value} suffix={suffix} accent={accent} />
            </div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '0.68rem',
              color: 'var(--bp-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
