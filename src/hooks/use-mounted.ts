'use client'

import { useSyncExternalStore } from 'react'

/**
 * useMounted
 * Returns true once the component has mounted on the client.
 * Uses useSyncExternalStore so there's no setState-in-effect lint violation
 * and no hydration mismatch.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    // subscribe — no real subscription needed, just an empty function
    () => () => {},
    // getSnapshot on client: always true
    () => true,
    // getServerSnapshot: always false (SSR)
    () => false
  )
}
