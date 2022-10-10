import type { NextPage, GetStaticProps } from 'next'
import Header from '../components/Project3/Header'
import { Box, Hide } from '@chakra-ui/react'
import HeroSection from '../components/Project3/HeroSection'
import Services from '../components/Project3/Services'
import HeroSection2 from '../components/Project3/HeroSection2'
import HeroSection3 from '../components/Project3/HeroSection3'
import Testiminials from '../components/Project3/Testiminials'
import Articals from '../components/Project3/Articals'
import Footer from '../components/Project3/Footer'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: ""
    }
  }
}

const Home: NextPage = () => {
  return (
    <Box textAlign="center">
      {/* <BackButton /> */}
      <Header />
      <HeroSection />
      <Services />
      <HeroSection2 />
      <HeroSection3 />
      <Hide below="md">
        <Testiminials />
      </Hide>
      <Articals />
      <Footer />
    </Box>
  )
}

export default Home
