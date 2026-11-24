import Link from "next/link";
import type { ComponentProps } from "react";

type NavLinkProps = Pick<
  ComponentProps<typeof Link>,
  "href" | "children"
>;

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-sky-400"
    >
      {children}
    </Link>
  );
}
