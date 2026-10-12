import SectionHeading from "./SectionHeading.jsx";
import { skillCategories } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Skills" title="Technical Skills" />
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.title} className="card">
              <h3 className="card__title">{category.title}</h3>
              <ul className="badge-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
