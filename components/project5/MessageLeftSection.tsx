import { Box, Divider, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { dropDownIcon, NewMessageIcon } from '../../public/project5/icons'
import { messagesData } from './dummyData'
import ProfilePic from './ProfilePic'



const MessageLeftSection = () => {

  const Header = () => (
    <HStack
      w="full" py="15px" spacing={0} color="project5.black" fontSize="16px" fontWeight={600}
      borderColor="project5.borderColor" borderStyle="solid" borderWidth="0px 0px 1px 0px "
    >
      <HStack w="85%" border="0px solid red" justifyContent="center" alignItems="center">
        <Text> alirazzaq </Text>
        <Box cursor="pointer">
          <Icon as={dropDownIcon} />
        </Box>
      </HStack>
      <Box w="15%" border="0px solid red" cursor="pointer">
        <Icon as={NewMessageIcon} />
      </Box>
    </HStack>
  )

  const Title = () => (
    <HStack justifyContent="space-between" p="10px 20px ">
      <Text fontSize="16px" fontWeight={600} color="project5.black">Messages</Text>
      <Text fontSize="14px" fontWeight={600} color="project5.blue" cursor="pointer">1 Request</Text>
    </HStack>
  )

  type Message =  {
    image: string;
    name: string;
    time: string;
}

  const Message = (props: Message) => (
    <HStack p="10px 20px " cursor="pointer">
      <ProfilePic imageURL={props.image} pixel={54} status={false} />
      <VStack spacing="-3px">
        <Text fontSize="14px" fontWeight={400} color="project5.black" w="full">{props.name}</Text>
        <Text fontSize="14px" fontWeight={400} color="project5.gray" w="full">{props.time}</Text>
      </VStack>
    </HStack>
  )




  return (
    <Box w="full" border="0px solid black" h="100%" overflowY="scroll" overflowX="hidden">
      <Header />
      <Title />
      {
        messagesData.map((message, key) => (
          <Message {...message} key={key} />
        ))
      }
    </Box>
  )
}

export default MessageLeftSection