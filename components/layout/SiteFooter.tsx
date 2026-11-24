
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white"
              aria-label="Because You're the Parent — Home"
            >
              {"Because You're "}
              <span className="text-sky-400">
                the Parent.
              </span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Helping parents navigate their children&apos;s
              digital lives through credible research,
              practical guidance, and informed decisions.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-4 text-sm font-medium text-slate-300 sm:flex-row sm:gap-8"
          >
            <Link
              href="/#research"
              className="transition-colors hover:text-sky-400"
            >
              Research
            </Link>

            <Link
              href="/#take-action"
              className="transition-colors hover:text-sky-400"
            >
              Take Action
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Because You&apos;re
              the Parent. All rights reserved.
            </p>

            <p>
              Their childhood. Your decision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
