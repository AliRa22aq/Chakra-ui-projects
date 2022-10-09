import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <Box position="absolute" zIndex={-1}>
                <Image src="/project4/splash1.svg" alt="image" />
            </Box>
            <Box position="absolute" zIndex={-1} top="15px" left="82px">
                <Image src="/project4/whitespot.svg" alt="image" />
            </Box>

            <Box id="home">
                <Box w="600px" h="120px" pt="10px" pl="90px">
                    <HStack p="40px" spacing="64px" >
                        <a href="#home">
                            <Text color="project4.red" fontWeight="bold" cursor="pointer">Home</Text>
                        </a>
                        <a href="#aboutme">
                            <Text color="project4.gray" cursor="pointer">About</Text>
                        </a>
                        <a href="#skills">
                            <Text color="project4.gray" cursor="pointer">Skills</Text>
                        </a>
                        <a href="#works">
                            <Text color="project4.gray" cursor="pointer">Projects</Text>
                        </a>
                        <a href="#getintouch">
                            <Text color="project4.gray" cursor="pointer">Contact</Text>
                        </a>
                    </HStack>

                </Box>

            </Box>

        </>
    )
}

export default Header