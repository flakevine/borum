import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

const Forum: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Borum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Forum page
        </h1>

        <p className={styles.description}>
          Posts
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>example 1</h2>
            <p>oi</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Forum
