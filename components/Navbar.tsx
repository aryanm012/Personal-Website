import Link from "next/link";
import { profile } from "@/data/profile";

const navigation = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="wordmark" href="/#top" aria-label={`${profile.name}, home`}>
          <span className="wordmark-monogram" aria-hidden="true">AM</span>
          <span className="wordmark-name">{profile.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <a className="button button-outline header-resume" href={profile.resume} download>
          Résumé
        </a>
      </div>
    </header>
  );
}
