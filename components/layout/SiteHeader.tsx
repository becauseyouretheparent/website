
import Link from "next/link";
import NavLink from "@/components/ui/NavLink";

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-5 sm:gap-4 sm:px-6">
        <Link
          href="/"
          aria-label="Because You're the Parent — Home"
          className="shrink-0 whitespace-nowrap text-sm font-bold tracking-tight text-white sm:text-lg"
        >
          {"Because You're "}
          <span className="text-sky-400">the Parent.</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-slate-300 sm:gap-6 sm:text-sm"
        >
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/#take-action">Take Action</NavLink>
        </nav>
      </div>
    </header>
  );
}
