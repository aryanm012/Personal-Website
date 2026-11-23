import { profile } from "@/data/profile";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-container contact-footer" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-footer-row">
        <div>
          <h2 id="contact-title">Contact</h2>
          <a className="text-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <ul className="contact-footer-actions" aria-label="Footer links">
          <li><a href={profile.github}>GitHub</a></li>
          <li><a href={profile.linkedin}>LinkedIn</a></li>
          <li><a href={profile.resume} download>Résumé</a></li>
          <li><a href="#top">Back to top</a></li>
        </ul>
      </div>
    </footer>
  );
}
