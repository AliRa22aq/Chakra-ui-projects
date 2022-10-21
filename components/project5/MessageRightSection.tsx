import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Share2 } from '../../public/project5/icons'

const MessageRightSection = () => {
  return (
    <Flex w="full" h="full" border="0px solid red" justifyContent="center" alignItems="center">
      <VStack   >
        <Icon as={Share2} />
        <Text color="project5.black" fontWeight={300} fontSize="22px">Your Messages</Text>
        <Text color="project5.gray" fontSize="14px">Send private photos and messages to a friend or group.</Text>
        <Button bgColor="project5.blue" color="project5.white" size="sm" p="6px 9px" fontSize="14px">Send Message</Button>
      </VStack>
    </Flex>
  )
}

export default MessageRightSection