import { Box, HStack, Text, VStack } from '@chakra-ui/react'

const Suggestions = () => {

  const followData = [
    {
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEk6w5UYVkNxRrLXtvPeDNtmc_RPFk5q59PMTwgvA&s",
      name: "John_Snow",
      followBy: "ned_stark",
    },
    {
      picture: "https://pbs.twimg.com/media/E9udtUmWEAIo7o5.png",
      name: "Sana",
      followBy: "Jenna",
    },
    {
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJ6QjBChD6-OjldNZbBRrpOU14Wh04FRJW8Ozm4BGLV09W7IcAYz2QKqYf4Y8M24Gxh4&usqp=CAU",
      name: "Patrick",
      followBy: "Ray",
    },
    {
      picture: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
      name: "Alina",
      followBy: "Neha",
    },
    {
      picture: "https://i.quotev.com/e72wyjmuzkgq.jpg",
      name: "Umar",
      followBy: "Asad",
    }



  ]

  const FollowComp = ({picture, name, followBy}: any) => (
    <HStack w="full" mt="10px" border="0px solid red" justifyContent="space-between">

      <HStack border="0px solid black" spacing="10px">

          <Box
            boxSize="32px"
            borderRadius={50}
            backgroundImage={`url(${picture})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            overflow="hidden"
          />

        <VStack color="#262626" spacing="-2px"  textAlign="start" >
        <Text w="full" fontWeight="bold" color="262626" fontSize="14px">{name}</Text>
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
          <Box
            border="1px solid gray"
            boxSize="56px"
            borderRadius={50}
            backgroundImage={`url(/project5/profilePic.png)`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            overflow="hidden"
          />

          <VStack color="project5.black" spacing="-3px" fontSize="14px" textAlign="start" border="0px solid black">
            <Text w="full" fontWeight="bold" color="262626">alira22aq</Text>
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
            <FollowComp {...follow} key={key}/>
          ))
        }
      </Box>




    </Box>
  )
}

export default Suggestions