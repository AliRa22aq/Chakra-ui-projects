import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/project5/Header'
import MessageLeftSection from '../../components/project5/MessageLeftSection'
import MessageRightSection from '../../components/project5/MessageRightSection'

const inbox = () => {
  return (
    <>
      <Box bgColor="project5.darkWhite">
        <Header />

        <Box w="full" border="0px solid red" >

          <HStack
            m="auto"
            my="15px"
            w="60%"
            spacing={0}
            borderWidth="1px"
            borderRadius="3px"
            borderStyle="solid"
            borderColor="project5.borderColor"
            bgColor="project5.white"
          >

            <Box
              w="40%"
              h="85vh"
              borderColor="project5.borderColor"
              borderStyle="solid"
            >
              <MessageLeftSection />
            </Box>

            <Box
              w="60%"
              h="87vh"
            >
              <MessageRightSection />
            </Box>

          </HStack>

        </Box>

      </Box>
    </>
  )
}

export default inbox