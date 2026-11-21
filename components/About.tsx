import { profile, skills } from "@/data/profile";

export function About() {
  return (
    <section className="site-container page-section section-split" id="about" aria-labelledby="about-title">
      <h2 className="section-title" id="about-title" data-reveal>About</h2>
      <div className="about-content">
        <div className="about-copy" data-reveal>
          <p>
            At the University of Maryland, studying math alongside computer science
            has let me explore two sides of engineering. I’ve used control theory
            to think about what a robot can safely do and worked on backend systems
            that make data easier to access.
          </p>
          <p>I’m also interested in mentorship and helping more students get involved in computing.</p>
        </div>
        <div className="education" data-reveal>
          <h3>{profile.education.school}</h3>
          <p>{profile.education.degrees}</p>
          <p className="education-date">Expected {profile.education.graduation}</p>
        </div>
        <div className="skills" data-reveal>
          <h3>Technical skills</h3>
          <dl>
            {skills.map(({ category, items }) => (
              <div key={category}>
                <dt>{category}</dt>
                <dd>{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
