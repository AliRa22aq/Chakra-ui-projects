import React from 'react'
import { Icon, HStack, Stack, StackProps, Box, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { CheckIcon2, CheckIcon3, CheckIcon4 } from '../../public/icons/Icon'

interface FeatureStackProps extends StackProps {
    icon: any //ElementType
}

export const Feature = (props: FeatureStackProps) => {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing="6">
            <Icon as={icon} boxSize={["8", "8", "12"]} />
            <Text textAlign="left" fontWeight="bold" fontSize="large">{children}</Text>
        </HStack>
    )
}

const Features = () => {
    return (
        <Box maxW="1024px" m={["6", "6", "auto"]}>
            <Stack p="12" spacing="5" direction={["column", "column", "row"]}>
                <Feature icon={CheckIcon2}>  30 days money back Guarantee </Feature>
                <Feature icon={CheckIcon3}> No setup fees 100% hassle-free </Feature>
                <Feature icon={CheckIcon4}> No monthly subscription Pay once and for all </Feature>
            </Stack>
        </Box>
    )
}

export default Features