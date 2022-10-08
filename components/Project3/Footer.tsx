import React from 'react'
import { Box, Hide, Image, HStack, VStack, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <>
            <Box
                w="full"
                px={{ base: "00px", md: "120px" }}
                background="linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);">

                {/* <Hide below="md">
                    <Box top="500px" left="0px" zIndex="-1"> <Image src="/project3/icon2.svg" alt="Image" /> </Box>
                </Hide> */}

                <HStack
                    h={{base: "250px", md: "350px"}}
                    fontSize={{base: "small", md: "medium"}}
                    w="full"
                    color="white"
                >

                    <VStack spacing={5} h={{base: "100px", md: "200px"}}>
                        <Flex w="full" justifyContent={{ base: "center", md: "start" }}>
                            <Image src="/project3/logo2.svg" alt="Ali" />
                        </Flex>
                        <Text textAlign={{ base: "center", md: "left" }} >Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</Text>
                        <Text textAlign={{ base: "center", md: "left" }} w="full">©Trafalgar PTY LTD 2020. All rights reserved</Text>
                    </VStack>

                    <Hide below="md">
                        <HStack justifyContent="space-evenly" w="full" >
                            <VStack spacing={5} h="220px" >
                                <Text textAlign="left" w="full" fontWeight="bold">Company</Text>
                                <Text textAlign="left" w="full">About</Text>
                                <Text textAlign="left" w="full">Testimonials</Text>
                                <Text textAlign="left" w="full">Find a doctor</Text>
                                <Text textAlign="left" w="full">Apps</Text>
                            </VStack>

                            <VStack spacing={5} h="220px" textAlign="left" >
                                <Text textAlign="left" w="full" fontWeight="bold">Region</Text>
                                <Text textAlign="left" w="full">Indonesia</Text>
                                <Text textAlign="left" w="full">Singapore</Text>
                                <Text textAlign="left" w="full">Hongkong</Text>
                                <Text textAlign="left" w="full">Canada</Text>
                            </VStack>

                            <VStack spacing={5} h="220px" textAlign="left" >
                                <Text textAlign="left" w="full" fontWeight="bold">Help</Text>
                                <Text textAlign="left" w="full">Help center</Text>
                                <Text textAlign="left" w="full">Contact support</Text>
                                <Text textAlign="left" w="full">Instructions</Text>
                                <Text textAlign="left" w="full">How it works</Text>
                            </VStack>
                        </HStack>
                    </Hide>

                </HStack>
            </Box>
        </>

    )
}

export default Footer