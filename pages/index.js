import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="polma tambunan - cooderu.com" />
  <meta property="og:title" content="polma tambunan - cooderu.com"/>
  <meta property="og:description" content="polma tambunan - cooderu.com"/>
  <meta property="og:url" content="https://cooderu.com/"/>
  <meta property="og:type" content="website"/>
      </Head>
      <main>
        <Header title="It's Polma Tambunan." />
        <p className="description">
          <code><a href='https://www.instagram.com/polmatambunan/'>https://www.instagram.com/polmatambunan/</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
