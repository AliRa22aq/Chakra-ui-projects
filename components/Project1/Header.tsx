import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Box pb="4" as="section">
            <Box color="grey.50" bgColor="red.600" pt="90px" pb="190px" px="8">
                <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]} textAlign={["left", "left", "center"]}>Simple pricing for your business</Heading>
                <Text fontWeight="medium" fontSize={["large", "large", "2xl"]} pt="4">Plans that are carefully crafted to suit your business.</Text>
            </Box>
        </Box>
    )
}

export default Header