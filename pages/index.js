import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Navigation from '../components/Navigation'
import Blog from '../components/Blog'
import { Box } from '@chakra-ui/react'

export default function Home({ brief_detail }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This blog website basically includes articles related to JavaScript, NodeJS,React, Chakra-ui, HTML, CSS and many web development technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Box width='50%' m='20px 25%'>
        {
          brief_detail.map( (blog,index) => <Blog key={index} blog={blog}/>)
        }
      </Box>
    </div>
  )
}
export async function getStaticProps(){
  const files = fs.readdirSync(path.join('_blogs'))

  const brief_detail = files.map( file => {
    const slug = file.replace('.md','')
    const markdown = fs.readFileSync(path.join('_blogs',file),'utf-8')
    const { data: frontmatter } = matter(markdown) 
    return {
      slug,
      frontmatter
    }
  })

  return {
    props : {
      brief_detail
    }
  }
}

