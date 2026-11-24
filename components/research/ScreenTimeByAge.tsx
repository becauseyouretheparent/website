
const categories = [
  { label: "Under 1 hour", color: "bg-slate-600" },
  { label: "1 hour", color: "bg-slate-500" },
  { label: "2 hours", color: "bg-sky-900" },
  { label: "3 hours", color: "bg-sky-600" },
  { label: "4+ hours", color: "bg-sky-400" },
] as const;

const ageGroups = [
  {
    label: "Ages 0–5",
    distribution: [36.0, 21.8, 24.9, 9.7, 7.6],
    fourPlus: 7.6,
  },
  {
    label: "Ages 6–11",
    distribution: [10.8, 18.3, 31.6, 19.3, 19.9],
    fourPlus: 19.9,
  },
  {
    label: "Ages 12–17",
    distribution: [4.6, 8.1, 23.8, 24.0, 39.5],
    fourPlus: 39.5,
  },
] as const;

const sourceUrl =
  "https://www.childhealthdata.org/browse/survey/results?g=1250&q=12603&r=1";

export default function ScreenTimeByAge() {
  return (
    <section
      aria-labelledby="screen-time-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Screen Time by Age
          </p>

          <h2
            id="screen-time-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            How much time are children spending on screens?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Recreational screen time increases across
            age groups. Compare how children spend
            their screen time on a typical weekday.
          </p>
        </header>

        <figure className="mt-10 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
          <figcaption className="mb-8 text-sm leading-6 text-slate-400">
            Share of U.S. children in each daily screen-time
            category, excluding schoolwork.
          </figcaption>

          <ul className="space-y-8">
            {ageGroups.map((group) => (
              <li key={group.label}>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {group.label}
                  </h3>

                  <p className="text-right">
                    <span className="text-2xl font-bold text-sky-400">
                      {group.fourPlus}%
                    </span>
                    <span className="block text-xs text-slate-400">
                      4+ hours/day
                    </span>
                  </p>
                </div>

                <div
                  className="flex h-6 overflow-hidden rounded-md bg-slate-800"
                  aria-hidden="true"
                >
                  {categories.map((category, index) => (
                    <div
                      key={category.label}
                      className={category.color}
                      style={{
                        width: `${group.distribution[index]}%`,
                      }}
                    />
                  ))}
                </div>

                <details className="mt-3 text-sm">
                  <summary className="cursor-pointer font-medium text-sky-400 hover:underline">
                    View exact percentages
                  </summary>

                  <dl className="mt-3 space-y-2 text-slate-300">
                    {categories.map((category, index) => (
                      <div
                        key={category.label}
                        className="flex justify-between gap-4"
                      >
                        <dt>{category.label}</dt>
                        <dd className="tabular-nums">
                          {group.distribution[index]}%
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className={`h-3 w-3 shrink-0 rounded-sm ${category.color}`}
                />
                {category.label}
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-sm leading-6 text-slate-400">
              Source: 2024 National Survey of Children&apos;s
              Health. Parent-reported screen use on most
              weekdays, excluding schoolwork. Percentages
              may vary slightly due to rounding.
            </p>

            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-400 hover:underline"
            >
              View original research
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </figure>
      </div>
    </section>
  );
}
