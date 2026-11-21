export function TechnologyTags({ technologies }: { technologies: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}
