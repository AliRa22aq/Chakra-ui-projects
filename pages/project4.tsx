import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Header from '../components/Project4/Header'
import styles from '../styles/Home.module.css'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Pricing from '../components/Project1/Pricing'
import Features from '../components/Project1/Features'
import BackButton from '../components/Back'
import HeroSection from '../components/Project4/HeroSection'
import AboutMe from '../components/Project4/AboutMe'
import Skills from '../components/Project4/Skills'
import Works from '../components/Project4/Works'
import Footer from '../components/Project4/Footer'


const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </Box>
  )
}

export default Home
