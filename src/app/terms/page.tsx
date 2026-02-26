import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Service — BeltPass' }

export default function TermsPage() {
  const sections = [
    { title: '1. Acceptance', content: 'By using BeltPass, you agree to these terms. If you are representing an academy, you confirm you have the authority to bind that organization.' },
    { title: '2. Service Description', content: 'BeltPass provides a digital verification infrastructure for martial arts graduation certificates. We issue, store, and make verifiable digital certificates on behalf of verified academies and masters.' },
    { title: '3. Academy Responsibility', content: 'Academies are solely responsible for the accuracy of graduation information submitted. BeltPass provides the verification layer; the authenticity of credentials depends on the issuing academy and master.' },
    { title: '4. Prohibited Use', content: 'You may not use BeltPass to issue fraudulent or false graduation records. Misuse will result in immediate account termination and may be reported to relevant martial arts federations.' },
    { title: '5. Certificates & Permanence', content: 'Once issued, certificates are designed to be permanent records. Revocation is possible only in cases of confirmed fraud. Legitimate records cannot be retroactively invalidated by academy changes.' },
    { title: '6. Founding Offer', content: 'Founding pricing is locked at the rate agreed at signup and applies for the lifetime of the account, provided the account remains active and in good standing.' },
    { title: '7. Limitation of Liability', content: 'BeltPass is a verification infrastructure provider. We are not responsible for disputes between academies, athletes, or federations regarding the legitimacy of martial arts credentials.' },
    { title: '8. Governing Law', content: 'These terms are governed by Portuguese law. Disputes shall be resolved in the courts of Lisbon, Portugal.' },
  ]

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }}>
        <h1 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '12px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--bp-muted)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.72rem', marginBottom: '48px', letterSpacing: '0.05em' }}>Last updated: January 2025</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map(s => (
            <div key={s.title}>
              <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--bp-white)' }}>{s.title}</h2>
              <p style={{ color: 'var(--bp-muted2)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
