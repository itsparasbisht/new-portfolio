"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "/index" },
  { href: "/experience", label: "experience" },
  { href: "/posts", label: "posts" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-4 mb-10">
      <Image
        src={"/profile.png"}
        alt="Paras Bisht's profile picture"
        width={40}
        height={40}
        className="rounded-full"
      />
      <nav className="">
        <ul
          className="flex gap-6 font-medium text-stone-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-stone-800 border-b border-stone-300"
                      : "hover:text-stone-800 transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
