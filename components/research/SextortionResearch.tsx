
const sources = [
  {
    name: "NCMEC — 2025 Financial Sextortion Data",
    url: "https://www.ncmec.org/blog/2026/ncmec-releases-new-sextortion-data-2025",
  },
  {
    name: "Thorn & NCMEC — Trends in Financial Sextortion (2024)",
    url: "https://www.thorn.org/research/library/financial-sextortion/",
  },
] as const;

export default function SextortionResearch() {
  return (
    <section
      id="sextortion"
      aria-labelledby="sextortion-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Online Exploitation
        </p>

        <h2
          id="sextortion-heading"
          className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Understanding Sextortion
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Sextortion occurs when someone threatens to
          expose sexual images or information to pressure
          another person into meeting demands, which
          may include sending money or additional images.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-5xl font-bold text-sky-400">
              137
            </p>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Reports per day in 2025
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              NCMEC received more than 50,000 reports of
              financially motivated sextortion in 2025,
              averaging 137 reports daily.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These figures measure reports received,
              not necessarily unique victims or the
              total number of incidents.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Platform Involvement
            </p>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Instagram and Snapchat appear prominently
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              A 2024 Thorn and NCMEC analysis identified
              Instagram and Snapchat among the most
              commonly mentioned platforms in sextortion
              reports involving minors.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              The analysis examined reports from
              August 2020 through August 2023.
              Differences in reporting practices mean
              these figures cannot establish which
              platform has the highest overall risk.
            </p>
          </article>
        </div>

        <div className="mt-8 max-w-4xl rounded-xl border-l-4 border-sky-400 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white">
            What the evidence does not tell us
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            Report counts alone cannot determine a
            child&apos;s likelihood of victimization on a
            particular app. They also do not establish
            which platform has the highest rate of
            grooming, a related but distinct concern.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <h3 className="text-xl font-semibold text-white">
            Original Research
          </h3>

          <ul className="mt-5 space-y-4">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline-offset-4 hover:underline"
                >
                  {source.name}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
