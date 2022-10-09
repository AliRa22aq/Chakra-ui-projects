import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Icon, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GitHub, ProgressLine, Scroll } from '../../public/project4/icons'




const WorkingSlide = (props: any) => {
    console.log(props)
    const { title, description, slide, tools } = props;

    return (
        <HStack  spacing="56px" id="works">
            <VStack alignItems="start" spacing="60px" >
                <Image src="/project4/wokrsPic.svg" alt="image"/>
                <a href='#getintouch'>
                    <Flex alignItems="center" cursor="pointer">
                        <Icon as={Scroll} />
                        <Text
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

            <VStack alignItems="flex-start" spacing="32px" m="500px" w="620px" pb="100px">
                <Text
                    fontWeight={700}
                    fontSize="32px"
                    lineHeight="36px"
                    fontStyle="Spartan"
                    color="project4.red"
                >
                    Works
                </Text>

                <Text
                    fontSize="24px"
                    lineHeight="170%"
                    fontStyle="Spartan"
                    color="project4.red"
                >
                    {title}
                </Text>

                <Text
                    fontWeight={400}
                    fontSize="24px"
                    lineHeight="170%"
                    fontStyle="Spartan"
                    color="project4.dark"
                >
                    {description}
                </Text>

                <Box>
                    <Icon as={GitHub} />
                </Box>

                <HStack spacing="16px">
                    {
                        tools.map((tool: any, key: any) => (
                            <Tag
                                key={key}
                                size="lg"
                                fontSize="12px"
                                fontStyle="Spartan"
                                color="project4.light"
                                bgColor="project4.gray"
                            >
                                {tool}
                            </Tag>
                        ))
                    }
                </HStack>

                <Box w="full" pt="16px">
                    <Text> {slide.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} </Text>
                    <Icon as={ProgressLine} count={slide} />
                </Box>

            </VStack>

        </HStack>

    )
}

const data = [
    {
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tools: ["ReactJS", "Solidity", "JavaScript", "HTML", "CSS"],
        slide: 1
    },
    {
        title: "Lorem Ipsum",
        description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        tools: ["ReactJS", "HTML", "CSS"],
        slide: 2
    },
    {
        title: "Lorem Ipsum",
        description: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
        tools: ["Rust", "Python"],
        slide: 3
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        tools: ["Electron", "HTML", "CSS"],
        slide: 4
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        tools: ["ReactJS", "Solidity", "JavaScript", "HTML", "CSS"],
        slide: 5
    },

]



const Works = () => {


    const [slide, setSlide] = useState(1);


    const handleIncrement = () => {
        if (slide < 5) {
            setSlide(slide + 1);
        }
    }
    const handleDecrement = () => {
        if (slide > 1) {
            setSlide(slide - 1);
        }
    }


    return (

        <>
            {/* <Box position="absolute" zIndex={-1} top="1100px" right="0px">
                <Image src="/project4/splash2.svg" />
            </Box> */}
            
            <Box my="200px">
                <HStack justifyContent="space-evenly">
                    <Flex w="120px" justifyContent="center">
                        <Icon as={ArrowLeftIcon} color="project4.dark" boxSize="50px" onClick={handleDecrement} cursor="pointer" />
                    </Flex>

                    <WorkingSlide {...data[slide - 1]} />

                    <Flex w="120px" justifyContent="center">
                        <Icon as={ArrowRightIcon} color="project4.dark" boxSize="50px" onClick={handleIncrement} cursor="pointer" />
                    </Flex>
                </HStack>
            </Box>
        </>
    )
}

export default Works