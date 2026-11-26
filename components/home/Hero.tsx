export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/10 px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-8 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Parenting in a digital world
          </p>

          <h1
            id="hero-heading"
            className="text-5xl leading-[1.08] font-bold tracking-tight text-white sm:text-6xl"
          >
            Their childhood.
            <span className="mt-2 block text-sky-400">
              Your decision.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Understand the research behind children&apos;s use of
            smartphones, social media, and online platforms.
            Explore the evidence, recognize the risks and
            tradeoffs, and make informed decisions for your
            family.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#facts"
              className="
                inline-flex items-center justify-center gap-2
                rounded-lg bg-sky-400 px-6 py-3
                font-semibold text-slate-950 transition-colors
                hover:bg-sky-300
                motion-safe:animate-[cta-breathe_3s_ease-in-out_infinite]
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-sky-400
              "
            >
              Explore the Facts
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="#take-action"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-sky-400 hover:text-sky-400"
            >
              What You Can Do
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-8 shadow-2xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Knowledge is power
          </p>

          <h2 className="mb-7 text-2xl font-semibold text-white">
            Better information.
            <span className="block">
              More confident decisions.
            </span>
          </h2>

          <ul className="space-y-5 text-slate-300">
            <li className="flex gap-3">
              <span className="font-bold text-sky-400">
                01.
              </span>
              Understand the evidence.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-sky-400">
                02.
              </span>
              Recognize the tradeoffs.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-sky-400">
                03.
              </span>
              Explore practical alternatives.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
