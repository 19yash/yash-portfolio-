import type { Project } from '../data/projects';

/** Screenshot when there is one, otherwise the pipeline strip, otherwise a labelled placeholder. */
export function ProjectMedia({ project, eager = false }: { project: Project; eager?: boolean }) {
  const { image, imageAlt, flow, placeholder } = project;
  const isFlow = !image && !!flow;

  return (
    <div className={`card__media${isFlow ? ' card__media--flow' : ''}`}>
      {image ? (
        <img className="card__shot" src={image} alt={imageAlt} loading={eager ? 'eager' : 'lazy'} />
      ) : flow ? (
        <div className="card__shot card__flow">
          <ol className="flow" aria-label="Pipeline stages">
            {flow.map((step) => (
              <li key={step} className="flow__step">
                <span className="flow__pill">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="card__shot" aria-hidden="true">
          {placeholder}
        </div>
      )}
    </div>
  );
}
