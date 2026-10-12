import SectionHeading from "./SectionHeading.jsx";
import { certifications } from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section section--alt"
      aria-labelledby="certifications-title"
    >
      <div className="container">
        <SectionHeading
          id="certifications-title"
          eyebrow="Certifications"
          title="Certifications & Achievements"
        />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="card">
              <h3 className="card__title">{cert.title}</h3>
              <p className="timeline__org">{cert.issuer}</p>
              {cert.description && <p>{cert.description}</p>}
              {cert.url && (
                <a
                  className="btn btn--secondary btn--small cert-grid__link"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.linkLabel || "View credential"}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
