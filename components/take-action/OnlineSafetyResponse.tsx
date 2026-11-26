
const steps = [
  {
    title: "Stay Calm and Listen",
    description:
      "Reassure your child that they can tell you what happened. Avoid blame or punishment, and focus on their safety.",
  },
  {
    title: "Don't Pay or Comply",
    description:
      "If someone is threatening your child, don't send money, additional images, or anything else they demand. Cooperating rarely stops the threats.",
  },
  {
    title: "Preserve Evidence",
    description:
      "Keep account information, messages, usernames, and other relevant records. Don't delete the child's account or conversations. Never download or share sexual images of minors to collect evidence.",
  },
  {
    title: "Report and Block",
    description:
      "Report the account through the platform, then block further contact. Report suspected child sexual exploitation to NCMEC or law enforcement.",
  },
] as const;

const resources = [
  {
    name: "NCMEC CyberTipline",
    description:
      "Report suspected online child sexual exploitation, including grooming and sextortion.",
    url: "https://report.cybertip.org/",
  },
  {
    name: "NCMEC Take It Down",
    description:
      "Free assistance limiting the spread of intimate images taken when someone was under 18.",
    url: "https://takeitdown.ncmec.org/",
  },
  {
    name: "FBI Sextortion Resources",
    description:
      "Learn how to report online exploitation and get assistance.",
    url: "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/sextortion",
  },
] as const;

export default function OnlineSafetyResponse() {
  return (
    <section
      id="online-safety-response"
      aria-labelledby="response-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          When Something Goes Wrong
        </p>

        <h2
          id="response-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          If your child is being threatened online.
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          Grooming, sextortion, and online harassment
          require prompt attention. These steps can
          help you respond and find professional support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl rounded-2xl border border-sky-500/30 bg-slate-900/70 p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">
            Where to Get Help
          </h3>

          <ul className="mt-6 space-y-6">
            {resources.map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-400 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  {resource.name} ↗
                </a>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {resource.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-slate-700 pt-5 text-sm leading-6 text-slate-400">
            Take It Down works with participating platforms.
            Do not download or share intimate images to
            use the service.
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-300">
          If someone is in immediate danger in the U.S.,
          call 911. For emotional distress or suicidal
          thoughts, call or text 988 for crisis support.
        </p>
      </div>
    </section>
  );
}
