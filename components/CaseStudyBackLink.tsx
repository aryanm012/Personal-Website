"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./ProjectCaseStudy.module.css";

type BackLinkProps = { className?: string; section?: "projects" | "experience" };

function BackLink({ className = "text-link", section = "projects" }: BackLinkProps) {
  return (
    <Link className={className} href={`/#${section}`}>
      <span className={styles.backArrow} aria-hidden="true">←</span>
      {`Back to ${section}`}
    </Link>
  );
}

function BackLinkFromQuery({ className }: BackLinkProps) {
  const fromExperience = useSearchParams().get("from") === "experience";
  return <BackLink className={className} section={fromExperience ? "experience" : "projects"} />;
}

export function CaseStudyBackLink({ className, section }: BackLinkProps) {
  if (section) return <BackLink className={className} section={section} />;

  return (
    <Suspense fallback={<BackLink className={className} />}>
      <BackLinkFromQuery className={className} />
    </Suspense>
  );
}
