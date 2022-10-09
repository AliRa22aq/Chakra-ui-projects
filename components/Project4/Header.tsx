import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <Box position="absolute" zIndex={-1}>
                <Image src="/project4/splash1.svg" alt="image"/>
            </Box>
            <Box position="absolute" zIndex={-1} top="15px" left="82px">
                <Image src="/project4/whitespot.svg" alt="image"/>
            </Box>

            <Box>
                <Box w="600px" h="120px"  pt="10px" pl="90px">
                    <HStack p="40px" spacing="64px" >
                        <Text color="project4.red" fontWeight="bold" cursor="pointer">Home</Text>
                        <Text color="project4.gray" cursor="pointer">About</Text>
                        <Text color="project4.gray" cursor="pointer">Skills</Text>
                        <Text color="project4.gray" cursor="pointer">Contact</Text>
                    </HStack>

                </Box>

            </Box>

        </>
    )
}

export default Header