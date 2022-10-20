import type { GetStaticProps, NextPage } from 'next'
// import Header from '../components/Project5/Header'
import { Box, HStack, VStack } from '@chakra-ui/react'
import Header from '../components/project5/Header'
import Reels from '../components/project5/Reels'
import Feeds from '../components/project5/Feeds'
import Suggestions from '../components/project5/Suggestions'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: ""
    }
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Box bgColor="project5.darkWhite" h="100%" >
        <Header />

        <Box w="full" >
          <HStack pt="30px" w="56%" spacing="20px" m="auto" alignItems="start">

            <VStack w="470px">
              <Reels />
              <Feeds />
            </VStack>

              <Suggestions />

          </HStack>
        </Box>

      </Box>
    </>
  )
}

export default Home
