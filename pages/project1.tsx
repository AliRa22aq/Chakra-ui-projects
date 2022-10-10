import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Project1/Header'
import styles from '../styles/Home.module.css'
import { Box, Heading, Text } from '@chakra-ui/react'
import Pricing from '../components/Project1/Pricing'
import Features from '../components/Project1/Features'
import BackButton from '../components/Back'

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
      <BackButton />
      <Header />
      <Pricing />
      <Features />
    </Box>
  )
}

export default Home
