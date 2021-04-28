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
