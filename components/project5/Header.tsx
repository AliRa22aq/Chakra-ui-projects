import { DownloadIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Hide, HStack, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HomeIcon, MessangerIcon, ProfileIcon } from '../../public/project5/icons';

const Header = () => {

    const [isInputActive, setIsInputActive] = useState(false);
    const [inputvalue, setInputValue] = useState<string>();

    const handleInput = (text: string | undefined) => {
        setInputValue(text);
    }

    // &#xF002; 
    // gray.100

    return (
        <Box
            border="1px solid red"
            borderColor="#EFEFEF"
            py="10px"
        >

        <HStack
            px={{ base: "5px", md:"10px" }}
            justifyContent="space-between"
            alignItems="center"
            border="0px solid red"
            w={{ base: "100%", md:"100%", lg:"60%"}}
            mx={{base: "auto", md:"auto"}}
        >

            <HStack  border="0px solid red">
                <Image src="/project5/instagramLogo.svg" alt="logo" h="30px" />
                <Box pb="10px">
                    <Image w="12px" src="/project5/expand.png" />
                </Box>
            </HStack>


            <Hide below="md">
                <HStack border="0px solid red">
                    <Box w="325px" >
                        <InputGroup color="#8E8E8E" w="260px">

                            {
                                !isInputActive && (
                                    <InputLeftElement color="gray.300" fontSize="1.2em" children={<Icon as={SearchIcon} />} />
                                )
                            }

                            <Input
                                h="35px"
                                fontWeight={!inputvalue ? "light" : "normal"}
                                color={!inputvalue ? "#8E8E8E" : "black"}
                                // fontWeight="light"
                                bgColor="#EFEFEF"
                                // _focus={{ color: "black", fontWeight:"bold" }}
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
                                    <InputRightElement children={<Icon as={SmallCloseIcon} />} onClick={() => handleInput("Hello")} />
                                )
                            }

                        </InputGroup>
                    </Box>
                    <HStack spacing={5} alignItems="center" border="0px solid red">
                        <Icon as={HomeIcon} />
                        <Icon as={MessangerIcon} />
                        <Flex alignItems="center" boxSize="24px">
                            <Image src="/project5/plus.png" />
                        </Flex>
                        <Flex alignItems="center" boxSize="24px">
                            <Image src="/project5/adventures.png" />
                        </Flex>
                        <Flex alignItems="center" boxSize="36px" w="24px">
                            <Image src="/project5/heart.png" />
                        </Flex>
                        <Flex alignItems="center">
                            <Image src="/project5/profile.png" w="30px" />
                        </Flex>
                    </HStack>
                </HStack>
            </Hide>
        
            
            <Hide above='sm'>
                <Flex alignItems="center" boxSize="36px" w="24px">
                    <Image src="/project5/heart.png" />
                </Flex>
            </Hide>


        </HStack>

        </Box>

    )
}

export default Header