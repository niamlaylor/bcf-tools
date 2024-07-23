import Head from 'next/head';
import { Inter } from 'next/font/google'
import axios from 'axios';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    axios.get('/api/bcf')
  });
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
