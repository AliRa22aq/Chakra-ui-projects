import { Box, Image, HStack, Flex, Text, Hide  } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <>
        <Hide below="md">
            <Box position="absolute" top="160px" left="0"> <Image src="/project3/icon1.svg" /> </Box>
        </Hide>


        <HStack
          w="full"
          px={{base: "10px", md: "100px"}} 
          py={{ base: "20px", md: "40px" }}
           
        >
        <Flex w="full" justifyContent={{base: "center", md: "start"}} >
          <Image src='/project3/logo.svg' alt="Image" />
        </Flex>

        <Hide below="md">
          <HStack
            spacing={{ base: 0, md: 10 }}
            fontSize={{ base: "xs", md: "large" }}
            fontWeight="medium"
            w="full"
            justifyContent="flex-end">
            <Text color="#1F1534">Home</Text>
            <Text color="gray.400"> FindAdoctor </Text>
            <Text color="gray.400">Apps</Text>
            <Text color="gray.400">Testimonials</Text>
            <Text color="gray.400">About</Text>
          </HStack>
        </Hide>
        </HStack>
    </>
  )
}

export default Header