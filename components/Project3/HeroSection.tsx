import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
    return (
        <HStack w="full" justifyContent="space-between" px="150px" >
            <Box w="500px" mt="150px">
                <Text fontSize="3xl" fontWeight="bold"> Virtual healthcare for you </Text>
                <Text mt="25px" fontSize="21px">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</Text>
                <Button w="200px" py="30px" mt="45px" borderRadius="55px" bgColor="#458FF6" color="#FFFFFF" fontSize="18px"> Consult today</Button>
            </Box>
            <Box mt="84px">
                <Image src="/project3/image3.svg" />
            </Box>
        </HStack>
    )
}

export default HeroSection