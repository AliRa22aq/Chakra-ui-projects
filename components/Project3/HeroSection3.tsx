import { Box, Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HeroSection3 = () => {
  return (
    <HStack my="150px" mx="150px" >

        
          <VStack px="100px" textAlign="left" justifyContent="flex-start">
              <Text w="full"   lineHeight="40px" fontSize="3xl" fontWeight="bold">Download our mobile apps</Text>
              <Divider borderColor="black" w="full" borderRadius="5px" />
              <Text fontSize="18px" fontWeight="300px" color="#7D7987"> Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</Text>
              
              <Box py="30px" w="full">
                  <Button p="30px" w="200px" bgColor="transparent" color="#458FF6" fontSize="18px" border="1.4px solid #458FF6" borderRadius="55px"> Download </Button>
              </Box>

          </VStack>

          <Image src="/project3/image3.svg" alt="Image" w="650px" h="480px" />
        
    </HStack>
  )
}

export default HeroSection3