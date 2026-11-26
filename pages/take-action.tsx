
import Head from "next/head";
import Link from "next/link";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import SafetyChecklist from "@/components/take-action/SafetyChecklist";
import DeviceControls from "@/components/take-action/DeviceControls";
import PlatformControls from "@/components/take-action/PlatformControls";
import OnlineSafetyResponse from "@/components/take-action/OnlineSafetyResponse";
import SmartphoneAlternatives from "@/components/take-action/SmartphoneAlternatives";

const startingPoints = [
  {
    title: "Choose Access Deliberately",
    description:
      "Consider which devices, apps, and online experiences are appropriate for your child.",
  },
  {
    title: "Set Up Safeguards",
    description:
      "Review app approvals, privacy settings, communication permissions, and parental controls.",
  },
  {
    title: "Keep Communication Open",
    description:
      "Discuss online boundaries, warning signs, and what to do when something goes wrong.",
  },
] as const;

export default function TakeActionPage() {
  return (
    <>
      <Head>
        <title>Take Action | Because You&apos;re the Parent</title>
        <meta
          name="description"
          content="Practical guidance for parents on smartphones, app approvals, parental controls, gaming safety, and online protection."
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
              Take Action
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              You have options.
              <span className="mt-2 block text-sky-400">
                Start with a plan.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Understanding the risks is important.
              Knowing what to do about them is just
              as important.
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-slate-400">
              Every family has different needs. Explore
              practical steps, device settings, and
              alternatives to help you make informed
              decisions about your child&apos;s digital life.
            </p>

            <a
            href="#simple-devices"
            className="
                mt-8 inline-flex w-fit items-center gap-3
                rounded-lg bg-sky-400 px-5 py-3
                text-sm font-semibold text-slate-950
                transition-colors hover:bg-sky-300
                motion-safe:animate-[cta-breathe_3s_ease-in-out_infinite]
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-sky-400
                sm:text-base
            "
            >
            Explore Dumbphones & Smartwatches
            <span aria-hidden="true">↓</span>
            </a>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {startingPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {point.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-sky-400 hover:text-sky-300"
            >
              Want to examine the evidence first?
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <SafetyChecklist />
        <DeviceControls />
        <PlatformControls />
        <OnlineSafetyResponse />
        <SmartphoneAlternatives />

      </main>

      <SiteFooter />
    </>
  );
}
