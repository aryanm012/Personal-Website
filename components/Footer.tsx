import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-container site-footer" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel" data-reveal>
        <div>
          <h2 className="section-title" id="contact-title">Get in touch</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <ul className="contact-links" aria-label="Contact links">
          <li><a className="button button-outline" href={profile.github}>GitHub</a></li>
          <li><a className="button button-outline" href={profile.linkedin}>LinkedIn</a></li>
          <li><a className="button button-outline" href={profile.resume} download>Download résumé</a></li>
        </ul>
      </div>
      <div className="footer-base">
        <span>{profile.name}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
