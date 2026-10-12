import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="Education" title="Education" />
        <ol className="timeline">
          {education.map((item) => (
            <li key={item.id} className="timeline__item">
              <article className="card">
                <p className="timeline__period">{item.period}</p>
                <h3 className="card__title">{item.degree}</h3>
                <p className="timeline__org">{item.institute}</p>
                {item.detail && <p>{item.detail}</p>}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
