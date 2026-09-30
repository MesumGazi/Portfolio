import { useState } from 'react'

/**
 * Shows profile.photoUrl when it loads, otherwise a neutral initials block.
 */
export default function Avatar({ src, alternateSrc, name }) {
  const [hasFailed, setHasFailed] = useState(false)
  const [hasAlternateFailed, setHasAlternateFailed] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

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

  if (!alternateSrc || hasAlternateFailed) {
    return (
      <img
        className="avatar"
        src={src}
        alt={name}
        width="200"
        height="200"
        loading="eager"
        onError={() => setHasFailed(true)}
      />
    )
  }

  return (
    <button
      className={`avatar-flip${isFlipped ? ' is-flipped' : ''}`}
      type="button"
      aria-label={isFlipped ? 'Show original portrait' : 'Show alternate portrait'}
      onClick={() => setIsFlipped((flipped) => !flipped)}
    >
      <span className="avatar-flip__inner">
        <img
          className="avatar-flip__face"
          src={src}
          alt=""
          width="200"
          height="200"
          loading="eager"
          aria-hidden="true"
          onError={() => setHasFailed(true)}
        />
        <img
          className="avatar-flip__face avatar-flip__face--back"
          src={alternateSrc}
          alt=""
          width="200"
          height="200"
          loading="eager"
          aria-hidden="true"
          onError={() => setHasAlternateFailed(true)}
        />
      </span>
    </button>
  )
}