import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Founding Academies — BeltPass',
  description: 'Join the first 50 founding academies and lock in lifetime rates on BeltPass.',
}

const faq = [
  {
    q: 'What does "Founding Academy" mean?',
    a: 'Founding Academies are the first 50 academies to join BeltPass. They receive a permanently locked rate of €19/month, a Founder badge on their academy profile, priority onboarding, and lifetime access to all features as they ship.',
  },
  {
    q: 'Is the founding rate really locked forever?',
    a: 'Yes. As long as your account remains active and in good standing, the €19/month rate is contractually locked. Standard pricing after the founding period will be €49/month.',
  },
  {
    q: 'How many students can I manage?',
    a: 'Founding academies have unlimited graduation issuances. There\'s no cap on athletes or certificates.',
  },
  {
    q: 'When does BeltPass officially launch?',
    a: 'We\'re in a controlled founding phase. Founding academies get early access and will be onboarded before the public launch. Exact timing depends on the number of academies onboarded.',
  },
  {
    q: 'Do I need technical knowledge to use BeltPass?',
    a: 'No. The BeltPass dashboard is designed for masters and academy owners, not engineers. Issuing a certificate takes under 2 minutes.',
  },
  {
    q: 'Can I use BeltPass for multiple disciplines?',
    a: 'Yes. BeltPass supports BJJ, MMA, Judo, Luta Livre, and other martial arts. You can manage multiple disciplines under one academy account.',
  },
]

export default function FoundingPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '80px' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--bp-accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '22px', height: '1px', background: 'var(--bp-accent)', display: 'block' }} />
            Founding Program
          </div>
          <h1 style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '20px' }}>
            Be part of the foundation.<br />
            <span style={{ color: 'var(--bp-accent)' }}>Not just a user.</span>
          </h1>
          <p style={{ color: 'var(--bp-muted2)', fontSize: '1.05rem', lineHeight: 1.7, fontWeight: 300 }}>
            The first 50 academies who join BeltPass don&apos;t just get software. They get a permanent stake in the infrastructure —
            with a rate that never changes, a badge that signals leadership, and direct access to the team shaping the platform.
          </p>
        </div>

        {/* Benefits */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '80px' }}>
          {[
            { icon: '🏅', title: 'Founder Badge', desc: 'Permanent badge on your academy profile in the global directory. Signals first-mover status.' },
            { icon: '🔒', title: 'Rate Locked Forever', desc: '€19/month. Never increases. Even as standard pricing grows to €49+/month and beyond.' },
            { icon: '⚡', title: 'Priority Onboarding', desc: 'Dedicated onboarding call with the BeltPass team. We set you up, answer every question.' },
            { icon: '🌟', title: 'Permanent Spotlight', desc: 'Your academy is featured in the global BeltPass directory with enhanced visibility.' },
            { icon: '🛠️', title: 'Early Feature Access', desc: 'Every new feature ships to founding academies first, weeks before general release.' },
            { icon: '🎙️', title: 'Direct Product Input', desc: 'Your feedback shapes the roadmap. Founding academies have a direct line to the product team.' },
          ].map(b => (
            <div key={b.title} style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '16px', padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>{b.icon}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{b.title}</h3>
                <p style={{ color: 'var(--bp-muted2)', fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 300 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '40px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faq.map(({ q, a }) => (
              <div key={q} style={{ background: 'var(--bp-s2)', border: '1px solid var(--bp-border)', borderRadius: '14px', padding: '24px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px' }}>{q}</h3>
                <p style={{ color: 'var(--bp-muted2)', fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 300 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(42,245,176,0.06), var(--bp-s2))', border: '1px solid rgba(42,245,176,0.25)', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sora)', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>Ready to claim your slot?</h2>
          <p style={{ color: 'var(--bp-muted2)', fontSize: '0.9rem', marginBottom: '28px', fontWeight: 300 }}>37 founding slots remaining. Takes 2 minutes to apply.</p>
          <Link href="/#signup" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--bp-accent)', color: 'var(--bp-black)',
            padding: '15px 32px', borderRadius: '12px',
            fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={undefined}
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
