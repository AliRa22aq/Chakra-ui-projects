import { Box } from '@chakra-ui/react'
import React from 'react'


const Feed = () => (
  <Box
    w="full"
    h="500px"
    borderColor="project5.borderColor"
    borderWidth="1px"
    borderStyle="solid"
    bgColor="project5.white"
    borderRadius="10px"
    alignItems="center"
    px="10px"
  >
    Feed
  </Box>

)


const Feeds = () => {
  return (
    <>
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </>
  )
}

export default Feeds