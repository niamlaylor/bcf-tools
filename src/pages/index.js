import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>BCF Tools | Home</title>
        <meta name="description" content="Home of all tools BCF to make our lives easier." />
      </Head>
      New app!
    </main>
  )
}
