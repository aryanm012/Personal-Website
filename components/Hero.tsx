import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="site-container hero" aria-labelledby="hero-title">
      <p className="eyebrow">Software engineer</p>
      <h1 id="hero-title">{profile.name}<span aria-hidden="true">.</span></h1>
      <p className="hero-intro">
        I build backend systems and applied AI.
      </p>
      <p className="hero-description">
        I study computer science and mathematics at the University of Maryland.
        I’m interested in how distributed systems move data and how AI can make
        that data useful.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View projects</a>
        <a className="button button-outline" href="#contact">Get in touch</a>
      </div>
      <ul className="hero-links" aria-label="Profiles and résumé">
        <li><a href={profile.github}>GitHub</a></li>
        <li><a href={profile.linkedin}>LinkedIn</a></li>
        <li><a href={profile.resume} download>Résumé</a></li>
      </ul>
    </section>
  );
}
