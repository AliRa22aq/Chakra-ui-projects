import { Box, Button, Flex, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Scroll } from '../../public/project4/icons'

const AboutMe = () => {
    return (
        <>
            <Box position="absolute" zIndex={-1} top="1100px" right="0px">
                <Image src="/project4/splash2.svg" alt="image"/>
            </Box>

            <HStack m="250px 120px" spacing="56px" id="aboutme">
                <VStack alignItems="start" spacing="60px" >
                    <Image src="/project4/profilepic.svg" alt="image"/>
        
                    <a href='#skills'>
                        <Flex alignItems="center" cursor="pointer">
                            <Icon as={Scroll} />
                            <Text

                                as="span"
                                ml="20px"
                                fontWeight={500}
                                fontSize="large"
                                lineHeight="13px"
                                fontStyle="Spartan"
                                color="project4.gray"


                            >
                                Scroll
                            </Text>
                        </Flex>
                    </a>
                </VStack>

                <VStack alignContent="flex-start" spacing="32px" m="500px" w="620px">
                    <Text
                        w="full"
                        fontWeight={700}
                        fontSize="32px"
                        lineHeight="36px"
                        fontStyle="Spartan"
                        color="project4.red"

                    >
                        About Me
                    </Text>
                    <Text
                        fontWeight={400}
                        fontSize="24px"
                        lineHeight="170%"
                        fontStyle="Spartan"
                        color="project4.dark"
                    >
                        An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.
                    </Text>

                    <Box w="full" pt="16px">
                        <Button
                            bgColor="project4.dark"
                            borderRadius="4px"
                            size="lg"
                            fontWeight={500}
                            fontSize="16px"
                            lineHeight="130%"
                            fontStyle="Spartan"
                            color="project4.light"
                        >
                            Download CV
                        </Button>
                    </Box>

                </VStack>
            </HStack>
        </>
    )
}

export default AboutMe