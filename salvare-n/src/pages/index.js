import Head from 'next/head'
import { Inter } from 'next/font/google'
import ShowPins from "../../components/ShowPins";
// import styles from '@/styles/Home.module.css'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SALVARE</title>
        <meta name="description" content="SALVARE can save the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chrome-512.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main>
        <h1>Home</h1>
        <ShowPins />
      </main>
      <Script
        src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        crossOrigin=""
      ></Script>
    </>
  )
}
