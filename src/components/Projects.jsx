export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__lead">
            A side project I'm checking in on daily. Code will be public as it grows.

        </p>

        <ul className="cards">
          {projects.map((project) => (
            <li key={project.id} className="card">
              <div className="card__head">
                <h3 className="card__title">{project.title}</h3>
                {project.year && <span className="card__meta">{project.year}</span>}
              </div>

              <p className="card__body">{project.description}</p>

              {project.tech?.length > 0 && (
                <ul className="tags">
                  {project.tech.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {project.focus && (
  <p className="card__focus">{project.focus}</p>
)}

              {project.links?.length > 0 && (
                <div className="card__links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="link"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}