import Head from 'next/head'
import { Inter } from 'next/font/google'
import ShowPins from "../../components/ShowPins";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SALVARE</title>
        <meta name="description" content="SALVARE can save the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chrome-512.png" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main>
        <h1>Home</h1>
        <ShowPins />
      </main>
    </>
  )
}
