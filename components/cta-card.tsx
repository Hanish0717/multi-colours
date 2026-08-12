'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaCardProps = {
  href: string
  label: string
  title: string
  subtitle: string
  icon: ReactNode
  variant: 'app' | 'web'
  /** Entrance animation delay in ms */
  delay: number
  external?: boolean
}

type Ripple = { id: number; x: number; y: number; size: number }

export function CtaCard({
  href,
  label,
  title,
  subtitle,
  icon,
  variant,
  delay,
  external,
}: CtaCardProps) {
  const isApp = variant === 'app'
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [pressing, setPressing] = useState(false)

  function handlePointerDown(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = cardRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size =
      Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y),
      ) * 2

    const id = Date.now() + Math.random()
    setRipples((prev) => [...prev, { id, x, y, size }])
    setPressing(true)
  }

  function endPress() {
    setPressing(false)
  }

  // Per-variant tint that washes across the card, plus a soft outer glow.
  const tint: CSSProperties = isApp
    ? {
        backgroundImage:
          'linear-gradient(100deg, oklch(0.28 0.12 315 / 55%), oklch(0.18 0.03 285 / 20%) 60%)',
      }
    : {
        backgroundImage:
          'linear-gradient(100deg, oklch(0.3 0.1 200 / 45%), oklch(0.32 0.12 130 / 30%) 55%, oklch(0.34 0.13 95 / 40%))',
      }

  const iconStyle: CSSProperties = {
    backgroundImage: isApp
      ? 'linear-gradient(135deg, var(--app-accent), var(--app-accent-2))'
      : 'linear-gradient(135deg, var(--web-accent), var(--web-accent-2))',
  }

  return (
    <a
      ref={cardRef}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onPointerDown={handlePointerDown}
      onPointerUp={endPress}
      onPointerLeave={endPress}
      onPointerCancel={endPress}
      style={{ ...tint, animationDelay: `${delay}ms` }}
      className={cn(
        'group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/10 p-5 text-left backdrop-blur-md sm:p-6',
        'mc-animate mc-fade-up',
        pressing && 'mc-press',
        'shadow-[0_10px_40px_-16px_rgba(0,0,0,0.6)]',
        'transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isApp
          ? 'hover:shadow-[0_18px_50px_-18px_oklch(0.55_0.24_315_/_55%)]'
          : 'hover:shadow-[0_18px_50px_-18px_oklch(0.6_0.14_210_/_50%)]',
        'hover:-translate-y-1 hover:border-white/20',
        'active:translate-y-0 active:duration-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {/* one-time light sweep on entrance */}
      <span
        className="mc-shine mc-shine-run"
        style={{ animationDelay: `${delay + 500}ms` }}
        aria-hidden="true"
      />

      {/* tap ripples spawned at pointer position */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="mc-ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          onAnimationEnd={() =>
            setRipples((prev) => prev.filter((item) => item.id !== r.id))
          }
          aria-hidden="true"
        />
      ))}

      {/* circular gradient icon */}
      <span
        style={iconStyle}
        className={cn(
          'flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-lg',
          'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]',
          pressing && 'mc-pop',
        )}
      >
        {icon}
      </span>

      {/* title + subtitle */}
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg font-bold leading-tight text-foreground">
          {title}
        </span>
        <span className="mt-0.5 block truncate text-sm text-muted-foreground">
          {subtitle}
        </span>
      </span>

      {/* arrow over label, right-aligned */}
      <span className="flex shrink-0 flex-col items-end gap-3">
        <ArrowRight
          className={cn(
            'size-5 text-foreground/80',
            'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
            'group-hover:translate-x-1 group-active:translate-x-1.5',
          )}
          aria-hidden="true"
        />
        <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:block">
          {label}
        </span>
      </span>
    </a>
  )
}
