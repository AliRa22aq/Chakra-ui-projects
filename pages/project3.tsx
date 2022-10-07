import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Project3/Header'
import styles from '../styles/Home.module.css'
import { Box, Heading, Text } from '@chakra-ui/react'
import Pricing from '../components/Project1/Pricing'
import Features from '../components/Project1/Features'
import BackButton from '../components/Back'
import HeroSection from '../components/Project3/HeroSection'
import Services from '../components/Project3/Services'


const Home: NextPage = () => {
  return (
    <Box textAlign="center">
      <BackButton />
      <Header />
      <HeroSection />
      <Services />
    </Box>
  )
}

export default Home
