import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bp: {
          black:   '#040406',
          surface: '#0b0c0f',
          s2:      '#111318',
          s3:      '#191c24',
          accent:  '#2af5b0',
          blue:    '#1a9fff',
          white:   '#f0f2f7',
          muted:   '#5a6075',
          muted2:  '#8891a8',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-up':     'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer':     'shimmer 1.5s ease-in-out infinite',
        'pin-pulse':   'pinPulse 2.5s ease-in-out infinite',
        'load-bar':    'loadBar 1.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'scan-line':   'scanLine 2s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer:   { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        pinPulse:  { '0%,100%': { boxShadow: '0 0 0 4px rgba(42,245,176,0.2)' }, '50%': { boxShadow: '0 0 0 8px rgba(42,245,176,0.08), 0 0 30px rgba(42,245,176,0.5)' } },
        loadBar:   { '0%': { width: '0%' }, '80%': { width: '85%' }, '100%': { width: '100%' } },
        scanLine:  { '0%': { top: '0%' }, '100%': { top: '100%' } },
        float:     { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        glowPulse: { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        'grid-lines': "linear-gradient(rgba(42,245,176,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(42,245,176,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

export default config
