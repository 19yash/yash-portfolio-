import { profile } from '../data/content';

export function Hero() {
  return (
    <section id="top" className="hero">
      <h1 className="hero__title rise">
        <span className="hero__bracket">&lt;</span> {profile.role} <span className="hero__bracket">/&gt;</span>
        <span className="caret" aria-hidden="true" />
      </h1>
      <p className="hero__tagline rise rise--2">{profile.tagline}</p>
      <div className="avatar rise rise--3">
        {profile.photo ? (
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={208} height={208} />
        ) : (
          <span aria-hidden="true">{profile.initials}</span>
        )}
      </div>
      <div className="hero__actions rise rise--4">
        <a href="#projects" className="btn btn--solid">
          See my work
        </a>
        <a href={profile.resume} className="btn btn--ghost" download>
          Download résumé
        </a>
      </div>
    </section>
  );
}
