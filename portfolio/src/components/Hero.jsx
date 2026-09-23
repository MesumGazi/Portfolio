import Avatar from './Avatar'
import { scrollToSection } from '../lib/scrollToSection'

export default function Hero({ profile }) {
  const { name, role, location, tagline, about, photoUrl, resumeUrl } = profile

  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <div className="hero__text">
          {location && <p className="eyebrow">{location}</p>}

          <h1 className="hero__name">{name}</h1>
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

        <Avatar src={photoUrl} name={name} />
      </div>
    </section>
  )
}