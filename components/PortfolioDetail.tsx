import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { DetailSection } from "@/data/detail";
import { PageMotion } from "./PageMotion";

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
            <p>{body}</p>
            {image && (
              <a className="detail-section-image" href={image.src} aria-label={`View full-size ${image.alt}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 54rem) 48rem, 100vw"
                />
              </a>
            )}
          </section>
        ))}
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
