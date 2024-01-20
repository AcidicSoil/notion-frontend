// my-notion-clone/pages/index.js

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Notion Clone</title>
            </Head>

            <header className={styles.header}>
                <h1>My Notion Clone</h1>
            </header>

            <main className={styles.main}>
                <p>Welcome to your Notion clone!</p>
                {/* Content will be added here later */}
            </main>
        </div>
    )
}
