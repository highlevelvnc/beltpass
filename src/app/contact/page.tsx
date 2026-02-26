'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--bp-accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '22px', height: '1px', background: 'var(--bp-accent)', display: 'block' }} />
          Contact
        </div>
        <h1 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '16px' }}>
          Let&apos;s talk.
        </h1>
        <p style={{ color: 'var(--bp-muted2)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '48px' }}>
          Whether you&apos;re interested in joining as a founding academy, exploring a partnership, or have press inquiries — we&apos;re here.
        </p>

        {!sent ? (
          <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Your Name', type: 'text', placeholder: 'Prof. João Silva' },
              { label: 'Email', type: 'email', placeholder: 'you@academy.com' },
            ].map(({ label, type, placeholder }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</label>
                <input type={type} placeholder={placeholder} required
                  style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '10px', padding: '13px 16px', fontFamily: 'var(--font-sora)', fontSize: '0.875rem', color: 'var(--bp-white)', outline: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--bp-accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--bp-border)')}
                />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--bp-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Message</label>
              <textarea rows={5} placeholder="Tell us about your academy, goals, or question…" required
                style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '10px', padding: '13px 16px', fontFamily: 'var(--font-sora)', fontSize: '0.875rem', color: 'var(--bp-white)', outline: 'none', resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--bp-accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--bp-border)')}
              />
            </div>
            <button type="submit"
              style={{ background: 'var(--bp-accent)', color: 'var(--bp-black)', border: 'none', borderRadius: '12px', padding: '15px 24px', fontFamily: 'var(--font-sora)', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#22e8a0'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bp-accent)'; e.currentTarget.style.transform = '' }}
            >
              Send Message →
            </button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', padding: '48px 32px', background: 'linear-gradient(135deg,rgba(42,245,176,0.05),var(--bp-s2))', border: '1px solid rgba(42,245,176,0.25)', borderRadius: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
            <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>Message received.</h3>
            <p style={{ color: 'var(--bp-muted2)', fontSize: '0.9rem', lineHeight: 1.65 }}>We&apos;ll get back to you within 24–48 hours.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
