import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Paras Bisht | Software Developer",
  description:
    "Portfolio of Paras Bisht, a software developer with 4 years of experience in building data-driven solutions.",
  referrer: "origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${inter.variable} antialiased bg-stone-50 max-w-2xl mx-auto p-10`}
      >
        <Header />
        <main>{children}</main>
        <footer className="mt-12 border-t border-stone-200 py-6 text-sm text-stone-500">
          <div className="flex items-center justify-between">
            <p>Handcrafted by Paras Bisht</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/itsparasbisht"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-700"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/paras-bisht"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-700"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
