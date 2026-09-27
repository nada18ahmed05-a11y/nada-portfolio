'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * CircuitBg
 * Animated PCB-style circuit board background.
 * - Static SVG traces drawn on a tiled pattern (fixed, performant)
 * - Moving "electron" pulse along traces
 * - Subtle grid overlay
 *
 * Theme-aware: reads --circuit-trace / --circuit-node / --circuit-pulse /
 * --circuit-pulse-glow / --circuit-vignette / --circuit-scan CSS vars from
 * :root or .dark and re-renders when the theme changes.
 */
export function CircuitBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [themeColor, setThemeColor] = useState<{
    trace: string
    node: string
    pulse: string
    pulseGlow: string
    vignette: string
    scan: string
  }>({
    trace: 'rgba(192, 132, 252, 0.10)',
    node: 'rgba(192, 132, 252, 0.18)',
    pulse: 'rgba(216, 180, 254, 0.9)',
    pulseGlow: 'rgba(216, 180, 254, 0.18)',
    vignette: 'oklch(0.15 0.025 300 / 0.85)',
    scan: 'oklch(0.72 0.20 300 / 0.45)',
  })

  // Read CSS variables — re-read when theme changes
  useEffect(() => {
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement)
      const get = (name: string, fallback: string) =>
        styles.getPropertyValue(name).trim() || fallback
      setThemeColor({
        trace: get('--circuit-trace', 'rgba(192, 132, 252, 0.10)'),
        node: get('--circuit-node', 'rgba(192, 132, 252, 0.18)'),
        pulse: get('--circuit-pulse', 'rgba(216, 180, 254, 0.9)'),
        pulseGlow: get('--circuit-pulse-glow', 'rgba(216, 180, 254, 0.18)'),
        vignette: get('--circuit-vignette', 'oklch(0.15 0.025 300 / 0.85)'),
        scan: get('--circuit-scan', 'oklch(0.72 0.20 300 / 0.45)'),
      })
    }

    readColors()

    // Observe class changes on <html> so we re-read when next-themes swaps themes
    const observer = new MutationObserver(readColors)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let t = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stable node positions for circuit nodes
    const NODES: { x: number; y: number }[] = []
    const spacing = 140
    for (let y = spacing / 2; y < window.innerHeight + spacing; y += spacing) {
      for (let x = spacing / 2; x < window.innerWidth + spacing; x += spacing) {
        const jx = Math.sin(x * 0.7 + y * 0.3) * 30
        const jy = Math.cos(x * 0.4 + y * 0.9) * 30
        NODES.push({ x: x + jx, y: y + jy })
      }
    }

    const EDGES: { a: number; b: number }[] = []
    for (let i = 0; i < NODES.length; i++) {
      for (let j = i + 1; j < NODES.length; j++) {
        const dx = NODES[i].x - NODES[j].x
        const dy = NODES[i].y - NODES[j].y
        const d = Math.hypot(dx, dy)
        if (d < spacing * 1.4) EDGES.push({ a: i, b: j })
      }
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      // traces
      ctx.strokeStyle = themeColor.trace
      ctx.lineWidth = 1
      for (const e of EDGES) {
        const a = NODES[e.a]
        const b = NODES[e.b]
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      // nodes
      ctx.fillStyle = themeColor.node
      for (const n of NODES) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      // moving pulses
      const active = EDGES.length
      const pulseCount = 6
      for (let i = 0; i < pulseCount; i++) {
        const idx = Math.floor((t * 0.3 + i * (active / pulseCount)) % active)
        const e = EDGES[idx % EDGES.length]
        if (!e) continue
        const a = NODES[e.a]
        const b = NODES[e.b]
        const p = (t * 0.02 + i * 0.15) % 1
        const px = a.x + (b.x - a.x) * p
        const py = a.y + (b.y - a.y) * p
        ctx.fillStyle = themeColor.pulse
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = themeColor.pulseGlow
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fill()
      }

      t += 1
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [themeColor])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent 30%, ${themeColor.vignette} 100%)`,
        }}
      />
      {/* Top scan line */}
      <div
        className="absolute left-0 right-0 h-px scan-line"
        style={{
          background: `linear-gradient(to right, transparent, ${themeColor.scan}, transparent)`,
        }}
      />
    </div>
  )
}
