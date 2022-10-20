import { Box, Image, Flex, HStack, Icon, Text, VStack, Input, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentIcon, Heart2Icon, HeartIcon, MoreOptionsIcon, SaveIcon, ShareIcon, SmileIcon } from '../../public/project5/icons'


type Feed = {
  picture: string;
  name: string;
  location: string;
  post: string;
}

const Feeds = () => {

  const feedData = [
    {
      picture: "https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-1/263273711_10158351180047623_7045526683278197383_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH2lIfpbz8RD_mk8tPSoNRp6dXcOl3Y_4Dp1dw6Xdj_gIOPDo_zyeA9b90z-t49RwDSahvIrpM-8WLpGwp-gIBF&_nc_ohc=wbBq4Mewc9UAX8vq9Yk&_nc_ht=scontent.flhe7-2.fna&oh=00_AT8xdjFemOon__lOAIFDFPIGzSNruUNeY9iR1zs9MOX7Iw&oe=6355DCE3",
      name: "Zia_Khan",
      location: "Lahore",
      post: "/project5/posts/post1.png"
    },
    {
      picture: "https://avatars.githubusercontent.com/u/1311782?v=4",
      name: "Zeeshan_Hanif",
      location: "Karachi",
      post: "/project5/posts/post2.png"
    },
    {
      picture: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/17/full/1642421472-9151.jpg",
      name: "imran_khan",
      location: "Bani Gala",
      post: "/project5/posts/post3.png"
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Asif_Ali_Zardari_with_Obamas_%28cropped%29.jpg/220px-Asif_Ali_Zardari_with_Obamas_%28cropped%29.jpg",
      name: "Zardari",
      location: "Hell",
      post: "/project5/posts/post4.png"
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/commons/4/46/PrimeMinisterNawazSharif.jpg",
      name: "Nawaz_Sharif",
      location: "Hell",
      post: "/project5/posts/post5.png"
    }




  ]

  const FeedHeader = (feed: Feed) => (
    <HStack w="full" p="10px 15px" h="58px" border="0px solid red" justifyContent="space-between">

      <HStack border="0px solid black">

        <Flex
          boxSize="40px"
          borderRadius={50}
          overflow="hidden"
          borderWidth="2px"
          borderStyle="solid"
          background="white"
          // borderColor= "linear(#DE0046, #F7A34B)" 
          // style={{borderColor: "linear-gradient(#DE0046, #F7A34B)"}}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            boxSize="32px"
            borderRadius={50}
            backgroundImage={`url(${feed.picture})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            overflow="hidden"
          />
        </Flex>

        <VStack color="project5.black" spacing="-5px" fontSize="14px" textAlign="start" border="0px solid black">
          <Text w="full" fontWeight="bold">{feed.name}</Text>
          <Text w="full" >{feed.location}</Text>
        </VStack>

      </HStack>

      <Box border="0px solid black">
        <Icon as={MoreOptionsIcon} />
      </Box>
    </HStack>
  )

  const FeedImage = (feed: Feed) => {
    console.log(feed.post)

    return (
      <Box>
        <Image src={feed.post} fit="cover" alt="post" />
      </Box>
    )
  }
    
  const FeedBody = (feed: Feed) => {
    return (
      <>
        <Box p="10px 15px">
          <HStack justifyContent="space-between" >
            <HStack spacing="20px" alignContent="center" border="0px solid red">
              <Icon as={Heart2Icon} />
              <Icon as={CommentIcon} />
              <Icon as={ShareIcon} />
            </HStack>
            <Icon as={SaveIcon} />
          </HStack>
          <Text pt="10px" color="project5.black"> 13 likes </Text>
          <Text py="10px" color="#8e8e8e" fontSize="x-small"> 22 HOURS AGO </Text>
        </Box>
        <Divider />
      </>

    )
  }

  const FeedComment = () => {
    const [comment, setComment] = useState("");
    return (
      <HStack border="0px solid red" p="10px 15px">
        <Icon as={SmileIcon} />
        <Input
          placeholder='Add a comment...'
          px="-20px"
          borderColor="transparent"
          focusBorderColor="transparent"
          _hover={{borderColor:"transparent"}}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Text color={comment ? "blue.500" : "blue.200"} cursor="pointer">Post</Text>
      </HStack>
    )
  }

  const Feed = (feed: Feed) => (
    <Box
      w="full"
      borderColor="project5.borderColor"
      borderWidth="1px"
      borderStyle="solid"
      bgColor="project5.white"
      borderRadius="10px"
      alignItems="center"
    >
      <FeedHeader {...feed} />
      <FeedImage {...feed} />
      <FeedBody {...feed} />
      <FeedComment />
    </Box>
  )


  return (
    <>
    {
      feedData.map((feed, key) => (
        <Feed {...feed} key={key} />
      ))
    }
    </>
  )
}

export default Feeds