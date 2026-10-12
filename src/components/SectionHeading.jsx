// Reusable heading block used by every section.
export default function SectionHeading({ id, eyebrow, title }) {
  return (
    <header className="section__heading">
      <p className="section__eyebrow">{eyebrow}</p>
      <h2 id={id} className="section__title">
        {title}
      </h2>
    </header>
  );
}
