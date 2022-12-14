import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { SimpleGrid, GridItem, Box, Heading, Text, Stack, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link'


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: ""
    }
  }
}



const projects = [
  {
    name: "Project 1",
    url: "project1",
    image: "/images/1.png",
    tutorial: "https://www.chakrauiforbeginners.com/"
  },
  {
    name: "Project 2",
    url: "project2",
    image: "/images/2.png",
    tutorial: "https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106"
  },
  {
    name: "Project 3",
    url: "project3",
    image: "/images/3.png",
    tutorial: "https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page?node-id=1%3A2"
  },
  {
    name: "Project 4",
    url: "project4",
    image: "/images/4.png",
    tutorial: "https://www.figma.com/file/ndy5zafHSrwrTMz0vE3Sba/Developer-Portfolio-(Community)?node-id=50%3A832"
  },
  {
    name: "Project 5",
    url: "project5",
    image: "/images/5.png",
    tutorial: "https://www.figma.com/file/ddzp2xhE1C733RYzPS9JzH/Instagram-UI-Clone-(Community)?node-id=0%3A1"
  },


]


const Home: NextPage = () => {
  const bgColor = useColorModeValue("gray.50", "alphaWhite.200");
  const bgColorHover = useColorModeValue("gray.200", "red.500");


  return (
    <Box textAlign="center" px={{base: 5, md: 10}}>

      <Heading my={{base: 10, md: 20}} > Next JS + Chakra UI + Web 3.0 Portfolio </Heading>

      <SimpleGrid spacing={10} columns={{base: 1, md: 3}} p={{base: 0, md: 10}}>
        {
          projects.map((project, key) => (
            <Box cursor="pointer" key={key} 
              borderRadius="5px" overflow="hidden"
              boxShadow=" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
            >
              
              <Link href={project.url}>
                <Box>
                  <Image src={project.image} width="600px" height="320px" alt={project.name} />
                </Box>
              </Link>

              <Box p="5" bg={bgColor} _hover={{bg: bgColorHover}}>
                <a href={project.tutorial} target="_blank" rel="noreferrer">
                  <Text > Tutorial </Text>
                </a>
              </Box>
            </Box>
          ))
        }
      </SimpleGrid>

      
    </Box>
  )
}

export default Home
