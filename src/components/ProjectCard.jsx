// One project card. GitHub / demo buttons only render when a URL is provided.
export default function ProjectCard({ project }) {
  const { title, visual, problem, description, contributions, tech, github, demo } = project;

  return (
    <article className="card project-card">
      {/* CSS-generated thumbnail: no image file needed */}
      <div className="project-card__visual" aria-hidden="true">
        <span>{visual}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <p className="project-card__label">Problem</p>
        <p>{problem}</p>

        <p className="project-card__label">What I built</p>
        <ul className="project-card__list">
          {contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="badge-list" aria-label={`Technologies used in ${title}`}>
          {tech.map((item) => (
            <li key={item} className="badge badge--mono">
              {item}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {github && (
            <a
              className="btn btn--secondary btn--small"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View {title.split(" – ")[0]} on GitHub
            </a>
          )}
          {demo && (
            <a
              className="btn btn--primary btn--small"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo of {title.split(" – ")[0]}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
