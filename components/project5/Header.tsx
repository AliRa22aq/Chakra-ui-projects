import { DownloadIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Hide, HStack, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DiscoverIcon, HeartIcon, HomeIcon, MessangerIcon, PlusIcon, ProfileIcon } from '../../public/project5/icons';
import CreateNewPost from './CreateNewPost';

const Header = () => {

    const [isInputActive, setIsInputActive] = useState(false);
    const [inputvalue, setInputValue] = useState<string>();
    const router = useRouter();

    const handleInput = (text: string | undefined) => {
        setInputValue(text);
    }


    const LogoComp = () => (
        <HStack border="0px solid red">
        <Box cursor="pointer">
            <Image src="/project5/instaLogo.svg" alt="logo" />
        </Box>
        <Box pb="10px" cursor="pointer">
            <Image w="12px" src="/project5/expand.png" alt="expand" />
        </Box>
    </HStack>

    )

    const InputComp = () => (
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
                        <InputRightElement onClick={() => handleInput("Hello")} cursor="pointer" >
                            <Icon as={SmallCloseIcon} />
                        </InputRightElement>
                    )
                }

            </InputGroup>
        </Box>
    )

    const IconsComp = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [active, setActive] = useState({
            home: true,
            message: false,
            newPost: false
        })

        const handleActive = () => {
            setActive({ home: false, message: false, newPost: true })
        }

        useEffect(() => {
            if (typeof window != "undefined") {
                console.log("window: ", window.location.pathname)
                if (window.location.pathname === "/project5/inbox") {
                    setActive({ home: false, message: true, newPost: false })
                }
                else if (window.location.pathname === "/project5"){
                    setActive({ home: true, message: false, newPost: false })
                }
            }
        }, [])



        return (
            <HStack spacing={5} alignItems="center" border="0px solid red">

                <Box cursor="pointer" onClick={() => router.push("/project5")}>
                <Icon boxSize="24px">
                        <HomeIcon fill={active.home} />
                    </Icon>
                </Box>

                <Box cursor="pointer" onClick={() => router.push("/project5/inbox")}>
                    <Icon boxSize="24px">
                        <MessangerIcon fill={active.message} />
                    </Icon>
                </Box>

                <Box cursor="pointer" onClick={onOpen}>
                <Icon boxSize="24px" onClick={handleActive}>
                        <PlusIcon fill={active.newPost} />
                    </Icon>

                    <CreateNewPost isOpen={isOpen} onClose={onClose} setActive={setActive} />
                </Box>

                <Box cursor="pointer">
                    <Icon as={DiscoverIcon} />
                </Box>

                <Box cursor="pointer">
                    <Icon as={HeartIcon} />
                </Box>

                <Box
                    cursor="pointer"
                    border="1px solid gray"
                    w="26px"
                    h="26px"
                    borderRadius={25}
                    backgroundImage={`url("/project5/profilePic.png")`}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                />
            </HStack>

        )
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
                h="8vh"
            >

                <LogoComp />

                <Hide below="md">
                    <HStack border="0px solid red">
                        <InputComp />
                        <IconsComp />
                    </HStack>
                </Hide>

                <Hide above='sm'>
                    <Box cursor="pointer">
                        <Icon as={HeartIcon} />
                    </Box>
                </Hide>

            </HStack>
        </Box>

    )

}

export default Header