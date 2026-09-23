import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in the middle of the viewport.
 * `ids` must be a stable array reference (define it at module level).
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // A thin band across the middle of the viewport decides the winner.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}