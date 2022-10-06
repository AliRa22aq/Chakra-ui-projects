import React from 'react'
import { Divider, Image, Flex, Box, Heading, Text, VStack, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react'

const RightSection = () => {
    const {toggleColorMode} = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    const color = useColorModeValue("gray.600", "gray.400")

    return (
        <VStack w="full" h="full" spacing={{base: 5, md: 10}} p={{base: 5, md: 10}} alignItems="flex-start" bg={bgColor}>

            <VStack spacing={{base: 0.5, md: 3}} alignItems="flex-start" >
                <Heading size="2xl">Your cart</Heading>
                <Flex>
                    <Text>
                        If price is too hard on your eyes,
                        <Text as="span" ml="2px" onClick={toggleColorMode} fontWeight="bold" cursor="pointer">try changing the theme.</Text>
                    </Text>
                </Flex>
            </VStack>
            
            <HStack justifyContent="space-between" w="full" alignItems="center">

                <HStack spacing={5}>
                    <Image src='/project2/1.png' boxSize={{base: "75px", md:"100px"}} />

                    <VStack spacing={-2} alignItems="flex-start">
                        <Text fontSize={{base: "medium", md: "2xl"}} fontWeight="bold">Penny board</Text>
                        <Text fontSize={{base: "medium", md: "2xl"}} color={color}>PNYCOMP27541</Text>
                    </VStack>

                </HStack>

                <Text fontWeight="bold"> $23.00 </Text>

            </HStack>

            <VStack spacing={4} w="full" alignItems="flex-start" >

                <HStack justifyContent="space-between" w="full">
                    <Text color={color}> Subtotal </Text>
                    <Text  fontWeight="bold"> $119.00 </Text>
                </HStack>
                <HStack justifyContent="space-between" w="full">
                    <Text color={color}> Shipping </Text>
                    <Text fontWeight="bold"> $19.99 </Text>
                </HStack>
                <HStack justifyContent="space-between" w="full">
                    <Text color={color}> Taxes (estimated) </Text>
                    <Text  fontWeight="bold"> $23.00 </Text> 
                </HStack>

                <Divider />

                <HStack justifyContent="space-between" w="full">
                    <Text color={color}> Total </Text>
                    <Text fontWeight="bold" fontSize="2xl"> $162.79 </Text>
                </HStack>

            </VStack>



        </VStack>
    )
}

export default RightSection