import Link from "next/link";
import type { ReactNode } from "react";
import type { DetailDocument, DetailSection } from "@/data/detail";
import { DetailFigure } from "./DetailFigure";
import { PageMotion } from "./PageMotion";
import { ResearchMaterials } from "./ResearchMaterials";

type DetailLink = {
  href: string;
  label: string;
};

type PortfolioDetailProps = {
  back: DetailLink;
  label: string;
  title: string;
  dates?: string;
  summary?: string;
  sections?: DetailSection[];
  documents?: DetailDocument[];
  related?: DetailLink[];
  children?: ReactNode;
};

export function PortfolioDetail({
  back,
  label,
  title,
  dates,
  summary,
  sections,
  documents = [],
  related = [],
  children,
}: PortfolioDetailProps) {
  return (
    <div className="site-container detail-page">
      <PageMotion />
      <Link className="text-link detail-back" href={back.href}>{back.label}</Link>
      <article className="detail-article">
        <header className="detail-heading">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          {dates && <p className="timeline-date">{dates}</p>}
          {summary && <p className="detail-summary">{summary}</p>}
          {children}
        </header>
        {sections?.map(({ heading, body, image }) => (
          <section className="detail-section" key={heading} data-reveal>
            <h2>{heading}</h2>
            {typeof body === "string" ? (
              <p>{body}</p>
            ) : (
              <ul className="tags detail-section-list" role="list">
                {body.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {image && <DetailFigure image={image} />}
          </section>
        ))}
        {documents.length > 0 && (
          <ResearchMaterials documents={documents} className="detail-section" />
        )}
        {related.length > 0 && (
          <nav className="detail-related" aria-label="Related work" data-reveal>
            {related.map(({ href, label }) => (
              <Link className="text-link" href={href} key={href}>{label}</Link>
            ))}
          </nav>
        )}
      </article>
    </div>
  );
}
