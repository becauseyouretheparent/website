const findings = [
  {
    statistic: "39%",
    title: "Smartphone regret and peer pressure",
    description:
      "Among parents who had given their child a smartphone, 39% said they wished they hadn't but felt pressured because so many of their child's friends already had one.",
  },
  {
    statistic: "54%",
    title: "Pressure to allow social media",
    description:
      "Among parents who had allowed their children to use social media, 54% reported feeling pressured because other families had already done so.",
  },
] as const;

const source =
  "https://theharrispoll.com/articles/what-parents-think-about-their-kids-social-media-and-smartphone-usage/";

export default function ParentPressureResearch() {
  return (
    <section
      id="parent-pressure"
      aria-labelledby="parent-pressure-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Parenting & Peer Pressure
        </p>

        <h2
          id="parent-pressure-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          But everyone else has one.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Deciding when children should have smartphones
          or social media isn&apos;t always simple. The
          decisions other families make can influence
          our own.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {findings.map((finding) => (
            <article
              key={finding.statistic}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8"
            >
              <p className="text-5xl font-bold text-sky-400">
                {finding.statistic}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {finding.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {finding.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 max-w-4xl rounded-xl border-l-4 border-sky-400 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white">
            You&apos;re not the only parent weighing this decision.
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            These findings illustrate how social
            expectations can influence technology
            decisions. Every family has different
            circumstances, and understanding the
            pressure is a starting point for making
            informed choices.
          </p>
        </div>

        <div className="mt-8 max-w-4xl text-sm leading-6 text-slate-400">
          <p>
            Source: The Harris Poll, February 21–27,
            2025. Survey of 1,013 U.S. parents with
            children under 18. Percentages refer to
            relevant parent subgroups, not all parents.
            Research conducted in collaboration with
            Jonathan Haidt&apos;s research team.
          </p>

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-medium text-sky-400 hover:underline"
          >
            View original research ↗
          </a>
        </div>
      </div>
    </section>
  );
}
