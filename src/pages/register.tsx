import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Register</a>
        </h1>
      </main>

    </div>
  )
}
