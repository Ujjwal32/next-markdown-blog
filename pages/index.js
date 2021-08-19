import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ brief_detail }) {
  console.log(brief_detail)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This blog website basically includes articles related to JavaScript, NodeJS,React, Chakra-ui, HTML, CSS and many web development technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
  console.log(files)
  return {
    props : {
      brief_detail
    }
  }
}

