import { useState } from 'react'

/**
 * Shows profile.photoUrl when it loads, otherwise a neutral initials block.
 */
export default function Avatar({ src, name }) {
  const [hasFailed, setHasFailed] = useState(false)

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  if (!src || hasFailed) {
    return (
      <div className="avatar avatar--placeholder" aria-hidden="true">
        {initials || '—'}
      </div>
    )
  }

  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width="132"
      height="132"
      loading="eager"
      onError={() => setHasFailed(true)}
    />
  )
}