import Head from "next/head";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Head>
        <title>#FirdausilJannati</title>
        <meta name="title" content="#FirdausilJannati" />
        <meta
          name="description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra - putri kami: Miftahh Izzah Annisa dan Muhammad Emir."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://miftahemirwedding.vercel.app/"
        />
        <meta property="og:title" content="#FirdausilJannati" />
        <meta
          property="og:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra - putri kami: Miftahh dan Emir."
        />
        <meta
          property="og:image"
          content="https://miftahemirwedding.vercel.app/images/thumb.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://miftahemirwedding.vercel.app/"
        />
        <meta property="twitter:title" content="#FirdausilJannati" />
        <meta
          property="twitter:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Miftahh Izzah Annisa dan Muhammad Emir."
        />
        <meta
          property="twitter:image"
          content="https://miftahemirwedding.vercel.app/images/thumb.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
