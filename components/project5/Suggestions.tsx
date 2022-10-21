import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { followData } from './dummyData'
import ProfilePic from './ProfilePic'

const Suggestions = () => {



  const FollowComp = ({ picture, name, followBy }: any) => (
    <HStack w="full" mt="10px" border="0px solid red" justifyContent="space-between">

      <HStack border="0px solid black" spacing="10px">

        <ProfilePic imageURL={picture} pixel={32} status={false} />

        <VStack color="#262626" spacing="-2px" textAlign="start" >
          <Text w="full" fontWeight="bold" color="262626" fontSize="14px" cursor="pointer">{name}</Text>
          <Text w="full" color="#8E8E8E" fontSize="12px">Followed by  {followBy}</Text>
        </VStack>

      </HStack>

      <Text fontSize="12px" color="#0095F6" cursor="pointer"> Follow </Text>
    </HStack>
  )


  return (
    <Box w="320px" p="20px 10px" border="0px solid black">

      <HStack w="full" border="0px solid red" justifyContent="space-between">
        <HStack border="0px solid black" spacing="16px">

          <ProfilePic imageURL="/project5/profilePic.png" pixel={56} status={false} />

          <VStack color="project5.black" spacing="-3px" fontSize="14px" textAlign="start" border="0px solid black">
            <Text w="full" fontWeight="bold" color="262626" cursor="pointer">alira22aq</Text>
            <Text w="full" color="#8E8E8E" >Ali Razzaq</Text>
          </VStack>

        </HStack>
        <Text fontSize="12px" color="#0095F6" cursor="pointer"> Switch </Text>
      </HStack>

      <HStack justifyContent="space-between" my="10px">
        <Text fontSize="14px" fontWeight={12} color="#8E8E8E"> Suggestions For You </Text>
        <Text fontSize="12px" fontWeight="bold" color="#262626" cursor="pointer"> See All </Text>
      </HStack>


      <Box >
        {
          followData.map((follow, key) => (
            <FollowComp {...follow} key={key} />
          ))
        }
      </Box>




    </Box>
  )
}

export default Suggestions