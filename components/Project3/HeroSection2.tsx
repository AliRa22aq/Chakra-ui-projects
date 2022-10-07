import { Box, Button, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HeroSection2 = () => {
  return (
    <HStack my="150px" mx="150px" >

        <Image src="/project3/image2.svg" w="650px" h="480px" />
        
          <VStack px="100px" textAlign="left" justifyContent="flex-start">
              <Text w="full" lineHeight="56px" fontSize="2xl" fontWeight="bold">Leading healthcare providers</Text>
              <Divider borderColor="black" w="56px" borderRadius="5px" />
              <Text fontSize="18px" fontWeight="300px" color="#7D7987"> Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</Text>
              
              <Box py="30px" w="full">
                  <Button p="30px" w="200px" bgColor="transparent" color="#458FF6" fontSize="18px" border="1.4px solid #458FF6" borderRadius="55px"> Learn more </Button>
              </Box>

          </VStack>
        
    </HStack>
  )
}

export default HeroSection2