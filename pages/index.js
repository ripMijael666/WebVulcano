import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vulcano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="justify-center justify-items-center content-center items-center">
        <button
          className='bg-[#3682F7] w-[100%]'
        >
        <h1 className={styles.title}>
          <a href="/components/pantallaSeis">ir a pagina 6</a>
        </h1>
        </button>
      </main>
    </div>
  )
}
