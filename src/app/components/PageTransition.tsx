"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="page-shell">
      {children}
    </main>
  );
}
