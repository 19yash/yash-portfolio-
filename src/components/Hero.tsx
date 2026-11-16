import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const START_MS = 450; // wait for the hero fade-in
const TYPE_MS = 65; // per letter while typing
const HOLD_MS = 2200; // full title on screen
const DELETE_MS = 35; // per letter while deleting
const GAP_MS = 500; // empty pause before typing again

type Phase = 'typing' | 'deleting' | 'paused';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Types `text`, holds it, deletes it and types it again, forever.
 * Shows it whole and still when the visitor prefers reduced motion.
 */
function useTypingLoop(text: string) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0));
  const [phase, setPhase] = useState<Phase>('paused');

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let typed = 0;
    let timer: number;

    const type = () => {
      typed += 1;
      setCount(typed);
      if (typed < text.length) {
        setPhase('typing');
        timer = window.setTimeout(type, TYPE_MS);
      } else {
        setPhase('paused');
        timer = window.setTimeout(erase, HOLD_MS);
      }
    };

    const erase = () => {
      typed -= 1;
      setCount(typed);
      if (typed > 0) {
        setPhase('deleting');
        timer = window.setTimeout(erase, DELETE_MS);
      } else {
        setPhase('paused');
        timer = window.setTimeout(type, GAP_MS);
      }
    };

    setCount(0);
    timer = window.setTimeout(type, START_MS);
    return () => window.clearTimeout(timer);
  }, [text]);

  return { count, blinking: phase === 'paused' };
}

export function Hero() {
  const role = profile.role;
  const { count: typed, blinking } = useTypingLoop(role);

  return (
    <section id="top" className="hero">
      <h1 className="hero__title rise">
        <span className="sr-only">{role}</span>
        <span aria-hidden="true">
          <span className="hero__bracket">&lt;</span> {role.slice(0, typed)}
          <span className={`caret${blinking ? ' caret--blink' : ''}`} />
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
