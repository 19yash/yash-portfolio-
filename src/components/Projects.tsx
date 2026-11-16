import { Link } from 'react-router';
import { profile } from '../data/content';
import { projects } from '../data/projects';
import { ProjectMedia } from './ProjectMedia';

export function Projects() {
  return (
    <section id="projects" className="section section--projects container" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section__title">
        Projects I'm proud of
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.slug} className="card lift">
            <Link to={`/projects/${p.slug}`} tabIndex={-1} aria-hidden="true">
              <ProjectMedia project={p} />
            </Link>
            <div className="card__body">
              <span className="card__tag">{p.tag}</span>
              <h3 className="card__title">
                <Link to={`/projects/${p.slug}`} className="card__title-link">
                  {p.title}
                </Link>
              </h3>
              <p className="card__desc">{p.description}</p>
              <span className="card__stack">{p.stack.join(' · ')}</span>
              <div className="card__links">
                <Link to={`/projects/${p.slug}`} className="card__link">
                  View details →
                </Link>
                {p.links?.map((l) => (
                  <a key={l.href} className="card__link card__link--ext" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
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
