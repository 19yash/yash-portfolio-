import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { profile } from '../data/content';

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = `${profile.name} · ${profile.role}`;
  }, []);

  // Router navigation does not scroll to #anchors on its own. Arriving from another
  // page jumps straight there; hash changes while already on the page scroll smoothly.
  const arrived = useRef(false);
  useEffect(() => {
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: arrived.current ? 'smooth' : 'instant' });
    }
    arrived.current = true;
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
