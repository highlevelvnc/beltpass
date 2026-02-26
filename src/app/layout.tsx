import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/i18n/context'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['200', '300', '400', '600', '700', '800'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BeltPass — Verify the Belt. Protect the Legacy.',
    template: '%s | BeltPass',
  },
  description:
    'BeltPass is the global verification layer for martial arts graduations and verified academies. Tamper-resistant. Instant QR. Globally portable.',
  keywords: [
    'BJJ verification', 'belt verification', 'martial arts credentials',
    'jiu jitsu certification', 'BeltPass', 'MMA graduation', 'digital certificate BJJ',
  ],
  authors: [{ name: 'BeltPass', url: 'https://beltpass.io' }],
  creator: 'BeltPass',
  metadataBase: new URL('https://beltpass.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beltpass.io',
    siteName: 'BeltPass',
    title: 'BeltPass — Verify the Belt. Protect the Legacy.',
    description: 'The global infrastructure for martial arts graduation verification. BJJ, MMA and beyond.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BeltPass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeltPass — Verify the Belt. Protect the Legacy.',
    description: 'Global verification layer for martial arts graduations.',
    images: ['/og-image.png'],
    creator: '@beltpass',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#040406',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BeltPass',
              url: 'https://beltpass.io',
              description: 'Global verification layer for martial arts graduations.',
              sameAs: ['https://twitter.com/beltpass', 'https://instagram.com/beltpass.io'],
              contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@beltpass.io' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BeltPass',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'Digital certification and verification platform for martial arts academies.',
              offers: { '@type': 'Offer', price: '19', priceCurrency: 'EUR' },
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${jetbrains.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            <LoadingScreen />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
