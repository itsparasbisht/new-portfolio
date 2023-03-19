import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Paras - Web Portfolio</title>
        <meta
          name="keywords"
          content="paras bisht, paras bisht portfolio, web developer portfolio"
        />
        <meta name="subject" content="Paras Bisht web portfolio" />
        <meta
          name="description"
          content="I am Paras, I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta name="author" content="Paras Bisht, iamparasbisht@gmail.com" />
        <meta name="robots" content="index, follow" />

        <meta itemprop="name" content="Paras Bisht web portfolio" />
        <meta
          itemprop="description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta itemprop="image" content="https://ibb.co/FDD4DjX" />

        <meta property="og:url" content="https://paras-bisht.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paras Bisht web portfolio" />
        <meta
          property="og:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta property="og:image" content="https://ibb.co/FDD4DjX" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paras Bisht web portfolio" />
        <meta
          name="twitter:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta name="twitter:image" content="https://ibb.co/FDD4DjX" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
