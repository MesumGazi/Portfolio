import { useEffect, useState } from 'react'
import { fetchPortfolio, isBackendConfigured } from '../lib/api'
import { fallbackPortfolio } from '../data/fallbackPortfolio'

/**
 * Returns portfolio content. Starts with local placeholder data so the page
 * always renders, then swaps in the backend payload if one is configured.
 */
export function usePortfolio() {
  const [data, setData] = useState(fallbackPortfolio)

  useEffect(() => {
    if (!isBackendConfigured) return undefined

    const controller = new AbortController()

    fetchPortfolio(controller.signal)
      .then((remote) => {
        if (remote) setData(remote)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.warn('[portfolio] using local data:', error.message)
        }
      })

    return () => controller.abort()
  }, [])

  return data
}