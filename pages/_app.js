import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paras - Web Portfolio</title>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;
