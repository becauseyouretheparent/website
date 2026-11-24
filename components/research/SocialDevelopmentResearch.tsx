const studies = [
  {
    year: "2014 · UCLA",
    title: "Five screen-free days improved emotion recognition",
    finding:
      "Preteens attending an outdoor camp without screens improved more at recognizing facial expressions and nonverbal emotional cues than a comparison group.",
    limitation:
      "The study cannot separate the effects of removing screens from increased face-to-face interaction.",
    url: "https://escholarship.org/uc/item/4zr41925",
  },
  {
    year: "2024 · Longitudinal Study",
    title: "No overall decline in social skills",
    finding:
      "Researchers followed 812 Norwegian children from ages 10–18. Greater social media use predicted more offline time with friends, but no overall decline in social skills.",
    limitation:
      "Children with higher social anxiety symptoms showed declines in social skills as their social media use increased.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11540422/",
  },
  {
    year: "2026 · Meta-Analysis",
    title: "Social media and empathy",
    finding:
      "A review involving 10,015 participants found a very small positive association between social media use and empathy (r = 0.057).",
    limitation:
      "An association does not demonstrate that social media improves empathy.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41486958/",
  },
] as const;

export default function SocialDevelopmentResearch() {
  return (
    <section
      id="social-development"
      aria-labelledby="social-development-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Social Development
        </p>

        <h2
          id="social-development-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          Are screens changing how children socialize?
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Research on social skills, emotional cues,
          and offline friendships offers a complicated
          picture. Here are three studies worth examining.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {studies.map((study) => (
            <article
              key={study.url}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-semibold text-sky-400">
                {study.year}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {study.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {study.finding}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                <strong className="text-slate-300">
                  Important context:
                </strong>{" "}
                {study.limitation}
              </p>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 text-sm font-medium text-sky-400 hover:underline"
              >
                View original study ↗
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl border-l-4 border-sky-400 bg-slate-900/60 p-5 text-sm leading-7 text-slate-300">
          These findings examine different aspects of
          social development. They do not establish that
          increased screen use universally improves or
          harms children&apos;s social abilities.
        </p>
      </div>
    </section>
  );
}
