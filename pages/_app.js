import Head from "next/head";
import "../styles/globals.css";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PostHogProvider client={posthog}>
        <Head>
          <title>Paras Bisht - Web Portfolio</title>

          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta name="title" content="Paras Bisht - Web Portfolio" />
          <meta
            name="description"
            content="Paras Bisht is a Software Developer specializing in creating dynamic web & mobile applications. Discover practical guides, modern development insights, and expert tips at Blogs by Paras—your roadmap to mastering tech."
          />
          <meta
            name="keywords"
            content="paras bisht, paras bisht portfolio, software developer portfolio, web developer, frontend developer portfolio, javascript developer, blogs by paras"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Paras Bisht" />
          <meta
            itemProp="image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          {/* Open Graph Tags */}
          <meta property="og:url" content="https://paras-bisht.netlify.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Paras Bisht - Web Portfolio" />
          <meta
            property="og:description"
            content="Paras Bisht is a Software Developer specializing in creating dynamic web & mobile applications. Discover practical guides, modern development insights, and expert tips at Blogs by Paras."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Paras Bisht - Web Portfolio" />
          <meta
            name="twitter:description"
            content="Paras Bisht is a Software Developer specializing in dynamic web & mobile applications. Explore expert tips, modern insights, and practical guides at Blogs by Paras."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          {/* Canonical Tag */}
          <link rel="canonical" href="https://paras-bisht.netlify.app" />

          {/* Structured Data via JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Paras Bisht",
                jobTitle: "Software Developer",
                description:
                  "Paras Bisht is a Software Developer specializing in creating dynamic web & mobile applications. Discover practical guides, modern development insights, and expert tips at Blogs by Paras—your roadmap to mastering tech.",
                url: "https://paras-bisht.netlify.app/",
                sameAs: [
                  "https://www.linkedin.com/in/paras-bisht",
                  "https://github.com/itsparasbisht",
                  "https://blogs-by-paras.netlify.app",
                  "https://www.instagram.com/itsparas.in",
                ],
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Army Public School",
                },
                knowsAbout: [
                  "Web Development",
                  "React",
                  "Next.js",
                  "JavaScript",
                  "Node.js",
                  "Mobile Applications",
                  "Software Development",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
              }),
            }}
          ></script>
        </Head>

        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
}
