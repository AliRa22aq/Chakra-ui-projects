import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Reels = () => {

    const reelsData = [
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "helloasdfasdfasdf"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        },
        {
            url: "https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png",
            name: "hello"
        }

    ]

    const Reel = ({url, name}: {url: string, name: string}) => (
        <Box 
            p="10px" 
            >
            <Flex 
                boxSize="66px"
                borderRadius={50}
                overflow="hidden"
                borderWidth="3px"
                borderStyle="solid"
                // borderColor= "linear(#DE0046, #F7A34B)" 
                // style={{borderColor: "linear-gradient(#DE0046, #F7A34B)"}}
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    boxSize="56px"
                    backgroundImage={`url("${url}")`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius={50}
                    overflow="hidden"
                />
            </Flex>
            <Text
                w="66px"
                color="project5.gray"
                py="5px"
                fontSize="sm"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                textAlign="center"
            >
                {name}
            </Text>
        </Box>
    )

    return (
        <Flex
            w="full"
            h="120px"
            borderColor="project5.borderColor"
            borderWidth="1px"
            borderStyle="solid"
            bgColor="project5.white"
            borderRadius="10px"
            alignItems="center"
            px="10px"
            overflowY="scroll"
            sx={
                {
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            }
        >
            {
                reelsData.map((reel, index) => (
                    <Reel {...reel} key={index} />
                ))
            }

        </Flex>
    )
}

export default Reels