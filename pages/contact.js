import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../components/Navigation'
import { FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'


function Contact() {
    return (
        <>
            <Navigation />
            <Box width='50%' m='0 25%'>
                <Heading as='h1' fontSize='3xl'>
                    Contact Me
                </Heading>
                <Flex direction='column' mt={10}>
                    <HStack><FaTwitter /><Link href='#'> Twitter</Link></HStack>
                    <HStack><FaGithub/><Link href='#'>Github</Link></HStack>
                    <HStack><FaLinkedin /><Link href='#'>LinkedIn</Link></HStack>
                    <HStack><SiHashnode /><Link href='#'>Hashnode</Link></HStack>
                </Flex>
            </Box>
        </>
    )
}

export default Contact
