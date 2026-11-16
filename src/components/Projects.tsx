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
            <div className="card__media">
              {p.image ? (
                <img className="card__shot" src={p.image} alt={p.imageAlt} loading="lazy" />
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
              {p.link && (
                <a className="card__link" href={p.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
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
