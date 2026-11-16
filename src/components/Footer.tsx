import { useState } from 'react';
import { profile } from '../data/content';
import { FileIcon, GitHubIcon, LinkedInIcon } from './Icons';

export function Contact() {
  return (
    <section className="cta-wrap" aria-labelledby="contact-title">
      <div id="contact" className="cta">
        <div className="cta__text">
          <h2 id="contact-title" className="cta__title">
            Hiring a full stack AI engineer?
          </h2>
          <p className="cta__sub">Let's talk about the role and how I can help your team ship.</p>
        </div>
        <a href={profile.linkedin} className="btn" target="_blank" rel="noreferrer">
          Connect with me
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer className="footer">
      <span className="footer__logo" aria-hidden="true">
        {profile.initials}
      </span>
      <p className="footer__tagline">Full stack products with AI built in, from the first screen to the last deploy.</p>
      <div className="email">
        <a className="email__address" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button type="button" className="email__copy" onClick={copyEmail} aria-live="polite">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="socials">
        <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href={profile.resume} aria-label="Download résumé" download>
          <FileIcon />
        </a>
      </div>
      <span className="footer__fine">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </span>
    </footer>
  );
}
