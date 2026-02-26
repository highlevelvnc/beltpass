'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { mockCerts, CertData } from '@/lib/data'

function VerifyContent() {
  const params = useSearchParams()
  const codeParam = params.get('code') ?? ''
  const [code, setCode] = useState(codeParam)
  const [state, setState] = useState<'idle' | 'loading' | 'verified' | 'failed'>('idle')
  const [result, setResult] = useState<CertData | null>(null)

  useEffect(() => {
    if (codeParam) {
      setCode(codeParam)
      runVerify(codeParam)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeParam])

  const runVerify = async (c?: string) => {
    const target = (c ?? code).trim().toUpperCase()
    if (!target) return
    setState('loading')
    await new Promise(r => setTimeout(r, 800))
    const data = mockCerts[target]
    if (data) {
      setResult(data)
      setState('verified')
    } else {
      setState('failed')
    }
  }

  const beltColorMap: Record<string, string> = {
    'Brown Belt': '#7c3d12',
    'Black Belt': '#1a1a1a',
    'Purple Belt': '#6b21a8',
    'Blue Belt':  '#1a5fa8',
    'White Belt': '#e8e8e8',
  }

  const getBeltColor = (rank: string) => {
    for (const [key, val] of Object.entries(beltColorMap)) {
      if (rank.includes(key)) return val
    }
    return 'var(--bp-muted)'
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bp-black)', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--bp-accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Verification Portal
          </div>
          <h1 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '12px' }}>
            Verify a Belt
          </h1>
          <p style={{ color: 'var(--bp-muted2)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            Enter or scan a BeltPass code to instantly verify its authenticity.
          </p>
        </div>

        {/* Input */}
        <div style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '20px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
            BeltPass Code
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={code}
              onChange={e => { setCode(e.target.value); setState('idle') }}
              onKeyDown={e => e.key === 'Enter' && runVerify()}
              placeholder="e.g. BP-2024-BLK-00001"
              style={{
                flex: 1,
                background: 'var(--bp-s3)',
                border: '1px solid var(--bp-border)',
                borderRadius: '10px',
                padding: '14px 16px',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '0.85rem',
                color: 'var(--bp-white)',
                outline: 'none',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--bp-accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--bp-border)')}
            />
            <button
              onClick={() => runVerify()}
              style={{
                background: 'var(--bp-accent)', color: 'var(--bp-black)',
                border: 'none', borderRadius: '10px', padding: '14px 22px',
                fontFamily: 'var(--font-jetbrains)', fontWeight: 700, fontSize: '0.82rem',
                transition: 'all 0.2s', cursor: 'pointer', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#22e8a0')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bp-accent)')}
            >
              {state === 'loading' ? 'Checking…' : 'Verify →'}
            </button>
          </div>
        </div>

        {/* Result */}
        {state !== 'idle' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            {state === 'loading' && (
              <div style={{ textAlign: 'center', padding: '48px', color: 'var(--bp-muted)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.8rem' }} className="blink-cursor">
                Checking record…
              </div>
            )}
            {state === 'verified' && result && (
              <div style={{ background: 'linear-gradient(135deg, rgba(42,245,176,0.05), var(--bp-s2))', border: '1px solid rgba(42,245,176,0.3)', borderRadius: '20px', overflow: 'hidden' }}>
                {/* Status bar */}
                <div style={{ background: 'rgba(42,245,176,0.1)', padding: '16px 28px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(42,245,176,0.2)' }}>
                  <span style={{ fontSize: '1.2rem' }}>✅</span>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 700, color: 'var(--bp-accent)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>VERIFIED — Authentic BeltPass Record</span>
                </div>
                {/* Data */}
                <div style={{ padding: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {[
                    ['Athlete', result.athlete],
                    ['Rank', result.rank],
                    ['Issued by', result.issuedBy],
                    ['Academy', result.academy],
                    ['Date', result.date],
                    ['Country', result.country],
                    ['Discipline', result.discipline],
                    ['Certificate ID', result.id],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                      <div style={{
                        fontFamily: label === 'Certificate ID' ? 'var(--font-jetbrains)' : 'var(--font-sora)',
                        fontSize: label === 'Certificate ID' ? '0.75rem' : '0.9rem',
                        fontWeight: 600,
                        color: label === 'Rank' ? 'var(--bp-blue)' : label === 'Certificate ID' ? 'var(--bp-accent)' : 'var(--bp-white)',
                      }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Belt visual */}
                <div style={{ padding: '0 28px 28px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ height: '14px', width: '120px', borderRadius: '4px', background: getBeltColor(result.rank), opacity: 0.85 }} />
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.7rem', color: 'var(--bp-muted)', letterSpacing: '0.06em' }}>
                    {result.rank}
                  </span>
                </div>
              </div>
            )}
            {state === 'failed' && (
              <div style={{ background: 'rgba(255,95,87,0.04)', border: '1px solid rgba(255,95,87,0.3)', borderRadius: '20px', padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>❌</div>
                <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#ff5f57' }}>Record Not Found</h3>
                <p style={{ color: 'var(--bp-muted2)', fontSize: '0.875rem', lineHeight: 1.65, fontWeight: 300 }}>
                  The code &quot;{code}&quot; does not match any verified record. Double-check the code or contact the issuing academy.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Demo codes */}
        <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '16px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>Try Demo Codes</div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {Object.keys(mockCerts).map(c => (
              <button key={c} onClick={() => { setCode(c); runVerify(c) }}
                style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', color: 'var(--bp-accent)', background: 'rgba(42,245,176,0.07)', border: '1px solid rgba(42,245,176,0.2)', borderRadius: '8px', padding: '7px 14px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.03em' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(42,245,176,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(42,245,176,0.07)')}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function VerifyPageClient() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bp-muted)' }}>Loading…</div>}>
      <VerifyContent />
    </Suspense>
  )
}
