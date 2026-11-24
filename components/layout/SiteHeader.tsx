
import Link from "next/link";
import NavLink from "@/components/ui/NavLink";

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          aria-label="Because You're the Parent — Home"
          className="text-lg font-bold tracking-tight text-white"
        >
          {"Because You're "}
          <span className="text-sky-400">the Parent.</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300"
        >
          <NavLink href="/#research">Research</NavLink>
          <NavLink href="/#take-action">Take Action</NavLink>
        </nav>
      </div>
    </header>
  );
}
