import Avatar from './Avatar'
import { scrollToSection } from '../lib/scrollToSection'

export default function Hero({ profile }) {
  const {
    name,
    role,
    location,
    tagline,
    about,
    photoUrl,
    alternatePhotoUrl,
    resumeUrl,
  } = profile
  const nameParts = name.trim().split(/\s+/)
  const accentedName = nameParts.shift()
  const remainingName = nameParts.join(' ')

  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <div className="hero__text">
          {location && <p className="eyebrow">{location}</p>}

          <h1 className="hero__name">
            <span className="hero__name-accent">{accentedName}</span>
            {remainingName && <> {remainingName}</>}
            <span className="hero__name-dot" aria-hidden="true">.</span>
          </h1>
          <p className="hero__role">{role}</p>
          <p className="hero__tagline">{tagline}</p>
          <p className="muted hero__about">{about}</p>

          <div className="hero__actions">
            {resumeUrl ? (
              <a
                className="btn btn--primary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View resume
              </a>
            ) : (
              // Placeholder until profile.resumeUrl is filled in.
              <span className="btn btn--primary btn--disabled" aria-disabled="true">
                Resume — add link
              </span>
            )}

            <button
              type="button"
              className="btn"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>
          </div>
        </div>

        <Avatar src={photoUrl} alternateSrc={alternatePhotoUrl} name={name} />
      </div>
    </section>
  )
}