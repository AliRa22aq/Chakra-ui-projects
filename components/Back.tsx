import React from 'react'
import { Back } from '../public/icons/Icon'
import { Icon, HStack, Stack, StackProps, Box, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const BackButton = () => {
    const router = useRouter();

    return (
        <Box position="absolute" top="5" left="10">
            <Icon as={Back} boxSize="40px" _hover={{ boxSize: "50px" }} onClick={() => router.push("/")} />
        </Box>
    )
}

export default BackButton