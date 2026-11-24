import Link from "next/link";
import type { CaseStudy, DetailDocument, ImplementationStudy } from "@/data/detail";
import { CaseStudyBackLink } from "./CaseStudyBackLink";
import { DetailFigure } from "./DetailFigure";
import { PageMotion } from "./PageMotion";
import { ResearchMaterials } from "./ResearchMaterials";
import { TechnologyTags } from "./TechnologyTags";
import styles from "./ProjectCaseStudy.module.css";

type ProjectCaseStudyProps = {
  title: string;
  summary: string;
  technologies: string[];
  caseStudy: CaseStudy;
  label: string;
  dates?: string;
  repository?: string;
  documents?: DetailDocument[];
  backTo?: "experience";
  related?: { href: string; label: string };
};

export function ProjectCaseStudy({
  title,
  summary,
  technologies,
  caseStudy: study,
  label,
  dates,
  repository,
  documents = [],
  backTo,
  related,
}: ProjectCaseStudyProps) {
  return (
    <div className="site-container detail-page">
      <PageMotion />
      <CaseStudyBackLink className={`text-link ${styles.back}`} section={backTo} />
      <article className={styles.caseStudy} aria-labelledby="case-study-title">
        <header className={documents.length > 0 ? `${styles.hero} ${styles.researchHero}` : styles.hero}>
          <div className={styles.heroCopy}>
            <p className={`eyebrow ${styles.eyebrow}`}>{label}</p>
            <h1 id="case-study-title">{title}</h1>
            {dates && <p className="timeline-date">{dates}</p>}
            <p className={styles.summary}>{summary}</p>
            <TechnologyTags technologies={technologies} />
            {repository && (
              <a className="text-link" href={repository}>View on GitHub</a>
            )}
            {documents.length > 0 && (
              <a className="button button-outline" href="#research-materials">View poster and paper</a>
            )}
          </div>
          {study.preview && (
            <DetailFigure
              image={study.preview}
              linkClassName={study.preview.link ? styles.linkedPreview : undefined}
              sizes="(min-width: 75rem) 36rem, (min-width: 56rem) 48vw, 90vw"
              preload
            />
          )}
        </header>

        {"posterSections" in study ? (
          <div className={styles.posterSections}>
            {study.posterSections.map(({ heading, body, fullWidth }) => (
              <section className={fullWidth ? `${styles.story} ${styles.posterHighlight}` : styles.story} key={heading} data-reveal>
                <h2>{heading}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        ) : <ImplementationSections study={study} />}

        {documents.length > 0 && <ResearchMaterials documents={documents} />}

        <nav className={styles.related} aria-label={related ? "Related work" : "Return navigation"}>
          {related ? <Link className="text-link" href={related.href}>{related.label}</Link> : <CaseStudyBackLink section={backTo} />}
        </nav>
      </article>
    </div>
  );
}

function ImplementationSections({ study }: { study: ImplementationStudy }) {
  const { problem, solution, screenshot, technicalDetails, bottleneck, metrics, skills } = study;

  return (
    <>
      <div className={styles.overview}>
        <section className={styles.story} aria-labelledby="project-problem-title" data-reveal>
          <h2 id="project-problem-title">Problem</h2>
          <p>{problem}</p>
        </section>
        <section className={styles.story} aria-labelledby="project-solution-title" data-reveal>
          <h2 id="project-solution-title">Solution</h2>
          <p>{solution}</p>
        </section>
      </div>

      {screenshot && <DetailFigure image={screenshot} sizes="(min-width: 75rem) 70rem, 92vw" />}

      <section className={styles.technicalDetails} aria-labelledby="project-technical-title" data-reveal>
        <div className={styles.technicalCopy}>
          <div className={styles.story}>
            <h2 id="project-technical-title">{technicalDetails.heading}</h2>
            <p>{technicalDetails.body}</p>
          </div>
          <section className={styles.story} aria-labelledby="project-bottleneck-title">
            <h3 id="project-bottleneck-title">Bottleneck</h3>
            <p>{bottleneck}</p>
          </section>
        </div>
        {"image" in technicalDetails ? (
          <DetailFigure
            image={technicalDetails.image}
            sizes="(min-width: 75rem) 42rem, (min-width: 56rem) 54vw, 90vw"
          />
        ) : (
          <ol className={styles.architectureFlow} aria-label="Architecture workflow" role="list">
            {technicalDetails.flow.map(({ label, description }) => (
              <li key={label}>
                <strong>{label}</strong>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        )}
      </section>

      {metrics && (
        <section className={styles.story} aria-labelledby="project-metrics-title" data-reveal>
          <h2 id="project-metrics-title">{metrics.heading}</h2>
          {metrics.summary && <p>{metrics.summary}</p>}
          {metrics.items?.length ? (
            <dl className={styles.metrics}>
              {metrics.items.map(({ label, value, context }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <strong>{value}</strong>
                    <span>{context}</span>
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>
      )}

      <section className={styles.skills} aria-labelledby="project-skills-title" data-reveal>
        <h2 id="project-skills-title">Skills learned</h2>
        <ul className="tags" role="list">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
    </>
  );
}
