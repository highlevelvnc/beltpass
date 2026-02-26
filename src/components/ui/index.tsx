'use client'

import { useRef, ReactNode, MouseEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─────────────────── BUTTON ─────────────────── */
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent-outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-300 border-0 outline-none focus-visible:ring-2 focus-visible:ring-bp-accent'
  const sizes = { sm: 'text-[0.8rem] px-4 py-2.5', md: 'text-[0.9rem] px-6 py-3.5', lg: 'text-[1rem] px-8 py-4' }
  const variants = {
    primary:       'bg-bp-accent text-bp-black hover:bg-[#22e8a0] hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(42,245,176,0.3)]',
    secondary:     'bg-transparent text-bp-white border border-[var(--bp-border-strong)] hover:border-bp-accent hover:text-bp-accent hover:-translate-y-[2px]',
    ghost:         'bg-transparent text-bp-muted2 hover:text-bp-white',
    'accent-outline': 'bg-[rgba(42,245,176,0.08)] text-bp-accent border border-[rgba(42,245,176,0.2)] hover:bg-[rgba(42,245,176,0.14)] hover:-translate-y-[2px]',
  }
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

/* ─────────────────── SECTION LABEL ─────────────────── */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      'inline-flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-bp-accent mb-4',
      className
    )}>
      <span style={{ width: '22px', height: '1px', background: 'var(--bp-accent)', display: 'block' }} />
      {children}
    </div>
  )
}

/* ─────────────────── REVEAL BLOCK ─────────────────── */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────── MAGNETIC BUTTON ─────────────────── */
export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const child = el.firstElementChild as HTMLElement
    if (child) child.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px) translateY(-2px)`
  }

  const onLeave = () => {
    const child = ref.current?.firstElementChild as HTMLElement
    if (child) child.style.transform = ''
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={cn('inline-block', className)}>
      {children}
    </div>
  )
}

/* ─────────────────── COUNTER ─────────────────── */
export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  className,
}: {
  target: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView && (
        <Counter target={target} prefix={prefix} suffix={suffix} />
      )}
    </motion.span>
  )
}

function Counter({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      if (ref.current) ref.current.textContent = prefix + Math.floor(start) + suffix
    }, 16)
    return () => clearInterval(timer)
  }, [target, prefix, suffix])

  return <span ref={ref}>{prefix}{0}{suffix}</span>
}

function useEffect(callback: () => (() => void) | void, deps: unknown[]) {
  // This is a workaround to use useEffect in a sub-component without importing separately
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return require('react').useEffect(callback, deps)
}

/* ─────────────────── CARD ─────────────────── */
export function Card({
  children,
  className,
  glow = false,
  hover = true,
  spotlight = true,
}: {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
  spotlight?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    ref.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(42,245,176,0.04) 0%, transparent 60%), var(--bp-s2)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.background = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'rounded-2xl border transition-all duration-400',
        'bg-[var(--bp-s2)] border-[var(--bp-border)]',
        hover && 'hover:-translate-y-1 hover:border-[var(--bp-border-strong)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.45)]',
        glow && 'hover:shadow-[0_8px_40px_rgba(42,245,176,0.08)]',
        className
      )}
    >
      {children}
    </div>
  )
}
