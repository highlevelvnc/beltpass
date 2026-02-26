'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/context'
import { Reveal, SectionLabel } from '../ui'

// Pexels BJJ/MMA photos (free, commercial use, no attribution required)
const PROBLEM_IMGS = [
  '/images/pexels-6253308.jpeg',
  '/images/pexels-4761663.jpeg',
  '/images/pexels-6253316.jpeg',
]

export function ProblemSection() {
  const { t } = useI18n()
  const p = t.problem

  const cards = [
    { title: p.card1Title, desc: p.card1Desc, img: PROBLEM_IMGS[0], imgAlt: 'BJJ training fragmentation' },
    { title: p.card2Title, desc: p.card2Desc, img: PROBLEM_IMGS[1], imgAlt: 'Belt fraud risk in martial arts' },
    { title: p.card3Title, desc: p.card3Desc, img: PROBLEM_IMGS[2], imgAlt: 'Athlete credential portability' },
  ]

  return (
    <section id="problem" className="section-wrap" style={{ padding: '140px 40px 100px' }}>
      <Reveal><SectionLabel>{p.label}</SectionLabel></Reveal>

      {/* Manifesto */}
      <div style={{ maxWidth: '860px', marginBottom: '80px' }}>
        <Reveal delay={0.1}>
          <p style={{ fontFamily:'var(--font-sora)', fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--bp-white)', marginBottom:'8px' }}>
            {p.manifesto1}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontFamily:'var(--font-sora)', fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:300, letterSpacing:'-0.03em', lineHeight:1.2, color:'var(--bp-muted)', marginBottom:'28px' }}>
            {p.manifesto2}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p style={{ fontSize:'clamp(1.1rem,2vw,1.5rem)', fontWeight:300, color:'var(--bp-muted2)', lineHeight:1.5, whiteSpace:'pre-line' }}>
            {p.manifesto3}
          </p>
        </Reveal>
      </div>

      {/* Cards with images */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px' }} className="problem-grid">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.12}>
            <div
              style={{ background:'var(--bp-s2)', border:'1px solid var(--bp-border)', borderRadius:'20px', overflow:'hidden', height:'100%', display:'flex', flexDirection:'column', transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform='translateY(-6px)'; el.style.borderColor='var(--bp-border-strong)'; el.style.boxShadow='0 20px 60px rgba(0,0,0,0.5)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.borderColor='var(--bp-border)'; el.style.boxShadow='' }}
            >
              {/* Image */}
              <div style={{ position:'relative', height:'200px', overflow:'hidden' }}>
                <Image
                  src={card.img} alt={card.imgAlt} fill unoptimized
                  style={{ objectFit:'cover', transition:'transform 0.7s ease', filter:'brightness(0.72) saturate(0.85)' }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 20%, var(--bp-s2) 100%)' }} />
                <div style={{ position:'absolute', top:'14px', left:'14px', background:'rgba(4,4,6,0.78)', backdropFilter:'blur(8px)', border:'1px solid var(--bp-border)', borderRadius:'8px', padding:'4px 10px', fontFamily:'var(--font-jetbrains)', fontSize:'0.62rem', color:'var(--bp-accent)', letterSpacing:'0.08em' }}>
                  0{i + 1}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding:'24px 28px 28px', flex:1 }}>
                <h3 style={{ fontFamily:'var(--font-sora)', fontSize:'1.05rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'10px', color:'var(--bp-white)' }}>
                  {card.title}
                </h3>
                <p style={{ color:'var(--bp-muted2)', fontSize:'0.875rem', lineHeight:1.65, fontWeight:300 }}>{card.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        .problem-grid { grid-template-columns: repeat(3,1fr); }
        @media(max-width:900px){ .problem-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
