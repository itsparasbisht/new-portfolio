import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header";
import Script from "next/script";

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
  title: "Paras Bisht - Web Portfolio",
  description:
    "Portfolio of Paras Bisht, a software developer with 4 years of experience in building data-driven solutions.",
  referrer: "origin",
  keywords: [
    "paras bisht",
    "paras bisht portfolio",
    "software developer portfolio",
    "web developer",
    "frontend developer portfolio",
    "javascript developer",
    "blogs by paras",
  ],
  authors: [{ name: "Paras Bisht", url: "https://paras-bisht.netlify.app" }],
  openGraph: {
    title: "Paras Bisht - Web Portfolio",
    description:
      "Portfolio of Paras Bisht, a software developer with 4 years of experience in building data-driven solutions.",
    url: "https://paras-bisht.netlify.app",
    siteName: "Paras Bisht's Portfolio",
    images: [
      {
        url: "https://i.ibb.co/SwkZ2bPv/profile.jpg",
        width: 800,
        height: 600,
        alt: "Paras Bisht's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paras Bisht - Web Portfolio",
    description:
      "Portfolio of Paras Bisht, a software developer with 4 years of experience in building data-driven solutions.",
    images: ["https://i.ibb.co/SwkZ2bPv/profile.jpg"],
  },
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
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-stone-300"></div>
              <div className="h-3 w-3 rounded-full bg-stone-500"></div>
              <div className="h-3 w-3 rounded-full bg-stone-800"></div>
              <div className="h-3 w-3 rounded-full bg-rose-500"></div>
            </div>
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FXFQPMVKT0"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FXFQPMVKT0');
        `}
      </Script>
    </html>
  );
}
