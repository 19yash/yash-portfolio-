import { profile } from '../data/content';

export function Header() {
  return (
    <header className="header container">
      <a href="#top" className="logo" aria-label={`${profile.name}, home`}>
        {profile.initials}
      </a>
      <nav className="nav" aria-label="Main">
        <a href="#skills" className="nav__link">
          Skills
        </a>
        <a href="#projects" className="nav__link">
          Projects
        </a>
        <a href="#contact" className="btn">
          Say hello
        </a>
      </nav>
    </header>
  );
}
