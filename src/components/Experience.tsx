import { experience } from '../data/content';

export function Experience() {
  return (
    <section id="experience" className="band band--work" aria-labelledby="work-title">
      <div className="band__inner">
        <h2 id="work-title" className="band__title">
          Where I've worked
        </h2>
      </div>
      <div className="work-card">
        <span className="work-card__logo">
          {experience.logo ? (
            <img src={experience.logo} alt="" width={56} height={56} />
          ) : (
            <span aria-hidden="true">DS</span>
          )}
        </span>
        <div className="work-card__body">
          <div className="work-card__row">
            <strong className="work-card__company">{experience.company}</strong>
            <span className="work-card__dates">{experience.dates}</span>
          </div>
          <span className="work-card__role">{experience.role}</span>
          <span className="work-card__summary">{experience.summary}</span>
        </div>
      </div>
    </section>
  );
}
