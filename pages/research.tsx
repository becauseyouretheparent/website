import Head from "next/head";
import Link from "next/link";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { facts } from "@/data/facts";
import SextortionResearch from "@/components/research/SextortionResearch";
import ScreenTimeByAge from "@/components/research/ScreenTimeByAge";
import HeavyScreenUse from "@/components/research/HeavyScreenUse";
import SocialDevelopmentResearch from "@/components/research/SocialDevelopmentResearch";
import GamingSafetyResearch from "@/components/research/GamingSafetyResearch";
import ParentPressureResearch from "@/components/research/ParentPressureResearch";

const researchTopics = [
  {
    title: "Social Media & Wellbeing",
    description:
      "Research on social skills, mental health, and offline relationships.",
    href: "#social-development",
  },
  {
    title: "Sextortion & Grooming",
    description:
      "Documented exploitation risks, platform involvement, and reporting data.",
    href: "#sextortion",
  },
  {
    title: "Gaming & Online Worlds",
    description:
      "Investigations involving Roblox, Minecraft, and online gaming communities.",
    href: "#gaming-safety",
  },
  {
    title: "Parenting & Peer Pressure",
    description:
      "How social expectations influence decisions about smartphones and social media.",
    href: "#parent-pressure",
  },
] as const;


const sources = facts
  .flatMap((fact) => fact.sources)
  .filter(
    (source, index, all) =>
      all.findIndex((item) => item.url === source.url) ===
      index,
  );

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>
          Research | Because You&apos;re the Parent
        </title>
        <meta
          name="description"
          content="Explore original research and evidence about children's digital lives, social media, online safety, gaming, and technology."
        />
      </Head>

      <SiteHeader />

      <main
        id="main-content"
        className="min-h-screen bg-slate-950 text-slate-100"
      >
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              The Research
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Understanding the evidence.
              <span className="mt-2 block text-sky-400">
                Beyond the headlines.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Research should inform decisions, not
              manipulate them. We examine published
              findings, explain their limitations,
              and provide original sources so parents
              can investigate the evidence themselves.
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-slate-400">
              We bring together research from established
              organizations, academic institutions, and independent
              investigators. Our goal is to make the evidence
              accessible, provide context, and help parents
              reach their own informed conclusions.
            </p>

          </div>
        </section>

        <section
          aria-labelledby="topics-heading"
          className="border-t border-white/10 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="topics-heading"
              className="text-3xl font-bold text-white"
            >
              Explore the Research
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Explore published studies, documented findings,
              and independent investigations into the digital
              world children navigate every day.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {researchTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition-colors hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400">
                    {topic.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {topic.description}
                  </p>

                  <span className="mt-5 inline-block font-medium text-sky-400">
                    Explore Topic →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ScreenTimeByAge />
        <HeavyScreenUse />
        <SocialDevelopmentResearch />
        <SextortionResearch />
        <GamingSafetyResearch />
        <ParentPressureResearch />

        <section
          aria-labelledby="sources-heading"
          className="border-t border-white/10 bg-slate-900/40 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="sources-heading"
              className="text-3xl font-bold text-white"
            >
              Original Research & Sources
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              These publications support findings
              currently featured on our homepage.
              Follow the links to examine the original
              material and its methodology.
            </p>

            <ul className="mt-8 max-w-3xl space-y-4">
              {sources.map((source) => (
                <li
                  key={source.url}
                  className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-400 underline-offset-4 hover:underline"
                  >
                    {source.name}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white">
              Our Research Standards
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              We aim to distinguish established
              findings from associations, self-reported
              experiences, and opinions. Research
              claims should identify their original
              sources, relevant populations, reporting
              periods, and important limitations.
            </p>

            <Link
              href="/#facts"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
            >
              Return to the Five Facts
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
