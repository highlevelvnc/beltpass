import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy — BeltPass' }

export default function PrivacyPage() {
  const sections = [
    { title: '1. Data We Collect', content: 'We collect information necessary to provide BeltPass services: academy and owner identity, athlete graduation records, email addresses, and usage analytics. We do not sell personal data to third parties.' },
    { title: '2. How We Use Data', content: 'Data is used exclusively to operate the BeltPass verification infrastructure, provide certificate issuance services, and improve platform reliability. Verification records are stored to ensure permanent certificate validity.' },
    { title: '3. Data Retention', content: 'Graduation certificates and verification records are retained indefinitely to serve their purpose as lifetime credentials. Account data can be deleted upon request, subject to legal obligations.' },
    { title: '4. Security', content: 'We implement industry-standard security practices including encrypted storage, secure access controls, and audit logging. All verification links use cryptographic signatures.' },
    { title: '5. GDPR / LGPD Compliance', content: 'For users in the European Union and Brazil, you have the right to access, correct, and delete your personal data. Contact us at privacy@beltpass.io to exercise your rights.' },
    { title: '6. Contact', content: 'For privacy-related inquiries: privacy@beltpass.io' },
  ]

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px' }}>
        <h1 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '12px' }}>Privacy Policy</h1>
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
