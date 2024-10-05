import Head from "next/head";
import "../styles/globals.css";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PostHogProvider client={posthog}>
        <Head>
          <title>Paras - Web Portfolio</title>
          <meta lang="en" />
          <meta name="title" content="Paras Bisht - Web Portfolio" />
          <meta
            name="description"
            content="Software developer, specialized in creating dynamic web & mobile applications."
          />
          <meta
            name="keywords"
            content="paras bisht, software engineer, web developer, frontend developer, web portfolio, javascript developer, reactjs"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Paras Bisht" />
          <meta
            itemProp="image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          <meta property="og:url" content="https://paras-bisht.netlify.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Paras Bisht - Web Portfolio" />
          <meta
            property="og:description"
            content="Software developer, specialized in creating dynamic web & mobile applications."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Paras Bisht - Web Portfolio" />
          <meta
            name="twitter:description"
            content="Software developer, specialized in creating dynamic web & mobile applications."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/X7ybGjp/profile.jpg"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Paras Bisht",
                jobTitle: "Software Developer",
                description:
                  "Software developer, specialized in creating dynamic web & mobile applications.",
                url: "https://paras-bisht.netlify.app/",
                sameAs: [
                  "https://www.linkedin.com/in/paras-bisht",
                  "https://github.com/itsparasbisht",
                  "https://blogs-by-paras.netlify.app/",
                  "https://www.instagram.com/itsparas.in/",
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
