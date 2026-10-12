import SectionHeading from "./SectionHeading.jsx";
import { about } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About" title="About Me" />
        <div className="about">
          <div className="about__text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <dl className="about__facts card">
            {about.highlights.map((item) => (
              <div key={item.label} className="about__fact">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
