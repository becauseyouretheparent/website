
const platforms = [
  {
    name: "Roblox",
    checks: [
      "Link your Roblox account to your child's account.",
      "Review content maturity and block unwanted experiences.",
      "Restrict chat and communication where supported.",
      "Review screen-time limits and spending controls.",
    ],
    note: "Available controls vary by age and account verification.",
    url: "https://en.help.roblox.com/hc/en-us/articles/30428310121620-Parental-Controls-Overview",
  },
  {
    name: "Minecraft",
    checks: [
      "Add your child to your Microsoft family group.",
      "Review multiplayer permissions through Xbox Family Settings.",
      "Restrict communication with other players.",
      "Review access to public servers and Minecraft Realms.",
    ],
    note: "Minecraft uses Microsoft account controls even on non-Xbox devices. Additional device controls may apply.",
    url: "https://help.minecraft.net/hc/en-us/articles/4408968616077-Set-Up-Microsoft-Family-Accounts-for-Minecraft-Multiplayer-Ga",
  },
  {
    name: "Snapchat",
    checks: [
      "Connect your account through Snapchat Family Center.",
      "Review your teen's recent contacts and conversations list.",
      "Review location-sharing and privacy settings.",
      "Discuss unknown contacts, disappearing messages, and suspicious requests.",
    ],
    note: "Family Center supports parents of teens ages 13–17 but does not reveal message contents.",
    url: "https://help.snapchat.com/hc/en-us/articles/7121384944788-What-is-Family-Center",
  },
  {
    name: "Discord",
    checks: [
      "Connect with your teen through Discord Family Center.",
      "Review server participation and communication activity.",
      "Check message requests and sensitive-content filters.",
      "Discuss invitations to private servers and conversations with strangers.",
    ],
    note: "Family Center offers parental insights but does not expose private message contents.",
    url: "https://support.discord.com/hc/en-us/articles/14155043715735-Family-Center-for-Parents-and-Guardians",
  },
] as const;

export default function PlatformControls() {
  return (
    <section
      id="platform-controls"
      aria-labelledby="platform-controls-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Gaming & Social Media
        </p>

        <h2
          id="platform-controls-heading"
          className="text-3xl font-bold text-white md:text-4xl"
        >
          Know what they&apos;re using.
          <span className="block text-sky-400">
            Know what you can control.
          </span>
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          Games and social platforms have different
          communication, privacy, and content settings.
          Review the platforms your child uses and
          follow their official safety instructions.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {platforms.map((platform) => (
            <article
              key={platform.name}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {platform.name}
              </h3>

              <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-slate-300">
                {platform.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-400 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Official Safety Instructions
                  <span aria-hidden="true"> ↗</span>
                </a>

                <p className="mt-5 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-400">
                  {platform.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          Parental controls cannot eliminate every
          risk. Features may change, and restrictions
          vary by account age, platform, and device.
        </p>
      </div>
    </section>
  );
}
