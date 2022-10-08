import { Box, Button, Divider, Flex, GridItem, Icon, Image, SimpleGrid, Text, VStack, Hide } from '@chakra-ui/react'
import React from 'react'
import { Consultation, DetailsIcon, EmergencyIcon, Pharpacy, SearchIcon, TrackingIcon } from '../../public/project3/icons'


const data = [
    {
        icon: SearchIcon,
        title: "Search doctor",
        desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        icon: Pharpacy,
        title: "Search doctor",
        desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
        icon: Consultation,
        title: "Consultation",
        desc: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
        icon: DetailsIcon,
        title: "Details info",
        desc: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
        icon: EmergencyIcon,
        title: "Emergency care",
        desc: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
        icon: TrackingIcon,
        title: "Tracking",
        desc: "Track and save your medical history and health data "
    }





]

const ServiceCard = ({ icon, title, desc }: { icon: () => JSX.Element, title: string, desc: string }) => {
    return (
        <VStack
            w="350px" h="320px" p="20px"  bgColor="white"
            boxShadow="10px 40px 50px rgba(229, 233, 246, 0.4)"
            borderRadius="20px" justifyContent="flex-start"
            _hover={{ boxShadow: "10px 40px 50px rgba(168, 169, 172, 0.4)" }}
        >
            <Flex justifyContent="center" alignItems="center" h="150px"><Icon as={icon} /></Flex>
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
            <Text fontSize="16px" color="#7D7987">{desc}</Text>
        </VStack>
    )
}

const Services = () => {
    return (
        <>

            <Hide below="md">
                <Box position="absolute" top="980px" zIndex="-1"> <Image src="/project3/eclips.svg" alt="Image" /> </Box>
            </Hide>

            <VStack m={{base: "0px", md: "0px"}}>

                <VStack p={{base: "20px 40px", md: "100px 200px"}} >
                    <Text fontSize="36px"> Our services </Text>
                    <Divider borderColor="black" w="full" borderRadius="5px" />
                    
                    <Box mx="320px" mt="800px">
                        <Text color="#7D7987"  >We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</Text>
                    </Box>
                </VStack>


                <SimpleGrid 
                    w="full" 
                    columns={{base: 1, md: 3}} 
                    spacing="34px" 
                    p={{base: "auto", md: "0px 220px"}} 
                    >
                    {
                        data.map((dt, key) => {
                            return (
                                <Flex justifyContent="center" key={key}>
                                    <GridItem  >
                                        <ServiceCard icon={dt.icon} title={dt.title} desc={dt.desc} />
                                    </GridItem>
                                </Flex>
                            )
                        })
                    }
                </SimpleGrid>

                <Box pt="50px">
                    <Button p="30px" w="200px" bgColor="transparent" color="#458FF6" fontSize="18px" border="1.4px solid #458FF6" borderRadius="55px"> Learn more </Button>
                </Box>


            </VStack>
        </>
    )
}

export default Services