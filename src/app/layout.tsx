import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header";
import PageTransition from "./components/PageTransition";
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
  metadataBase: new URL("https://paras-bisht.netlify.app"),
  alternates: {
    canonical: "https://paras-bisht.netlify.app/",
  },
  title: "Paras Bisht - Web Portfolio",
  description:
    "Portfolio of Paras Bisht, a software developer with 5+ years of experience building data-driven web applications, open-source UI components, and technical writing.",
  referrer: "origin",
  keywords: [
    "paras bisht",
    "paras bisht portfolio",
    "software developer",
    "react developer",
    "typescript developer",
    "next.js portfolio",
    "frontend engineer",
    "open source",
    "technical writing",
    "github",
    "linkedin",
  ],
  authors: [{ name: "Paras Bisht", url: "https://paras-bisht.netlify.app" }],
  creator: "Paras Bisht",
  openGraph: {
    title: "Paras Bisht - Web Portfolio",
    description:
      "Portfolio of Paras Bisht, a software developer with 5+ years of experience building data-driven web applications, open-source UI components, and technical writing.",
    url: "https://paras-bisht.netlify.app",
    siteName: "Paras Bisht",
    images: [
      {
        url: "https://paras-bisht.netlify.app/paras-profile-photo.jpg",
        width: 800,
        height: 800,
        alt: "Profile photo of Paras Bisht",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paras Bisht - Web Portfolio",
    description:
      "Portfolio of Paras Bisht, a software developer with 5+ years of experience building data-driven web applications, open-source UI components, and technical writing.",
    images: ["https://paras-bisht.netlify.app/paras-profile-photo.jpg"],
  },
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paras Bisht",
  url: "https://paras-bisht.netlify.app",
  image: "https://paras-bisht.netlify.app/paras-profile-photo.jpg",
  sameAs: [
    "https://github.com/itsparasbisht",
    "https://www.linkedin.com/in/paras-bisht",
    "https://www.instagram.com/itsparas.in",
  ],
  email: "mailto:iamparasbisht@gmail.com",
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Independent Developer",
  },
  description:
    "Software developer with 5+ years of experience building data-driven web applications, UX-focused frontend solutions, and open-source libraries.",
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Web Accessibility",
    "Frontend Performance",
    "Data Visualization",
    "GIS applications",
    "CPQ systems",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "professional",
      email: "iamparasbisht@gmail.com",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${inter.variable} antialiased bg-stone-50 max-w-2xl mx-auto p-6 sm:p-8`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
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
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
    </html>
  );
}
