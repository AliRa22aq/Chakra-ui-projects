import { DownloadIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Hide, HStack, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { DiscoverIcon, HeartIcon, HomeIcon, MessangerIcon, PlusIcon, ProfileIcon } from '../../public/project5/icons';

const Header = () => {

    const [isInputActive, setIsInputActive] = useState(false);
    const [inputvalue, setInputValue] = useState<string>();

    const handleInput = (text: string | undefined) => {
        setInputValue(text);
    }

    return (
        <Box
            border="1px solid red"
            borderColor="#D9D9D9"
            bgColor="project5.white"
        >

            <HStack
                px={{ base: "5px", md: "10px" }}
                justifyContent="space-between"
                alignItems="center"
                border="0px solid red"
                w={{ base: "100%", md: "100%", lg: "60%" }}
                mx={{ base: "auto", md: "auto" }}
                py="12px"

            >

                <HStack border="0px solid red">
                    <Image src="/project5/instaLogo.svg" alt="logo" />
                    <Box pb="10px">
                        <Image w="12px" src="/project5/expand.png" alt="expand" />
                    </Box>
                </HStack>


                <Hide below="md">
                    <HStack border="0px solid red">
                        <Box w="325px" >
                            <InputGroup color="#8E8E8E" w="260px">

                                {
                                    !isInputActive && (
                                        <InputLeftElement color="gray.300" fontSize="1.2em">
                                            <Icon as={SearchIcon} />
                                        </InputLeftElement>
                                    )
                                }

                                <Input
                                    h="35px"
                                    fontWeight={!inputvalue ? "light" : "normal"}
                                    color={!inputvalue ? "#8E8E8E" : "black"}
                                    bgColor="#EFEFEF"
                                    placeholder="Search"
                                    onChange={(e) => handleInput(e.target.value)}
                                    onFocus={(e) => {
                                        console.log(e);
                                        setIsInputActive(true)
                                    }}
                                    onBlur={(e) => {
                                        console.log(e);
                                        if (!inputvalue) {
                                            setIsInputActive(false)
                                        }
                                    }}
                                />

                                {
                                    isInputActive && (
                                        <InputRightElement onClick={() => handleInput("Hello")} >
                                            <Icon as={SmallCloseIcon} />
                                        </InputRightElement>
                                    )
                                }

                            </InputGroup>
                        </Box>
                        <HStack spacing={5} alignItems="center" border="0px solid red">
                            <Icon as={HomeIcon} />
                            <Icon as={MessangerIcon} />
                            <Icon as={PlusIcon} />
                            <Icon as={DiscoverIcon} />
                            <Icon as={HeartIcon} />
                            <Box
                                border="1px solid gray"
                                w="26px"
                                h="26px"
                                borderRadius={25}
                                backgroundImage={`url("/project5/profilePic.png")`}
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                            />
                        </HStack>
                    </HStack>
                </Hide>


                <Hide above='sm'>
                    <Icon as={HeartIcon} />
                </Hide>


            </HStack>

        </Box>

    )
}

export default Header