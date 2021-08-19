import Head from 'next/head'
import Image from 'next/image'
import Blog from './blog'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This blog website basically includes articles related to JavaScript, NodeJS,React, Chakra-ui, HTML, CSS and many web development technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog />
      
    </div>
  )
}
