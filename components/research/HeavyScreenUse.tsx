const ranges = [
  { label: "Under 3 hours", color: "bg-slate-500" },
  { label: "3–6 hours", color: "bg-sky-900" },
  { label: "6–10 hours", color: "bg-sky-600" },
  { label: "10+ hours", color: "bg-sky-400" },
] as const;

const groups = [
  {
    label: "Tweens (9–12)",
    values: [24, 32, 21, 23],
  },
  {
    label: "Teens (13–17)",
    values: [8, 24, 24, 43],
  },
] as const;

const source =
  "https://about.commonsensemedia.org/research/reports/2026-common-sense-media-census-tech-and-media-use-tweens-and-teens";

export default function HeavyScreenUse() {
  return (
    <section
      aria-labelledby="heavy-screen-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Heavy Screen Use
        </p>

        <h2
          id="heavy-screen-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          How many children spend 10+ hours a day on screens?
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          In a 2026 national survey, 23% of tweens and
          43% of teens reported spending at least
          10 hours on entertainment screen media
          the previous day.
        </p>

        <figure className="mt-10 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
          <figcaption className="mb-8 text-sm text-slate-400">
            Distribution of daily entertainment screen use
            within each age group.
          </figcaption>

          <div className="space-y-8">
            {groups.map((group) => (
              <div key={group.label}>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <h3 className="font-semibold text-white">
                    {group.label}
                  </h3>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-sky-400">
                      {group.values[3]}%
                    </p>
                    <p className="text-xs text-slate-400">
                      10+ hours
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-6 overflow-hidden rounded-md bg-slate-700"
                >
                  {group.values.map((value, index) => (
                    <div
                      key={ranges[index].label}
                      className={ranges[index].color}
                      style={{ width: `${value}%` }}
                    />
                  ))}
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {ranges.map((range, index) => (
                    <div key={range.label}>
                      <dt className="text-xs text-slate-400">
                        {range.label}
                      </dt>
                      <dd className="font-semibold text-white">
                        {group.values[index]}%
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-sm leading-6 text-slate-400">
              Source: Common Sense Media, 2026 Census.
              U.S. youth ages 9–17. Entertainment use
              excludes schoolwork. This compares age
              groups in one survey, not changes over time.
            </p>

            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-400 hover:underline"
            >
              View original research ↗
            </a>
          </div>
        </figure>
      </div>
    </section>
  );
}
