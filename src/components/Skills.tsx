import { useState } from 'react';
import { skillGroups, skills, type SkillGroup } from '../data/content';
import { BrandIcon } from './Icons';

type Filter = SkillGroup | 'all';

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = filter === 'all' ? skills : skills.filter((s) => s.group === filter);

  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <div className="section__head">
        <h2 id="skills-title" className="section__title">
          What I work with
        </h2>
        <p className="section__sub">Each tool with the place I used it in production.</p>
      </div>

      <div className="chips" role="group" aria-label="Filter skills">
        {skillGroups.map((g) => {
          const count = g.id === 'all' ? skills.length : skills.filter((s) => s.group === g.id).length;
          return (
            <button
              key={g.id}
              type="button"
              className={`chip chip--${g.id}`}
              aria-pressed={filter === g.id}
              onClick={() => setFilter(g.id)}
            >
              {g.label}
              <span className="chip__count">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="skills-grid" role="list">
        {shown.map((s) => (
          // Keying on the filter replays the short fade when the selection changes.
          <li key={`${filter}-${s.name}`} className="skill lift">
            <div className="skill__top">
              <span className="skill__icon">
                <BrandIcon name={s.icon} />
              </span>
              <strong className="skill__name">{s.name}</strong>
            </div>
            <span className="skill__used">{s.usedIn}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
