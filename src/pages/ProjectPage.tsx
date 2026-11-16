import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { BrandIcon, GitHubIcon } from '../components/Icons';
import { ProjectMedia } from '../components/ProjectMedia';
import { profile } from '../data/content';
import { findProject, projects, stackIcons } from '../data/projects';

export function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = project ? `${project.title} · ${profile.name}` : `Project not found · ${profile.name}`;
  }, [project]);

  if (!project) {
    return (
      <section className="container pd-missing">
        <h1 className="pd__title">Project not found</h1>
        <p className="pd__summary">That project page doesn't exist. It may have been renamed.</p>
        <Link to={{ pathname: '/', hash: '#projects' }} className="btn btn--solid">
          See all projects
        </Link>
      </section>
    );
  }

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pd">
      <header className="container pd__hero">
        <Link to={{ pathname: '/', hash: '#projects' }} className="pd__back rise">
          ← All projects
        </Link>
        <span className="card__tag rise rise--2">{project.tag}</span>
        <h1 className="pd__title rise rise--2">{project.title}</h1>
        <p className="pd__summary rise rise--3">{project.summary}</p>
        {project.links && (
          <div className="pd__actions rise rise--4">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`btn ${l.label === 'Live demo' ? 'btn--solid' : 'btn--ghost'}`}
              >
                {l.label === 'GitHub' && <GitHubIcon />}
                {l.label === 'GitHub' ? 'View code' : 'Open live demo'}
              </a>
            ))}
          </div>
        )}
      </header>

      {(project.image || project.flow) && (
        <div className="container pd__media rise rise--4">
          <ProjectMedia project={project} eager />
        </div>
      )}

      <div className="container pd__body">
        <section className="pd__section" aria-labelledby="pd-overview">
          <h2 id="pd-overview" className="pd__label">
            The project
          </h2>
          <div className="pd__content">
            {project.overview.map((para) => (
              <p key={para} className="pd__text">
                {para}
              </p>
            ))}

            {project.modules && (
              <div className="pd__block">
                <h3 className="pd__subhead">{project.modules.title}</h3>
                <ul className="modules" role="list">
                  {project.modules.items.map((m) => (
                    <li key={m} className="modules__item">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.howItWorks && (
              <div className="pd__block">
                <h3 className="pd__subhead">{project.howItWorks.title}</h3>
                <ol className="steps">
                  {project.howItWorks.steps.map((step, i) => (
                    <li key={step} className="steps__item">
                      <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="steps__text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pd__section" aria-labelledby="pd-problem">
          <h2 id="pd-problem" className="pd__label">
            The problem it solves
          </h2>
          <div className="pd__content">
            <p className="pd__text pd__text--lead">{project.problem.intro}</p>
            <div className="points">
              {project.problem.points.map((pt) => (
                <div key={pt.title} className="point">
                  <h3 className="point__title">{pt.title}</h3>
                  <p className="point__text">{pt.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pd__section" aria-labelledby="pd-stack">
          <h2 id="pd-stack" className="pd__label">
            Tech stack
          </h2>
          <div className="pd__content">
            <dl className="stack">
              {project.techStack.map((group) => (
                <div key={group.label} className="stack__row">
                  <dt className="stack__label">{group.label}</dt>
                  <dd className="stack__items">
                    {group.items.map((item) => {
                      const icon = stackIcons[item];
                      return (
                        <span key={item} className="stack__chip">
                          {icon && <BrandIcon name={icon} size={16} />}
                          {item}
                        </span>
                      );
                    })}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="pd__section" aria-labelledby="pd-role">
          <h2 id="pd-role" className="pd__label">
            My role
          </h2>
          <div className="pd__content">
            <p className="pd__role">{project.role.title}</p>
            <ul className="role-list">
              {project.role.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            {project.decisions && (
              <div className="pd__block">
                <h3 className="pd__subhead">What I learned</h3>
                <div className="points">
                  {project.decisions.map((d) => (
                    <div key={d.title} className="point">
                      <h4 className="point__title">{d.title}</h4>
                      <p className="point__text">{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="pd__section" aria-labelledby="pd-links">
          <h2 id="pd-links" className="pd__label">
            Links
          </h2>
          <div className="pd__content">
            {project.links ? (
              <div className="link-cards">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-card lift">
                    <span className="link-card__label">{l.label}</span>
                    <span className="link-card__url">{l.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                    <span className="link-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="pd__note">{project.linksNote}</p>
            )}
          </div>
        </section>
      </div>

      <nav className="container pd__next" aria-label="Next project">
        <Link to={`/projects/${next.slug}`} className="next-card lift">
          <span className="next-card__eyebrow">Next project</span>
          <span className="next-card__title">{next.title} →</span>
          <span className="next-card__summary">{next.summary}</span>
        </Link>
      </nav>
    </article>
  );
}
