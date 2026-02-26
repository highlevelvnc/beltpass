import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { PhotoGallery } from '@/components/sections/PhotoGallery'
import { HowSection } from '@/components/sections/HowSection'
import { VerifySection } from '@/components/sections/VerifySection'
import {
  CouncilSection,
  FoundingSection,
  SecuritySection,
  MapSection,
  APISection,
  SignupSection,
} from '@/components/sections/OtherSections'

export const metadata: Metadata = {
  title: 'BeltPass — Verify the Belt. Protect the Legacy.',
  description: 'The global verification layer for martial arts graduations. BJJ, MMA and beyond. Tamper-resistant. Instant QR. Globally portable.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--bp-accent), transparent)', opacity: 0.4 }} />
      <ProblemSection />
      <PhotoGallery />
      <HowSection />
      <VerifySection />
      <CouncilSection />
      <FoundingSection />
      <SecuritySection />
      <MapSection />
      <APISection />
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--bp-accent), transparent)', opacity: 0.3 }} />
      <SignupSection />
    </>
  )
}
