import { experience } from "@/data/experience";
import { profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";
import "./About.css";
import styles from "./AboutSkills.module.css";

export function About() {
  const { education, email } = profile;
  const internships = experience.filter(({ role }) => /\bIntern\b/i.test(role)).length;

  return (
    <section className="site-container page-section about-section" id="about" aria-labelledby="about-title">
      <h2 className="section-title about-title" id="about-title" data-reveal>Who Am I?</h2>
      <div className="about-layout">
        <div data-reveal>
          <div className="about-bio">
            <p>
              I&apos;m a Computer Science student at the <strong>{education.school}</strong> passionate
              about building technology that solves real-world problems. My interests span
              software engineering, distributed systems, and artificial intelligence, with a
              particular focus on building scalable and reliable systems.
            </p>
            <p>
              I interned at <strong>Humana</strong> and worked on project teams
              for <strong>Mitsubishi</strong> and <strong>Booz Allen Hamilton</strong>.
              Across those roles, I helped modernize enterprise platforms, build scalable backend
              infrastructure, and develop tools for AI-powered document retrieval and DevOps monitoring.
            </p>
            <p>
              I&apos;m driven by curiosity and a desire to continuously learn. Whether I&apos;m exploring
              new technologies, conducting research, or building personal projects, I enjoy turning
              complex problems into practical, impactful solutions.
            </p>
          </div>
        </div>
        <div data-reveal>
          <dl className="about-stats" aria-label="At a glance">
            <div>
              <dt>Internships</dt>
              <dd>{internships}</dd>
            </div>
            <div>
              <dt>Projects</dt>
              <dd>{projects.length}</dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd>{education.gpa}</dd>
            </div>
            <div>
              <dt>Expected graduation</dt>
              <dd>{education.graduation}</dd>
            </div>
          </dl>
          <dl className="about-facts" aria-label="Profile details">
            <div>
              <dt>School</dt>
              <dd>{education.school}</dd>
            </div>
            <div>
              <dt>Degrees</dt>
              <dd>{education.degrees}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${email}`}>{email}</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <section className={styles.skills} aria-labelledby="technical-skills-title" data-reveal>
        <h3 id="technical-skills-title">Technical skills</h3>
        <div className={styles.groups}>
          {skills.map(({ category, items }) => (
            <div className={styles.group} key={category}>
              <h4>{category}</h4>
              <ul className={`tags ${styles.tags}`} role="list">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
