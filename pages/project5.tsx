import type { GetStaticProps, NextPage } from 'next'
// import Header from '../components/Project5/Header'
import { Box } from '@chakra-ui/react'
import HeroSection from '../components/Project4/HeroSection'
import AboutMe from '../components/Project4/AboutMe'
import Skills from '../components/Project4/Skills'
import Works from '../components/Project4/Works'
import Footer from '../components/Project4/Footer'
import Header from '../components/project5/Header'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: ""
    }
  }
}

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
    </Box>
  )
}

export default Home
