import React from 'react'
import { Icon, HStack, Stack, StackProps, Box, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { CheckIcon } from '../../public/icons/Icon'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack {...rest} as="li" spacing="5" alignItems="start">
            <Icon as={CheckIcon} boxSize="22px" fill="red.500" />
            <Text textAlign={["left", "left", "center"]}>{children}</Text>
        </HStack>
    )
}


const Pricing = () => {
    return (
        <Box mx="6">
            <Box maxWidth="994px" m="auto" mt="-140px" borderRadius="4" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
                <Flex direction={["column", "column", "row"]}>
                    <Box p="60px" color="#171923" bg="#f0eafb" _hover={{bg:"#cfc0eb"}}>
                        <Text fontWeight="extrabold" fontSize="24px" > Premium PRO</Text>
                        <Heading fontWeight="extrabold" fontSize={["3xl","3xl","60px"]} >$329</Heading>
                        <Text fontWeight="medium" fontSize="18px" mt="4">billed just once</Text>
                        <Button colorScheme={"red"} size="lg" w="280px" color="gray.50" mt="8">Get Started</Button>
                    </Box>

                    <Box p="60px" fontSize="18px" fontWeight="normal" color="#2D3748" bg="white">
                        <Text textAlign="left">Access these features when you get this pricing package for your business.</Text>
                        <Stack as="ol" spacing="5" pt="6" >
                            <ListItem > International calling and messaging API </ListItem>
                            <ListItem> Additional phone numbers </ListItem>
                            <ListItem> Automated messages via Zapier </ListItem>
                            <ListItem> 24/7 support and consulting </ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Pricing