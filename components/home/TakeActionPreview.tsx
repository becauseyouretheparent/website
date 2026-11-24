
import Link from "next/link";

const actionSteps = [
    {
        title: "Consider the Alternatives",
        description:
        "A smartphone isn't the only option. Explore simpler devices and decide when greater connectivity makes sense for your child.",
    },

    {
    title: "Set Up Safeguards",
    description:
        "Require parental approval for new app downloads, protect restrictions with a parent-only PIN or passcode, and review messaging permissions, in-app purchases, and privacy settings.",
    },

    {
        title: "Start the Conversation",
        description:
        "Discuss online boundaries, warning signs, and what your child should do when something makes them uncomfortable.",
    },
] as const;

export default function TakeActionPreview() {
  return (
    <section
      id="take-action"
      aria-labelledby="take-action-heading"
      className="scroll-mt-20 border-b border-white/10 bg-slate-950 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Take Action
          </p>

          <h2
            id="take-action-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            The research matters.
            <span className="block text-sky-400">
              What you do next matters, too.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Understanding the risks is only the beginning.
            Here are three practical places to start
            making informed decisions about your
            child&apos;s digital life.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {actionSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to explore your options?
              </h3>

              <p className="mt-2 max-w-xl leading-7 text-slate-300">
                Find practical guidance, safety tools,
                and alternatives to help you make
                decisions with confidence.
              </p>
            </div>

            <Link
              href="/take-action"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              Explore Your Options
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
