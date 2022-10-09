import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Icon, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { GitHub, Heart, Instagram, LinkedIn, Twitter } from '../../public/project4/icons'

{/* <Image src="/project4/footBackground.svg" alt="Footer"/> */ }
const Footer = () => {
    return (

        <Box h="100vh" overflow="hidden" backgroundImage={"/project4/footBackground.svg"} id="getintouch">
            <Image src="/project4/footerSplash.svg" bottom={0} right={10} position="absolute" />
            <a href='#home'>
                <Icon as={ArrowUpIcon} position="absolute" bottom="50px" left="50px" boxSize="50px" />
            </a>

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

                        <Input placeholder='Name' rounded="false" />
                        <Input placeholder='Email' rounded="false" />
                        <Textarea placeholder='Message' h="125px" rounded="false" />

                    </VStack>

                </HStack>
            </Box>

            <Box w="full" h="40vh" background="black" >


                <VStack
                    spacing="32px"
                    color="project4.gray"
                    fontSize="18px"
                    fontWeight={600}
                    lineHeight="20px"
                    justifyContent="flex-end"
                    h="full"
                    py="60px"

                >
                    <Box>
                        <Text as="span"> Design credits: </Text>
                        <a
                            href="https://www.figma.com/file/ndy5zafHSrwrTMz0vE3Sba/Developer-Portfolio-(Community)?node-id=50%3A2475"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "underline", marginLeft: "5px" }}
                        >
                            athira_tj
                        </a>


                    </Box>

                    <HStack>
                        <Icon as={Twitter} />
                        <Icon as={GitHub} />
                        <Icon as={LinkedIn} />
                        <Icon as={Instagram} />
                    </HStack>

                    <Flex alignItems="center">
                        <Text mr="10px">All Rights Reserved 2022 Ali  </Text> <Icon as={Heart} />
                    </Flex>

                </VStack>
            </Box>

        </Box>

    )
}

export default Footer