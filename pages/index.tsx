import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Heading, Text, Stack} from '@chakra-ui/react'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <Box textAlign="center">

      <Heading m="5"> Welcome </Heading>
      
      <Stack>
        <Link href="project1">
          <Text as="h3" cursor="pointer"> Project 1 </Text>
        </Link>

      </Stack>

      
    </Box>
  )
}

export default Home
