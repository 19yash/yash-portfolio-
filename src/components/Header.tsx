import { Link } from 'react-router';
import { profile } from '../data/content';

export function Header() {
  return (
    <header className="header container">
      <Link to="/" className="logo" aria-label={`${profile.name}, home`}>
        {profile.initials}
      </Link>
      <nav className="nav" aria-label="Main">
        <Link to={{ pathname: '/', hash: '#skills' }} className="nav__link">
          Skills
        </Link>
        <Link to={{ pathname: '/', hash: '#projects' }} className="nav__link">
          Projects
        </Link>
        <a href="#contact" className="btn">
          Say hello
        </a>
      </nav>
    </header>
  );
}
