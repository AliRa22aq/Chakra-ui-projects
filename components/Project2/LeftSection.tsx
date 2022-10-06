import React from 'react'
import { useColorMode, useBreakpointValue, Checkbox, Button, Select, SimpleGrid, GridItem, FormControl, FormLabel, Input, Heading, Text, VStack } from '@chakra-ui/react'

const LeftSection = () => {
    const colSpan = useBreakpointValue({base: 2, md: 1});
    const {toggleColorMode} = useColorMode();

  return (
    <VStack  w="full" h="full" spacing={{base: 5, md: 10}} p={{base: 5, md: 10}} alignItems="flex-start" borderColor="gray.300" borderWidth="1px" >
        
        <VStack spacing={{base: 0.5, md: 3}} alignItems="flex-start" >
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
        </VStack>

          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full" >

              <GridItem colSpan={colSpan}>
                  <FormControl>
                      <FormLabel> First Name </FormLabel>
                      <Input placeholder='Ali' />
                  </FormControl>
              </GridItem>

              <GridItem colSpan={colSpan}>
                  <FormControl>
                      <FormLabel> Last Name </FormLabel>
                      <Input placeholder='Razzaq' />
                  </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                  <FormControl>
                      <FormLabel> Address </FormLabel>
                      <Input placeholder='Gulrberg' />
                  </FormControl>
              </GridItem>

              <GridItem colSpan={colSpan}>
                  <FormControl>
                      <FormLabel> City </FormLabel>
                      <Input placeholder='Faisalabad' />
                  </FormControl>
              </GridItem>

              <GridItem colSpan={colSpan}>
                  <FormControl>
                      <FormLabel> Country </FormLabel>
                      <Select>
                        <option> Pakistan </option>
                        <option> India </option>
                        <option> United States of America </option>
                      </Select>
                  </FormControl>
              </GridItem>
              
              <GridItem colSpan={2}>
                <Checkbox colorScheme="brand" defaultChecked>Ship to the billing address.</Checkbox>
              </GridItem>
              
              
              <GridItem colSpan={2}>
                  {/* <Button size="lg" w="full">Place order</Button> */}
                  <Button colorScheme="brand" onClick={toggleColorMode} size="lg" w="full"> Change Theme </Button>

              </GridItem>


          </SimpleGrid>


    </VStack>
  )
}

export default LeftSection