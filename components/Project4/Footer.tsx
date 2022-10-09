import { Box, HStack, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

{/* <Image src="/project4/footBackground.svg" alt="Footer"/> */ }
const Footer = () => {
    return (

        <Box h="80vh" overflow="hidden" backgroundImage={"/project4/footBackground.svg"}>


            <Box mx="100px" mt="10vh" border="0px solid yellow" background="white">

                <HStack h="50vh">

                    <Box
                        w="600px"
                        fontSize="38px"
                        fontWeight={600}
                        lineHeight="46px"
                        px="60px"
                    >
                        Drop me a line. I would like to hear from you.
                    </Box>

                    <VStack 
                        w="full" 
                        px="38px" 
                        alignItems="start"
                        spacing="24px"
                        
                        >
                        <Text
                            color="project4.red"
                            fontWeight={700}
                            fontSize="32px"
                            lineHeight="36px"
                        >
                            Get in touch
                        </Text>

                        <Input placeholder='Name' rounded="false"/>
                        <Input placeholder='Email' rounded="false"/>
                        <Textarea placeholder='Message' h="125px" rounded="false"/>

                    </VStack>

                </HStack>

            </Box>
            <Box w="full" h="200px" background="black" > </Box>

        </Box>

    )
}

export default Footer