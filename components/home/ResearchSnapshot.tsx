const impactAreas = [
  { label: "Sleep", percentage: 45 },
  { label: "Productivity", percentage: 40 },
  { label: "Grades", percentage: 22 },
  { label: "Mental health", percentage: 19 },
] as const;

const sourceUrl =
  "https://www.pewresearch.org/internet/2025/04/22/teens-social-media-and-mental-health/";

export default function ResearchSnapshot() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="scroll-mt-20 border-b border-white/10 bg-slate-900/40 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Research Snapshot
          </p>

          <h2
            id="research-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Where teens say social media hurts.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            In a national survey, teenagers identified
            several areas of their lives they believe
            social media has negatively affected.
          </p>
        </header>

        <figure className="mt-10 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
          <figcaption className="mb-8">
            <h3 className="text-xl font-semibold text-white">
              Self-reported negative effects
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Percentage of U.S. teens ages 13–17
              who say social media has hurt each area.
            </p>
          </figcaption>

          <ul className="space-y-7">
            {impactAreas.map(({ label, percentage }) => (
              <li key={label}>
                <div className="mb-3 flex items-baseline justify-between gap-4">
                  <span className="font-medium text-slate-200">
                    {label}
                  </span>

                  <span className="text-xl font-bold tabular-nums text-sky-400">
                    {percentage}%
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="h-3 overflow-hidden rounded-full bg-slate-700"
                >
                  <div
                    className="h-full rounded-full bg-sky-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div
            aria-hidden="true"
            className="mt-3 flex justify-between text-xs text-slate-500"
          >
            <span>0%</span>
            <span>100%</span>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-sm leading-6 text-slate-400">
              Source: Pew Research Center. Survey conducted
              September–October 2024; published April 2025.
              Results reflect teens&apos; perceptions and do not
              establish causation.
            </p>

            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-400 underline-offset-4 hover:underline"
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
