import { Box, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

function Blog({ blog }) {
    const { title, date, excerpt, cover_image } = blog.frontmatter
    return (
        <Box mb='40px'>
            <Link href={`/blogs/${blog.slug}`} style={{textDecoration:'none'}}>
                <Flex direction='row' width='100%'>
                    <Box flex='1' width='60%'>
                        <Heading as='h1'>
                            {title}
                        </Heading>
                        <Text color="gray.500">
                            {date}
                        </Text>
                        <Box fontSize="md">
                            {excerpt}
                        </Box>
                    </Box>
                    <Box padding={2} borderRadius='md' overflow='hidden'>
                        <Image src={cover_image} alt={title} height='150px' width='170px' priority={true} placeholder='blur' blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='/>
                    </Box>
                </Flex>
            </Link>
        </Box>
    )
}

export default Blog
