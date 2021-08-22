import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from '../../utils/markdowntohtml'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import { Box, Heading, Text } from '@chakra-ui/layout'

function SingleArticle({ frontmatter, page }) {
    const { title, cover_image, date } = frontmatter
    return (
        <>
            <Navigation />
            <Box width='50%' margin='0 25%'>
                <Box>
                    <Image src={cover_image} alt={title} height={500} width={800}/>
                </Box>
                <Heading as='h1' mt='40px' mb='20px'>
                    {title}
                </Heading>
                <hr />
                <Box mb='20px'  mt='20px'>
                    <Heading as='h4' fontSize='lg'>
                        Ujjwal Singh Basnet
                    </Heading>
                    <Text color="gray.500">
                        Published on {date}
                    </Text>
                </Box>
                <hr />
                <Box dangerouslySetInnerHTML={{__html: page }} mt='40px' mb='40px'/>
            </Box>
        </>
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
