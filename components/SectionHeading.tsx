import styles from "./SectionHeading.module.css";

export function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className={styles.heading} data-reveal>
      <p className={`eyebrow ${styles.label}`}>{label}</p>
      <h2 className="section-title" id={id}>{title}</h2>
    </div>
  );
}
