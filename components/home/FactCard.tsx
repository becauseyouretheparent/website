export type Fact = {
  id: string;
  statistic: string;
  headline: string;
  description: string;
  context?: string;
  sources: {
    name: string;
    url: string;
  }[];
};

type FactCardProps = {
  fact: Fact;
  index: number;
};

export default function FactCard({ fact }: FactCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6">

      <p className="mb-3 text-4xl font-bold tracking-tight text-sky-400 sm:text-5xl">
        {fact.statistic}
      </p>

      <h3 className="mb-4 text-xl font-semibold text-white">
        {fact.headline}
      </h3>

      <p className="leading-7 text-slate-300">
        {fact.description}
      </p>

      {fact.context && (
        <p className="mt-4 text-sm leading-6 text-slate-400">
          {fact.context}
        </p>
      )}

      <div className="mt-auto pt-6">
        <div className="border-t border-slate-700 pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Sources
          </p>

          <ul className="space-y-2">
            {fact.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 underline-offset-4 hover:underline"
                >
                  {source.name}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
