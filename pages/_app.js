import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paras - Web Portfolio</title>
        <meta name="title" content="Paras Bisht - Web Portfolio" />
        <meta
          name="description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. My experience also extends to full-stack web app development. I'm interested in building solutions and teams. Feel free to connect."
        />
        <meta
          name="keywords"
          content="paras bisht, paras bisht portfolio, web developer portfolio, frontend developer, web portfolio, javascript developer, web developer"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Paras Bisht" />
        <meta
          itemProp="image"
          content="https://i.ibb.co/3CCmCLv/paras-bisht.jpg"
        />

        <meta property="og:url" content="https://paras-bisht.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paras Bisht - Web Portfolio" />
        <meta
          property="og:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. My experience also extends to full-stack web app development. I'm interested in building solutions and teams. Feel free to connect."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/3CCmCLv/paras-bisht.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paras Bisht - Web Portfolio" />
        <meta
          name="twitter:description"
          content="I specialize in JavaScript development and have professional working experience as a frontend dev with ReactJS. My experience also extends to full-stack web app development. I'm interested in building solutions and teams. Feel free to connect."
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
