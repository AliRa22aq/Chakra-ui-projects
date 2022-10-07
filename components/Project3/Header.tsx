import { Box, Icon, Image, HStack, Stack, Text } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
// import { Logo } from /project3/Logo.svg'

const Header = () => {
  return (
    <>
      <Box position="absolute" top="160px" left="0"> <Image src="/project3/icon1.svg" /> </Box>
      <HStack justifyContent="space-between" w="full" pl="202px" pr="192px" py="60px">
        <Image src='/project3/logo.svg' />
        <HStack spacing={10} fontSize="large" fontWeight="medium" w="full" justifyContent="flex-end"  >
          <Text color="#1F1534">Home</Text>
          <Text color="gray.400"> Find a doctor </Text>
          <Text color="gray.400">Apps</Text>
          <Text color="gray.400">Testimonials</Text>
          <Text color="gray.400">About us</Text>
        </HStack>
      </HStack>
    </>
  )
}

export default Header