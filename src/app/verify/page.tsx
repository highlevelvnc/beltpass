import type { Metadata } from 'next'
import { VerifyPageClient } from './VerifyPageClient'

export const metadata: Metadata = {
  title: 'Verify a Belt — BeltPass',
  description: 'Verify any BeltPass-issued graduation certificate in seconds. Tamper-resistant. Instant QR. Trusted globally.',
}

export default function VerifyPage() {
  return <VerifyPageClient />
}
