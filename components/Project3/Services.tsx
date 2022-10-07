import { Box, Button, Divider, Flex, GridItem, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
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
            w="350px" p="40px" h="360px" bgColor="white"
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
            <Box position="absolute" top="980px" zIndex="-1"> <Image src="/project3/eclips.svg" /> </Box>

            <VStack my="100px">

                <VStack px="200px" py="100px" >
                    <Text fontSize="36px"> Our services </Text>
                    <Divider h="2px" bgColor="black" w="56px" borderRadius="5px" mt="24px" mb="32px" />
                    <Box mx="320px" mt="800px">
                        <Text color="#7D7987"  >We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</Text>
                    </Box>
                </VStack>


                <SimpleGrid w="full" columns={3} spacing="34px" px="220px" mt="80px">
                    {
                        data.map((dt) => {
                            return (
                                <GridItem>
                                    <ServiceCard icon={dt.icon} title={dt.title} desc={dt.desc} />
                                </GridItem>
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