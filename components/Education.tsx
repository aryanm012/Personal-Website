import Link from "next/link";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import styles from "./Education.module.css";

export function Education() {
  const { school, degrees, gpa, graduation, coursework } = profile.education;

  return (
    <section className="site-container page-section" id="education" aria-labelledby="education-title">
      <div className={styles.content}>
        <SectionHeading id="education-title" label="Academic" title="Education" />
        <div className={styles.card} data-reveal>
          <header className={styles.school}>
            <div>
              <h3>{school}</h3>
              <p>{degrees}</p>
            </div>
            <dl className={styles.graduation}>
              <div>
                <dt>Expected graduation</dt>
                <dd>{graduation}</dd>
              </div>
            </dl>
          </header>
          <div className={styles.details}>
            <ul className={styles.badges} aria-label="GPA and extracurriculars" role="list">
              <li className={`${styles.badge} ${styles.gpa}`}>{gpa} GPA</li>
              <li className={styles.badge}>App Development Club</li>
              <li>
                <Link
                  className={styles.badge}
                  href="/projects/robotics-safety-research"
                  aria-describedby="education-research-description"
                >
                  Robotics Research
                </Link>
                <span className="sr-only" id="education-research-description">
                  Studied how control barrier functions can keep robot motion within safety limits.
                </span>
              </li>
            </ul>
            <section aria-labelledby="coursework-title">
              <h4 className={styles.label} id="coursework-title">Relevant coursework</h4>
              <ul className={styles.badges} role="list">
                {coursework.map((course) => <li className={styles.badge} key={course}>{course}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
