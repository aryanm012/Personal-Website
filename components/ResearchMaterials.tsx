import type { DetailDocument } from "@/data/detail";
import styles from "./ResearchMaterials.module.css";

export function ResearchMaterials({ documents, className }: { documents: DetailDocument[]; className?: string }) {
  return (
    <section id="research-materials" className={className} aria-labelledby="research-materials-title">
      <h2 id="research-materials-title">Research materials</h2>
      <div className={styles.documents}>
        {documents.map(({ title, src }) => (
          <figure className={styles.document} key={src}>
            <div className={styles.documentHeader}>
              <h3>{title}</h3>
              <a className="text-link" href={src} target="_blank" rel="noopener" aria-label={`Open ${title.toLowerCase()} PDF in a new tab`}>
                Open PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
            <iframe src={`${src}#view=FitH`} title={`${title} PDF`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
