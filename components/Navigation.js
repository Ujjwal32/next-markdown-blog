import React from 'react'
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs'
import { Box, Button, Flex, Heading, Link, Spacer, useColorMode } from '@chakra-ui/react';

function Navigation() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box p={12}>
            <Flex  height='20vh' direction='column'>
            <Flex justify='space-between'>
                <Heading as='h2'>
                    Ujjwal's Blog
                </Heading>
                <Button onClick={toggleColorMode}>
                    { colorMode === 'light' ? <BsMoon /> : <FiSun />}
                </Button>
            </Flex>
            <Spacer />
            <Flex direction='row' width='50%'>
                <Link href='/'>
                    Home
                </Link>
                <Spacer maxWidth={4}/>
                <Link href='/contact'>
                    Contact 
                </Link>
            </Flex>
        </Flex>
        <hr></hr>
        </Box>
    )
}

export default Navigation
