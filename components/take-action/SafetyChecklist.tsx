
const safetyChecks = [
  {
    title: "Review Your Child's Apps",
    description:
      "Know which apps and games your child uses, what they do, and who can contact them.",
  },
  {
    title: "Require Download Approvals",
    description:
      "Enable parental approval for new apps and purchases where supported. Protect restrictions with a parent-only PIN or passcode.",
  },
  {
    title: "Limit Contact With Strangers",
    description:
      "Review messaging, friend requests, multiplayer chat, and who can communicate with your child.",
  },
  {
    title: "Check Privacy & Location Settings",
    description:
      "Review location sharing, public profiles, camera access, and other permissions.",
  },
  {
    title: "Set Reasonable Boundaries",
    description:
      "Establish expectations for device use, bedtime, schoolwork, and time spent offline.",
  },
  {
    title: "Create a Safety Plan Together",
    description:
      "Make sure your child knows they can come to you if someone threatens, pressures, or makes them uncomfortable online.",
  },
] as const;

export default function SafetyChecklist() {
  return (
    <section
      id="safety-checklist"
      aria-labelledby="checklist-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Start Here
        </p>

        <h2
          id="checklist-heading"
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Six steps you can take today.
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          You don&apos;t have to change everything overnight.
          Start with these practical steps to make
          your child&apos;s digital experiences safer.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {safetyChecks.map((check) => (
            <li
              key={check.title}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
            >
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 shrink-0 accent-sky-400"
                />

                <span>
                  <span className="block font-semibold text-white">
                    {check.title}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-slate-300">
                    {check.description}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-slate-400">
          Check off steps as you complete them. Your
          selections reset when you reload the page.
        </p>
      </div>
    </section>
  );
}
