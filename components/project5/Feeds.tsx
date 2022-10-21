import { Box, Image, Flex, HStack, Icon, Text, VStack, Input, Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentIcon, Heart2Icon, MoreOptionsIcon, SaveIcon, ShareIcon, SmileIcon } from '../../public/project5/icons'
import { feedData } from './dummyData';
import ProfilePic from './ProfilePic';

type Feed = {
  picture: string;
  name: string;
  location: string;
  post: string;
  likes: number;
  status: boolean
}

const Feeds = () => {



  const FeedHeader = (feed: Feed) => (
    <HStack w="full" p="10px 15px" h="58px" border="0px solid red" justifyContent="space-between">

      <HStack border="0px solid black">

        <ProfilePic imageURL={feed.picture} pixel={35} status={feed.status} />

        <VStack color="project5.black" spacing="-5px" fontSize="14px" textAlign="start" border="0px solid black">
          <Text w="full" fontWeight="bold" cursor="pointer">{feed.name}</Text>
          <Text w="full" >{feed.location}</Text>
        </VStack>

      </HStack>

      <Box border="0px solid black" cursor="pointer">
        <Icon as={MoreOptionsIcon} />
      </Box>
    </HStack>
  )

  const FeedImage = (feed: Feed) => {
    return (
      <Box>
        <Image src={feed.post} fit="cover" alt="post" />
      </Box>
    )
  }

  const FeedBody = (feed: Feed) => {
    const [liked, setLiked] = useState(false);
    return (
      <>
        <Box p="10px 15px">
          <HStack justifyContent="space-between" >
            <HStack spacing="20px" alignContent="center" border="0px solid red">
              <Box cursor="pointer" >
                <Icon boxSize="24px" onClick={() => setLiked(!liked) }>
                  <Heart2Icon fill={liked} />
                </Icon>
              </Box>
              <Box cursor="pointer" >
                <Icon as={CommentIcon} />
              </Box>
              <Box cursor="pointer" >
                <Icon as={ShareIcon} />
              </Box>
            </HStack>
            <Box cursor="pointer" >
              <Icon as={SaveIcon} />
            </Box>
          </HStack>
          <Text pt="10px" color="project5.black"> {feed.likes} likes </Text>
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
          _hover={{ borderColor: "transparent" }}
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