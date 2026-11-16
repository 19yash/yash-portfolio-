import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const TYPE_START_MS = 450;
const TYPE_STEP_MS = 65;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveals `text` one character at a time; shows it whole when the visitor prefers reduced motion. */
function useTypedCount(text: string) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let typed = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        typed += 1;
        setCount(typed);
        if (typed >= text.length) window.clearInterval(interval);
      }, TYPE_STEP_MS);
    }, TYPE_START_MS);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text]);

  return count;
}

export function Hero() {
  const role = profile.role;
  const typed = useTypedCount(role);
  const done = typed >= role.length;

  return (
    <section id="top" className="hero">
      <h1 className="hero__title rise">
        <span className="sr-only">{role}</span>
        <span aria-hidden="true">
          <span className="hero__bracket">&lt;</span> {role.slice(0, typed)}
          <span className={`caret${done ? ' caret--done' : ''}`} />
          <span className="hero__ghost">{role.slice(typed)}</span> <span className="hero__bracket">/&gt;</span>
        </span>
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
