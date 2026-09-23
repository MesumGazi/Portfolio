export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <p className="section__lead">
          Where I've worked and what I shipped.
        </p>

        <ul className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline__item">
              <div className="timeline__head">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>

              <p className="timeline__company">
                {job.company}
                {job.location && <span className="muted"> · {job.location}</span>}
              </p>

              {job.tech?.length > 0 && (
                <ul className="tags">
                  {job.tech.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              )}

              {job.highlights?.length > 0 && (
                <ul className="bullets">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}