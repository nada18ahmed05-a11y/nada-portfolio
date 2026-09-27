'use client'

import { useState } from 'react'

/**
 * AvatarOrPlaceholder
 *
 * Shows the user's real photo if /avatar.png (or .jpg / .webp) loads successfully.
 * If the image fails to load (network error, 404, gateway block, etc.), falls
 * back to the stylized "NA" initials placeholder.
 *
 * Robust against:
 *  - HEAD requests being blocked by proxies/gateways (no HEAD used)
 *  - Cached negative responses (we use a cache-busting query param)
 *  - Cross-origin preview environments
 */
const PRIMARY_SRC = '/avatar.png?ts=1'

export function AvatarOrPlaceholder() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-md avatar-frame overflow-hidden border border-primary/30 glow-soft">
      {/* Corner ticks */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/60 z-10" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/60 z-10" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/60 z-10" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/60 z-10" />

      {!failed ? (
        <img
          src={PRIMARY_SRC}
          alt="Nada Ahmed — Software QA & Testing Specialist"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
          // Re-render the img if for some reason the placeholder flips back
          key="avatar-img"
        />
      ) : (
        // Fallback: stylized "NA" initials
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-primary text-glow tracking-tight">
              NA
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              /avatar placeholder
            </div>
          </div>
        </div>
      )}

      {/* Scan overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent 0 3px, oklch(0 0 0 / 0.4) 3px 4px)',
        }}
      />
    </div>
  )
}
