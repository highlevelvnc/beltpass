'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import { mockCerts, CertData } from '@/lib/data'
import { Reveal, SectionLabel } from '../ui'

type ResultState = 'idle' | 'loading' | 'verified' | 'failed'

export function VerifySection() {
  const { t } = useI18n()
  const v = t.verify

  const [code, setCode] = useState('')
  const [state, setState] = useState<ResultState>('idle')
  const [result, setResult] = useState<CertData | null>(null)
  const [qrUrl, setQrUrl] = useState('')
  const qrRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const demoCodes = ['BP-2024-BLK-00001', 'BP-2024-BRW-00847', 'BP-2024-PUR-01203']

  const runVerify = async () => {
    if (!code.trim()) return
    setState('loading')
    setResult(null)

    await new Promise(r => setTimeout(r, 900 + Math.random() * 400))

    const data = mockCerts[code.trim().toUpperCase()]
    if (data) {
      setResult(data)
      setState('verified')
      const url = `https://beltpass.io/verify?code=${data.id}`
      setQrUrl(url)
    } else {
      setState('failed')
    }
  }

 // Generate QR once verified
useEffect(() => {
  if (state !== 'verified' || !qrUrl || !qrRef.current) return

  qrRef.current.innerHTML = ''

  import('qrcode')
    .then((QRCode) => {
      const canvas = document.createElement('canvas')

      QRCode.toCanvas(
        canvas,
        qrUrl,
        { width: 80, color: { dark: '#000', light: '#fff' } },
        (err) => {
          if (!err && qrRef.current) {
            canvas.style.borderRadius = '6px'
            qrRef.current.innerHTML = ''
            qrRef.current.appendChild(canvas)
          }
        }
      )
    })
    .catch(() => {
      if (qrRef.current)
        qrRef.current.innerHTML =
          '<div style="width:80px;height:80px;background:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.6rem;color:#000;text-align:center;padding:4px;">QR</div>'
    })
}, [state, qrUrl])

  return (
    <div id="verify" style={{
      background: 'var(--bp-surface)',
      borderTop: '1px solid var(--bp-border)',
      borderBottom: '1px solid var(--bp-border)',
      padding: '120px 0',
    }}>
      <div className="section-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} >
        {/* Left info */}
        <div>
          <Reveal>
            <SectionLabel>{v.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-sora)',
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              {v.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: 'var(--bp-muted2)', fontSize: '1rem', maxWidth: '460px', lineHeight: 1.7, fontWeight: 300, marginBottom: '36px' }}>
              {v.sub}
            </p>
          </Reveal>

          {/* Demo codes */}
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {demoCodes.map(dc => (
                <button key={dc}
                  onClick={() => { setCode(dc); inputRef.current?.focus() }}
                  style={{
                    background: 'var(--bp-s2)',
                    border: '1px solid var(--bp-border)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    width: '100%', maxWidth: '340px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--bp-border-strong)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bp-border)' }}
                >
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.08em' }}>
                    {v.tryThis}
                  </span>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.82rem', color: 'var(--bp-accent)', letterSpacing: '0.04em' }}>
                    {dc}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Console */}
        <Reveal delay={0.2} direction="left">
          <div style={{
            background: 'var(--bp-black)',
            border: '1px solid var(--bp-border)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 60px rgba(0,0,0,0.6)',
          }}>
            {/* Titlebar */}
            <div style={{
              background: 'var(--bp-s2)',
              padding: '13px 20px',
              display: 'flex', alignItems: 'center', gap: '12px',
              borderBottom: '1px solid var(--bp-border)',
            }}>
              <div style={{ display: 'flex', gap: '7px' }}>
                {['#ff5f57','#ffbd2e','#28ca41'].map(c => <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />)}
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.05em' }}>
                BeltPass Verification Console — v1.0
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: '24px' }}>
              {/* Input */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={code}
                  onChange={e => { setCode(e.target.value); setState('idle') }}
                  onKeyDown={e => e.key === 'Enter' && runVerify()}
                  placeholder={v.inputPlaceholder}
                  style={{
                    flex: 1,
                    background: 'var(--bp-s2)',
                    border: '1px solid var(--bp-border)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '0.78rem',
                    color: 'var(--bp-white)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--bp-accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--bp-border)')}
                />
                <button
                  onClick={runVerify}
                  disabled={state === 'loading'}
                  style={{
                    background: 'var(--bp-accent)',
                    color: 'var(--bp-black)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 18px',
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    opacity: state === 'loading' ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (state !== 'loading') e.currentTarget.style.background = '#22e8a0' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)' }}
                >
                  {state === 'loading' ? '…' : v.verifyBtn}
                </button>
              </div>

              {/* Result box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={state + (result?.id ?? '')}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: state === 'verified' ? 'rgba(42,245,176,0.03)' : state === 'failed' ? 'rgba(255,95,87,0.03)' : 'var(--bp-s2)',
                    border: `1px solid ${state === 'verified' ? 'rgba(42,245,176,0.25)' : state === 'failed' ? 'rgba(255,95,87,0.25)' : 'var(--bp-border)'}`,
                    borderRadius: '10px',
                    padding: '20px',
                    minHeight: '160px',
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '0.75rem',
                    lineHeight: 1.9,
                    transition: 'all 0.3s',
                  }}
                >
                  {state === 'idle' && (
                    <span style={{ color: 'var(--bp-muted)' }} className="blink-cursor">{v.awaiting}</span>
                  )}
                  {state === 'loading' && (
                    <span style={{ color: 'var(--bp-muted)' }} className="blink-cursor">{v.checking}</span>
                  )}
                  {state === 'verified' && result && (
                    <div>
                      {[
                        [v.statusLabel, '✓ VERIFIED', 'var(--bp-accent)', true],
                        ['Athlete', result.athlete, 'var(--bp-white)', false],
                        ['Rank', result.rank, 'var(--bp-blue)', false],
                        ['Issued by', result.issuedBy, 'var(--bp-white)', false],
                        ['Academy', result.academy, 'var(--bp-white)', false],
                        ['Date', result.date, 'var(--bp-white)', false],
                        ['Country', result.country, 'var(--bp-white)', false],
                        ['Code', result.id, 'var(--bp-accent)', false],
                      ].map(([label, value, color, bold]) => (
                        <div key={label as string}>
                          <span style={{ color: 'var(--bp-muted)' }}>{label}: </span>
                          <span style={{ color: color as string, fontWeight: bold ? 700 : 400 }}>{value}</span>
                        </div>
                      ))}
                      {/* QR */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--bp-border)' }}>
                        <div ref={qrRef} style={{ width: '80px', height: '80px', background: 'white', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }} />
                        <div>
                          <div style={{ color: 'var(--bp-muted)', fontSize: '0.65rem', marginBottom: '4px' }}>Verification QR</div>
                          <div style={{ color: 'var(--bp-muted2)', fontSize: '0.62rem', wordBreak: 'break-all' }}>beltpass.io/verify?code={result.id}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {state === 'failed' && (
                    <div>
                      <div><span style={{ color: 'var(--bp-muted)' }}>{v.statusLabel}: </span><span style={{ color: '#ff5f57', fontWeight: 700 }}>✗ {v.notFound}</span></div>
                      <div style={{ marginTop: '10px', color: 'var(--bp-muted)', fontSize: '0.7rem', lineHeight: 1.6 }}>
                        Code &quot;{code}&quot; {v.notFoundMsg}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .section-wrap.verify-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
