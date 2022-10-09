import { Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GitHub, Instagram, LinkedIn, Scroll, Twitter } from '../../public/project4/icons'

const HeroSection = () => {
  return (
    <VStack mt="200px" ml="120px" spacing="150px" alignItems="start" >

                
        <VStack w="full" alignItems="start" spacing="32px">
            <Text 
                as ="p"
                fontWeight={800} 
                fontSize="48px" 
                lineHeight="42.56px" 
                fontStyle="Spartan"
                color="project4.light"
                textTransform="uppercase"
                > 
                    Ali Razzaq 
            </Text>
            <Text
                // fontWeight={800} 
                fontSize="24px" 
                lineHeight="27px" 
                fontStyle="Spartan"
                color="project4.light"
                >
                    Engineer + Front-end Developer
            </Text>
            <HStack spacing="18px">
                <Icon as={Twitter}  />
                <Icon as={GitHub}  />
                <Icon as={LinkedIn}  />
                <Icon as={Instagram}  />
            </HStack>
        </VStack>

          <a href='#aboutme'>
              <Flex alignItems="center" cursor="pointer" >
                  <Icon as={Scroll} />
                  <Text
                      ml="20px"
                      fontWeight={500}
                      fontSize="large"
                      lineHeight="13px"
                      fontStyle="Spartan"
                      color="project4.gray"
                  >
                      Scroll
                  </Text>
              </Flex>
          </a>


    </VStack>
  )
}

export default HeroSection