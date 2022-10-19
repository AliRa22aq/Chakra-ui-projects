import type { GetStaticProps, NextPage } from 'next'
// import Header from '../components/Project5/Header'
import { Box, HStack, VStack } from '@chakra-ui/react'
import HeroSection from '../components/Project4/HeroSection'
import AboutMe from '../components/Project4/AboutMe'
import Skills from '../components/Project4/Skills'
import Works from '../components/Project4/Works'
import Footer from '../components/Project4/Footer'
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
    <Box bgColor="project5.darkWhite" h="100%" >
      <Header />
      
      <Box w="full" >
        <HStack pt="30px" w="50%" spacing="20px" m="auto" alignItems="start">

          <VStack w="470px">
            <Reels />
            <Feeds />
          </VStack>

          <Box w="320px"  border="1px solid red">
            <Suggestions />
          </Box>

        </HStack>
      </Box>

    </Box>
  )
}

export default Home
