import "tailwindcss/tailwind.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Riskspot</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp;
