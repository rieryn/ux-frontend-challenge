import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieContext from "../components/movie_context"
import SearchBar from "../components/searchbar";
import MovieProvider from "../components/movie_context";
import SearchResults from "../components/search_results";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <MovieProvider>
              <SearchBar/>
              <SearchResults/>
          </MovieProvider>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
