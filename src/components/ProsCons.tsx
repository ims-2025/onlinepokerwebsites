export default function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-felt-500/30 bg-felt-500/5 p-5">
        <h3 className="mb-3 flex items-center gap-2 font-bold text-felt-700">
          <Check /> Pros
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700">
          {pros.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-0.5 text-felt-600">
                <Check />
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
        <h3 className="mb-3 flex items-center gap-2 font-bold text-red-700">
          <Cross /> Cons
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700">
          {cons.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-0.5 text-red-600">
                <Cross />
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
