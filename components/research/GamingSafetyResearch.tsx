const investigations = [
  {
    title: "Recreating Real School Shootings",
    source: "ADL · April 2025",
    description:
      "ADL investigators documented Roblox experiences modeled on real shootings, including Columbine, Uvalde, and Parkland. Some allowed players to assume attackers' roles.",
    url: "https://www.adl.org/resources/article/dark-side-roblox-active-shooter-studios-create-maps-based-real-life-mass",
  },
  {
    title: "The Sandy Hook Simulation",
    source: "MPR News · June 2026",
    description:
      "A Roblox experience modeled on Sandy Hook reportedly included real victims' names. Roblox said it removed the experience after it was reported, although accounts differed on its availability.",
    url: "https://www.mprnews.org/story/2026/06/19/parents-of-annunciation-victim-lydia-kaiser-condemn-roblox-over-school-shooting-simulation",
  },
  {
    title: "Content Following Charlie Kirk's Killing",
    source: "Axios · September 2025",
    description:
      "Roblox reported removing more than 100 user-created experiences connected to the killing. Not all were necessarily playable reenactments.",
    url: "https://www.axios.com/2025/09/11/charlie-kirk-shooting-roblox-game-removed",
  },
  {
    title: "Risks in Online Gaming Communities",
    source: "UNICEF Innocenti · October 2025",
    description:
      "UNICEF examined how gaming communities, including user-created worlds in Roblox and Minecraft, can be exploited to expose children to violent content or facilitate manipulation and recruitment.",
    url: "https://www.unicef.org/innocenti/reports/protecting-children-online-gaming",
  },
] as const;


const videos = [
  {
    title: "Ryan Montgomery — Shawn Ryan Show #56",
    url: "https://www.youtube.com/watch?v=qjz_07-DvE0",
  },
  {
    title: "Ryan Montgomery — Change Agents with Andy Stumpf",
    url: "https://www.youtube.com/watch?v=-zrgqtpYQak",
  },
  {
    title: "Schlep — Shawn Ryan Show #284",
    url: "https://www.youtube.com/watch?v=y4d4Ycaznao",
  },
] as const;


export default function GamingSafetyResearch() {
  return (
    <section
      id="gaming-safety"
      aria-labelledby="gaming-safety-heading"
      className="border-t border-white/10 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-400">
          Gaming & Online Worlds
        </p>

        <h2
          id="gaming-safety-heading"
          className="max-w-3xl text-3xl font-bold text-white md:text-4xl"
        >
          When online games cross the line.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          User-created games and online communities can
          expose children to disturbing content and
          unwanted interactions. These documented
          investigations illustrate some of the risks.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {investigations.map((item) => (
            <article
              key={item.url}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-medium text-sky-400">
                {item.source}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 text-sm font-medium text-sky-400 hover:underline"
              >
                Read the investigation ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 max-w-4xl rounded-xl border-l-4 border-sky-400 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white">
            Important distinction
          </h3>
          <p className="mt-3 leading-7 text-slate-300">
            These investigations document particular
            experiences and platform risks. They do not
            establish that every child encounters such
            content or that all games and servers
            present equivalent dangers.
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          <h3 className="text-2xl font-semibold text-white">
            Watch & Learn
          </h3>


        <p className="mt-4 leading-7 text-slate-300">
            Prefer watching over reading? Explore firsthand
            accounts and investigations into online predators,
            grooming, and child exploitation, including the risks
            children may encounter through social media and
            online gaming.
        </p>




        <div className="mt-5 flex flex-col items-start gap-5">
        {videos.map((video) => (
            <a
            key={video.url}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                group relative isolate inline-flex w-fit items-center gap-2
                font-medium text-sky-400 transition-colors
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
            {video.title}
            <span
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-1"
            >
                ↗
            </span>
            </a>
        ))}
        </div>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Content advisory: Discussion of child sexual
            exploitation. Interviews provide additional
            perspectives and are not substitutes for
            independently verified research.
          </p>
        </div>
      </div>
    </section>
  );
}
