import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Paras - Web Portfolio</title>
        <meta
          name="keywords"
          content="paras bisht, paras bisht portfolio, web developer portfolio, frontend developer, web portfolio"
        />
        <meta
          name="subject"
          content="Paras Bisht - JavaScript Developer - Web Portfolio"
        />
        <meta
          name="description"
          content="I am Paras, I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta name="author" content="Paras Bisht, iamparasbisht@gmail.com" />
        <meta name="robots" content="index, follow" />

        <meta
          itemProp="name"
          content="Paras Bisht - JavaScript Developer - Web Portfolio"
        />
        <meta
          itemProp="description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta
          itemProp="image"
          content="https://i.ibb.co/3CCmCLv/paras-bisht.jpg"
        />

        <meta property="og:url" content="https://paras-bisht.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Paras Bisht - JavaScript Developer - Web Portfolio"
        />
        <meta
          property="og:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/3CCmCLv/paras-bisht.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paras Bisht - JavaScript Developer - Web Portfolio"
        />
        <meta
          name="twitter:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. I also have experience working with the MERN stack. I am a dedicated fellow who is interested in building solutions by coordinating with teams."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/3CCmCLv/paras-bisht.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
