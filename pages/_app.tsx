import "../styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "next/head";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2938970, 6);
  }, []);

  return (
    <>
      <Head>
        <title>Conduit | The real estate platform </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="title" content="Conduit | The real estate platform" />
        <meta
          name="description"
          content="Streamlining your business with solutions for real estate professionals to focus more on helping clients and less on managing the process."
        />
        <meta
          name="keywords"
          content="real estate, crm, real estate agents, real estate brokers, loan professionals, loan officers, conduit, conduit crm, conduitcrm, lead processing, customer relationship management, real estate saas, real estate platform"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="ConduitCRM LLC"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
