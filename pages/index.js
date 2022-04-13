import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
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
