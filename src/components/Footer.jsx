import { profile } from "../data/portfolioData.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">
            © {currentYear} {profile.name}
          </p>
          <p className="footer__message">Thanks for visiting. Let&apos;s build something useful together.</p>
        </div>
        <ul className="footer__links">
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#home">Back to Top</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
