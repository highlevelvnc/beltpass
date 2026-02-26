'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/i18n/context'
import { Reveal, SectionLabel } from '../ui'

// Step photos from Pexels (BJJ/martial arts - free commercial use)
const STEP_IMGS = [
  'https://images.pexels.com/photos/4761660/pexels-photo-4761660.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/6253302/pexels-photo-6253302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'https://images.pexels.com/photos/6253314/pexels-photo-6253314.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
]

export function HowSection() {
  const { t } = useI18n()
  const h = t.how

  const steps = [
    { num: '01', title: h.step1Title, desc: h.step1Desc, img: STEP_IMGS[0] },
    { num: '02', title: h.step2Title, desc: h.step2Desc, img: STEP_IMGS[1] },
    { num: '03', title: h.step3Title, desc: h.step3Desc, img: STEP_IMGS[2] },
  ]

  return (
    <section id="how" className="section-wrap" style={{ padding: '120px 40px' }}>
      <Reveal><SectionLabel>{h.label}</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{ fontFamily:'var(--font-sora)', fontSize:'clamp(2rem,4vw,3.2rem)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:1.1, marginBottom:'16px' }}>
          {h.title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ color:'var(--bp-muted2)', fontSize:'1.05rem', maxWidth:'520px', lineHeight:1.7, fontWeight:300, marginBottom:'80px' }}>
          {h.sub}
        </p>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start' }} className="how-grid">

        {/* Steps timeline */}
        <div>
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.15}>
              <div style={{ display:'flex', gap:'24px', paddingBottom: i < 2 ? '48px' : 0 }}>
                {/* Number + connector line */}
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <motion.div
                    whileHover={{ backgroundColor:'rgba(42,245,176,0.12)', borderColor:'rgba(42,245,176,0.4)', boxShadow:'0 0 20px rgba(42,245,176,0.15)' }}
                    style={{ width:'44px', height:'44px', background:'var(--bp-s2)', border:'1px solid var(--bp-border)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-jetbrains)', fontSize:'0.75rem', fontWeight:500, color:'var(--bp-accent)', transition:'all 0.3s' }}
                  >
                    {step.num}
                  </motion.div>
                  {i < 2 && <div style={{ width:'1px', flexGrow:1, background:'linear-gradient(180deg, var(--bp-border-strong), transparent)', marginTop:'8px' }} />}
                </div>

                {/* Content */}
                <div style={{ paddingTop:'8px' }}>
                  {/* Step image */}
                  <div style={{ position:'relative', height:'140px', borderRadius:'12px', overflow:'hidden', marginBottom:'14px', border:'1px solid var(--bp-border)' }}>
                    <Image
                      src={step.img} alt={step.title} fill unoptimized
                      style={{ objectFit:'cover', filter:'brightness(0.7) saturate(0.85)', transition:'transform 0.5s ease' }}
                      sizes="300px"
                    />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(42,245,176,0.08), transparent)' }} />
                  </div>
                  <h3 style={{ fontFamily:'var(--font-sora)', fontSize:'1.1rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'8px', color:'var(--bp-white)' }}>
                    {step.title}
                  </h3>
                  <p style={{ color:'var(--bp-muted2)', fontSize:'0.875rem', lineHeight:1.65, fontWeight:300 }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certificate preview — sticky */}
        <Reveal delay={0.3}>
          <div style={{ background:'var(--bp-s2)', border:'1px solid var(--bp-border)', borderRadius:'20px', padding:'32px', position:'sticky', top:'120px' }}>
            {/* Academy photo */}
            <div style={{ position:'relative', height:'160px', borderRadius:'12px', overflow:'hidden', marginBottom:'20px', border:'1px solid var(--bp-border)' }}>
              <Image
                src="https://images.pexels.com/photos/5067745/pexels-photo-5067745.jpeg?auto=compress&cs=tinysrgb&w=700&h=350&fit=crop"
                alt="BJJ Academy training"
                fill unoptimized
                style={{ objectFit:'cover', filter:'brightness(0.6) saturate(0.8)' }}
                sizes="400px"
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 30%, rgba(17,19,24,0.95) 100%)' }} />
              <div style={{ position:'absolute', bottom:'14px', left:'16px' }}>
                <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.58rem', color:'var(--bp-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'3px' }}>Academy</div>
                <div style={{ fontFamily:'var(--font-sora)', fontSize:'0.9rem', fontWeight:700, color:'var(--bp-white)' }}>Alliance BJJ Lisboa</div>
              </div>
              <div style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(42,245,176,0.12)', border:'1px solid rgba(42,245,176,0.3)', borderRadius:'6px', padding:'4px 10px', fontFamily:'var(--font-jetbrains)', fontSize:'0.58rem', color:'var(--bp-accent)', letterSpacing:'0.06em' }}>
                ✓ VERIFIED ISSUER
              </div>
            </div>

            <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.62rem', color:'var(--bp-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>
              Certificate Preview
            </div>

            {/* Terminal cert */}
            <div className="scan-line-wrap" style={{ background:'var(--bp-s3)', border:'1px solid var(--bp-border)', borderRadius:'12px', padding:'20px' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px' }}>
                <div style={{ display:'flex', gap:'6px' }}>
                  {['#ff5f57','#ffbd2e','#28ca41'].map(c => <div key={c} style={{ width:'10px', height:'10px', borderRadius:'50%', background:c }} />)}
                </div>
                <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.58rem', color:'var(--bp-muted)', letterSpacing:'0.08em' }}>BeltPass Certificate</div>
              </div>
              <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.72rem', lineHeight:1.9 }}>
                {[
                  ['ID', 'BP-2024-BRW-00847', 'var(--bp-accent)'],
                  ['Athlete', 'João Silva', 'var(--bp-white)'],
                  ['Rank', 'Brown Belt — 1st Degree', 'var(--bp-blue)'],
                  ['Issued by', 'Prof. Ricardo Santos', 'var(--bp-white)'],
                  ['Academy', 'Alliance BJJ Lisboa', 'var(--bp-white)'],
                  ['Date', 'Feb 14, 2024', 'var(--bp-white)'],
                  ['Status', '✓ VERIFIED', 'var(--bp-accent)'],
                ].map(([label, value, color]) => (
                  <div key={label as string}>
                    <span style={{ color:'var(--bp-muted)' }}>{label}: </span>
                    <span style={{ color: color as string }}>{value}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'14px', marginTop:'16px' }}>
                <div style={{ width:'58px', height:'58px', background:'white', borderRadius:'8px', padding:'6px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="#000">
                    <rect x="0" y="0" width="18" height="18" rx="2"/><rect x="2" y="2" width="14" height="14" rx="1" fill="#fff"/><rect x="4" y="4" width="10" height="10" rx="1"/>
                    <rect x="26" y="0" width="18" height="18" rx="2"/><rect x="28" y="2" width="14" height="14" rx="1" fill="#fff"/><rect x="30" y="4" width="10" height="10" rx="1"/>
                    <rect x="0" y="26" width="18" height="18" rx="2"/><rect x="2" y="28" width="14" height="14" rx="1" fill="#fff"/><rect x="4" y="30" width="10" height="10" rx="1"/>
                    <rect x="26" y="26" width="4" height="4"/><rect x="32" y="26" width="4" height="4"/><rect x="38" y="26" width="4" height="4"/>
                    <rect x="26" y="32" width="4" height="4"/><rect x="38" y="32" width="4" height="4"/>
                    <rect x="26" y="38" width="4" height="4"/><rect x="32" y="38" width="4" height="4"/>
                  </svg>
                </div>
                <div>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(42,245,176,0.1)', border:'1px solid rgba(42,245,176,0.25)', borderRadius:'6px', padding:'4px 10px', fontFamily:'var(--font-jetbrains)', fontSize:'0.62rem', color:'var(--bp-accent)' }}>
                    ✓ Scan to Verify
                  </div>
                  <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.58rem', color:'var(--bp-muted)', marginTop:'6px' }}>
                    beltpass.io/v/BP-2024-BRW-00847
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .how-grid { grid-template-columns: 1fr 1fr; }
        @media(max-width:900px){ .how-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
