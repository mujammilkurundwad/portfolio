import { useEffect, useState } from "react";
import { profile, RESUME_URL } from "../data/portfolioData.js";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate role titles every 3 seconds. Skipped if the user prefers reduced motion.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Hello, I&apos;m</p>
        <h1 id="hero-title" className="hero__title">
          {profile.name}
        </h1>
        <p className="hero__role" aria-live="off">
          <span className="hero__role-text" key={roleIndex}>
            {profile.rotatingRoles[roleIndex]}
          </span>
        </p>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Projects
          </a>
          <a href={RESUME_URL} download className="btn btn--secondary">
            Download Resume
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>

        <ul className="hero__socials" aria-label="Social profiles">
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
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
