import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from '../../utils/markdowntohtml'
// import markdownToHtml from '../../utils/markdowntohtml'


function SingleArticle({ frontmatter, page }) {
    return (
        <div dangerouslySetInnerHTML={{__html: page }} />
    )
}
export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('_blogs'))
    const paths = files.map( file => {
      const slug = file.replace('.md','')  
      return {
        params : {
            slug
        }
      }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const {slug} = params
    const fileName = slug + '.md'
    const file = fs.readFileSync(path.join('_blogs',fileName),'utf-8')
    const { data: frontmatter, content } = matter(file)
    const page = await markdownToHtml(content)
    return {
        props : {
            frontmatter,
            page
        }
    }
}

export default SingleArticle
