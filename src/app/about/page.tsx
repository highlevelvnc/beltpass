import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — BeltPass',
  description: 'Our mission: build the global infrastructure for martial arts graduation verification.',
}

export default function AboutPage() {
  const sections = [
    { title: '1. Data We Collect', content: 'We collect information necessary to provide BeltPass services: academy and owner identity, athlete graduation records, email addresses, and usage analytics. We do not sell personal data to third parties.' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero with BJJ image */}
      <div style={{ position:'relative', height:'420px', overflow:'hidden' }}>
        <Image
          src="/images/pexels-6253305.jpeg"
          alt="BJJ training"
          fill unoptimized
          style={{ objectFit:'cover', filter:'brightness(0.35) saturate(0.7)' }}
          sizes="100vw"
          priority
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(4,4,6,0.4) 0%, rgba(4,4,6,0.9) 100%)' }} />
        <div style={{
          position:'absolute', bottom:0, left:0, right:0,
          maxWidth:'900px', margin:'0 auto', padding:'0 40px 60px',
        }}>
          <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.68rem', color:'var(--bp-accent)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'16px', display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ width:'22px', height:'1px', background:'var(--bp-accent)', display:'block' }} />
            Our Mission
          </div>
          <h1 style={{ fontFamily:'var(--font-sora)', fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:1.05, color:'var(--bp-white)' }}>
            The sport went global.<br />
            <span style={{ color:'var(--bp-accent)' }}>The credentials didn&apos;t.</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:'780px', margin:'0 auto', padding:'80px 40px 100px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'24px', color:'var(--bp-muted2)', fontSize:'1.05rem', lineHeight:1.75, fontWeight:300 }}>
          <p>
            Brazilian Jiu-Jitsu, MMA, and martial arts as a whole have become one of the world&apos;s fastest-growing sports communities.
            Academies on every continent. Athletes competing globally. Instructors traveling between countries.
          </p>
          <p>
            Yet, the infrastructure supporting credential verification has remained rooted in paper, trust-by-proximity, and word of mouth.
            A black belt earned in São Paulo carries no verifiable weight when the athlete moves to Tokyo.
            A master&apos;s signature on a certificate can&apos;t be authenticated by a promoter in London.
          </p>
          <p style={{ fontSize:'1.15rem', fontWeight:400, color:'var(--bp-white)', borderLeft:'3px solid var(--bp-accent)', paddingLeft:'20px' }}>
            BeltPass is the infrastructure layer that closes this gap. Not a social network. Not a management tool. A global trust layer.
          </p>
          <p>
            We work with academy owners, masters, and athletes to build a verification standard that transcends geography,
            lineage politics, and federation silos. Our goal is simple: every legitimate graduation should be instantly,
            permanently, and globally verifiable.
          </p>

          {/* Photo row */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', margin:'24px 0' }}>
            {[
              '/images/pexels-6253302.jpeg',
              '/images/pexels-4761663.jpeg',
            ].map((src, i) => (
              <div key={i} style={{ position:'relative', height:'200px', borderRadius:'14px', overflow:'hidden', border:'1px solid var(--bp-border)' }}>
                <Image src={src} alt="BJJ training" fill unoptimized style={{ objectFit:'cover', filter:'brightness(0.7) saturate(0.85)' }} sizes="300px" />
              </div>
            ))}
          </div>

          <p>
            If you&apos;re a master, academy owner, or federation leader who understands this problem, we want you at the table.
          </p>
        </div>

        <div style={{ marginTop:'56px', padding:'32px', background:'var(--bp-s2)', border:'1px solid var(--bp-border)', borderRadius:'16px', display:'flex', flexDirection:'column', gap:'8px' }}>
          <div style={{ fontFamily:'var(--font-jetbrains)', fontSize:'0.65rem', color:'var(--bp-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'8px' }}>Contact</div>
          <p style={{ color:'var(--bp-muted2)', fontSize:'0.9rem', fontWeight:300 }}>For partnerships, press, and founding inquiries:</p>
          <a href="mailto:hello@beltpass.io" style={{ color:'var(--bp-accent)', textDecoration:'none', fontFamily:'var(--font-jetbrains)', fontSize:'0.9rem', fontWeight:500 }}>
            hello@beltpass.io
          </a>
        </div>
      </div>
    </div>
  )
}
