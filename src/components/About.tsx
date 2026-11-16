import { about } from '../data/content';

export function About() {
  return (
    <section className="band band--about" aria-labelledby="about-title">
      <div className="band__inner">
        <h2 id="about-title" className="band__title">
          {about.heading}
        </h2>
        <p className="band__body">{about.body}</p>
      </div>
    </section>
  );
}
