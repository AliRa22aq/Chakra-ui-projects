import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { reelsData } from './dummyData'
import ProfilePic from './ProfilePic'

const Reels = () => {


    const Reel = ({ url, name, status }: { url: string, name: string, status: boolean }) => (
        <Box p="10px">

            <ProfilePic imageURL={url} pixel={56} status={status} />

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