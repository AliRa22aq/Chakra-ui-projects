import { Box, CircularProgress, CircularProgressLabel, Flex, GridItem, HStack, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Scroll } from '../../public/project4/icons'

const AboutMe = () => {

    const skillData = [
        { name: "C", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 99 },
        { name: "SQL", level: 70 },
        { name: "ReactJS", level: 80 },
        { name: "Python", level: 80 },
    ]

    const SkillLevel = (props: { name: string, level: number }) => {
        return (
            <Box w="100px" >
                <CircularProgress value={props.level} size='100px' color="project4.dark" >
                    <CircularProgressLabel fontSize="12px" fontWeight={600} color="project4.gray">
                        {props.level}%
                    </CircularProgressLabel>
                </CircularProgress>
                <Text textAlign="center" fontSize="14px" fontWeight={600} color="project4.dark">{props.name}</Text>
            </Box>
        )
    }

    return (
        <>
            <HStack m="200px 120px" spacing="56px" id="skills">

                <VStack alignItems="start" spacing="32px" w="620px">
                    <Text
                        w="full"
                        fontWeight={700}
                        fontSize="32px"
                        lineHeight="36px"
                        fontStyle="Spartan"
                        color="project4.red"

                    >
                        Skills
                    </Text>
                    <Text
                        fontWeight={400}
                        fontSize="24px"
                        lineHeight="170%"
                        fontStyle="Spartan"
                        color="project4.dark"
                    >
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                    </Text>

                    <HStack pt="16px" w="full" justifyContent="space-between">
                        {
                            skillData.slice(0, 4).map((skill, key) => (
                                <GridItem key={key}>
                                    <SkillLevel name={skill.name} level={skill.level} />
                                </GridItem>
                            ))
                        }
                    </HStack>

                    <HStack pt="0px" w="full" justifyContent="space-evenly">
                        {
                            skillData.slice(4).map((skill, key) => (
                                <GridItem key={key}>
                                    <SkillLevel name={skill.name} level={skill.level}  />
                                </GridItem>
                            ))
                        }
                    </HStack>

                    <a href='#works'> 
                        <Flex alignItems="center" pt="80px" cursor="pointer">
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

                <VStack alignItems="end" pl="50px">
                    <Image src="/project4/skillsPoster.svg" alt="image"/>
                </VStack>

            </HStack>
        </>
    )
}

export default AboutMe