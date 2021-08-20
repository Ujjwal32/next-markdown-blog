import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../components/Navigation'

function Contact() {
    return (
        <>
            <Navigation />
            <Box width='50%' m='0 25%'>
                <Heading as='h1' fontSize='lg'>
                    Contact Me
                </Heading>
                <Flex>
                    <Link href='#'>Twitter</Link>
                    <Link href='#'>Github</Link>
                    <Link href='#'>LinkedIn</Link>
                    <Link href='#'>Hashnode</Link>
                </Flex>
            </Box>
        </>
    )
}

export default Contact
