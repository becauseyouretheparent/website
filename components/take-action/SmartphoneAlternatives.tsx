
import Link from "next/link";
import SimpleDevices from "./SimpleDevice";

const alternatives = [
  {
    title: "Start With a Basic Phone",
    description:
      "If calling and texting are the main priorities, consider a simpler phone without all the features of a modern smartphone.",
    consideration:
      "Check whether the device supports internet access, apps, group messaging, and parental restrictions.",
  },
  {
    title: "Consider a Connected Smartwatch",
    description:
      "Some cellular smartwatches let children communicate with approved contacts without carrying a traditional smartphone.",
    consideration:
      "Review contact controls, location sharing, connectivity requirements, and available apps.",
  },
  {
    title: "Use a Shared Family Device",
    description:
      "A shared tablet or computer can provide access to schoolwork, games, and communication in a supervised environment.",
    consideration:
      "Use separate accounts, appropriate restrictions, and clear rules about when and where the device is used.",
  },
  {
    title: "Introduce Access Gradually",
    description:
      "Consider starting with limited features and expanding access as your child demonstrates readiness.",
    consideration:
      "Discuss expectations, review settings together, and revisit decisions as your child's needs change.",
  },
] as const;

export default function SmartphoneAlternatives() {
  return (
    <section
      id="smartphone-alternatives"
      aria-labelledby="alternatives-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Explore the Alternatives
        </p>

        <h2
          id="alternatives-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          A smartphone isn&apos;t the only option.
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          Children have different needs, and there
          are different ways to meet them. Consider
          what your child actually needs before
          deciding which technology to introduce.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {alternatives.map((option) => (
            <article
              key={option.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {option.description}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                <strong className="text-sky-400">
                  What to check:
                </strong>{" "}
                {option.consideration}
              </p>
            </article>
          ))}
        </div>

        <SimpleDevices />

        <div className="mt-10 rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
                But everyone else has one.
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Other families&apos; decisions don&apos;t have to
                determine yours. Explore what research
                says about the pressure parents feel
                when deciding whether to introduce
                smartphones and social media.
            </p>


            <Link
            href="/research#parent-pressure"
            className="
                group relative isolate mt-6 inline-flex w-fit items-center gap-2
                font-semibold text-sky-400 transition-colors
                hover:text-sky-300
                before:pointer-events-none before:absolute
                before:-inset-x-3 before:-inset-y-2
                before:-z-10 before:rounded-lg
                before:bg-sky-400/20 before:blur-md
                before:content-['']
                motion-safe:before:animate-pulse
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-sky-400
            "
            >
            Explore the Research
            <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
            >
                →
            </span>
            </Link>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          Device capabilities vary by model, provider,
          and software version. Review the actual
          features and limitations before purchasing.
        </p>
      </div>
    </section>
  );
}
