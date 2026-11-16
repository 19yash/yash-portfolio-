import { profile, projects } from '../data/content';

export function Projects() {
  return (
    <section id="projects" className="section section--projects container" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section__title">
        Projects I'm proud of
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="card lift">
            <div className={`card__media${!p.image && p.flow ? ' card__media--flow' : ''}`}>
              {p.image ? (
                <img className="card__shot" src={p.image} alt={p.imageAlt} loading="lazy" />
              ) : p.flow ? (
                <div className="card__shot card__flow">
                  <ol className="flow" aria-label="Pipeline stages">
                    {p.flow.map((step) => (
                      <li key={step} className="flow__step">
                        <span className="flow__pill">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div className="card__shot" aria-hidden="true">
                  {p.placeholder}
                </div>
              )}
            </div>
            <div className="card__body">
              <span className="card__tag">{p.tag}</span>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__desc">{p.description}</p>
              <span className="card__stack">{p.stack.join(' · ')}</span>
              {p.links && (
                <div className="card__links">
                  {p.links.map((l) => (
                    <a key={l.href} className="card__link" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <a href={profile.github} className="btn btn--outline btn--square" target="_blank" rel="noreferrer">
        More on GitHub
      </a>
    </section>
  );
}
