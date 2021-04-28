import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieProvider from "../components/movie_context";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/shopicon.ico" />
      </Head>

      <main className={styles.main}>
          <MovieProvider>

          </MovieProvider>

      </main>

    </div>
  )
}
