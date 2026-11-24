
import FactCard from "@/components/home/FactCard";
import { facts } from "@/data/facts";
import Link from "next/link";

export default function FactsSection() {
  return (
    <section
      id="facts"
      aria-labelledby="facts-heading"
      className="scroll-mt-20 border-b border-white/10 bg-slate-950 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            The Facts
          </p>

          <h2
            id="facts-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Five facts every parent should know.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Understanding the digital world starts with
            understanding the evidence. Here are five
            research-backed findings worth knowing.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <FactCard
              key={fact.id}
              fact={fact}
              index={index}
            />
          ))}

        
        <Link
        href="/research"
        className="group flex h-full flex-col justify-center rounded-2xl border border-sky-500/40 bg-sky-950/30 p-6 transition-colors hover:border-sky-400 hover:bg-sky-950/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
        >
        <span className="mb-5 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Go Deeper
        </span>

        <h3 className="mb-4 text-2xl font-bold text-white">
            There&apos;s more to the story.
        </h3>

        <p className="mb-8 leading-7 text-slate-300">
            Explore the research behind these numbers,
            examine the evidence, and understand what
            the findings mean for your family.
        </p>

        <span className="mt-auto inline-flex items-center gap-2 font-semibold text-sky-400 group-hover:text-sky-300">
            Explore the Research
            <span aria-hidden="true">→</span>
        </span>
        </Link>



        </div>

        <p className="mt-8 text-sm leading-6 text-slate-400">
          Statistics reflect specific studies, age groups,
          and reporting periods. Review each source for
          methodology and additional context.
        </p>
      </div>
    </section>
  );
}
