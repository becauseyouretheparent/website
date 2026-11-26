
const devices = [
  {
    name: "Apple — iPhone & iPad",
    tool: "Family Sharing + Screen Time",
    steps: [
      "Create a child Apple Account and add it to Family Sharing.",
      "Enable Ask to Buy for eligible app downloads and purchases.",
      "Protect Screen Time settings with a parent-controlled passcode.",
      "Review content restrictions, communication permissions, and location sharing.",
    ],
    links: [
      {
        label: "Set Up Screen Time",
        url: "https://support.apple.com/en-us/108806",
      },
      {
        label: "Configure Ask to Buy",
        url: "https://support.apple.com/en-us/105055",
      },
    ],
    note: "Ask to Buy does not require fresh approval for every download, including certain app updates and previously purchased apps.",
  },
  {
    name: "Google — Android",
    tool: "Google Family Link",
    steps: [
      "Set up or supervise your child's Google Account using Family Link.",
      "Under Google Play approvals, select All content to require approval for eligible downloads.",
      "Review app permissions, content ratings, and blocked apps.",
      "Configure daily screen-time limits and downtime schedules.",
    ],
    links: [
      {
        label: "Set Up Family Link",
        url: "https://support.google.com/families/answer/16398726",
      },
      {
        label: "Configure Download Approvals",
        url: "https://support.google.com/googleplay/answer/7039872",
      },
    ],
    note: "Family Link's Google Play purchase approvals apply to Google Play billing. Supervision and available controls depend on the device and account.",
  },
] as const;

export default function DeviceControls() {
  return (
    <section
      id="device-controls"
      aria-labelledby="device-controls-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Device Controls
        </p>

        <h2
          id="device-controls-heading"
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Take control of their devices.
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          Built-in parental controls can help you manage
          downloads, permissions, and device usage.
          Start with the platform your child uses.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {devices.map((device) => (
            <article
              key={device.name}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-sky-400">
                {device.tool}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {device.name}
              </h3>

              <ol className="mt-6 list-decimal space-y-4 pl-5 leading-7 text-slate-300">
                {device.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="mt-auto pt-8">
                <p className="mb-3 text-sm font-semibold text-white">
                  Official Instructions
                </p>

                <ul className="space-y-3">
                  {device.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-400 underline-offset-4 hover:underline"
                      >
                        {link.label}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-400">
                  {device.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          Settings and availability may vary by device,
          operating system, account age, and region.
          Parental controls help manage risks but do not
          replace ongoing conversations and supervision.
        </p>
      </div>
    </section>
  );
}
