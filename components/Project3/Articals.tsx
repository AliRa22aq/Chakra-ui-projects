import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, GridItem, Icon, Image, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react'
import { Arrow } from '../../public/project3/icons';

const data = [
  {
    image: "/project3/artical1.svg",
    title: "Disease detection, check up in the laboratory",
    desc: "In this case, the role of the health laboratory is very important to do a disease detection..."
  },
  {
    image: "/project3/artical2.svg",
    title: "Herbal medicines that are safe for consumption",
    desc: "Herbal medicine is very widely used at this time because of its very good for your health..."
  },
  {
    image: "/project3/artical3.svg",
    title: "Natural care for healthy facial skin",
    desc: "A healthy lifestyle should start from now and also for your skin health. There are some..."
  },
]

const ArticalCard = ({ image, title, desc }: { image: string, title: string, desc: string }) => {
  return (
    <VStack
      w="350px" h="512px" bgColor="white"
      boxShadow="10px 40px 50px rgba(229, 233, 246, 0.4)"
      borderRadius="20px" overflow="hidden" justifyContent="flex-start"
      _hover={{ boxShadow: "10px 40px 50px rgba(168, 169, 172, 0.4)" }}
    >
      <Image src={image} alt="Image" h="246" w="370" />

      <VStack p="30px">
        <Text textAlign="left" fontSize="21px" fontWeight="bold">{title}</Text>
        <Text textAlign="left" fontSize="16px" color="#7D7987">{desc}</Text>

        <HStack alignItems="center" spacing={3} pt="25px" w="full" >
          <Text color="#4089ED" >Read more</Text> <Box as="span" pt="3px"> <Icon as={Arrow} /> </Box>
        </HStack>

      </VStack>


    </VStack>
  )
}


const Articals = () => {

  return (
    <>
      <Box position="absolute" top="4170px" left="1057px" zIndex="-1"> <Image src="/project3/eclips2.svg" alt="Image"/> </Box>
      <Box position="absolute" top="4200" left="170px" zIndex="-1"> <Image src="/project3/icon2.svg" alt="Image"/> </Box>

      <VStack my="100px">

        <VStack px="200px" py="100px" >
          <Text fontSize="36px"> Check out our latest article </Text>
          <Divider h="2px" bgColor="black" w="56px" borderRadius="5px" mt="24px" mb="32px" />
          <Box mx="320px" mt="800px">
            <Text color="#7D7987"  >We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</Text>
          </Box>
        </VStack>


        <SimpleGrid w="full" columns={3} spacing="34px" px="220px" mt="80px">
          {
            data.map((dt, key) => {
              return (
                <GridItem key={key}>
                  <ArticalCard image={dt.image} title={dt.title} desc={dt.desc} />
                </GridItem>
              )
            })
          }
        </SimpleGrid>

        <Box pt="50px">
          <Button p="30px" w="200px" bgColor="transparent" color="#458FF6" fontSize="18px" border="1.4px solid #458FF6" borderRadius="55px"> View all </Button>
        </Box>


      </VStack>
    </>

  )
}

export default Articals