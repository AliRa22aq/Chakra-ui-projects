import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Heading, Text, Stack} from '@chakra-ui/react'
import Link from 'next/link'


const projects = [
  {
    name: "Project 1",
    url: "project1",
    image: "/images/1.png",
    tutorial: "https://www.chakrauiforbeginners.com/"
  }
]


const Home: NextPage = () => {
  return (
    <Box textAlign="center">

      <Heading my="20" > Chakra UI Demo Projects</Heading>

      <Stack direction="row" m="20">
        {
          projects.map((project, key) => (
            <Box cursor="pointer" key={key} 
              borderRadius="5px" overflow="hidden"
              boxShadow=" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
            >
              
              <Link href={project.url}>
                <Box>
                  <Image src={project.image} width="500px" height="300px" alt={project.name} />
                </Box>
              </Link>

              <Box p="5" bg="gray.50" _hover={{bg:"gray.200"}}>
                <a href={project.tutorial} target="_blank" rel="noreferrer">
                  <Text> Tutorial </Text>
                </a>
              </Box>
            </Box>
          ))
        }
      </Stack>

      
    </Box>
  )
}

export default Home
