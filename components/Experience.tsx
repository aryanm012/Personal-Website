import Link from "next/link";
import { experience } from "@/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section className="site-container page-section" id="experience" aria-labelledby="experience-title">
      <ExperienceTimeline>
        {experience.filter(({ hideFromTimeline }) => !hideFromTimeline).map(({ slug, organization, role, dates }) => (
          <li className="timeline-item" key={slug}>
            <Link
              className="timeline-link"
              href={`/experience/${slug}`}
              aria-labelledby={`${slug}-organization ${slug}-role`}
            >
              {dates && <p className="timeline-date">{dates}</p>}
              <div className="timeline-label">
                <h3 id={`${slug}-organization`}>{organization}</h3>
                <p className="timeline-role" id={`${slug}-role`}>{role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ExperienceTimeline>
    </section>
  );
}
