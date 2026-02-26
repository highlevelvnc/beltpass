# BeltPass — Global Martial Arts Verification Infrastructure

Ultra-premium Next.js 15 institutional website for BeltPass.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, providers
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Design tokens, animations, utilities
│   ├── verify/             # /verify page (QR scanner + verification)
│   ├── founding/           # /founding page (FAQ + benefits)
│   ├── about/              # /about page (manifesto)
│   ├── contact/            # /contact page (form)
│   ├── privacy/            # /privacy page
│   ├── terms/              # /terms page
│   ├── sitemap.ts          # Auto sitemap
│   └── robots.ts           # Robots.txt
│
├── components/
│   ├── ui/
│   │   ├── index.tsx       # Button, SectionLabel, Reveal, MagneticButton, Card, Counter
│   │   ├── Navbar.tsx      # Fixed nav, mobile menu, lang selector, theme toggle
│   │   ├── Footer.tsx      # Full footer with links
│   │   ├── CustomCursor.tsx # Magnetic custom cursor
│   │   ├── LoadingScreen.tsx # "Verifying the legacy…" loader
│   │   └── ThemeProvider.tsx # Dark/light theme context
│   │
│   └── sections/
│       ├── HeroSection.tsx     # Video hero, animated headline, CTAs
│       ├── StatsBar.tsx        # Animated counters
│       ├── ProblemSection.tsx  # Manifesto + 3 problem cards
│       ├── HowSection.tsx      # Timeline steps + cert preview
│       ├── VerifySection.tsx   # Interactive terminal verify console
│       └── OtherSections.tsx   # Council, Founding, Security, Map, API, Signup
│
├── i18n/
│   ├── translations.ts     # All EN / PT / PT-BR copy
│   └── context.tsx         # Language context + hook
│
└── lib/
    ├── data.ts             # Mock cert data, founding slots constants
    └── utils.ts            # cn() utility
```

---

## 🎨 Design System

### Colors (CSS vars in globals.css)
| Variable       | Value     | Usage |
|----------------|-----------|-------|
| `--bp-black`   | #040406   | Page background |
| `--bp-surface` | #0b0c0f   | Section backgrounds |
| `--bp-s2`      | #111318   | Cards |
| `--bp-s3`      | #191c24   | Nested elements |
| `--bp-accent`  | #2af5b0   | Primary accent (green) |
| `--bp-blue`    | #1a9fff   | Secondary accent |
| `--bp-white`   | #f0f2f7   | Text |
| `--bp-muted`   | #5a6075   | Muted text |
| `--bp-muted2`  | #8891a8   | Secondary muted |

### Typography
- **Display**: Sora (weights: 200-800)
- **Mono**: JetBrains Mono (weights: 300-600)

---

## 🔁 Where to Replace Placeholders

### 1. Hero Video
```tsx
// src/components/sections/HeroSection.tsx
// Download video from Pexels and serve locally:
<source src="/assets/hero.mp4" type="video/mp4" />
// Current: uses Pexels CDN URL (works but slower)
```

### 2. Council / Team Members
```ts
// src/lib/data.ts — add to councilMembers array
// src/components/sections/OtherSections.tsx — CouncilSection
// Replace emoji avatars with <Image> components:
import Image from 'next/image'
<Image src="/assets/master-joao.jpg" alt="Prof. João" width={72} height={72} />
```

### 3. Mock Certificates
```ts
// src/lib/data.ts — mockCerts object
// Add or modify certificate records for the verify demo
```

### 4. Pricing
```tsx
// src/components/sections/OtherSections.tsx — FoundingSection
// Change €19 and €49 to actual prices
```

### 5. Founding Slots
```ts
// src/lib/data.ts
export const FOUNDING_SLOTS_LEFT = 37  // Update as slots fill
```

### 6. Domain + Social Links
```tsx
// src/app/layout.tsx — metadata.metadataBase
// src/components/ui/Footer.tsx — social links
// src/app/sitemap.ts — base URL
```

### 7. Analytics / Tracking
```tsx
// src/app/layout.tsx — add GA4 or Plausible script in <head>
```

---

## 🌍 Languages

- **EN** (default)
- **PT** (Portugal)
- **PT-BR** (Brazil)

Edit translations in `src/i18n/translations.ts`.

To add a new language:
1. Add to `Lang` type
2. Add translations object
3. Add `<option>` in Navbar

---

## 📸 Assets

Download these for local serving (better performance):

| Asset | Source | Local path |
|-------|--------|------------|
| Hero video | [Pexels 8611716](https://www.pexels.com/video/8611716/) | `/public/assets/hero.mp4` |
| MMA training | [Pexels 35030832](https://www.pexels.com/video/35030832/) | `/public/assets/mma-1.mp4` |
| Academy photos | [Unsplash BJJ](https://unsplash.com/s/photos/bjj) | `/public/assets/photo-*.jpg` |

---

## ⚡ Performance Tips

1. **Video**: Use `ffmpeg` to compress hero video to <8MB:
   ```bash
   ffmpeg -i hero-original.mp4 -vf "scale=1920:-1" -c:v libx264 -crf 28 -an public/assets/hero.mp4
   ```

2. **Images**: Use `next/image` for all photos (automatic WebP + lazy load)

3. **Fonts**: Already using `next/font/google` with `display: swap`

---

## 🚢 Deploy

**Vercel (recommended):**
```bash
vercel deploy
```

**Environment variables** (none required for MVP — add when connecting backend):
```
NEXT_PUBLIC_API_URL=https://api.beltpass.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🛠️ Extending

### Connect a real backend for /verify
```ts
// src/components/sections/VerifySection.tsx
// Replace mock lookup with:
const res = await fetch(`/api/verify?code=${code}`)
const data = await res.json()
```

### Add Stripe for payments
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### Real QR scanning (mobile)
Use `html5-qrcode` or `@zxing/library` in the /verify page

---

Built with ❤️ for the BeltPass founding team.
