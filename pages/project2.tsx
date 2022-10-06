import type { NextPage } from 'next'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import BackButton from '../components/Back'
import LeftSection from '../components/Project2/LeftSection'
import RightSection from '../components/Project2/RightSection'

const Home: NextPage = () => {
  return (
    <Box>
      <BackButton />
      <Container maxW={"container.xl"} >
        <Flex h={{base: "auto", md: "100vh"}} py="20" direction={{base: "column-reverse", md: "row"}}>
          <LeftSection />
          <RightSection />
        </Flex>
      </Container>
    </Box>
  )
}

export default Home
