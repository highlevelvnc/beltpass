'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnterInteractive = () => {
      dotRef.current?.classList.add('cursor-hover')
      ringRef.current?.classList.add('ring-hover')
    }
    const onLeaveInteractive = () => {
      dotRef.current?.classList.remove('cursor-hover')
      ringRef.current?.classList.remove('ring-hover')
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [role="button"], .interactive')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    const obs = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"], .interactive').forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        #bp-cursor {
          position: fixed;
          width: 10px; height: 10px;
          background: #2af5b0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, opacity 0.2s;
          mix-blend-mode: difference;
        }
        #bp-cursor.cursor-hover { width: 20px; height: 20px; }
        #bp-ring {
          position: fixed;
          width: 36px; height: 36px;
          border: 1.5px solid rgba(42,245,176,0.45);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          transition: width 0.25s, height 0.25s, opacity 0.3s, border-color 0.3s;
        }
        #bp-ring.ring-hover { width: 56px; height: 56px; border-color: rgba(42,245,176,0.25); }
        @media (pointer: coarse) {
          #bp-cursor, #bp-ring { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>
      <div id="bp-cursor" ref={dotRef} aria-hidden="true" />
      <div id="bp-ring"   ref={ringRef} aria-hidden="true" />
    </>
  )
}
