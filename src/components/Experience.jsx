import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Professional Experience" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline__item">
              <article className="card">
                <p className="timeline__period">{job.period}</p>
                <h3 className="card__title">{job.role}</h3>
                <p className="timeline__org">
                  {job.organization} · {job.location}
                </p>
                <ul className="project-card__list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="badge-list" aria-label={`Technologies used at ${job.organization}`}>
                  {job.tech.map((item) => (
                    <li key={item} className="badge badge--mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
