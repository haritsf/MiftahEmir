import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>#FirdausilJannati</title>
        <meta name="title" content="#FirdausilJannati" />
        <meta
          name="description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra - putri kami: Fithriyyah Izzah Annisa dan Muhammad Itsbat."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://fithriyyahitsbat.vercel.app/"
        />
        <meta property="og:title" content="#FirdausilJannati" />
        <meta
          property="og:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra - putri kami: Fithriyyah dan Itsbat."
        />
        <meta
          property="og:image"
          content="https://fithriyyahitsbat.vercel.app/images/landing.webp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://fithriyyahitsbat.vercel.app/"
        />
        <meta property="twitter:title" content="#FirdausilJannati" />
        <meta
          property="twitter:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Fithriyyah Izzah Annisa dan Muhammad Itsbat."
        />
        <meta
          property="twitter:image"
          content="https://fithriyyahitsbat.vercel.app/images/landing.webp"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;