import { Box, Button, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
    return (
        <Stack 
            w="full" 
            direction={{base:"column-reverse", md: "row"}} 
            justifyContent="space-between" 
            px={{base: "20px", md:"150px"}} 
            py={{base: "20px", md:"50px"}} 
            >

            <Box 
                w={{base: "full", md:"500px"}}
                p={{base: "40px 20px", md:"100px 50px"}}
                >
                <Text fontSize="3xl" fontWeight="bold"> Virtual healthcare for you </Text>
                <Text mt="25px" fontSize="21px">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</Text>
                <Button w="200px" py="30px" mt="45px" borderRadius="55px" bgColor="#458FF6" color="#FFFFFF" fontSize="18px"> Consult today</Button>
            </Box>

            <Box mt="84px">
                <Image src="/project3/image3.svg" alt="Image"/>
            </Box>

        </Stack>
    )
}

export default HeroSection