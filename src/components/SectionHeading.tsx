export default function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-felt-600">{eyebrow}</p>
      )}
      <h2 id={id} className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-neutral-600">{intro}</p>}
    </div>
  );
}
