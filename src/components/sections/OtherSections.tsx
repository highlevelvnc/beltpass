'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Clipboard, Link as LinkIcon, Lock } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { FOUNDING_SLOTS_LEFT } from '@/lib/data'
import { Reveal, SectionLabel, Card, MagneticButton } from '../ui'

// Master/instructor portraits from Pexels (free commercial use)
const COUNCIL_PHOTOS = [
  '/images/pexels-4761660.jpeg',
  '/images/pexels-5067748.jpeg',
  '/images/pexels-4761671.jpeg',
]

// Founding section background from Pexels
const FOUNDING_BG = '/images/pexels-5067745.jpeg'

/* ─────────────── COUNCIL ─────────────── */
const councilData = [
  {
    photo: COUNCIL_PHOTOS[0],
    name: 'Prof. [Master Name]',
    belt: 'black',
    beltLabel: 'Black Belt',
  },
  {
    photo: COUNCIL_PHOTOS[1],
    name: '[World Champion]',
    belt: 'black',
    beltLabel: 'Black Belt',
  },
  {
    photo: COUNCIL_PHOTOS[2],
    name: '[Academy Director]',
    belt: 'brown',
    beltLabel: 'Brown Belt',
  },
]

const beltColors: Record<string, string> = {
  white: '#e8e8e8',
  blue: '#1a5fa8',
  purple: '#6b21a8',
  brown: '#7c3d12',
  black: '#282828',
  red: '#991b1b',
}

export function CouncilSection() {
  const { t } = useI18n()
  const c = t.council

  const quotes = [
    '"The sport grew global. The credentials didn\'t. BeltPass is the infrastructure we\'ve always needed."',
    '"I\'ve competed in 12 countries. Proving my credentials was always the hardest part. Not anymore."',
    '"Managing graduations across branches was chaos. BeltPass made it a system — clean, fast, trusted."',
  ]
  const roleLabels = [
    '4th Degree Black Belt · Network Owner',
    'World Champion · Brand Ambassador',
    'Academy Director · 300+ Students',
  ]

  return (
    <section className="section-wrap" style={{ padding: '120px 40px' }} id="council">
      <Reveal><SectionLabel>{c.label}</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily:'var(--font-sora)', fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:1.15, maxWidth:'700px', marginBottom:'16px', whiteSpace:'pre-line' }}>
          {c.title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ color:'var(--bp-muted2)', fontSize:'1rem', maxWidth:'500px', lineHeight:1.7, fontWeight:300, marginBottom:'60px' }}>
          {c.sub}
        </p>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px' }} className="council-grid">
        {councilData.map((person, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <Card glow style={{ padding:'32px', height:'100%', display:'flex', flexDirection:'column', gap:'20px' }}>
              {/* Real photo avatar */}
              <div style={{ position:'relative', width:'72px', height:'72px', borderRadius:'16px', overflow:'hidden', border:'2px solid var(--bp-border)', flexShrink:0 }}>
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill unoptimized
                  style={{ objectFit:'cover', filter:'saturate(0.9) brightness(0.9)' }}
                  sizes="72px"
                />
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-sora)', fontSize:'1rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'4px' }}>{person.name}</div>
                <div style={{ fontSize:'0.8rem', color:'var(--bp-muted2)', fontWeight:300 }}>{roleLabels[i]}</div>
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', background:'var(--bp-s3)', borderRadius:'6px', padding:'4px 10px', width:'fit-content' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'2px', background:beltColors[person.belt] }} />
                <span style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.62rem', color:'var(--bp-muted2)', letterSpacing:'0.05em' }}>{person.beltLabel}</span>
              </div>
              <p style={{ fontFamily:'var(--font-sora)', fontSize:'0.875rem', color:'var(--bp-muted2)', lineHeight:1.65, fontStyle:'italic', fontWeight:300, borderLeft:'2px solid var(--bp-accent)', paddingLeft:'14px', flex:1 }}>
                {quotes[i]}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <p style={{ marginTop:'32px', textAlign:'center', fontFamily:'var(--font-jetbrains)', fontSize:'0.65rem', color:'var(--bp-muted)', letterSpacing:'0.06em' }}>
          — Placeholder profiles. Replace in /src/components/sections/OtherSections.tsx
        </p>
      </Reveal>

      <style>{`.council-grid { grid-template-columns: repeat(3,1fr); } @media(max-width:900px){ .council-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ─────────────── FOUNDING OFFER ─────────────── */
export function FoundingSection() {
  const { t } = useI18n()
  const f = t.founding
  const [slots] = useState(FOUNDING_SLOTS_LEFT)

  return (
    <div id="founding" style={{ position:'relative', borderTop:'1px solid var(--bp-border)', borderBottom:'1px solid var(--bp-border)', padding:'120px 0', overflow:'hidden' }}>
      {/* Background BJJ photo */}
      <div style={{ position:'absolute', inset:0, zIndex:0 }}>
        <Image
          src={FOUNDING_BG}
          alt="BJJ Academy"
          fill unoptimized
          style={{ objectFit:'cover', filter:'brightness(0.18) saturate(0.6)', transform:'scale(1.02)' }}
          sizes="100vw"
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(4,4,6,0.92) 0%, rgba(11,12,15,0.85) 100%)' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(42,245,176,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(42,245,176,0.02) 1px, transparent 1px)', backgroundSize:'50px 50px' }} />
      </div>
      <div className="section-wrap" style={{ position:'relative', zIndex:1 }}>
        <Reveal><SectionLabel>{f.label}</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '32px', whiteSpace: 'pre-line' }}>
            {f.title}
          </h2>
        </Reveal>

        {/* Scarcity */}
        <Reveal delay={0.2}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg,rgba(42,245,176,0.06),rgba(26,159,255,0.06))', border: '1px solid rgba(42,245,176,0.2)', borderRadius: '12px', padding: '14px 22px', marginBottom: '56px' }}>
            <span style={{ background: 'var(--bp-accent)', color: 'var(--bp-black)', fontFamily: 'var(--font-jetbrains)', fontWeight: 700, padding: '3px 10px', borderRadius: '5px', fontSize: '0.65rem', letterSpacing: '0.06em' }}>{f.limited}</span>
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.78rem', color: 'var(--bp-white)' }}>
              Only <span style={{ color: 'var(--bp-accent)', fontWeight: 700 }}>{slots}</span> {f.scarcity}
            </span>
          </div>
        </Reveal>

        {/* Plan cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '760px' }} className="plan-grid">
          {/* Founder */}
          <Reveal delay={0.15}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(42,245,176,0.04), var(--bp-s2))',
              border: '1px solid rgba(42,245,176,0.28)',
              borderRadius: '20px', padding: '40px',
              position: 'relative', transition: 'all 0.35s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
            >
              <div style={{ position: 'absolute', top: '-1px', right: '24px', background: 'var(--bp-accent)', color: 'var(--bp-black)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', fontWeight: 700, padding: '5px 12px', borderRadius: '0 0 8px 8px', letterSpacing: '0.06em' }}>
                FOUNDING
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>{f.plan1Name}</div>
              <div style={{ fontFamily: 'var(--font-sora)', fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '4px' }}>
                <sup style={{ fontSize: '1.1rem', fontWeight: 400, verticalAlign: 'top', marginTop: '8px', color: 'var(--bp-muted2)' }}>€</sup>
                <span style={{ color: 'var(--bp-accent)' }}>19</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--bp-muted)', marginBottom: '28px', fontWeight: 300 }}>{f.plan1Period}</div>
              <div style={{ height: '1px', background: 'var(--bp-border)', marginBottom: '24px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
                {f.founderFeatures.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--bp-muted2)', fontWeight: 300 }}>
                    <div style={{ width: '18px', height: '18px', background: 'rgba(42,245,176,0.12)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--bp-accent)', fontSize: '0.6rem', marginTop: '1px' }}>✓</div>
                    {feat}
                  </li>
                ))}
              </ul>
              <MagneticButton style={{ width: '100%' }}>
                <a href="#signup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'var(--bp-accent)', color: 'var(--bp-black)', padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#22e8a0'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(42,245,176,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)'; e.currentTarget.style.boxShadow = '' }}
                >
                  {f.plan1Cta}
                </a>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Standard */}
          <Reveal delay={0.25}>
            <div style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '20px', padding: '40px', transition: 'all 0.35s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
            >
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>{f.plan2Name}</div>
              <div style={{ fontFamily: 'var(--font-sora)', fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '4px' }}>
                <sup style={{ fontSize: '1.1rem', fontWeight: 400, verticalAlign: 'top', marginTop: '8px', color: 'var(--bp-muted2)' }}>€</sup>
                <span>49</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--bp-muted)', marginBottom: '28px', fontWeight: 300 }}>{f.plan2Period}</div>
              <div style={{ height: '1px', background: 'var(--bp-border)', marginBottom: '24px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
                {f.standardFeatures.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--bp-muted2)', fontWeight: 300 }}>
                    <div style={{ width: '18px', height: '18px', background: 'var(--bp-s3)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--bp-muted2)', fontSize: '0.6rem', marginTop: '1px' }}>✓</div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#signup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: 'var(--bp-white)', padding: '14px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid var(--bp-border-strong)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--bp-accent)'; e.currentTarget.style.color = 'var(--bp-accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bp-border-strong)'; e.currentTarget.style.color = 'var(--bp-white)' }}
              >
                {f.plan2Cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`.plan-grid { grid-template-columns: 1fr 1fr; } @media(max-width:700px){ .plan-grid { grid-template-columns: 1fr !important; max-width:400px; } }`}</style>
    </div>
  )
}

/* ─────────────── SECURITY ─────────────── */
const secIcons = [<Shield key="s" size={20}/>, <Clipboard key="c" size={20}/>, <LinkIcon key="l" size={20}/>, <Lock key="lk" size={20}/>]

export function SecuritySection() {
  const { t } = useI18n()
  const s = t.security

  return (
    <section id="security" className="section-wrap" style={{ padding: '120px 40px' }}>
      <Reveal><SectionLabel>{s.label}</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '680px', marginBottom: '16px', whiteSpace: 'pre-line' }}>
          {s.title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ color: 'var(--bp-muted2)', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7, fontWeight: 300, marginBottom: '56px' }}>{s.sub}</p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="sec-grid">
        {s.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ x: 4, borderColor: 'var(--bp-border-strong)' }}
              style={{
                background: 'var(--bp-s2)',
                border: '1px solid var(--bp-border)',
                borderRadius: '16px',
                padding: '28px 28px',
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '20px',
                alignItems: 'start',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ width: '48px', height: '48px', background: 'var(--bp-s3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bp-accent)' }}>
                {secIcons[i]}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                <p style={{ color: 'var(--bp-muted2)', fontSize: '0.86rem', lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <style>{`.sec-grid { grid-template-columns: repeat(2,1fr); } @media(max-width:700px){ .sec-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ─────────────── MAP ─────────────── */
const mapPins = [
  { label: '🇵🇹 Portugal', left: '30%', top: '44%' },
  { label: '🇧🇷 Brazil',   left: '27%', top: '62%' },
  { label: '🇺🇸 USA',      left: '17%', top: '37%' },
  { label: '🇬🇧 UK',       left: '33%', top: '30%' },
  { label: '🇯🇵 Japan',    left: '78%', top: '37%' },
  { label: '🇦🇺 Australia',left: '80%', top: '70%' },
]

export function MapSection() {
  const { t } = useI18n()
  const m = t.map

  return (
    <div style={{ background: 'var(--bp-surface)', borderTop: '1px solid var(--bp-border)', padding: '120px 0' }}>
      <div className="section-wrap">
        <Reveal><SectionLabel>{m.label}</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '600px', marginBottom: '56px', whiteSpace: 'pre-line' }}>
            {m.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ position: 'relative', background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '20px', height: '360px', overflow: 'hidden' }}>
            {/* Grid bg */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(42,245,176,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(42,245,176,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            {/* Gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(42,245,176,0.03), transparent)' }} />
            {/* Pins */}
            {mapPins.map((pin, i) => (
              <motion.div
                key={pin.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                style={{ position: 'absolute', left: pin.left, top: pin.top, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
              >
                <div style={{
                  width: '12px', height: '12px',
                  background: 'var(--bp-accent)',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 4px rgba(42,245,176,0.15), 0 0 16px rgba(42,245,176,0.4)',
                  animation: `pinPulse ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }} />
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--bp-accent)', background: 'rgba(42,245,176,0.1)', border: '1px solid rgba(42,245,176,0.2)', borderRadius: '4px', padding: '2px 7px', whiteSpace: 'nowrap' }}>
                  {pin.label}
                </div>
              </motion.div>
            ))}
            <div style={{ position: 'absolute', bottom: '16px', right: '20px', fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-muted)', letterSpacing: '0.08em' }}>
              Interactive map — coming soon
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes pinPulse { 0%,100%{box-shadow:0 0 0 4px rgba(42,245,176,0.15),0 0 16px rgba(42,245,176,0.3)} 50%{box-shadow:0 0 0 8px rgba(42,245,176,0.08),0 0 28px rgba(42,245,176,0.5)} }`}</style>
    </div>
  )
}

/* ─────────────── API ─────────────── */
export function APISection() {
  const { t } = useI18n()
  const a = t.api
  const chips = ['REST API', 'Webhooks', 'Stripe Billing', 'QR Export', 'PDF Export', 'Zapier', 'White-label', 'Federation API', 'CSV Import']

  return (
    <section className="section-wrap" style={{ padding: '120px 40px' }}>
      <Reveal><SectionLabel>{a.label}</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '600px', marginBottom: '16px' }}>
          {a.title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ color: 'var(--bp-muted2)', fontSize: '1rem', maxWidth: '540px', lineHeight: 1.7, fontWeight: 300, marginBottom: '36px' }}>{a.sub}</p>
      </Reveal>
      <Reveal delay={0.25}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {chips.map((chip, i) => (
            <div key={chip} style={{
              background: i < 2 ? 'rgba(42,245,176,0.08)' : 'var(--bp-s2)',
              border: `1px solid ${i < 2 ? 'rgba(42,245,176,0.25)' : 'var(--bp-border)'}`,
              color: i < 2 ? 'var(--bp-accent)' : 'var(--bp-muted2)',
              borderRadius: '100px', padding: '7px 16px',
              fontFamily: 'var(--font-jetbrains)', fontSize: '0.7rem', letterSpacing: '0.04em',
              transition: 'all 0.2s', cursor: 'default',
            }}>
              {chip}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <div style={{ background: 'var(--bp-black)', border: '1px solid var(--bp-border)', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ background: 'var(--bp-s2)', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--bp-border)' }}>
            <div style={{ display: 'flex', gap: '7px' }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
            </div>
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-muted)', letterSpacing: '0.08em' }}>JavaScript — BeltPass API Preview</span>
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-accent)', letterSpacing: '0.06em' }}>COMING SOON</span>
          </div>
          <pre style={{ padding: '24px', fontFamily: 'var(--font-jetbrains)', fontSize: '0.78rem', lineHeight: 1.9, color: 'var(--bp-muted2)', overflowX: 'auto', margin: 0 }}>
            <span style={{ color: 'var(--bp-muted)' }}>{'// Issue a graduation certificate\n'}</span>
            <span style={{ color: 'var(--bp-blue)' }}>const</span>{' cert = '}<span style={{ color: 'var(--bp-blue)' }}>await</span>{' beltpass.'}<span style={{ color: 'var(--bp-accent)' }}>issue</span>{'({\n'}
            {'  '}<span style={{ color: '#ffbd2e' }}>academyId</span>{': '}<span style={{ color: '#a8ff78' }}>&quot;academy_xyz&quot;</span>{',\n'}
            {'  '}<span style={{ color: '#ffbd2e' }}>athleteId</span>{': '}<span style={{ color: '#a8ff78' }}>&quot;athlete_joao&quot;</span>{',\n'}
            {'  '}<span style={{ color: '#ffbd2e' }}>rank</span>{': '}<span style={{ color: '#a8ff78' }}>&quot;brown_belt&quot;</span>{',\n'}
            {'  '}<span style={{ color: '#ffbd2e' }}>issuedBy</span>{': '}<span style={{ color: '#a8ff78' }}>&quot;master_ricardo&quot;</span>{',\n'}
            {'  '}<span style={{ color: '#ffbd2e' }}>date</span>{': '}<span style={{ color: '#a8ff78' }}>&quot;2024-02-14&quot;</span>{',\n'}
            {'});\n\n'}
            <span style={{ color: 'var(--bp-muted)' }}>{'// cert.verificationUrl → https://beltpass.io/v/BP-2024-BRW-00847\n'}</span>
            <span style={{ color: 'var(--bp-muted)' }}>{'// cert.qrCode → base64 PNG ready to embed\n'}</span>
            <span style={{ color: 'var(--bp-muted)' }}>{'// cert.status → "verified"'}</span>
          </pre>
        </div>
      </Reveal>
    </section>
  )
}

/* ─────────────── SIGNUP FORM ─────────────── */
export function SignupSection() {
  const { t } = useI18n()
  const f = t.form
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="signup" className="section-wrap" style={{ padding: '140px 40px' }}>
      <Reveal><SectionLabel>{f.label}</SectionLabel></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', marginTop: '20px', alignItems: 'start' }} className="form-layout">

        {/* Left info with photo */}
        <div>
          <Reveal delay={0.1}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(42,245,176,0.08)', border: '1px solid rgba(42,245,176,0.2)', borderRadius: '8px', padding: '7px 14px', fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--bp-accent)', marginBottom: '20px', letterSpacing: '0.06em' }}>
              ⚡ {FOUNDING_SLOTS_LEFT} founding slots remaining
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '16px' }}>
              {f.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: 'var(--bp-muted2)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>{f.desc}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {f.promises.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--bp-muted2)', fontWeight: 300 }}>
                  <span style={{ color: 'var(--bp-accent)', fontSize: '0.8rem' }}>→</span>
                  {p}
                </div>
              ))}
            </div>
          </Reveal>
          {/* Academy showcase photo */}
          <Reveal delay={0.35}>
            <div style={{ position:'relative', height:'180px', borderRadius:'16px', overflow:'hidden', border:'1px solid var(--bp-border)', marginTop:'32px' }}>
              <Image
                src="/images/pexels-6253314.jpeg"
                alt="BJJ Academy training" fill unoptimized
                style={{ objectFit:'cover', filter:'brightness(0.65) saturate(0.8)', transition:'transform 0.6s ease' }}
                sizes="400px"
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(42,245,176,0.06), rgba(26,159,255,0.06))' }} />
              <div style={{ position:'absolute', bottom:'14px', left:'16px' }}>
                <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.6rem', color:'var(--bp-muted2)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'3px' }}>Join the network</div>
                <div style={{ fontFamily:'var(--font-sora)', fontSize:'0.85rem', fontWeight:700, color:'var(--bp-white)' }}>Founding Academies 2024</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.2}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <Field label={f.fieldAcademy} placeholder="Alliance BJJ Lisboa" required />
                <Field label={f.fieldMaster} placeholder="Prof. Ricardo Santos" required />
              </div>
              <Field label={f.fieldEmail} type="email" placeholder="master@academy.com" required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <SelectField label={f.fieldCountry} options={['Portugal', 'Brazil', 'United States', 'United Kingdom', 'Spain', 'Other']} required />
                <Field label={f.fieldWhatsapp} type="tel" placeholder="+351 912 345 678" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <SelectField label={f.fieldStudents} options={['1–30', '31–100', '101–300', '300+']} />
                <SelectField label={f.fieldDiscipline} options={['BJJ', 'MMA', 'Judo', 'Luta Livre', 'Mixed / Other']} />
              </div>
              <MagneticButton>
                <button type="submit" style={{ width: '100%', background: 'var(--bp-accent)', color: 'var(--bp-black)', border: 'none', borderRadius: '12px', padding: '16px 28px', fontFamily: 'var(--font-sora)', fontSize: '1rem', fontWeight: 700, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#22e8a0'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(42,245,176,0.35)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)'; e.currentTarget.style.boxShadow = '' }}
                >
                  {f.submit}
                </button>
              </MagneticButton>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '48px 32px', background: 'linear-gradient(135deg,rgba(42,245,176,0.05),var(--bp-s2))', border: '1px solid rgba(42,245,176,0.25)', borderRadius: '20px' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>{f.successTitle}</h3>
              <p style={{ color: 'var(--bp-muted2)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.successDesc}</p>
            </motion.div>
          )}
        </Reveal>
      </div>
      <style>{`
        .form-layout { grid-template-columns: 1fr 1.3fr; }
        @media(max-width:900px){ .form-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
        .form-row { grid-template-columns: 1fr 1fr; }
        @media(max-width:600px){ .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function Field({ label, placeholder, type = 'text', required = false }: { label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</label>
      <input type={type} placeholder={placeholder} required={required}
        style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '10px', padding: '12px 14px', fontFamily: 'var(--font-sora)', fontSize: '0.875rem', color: 'var(--bp-white)', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--bp-accent)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,245,176,0.1)' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--bp-border)'; e.currentTarget.style.boxShadow = '' }}
      />
    </div>
  )
}

function SelectField({ label, options, required = false }: { label: string; options: string[]; required?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</label>
      <select required={required}
        style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '10px', padding: '12px 14px', fontFamily: 'var(--font-sora)', fontSize: '0.875rem', color: 'var(--bp-white)', outline: 'none', transition: 'border-color 0.2s', WebkitAppearance: 'none' }}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--bp-accent)' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--bp-border)' }}
      >
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
