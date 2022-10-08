import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import { Container, Heading, Box, VStack, HStack, Text, Flex, Tag, Avatar } from "@chakra-ui/react";
import ChakraCarousel from "./ChakraCarousel";


// Source
// https://codesandbox.io/s/dd8vn?file=/src/theme.js:0-1359

const data = [
    {
        title: "Review 1",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 2",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 3",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 4",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 5",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 6",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        title: "Review 7",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }




]

export const Carousel = () => {

    return (
        <Container
            py={8}
            px={0}
            maxW={{
                base: "100%",
                sm: "35rem",
                md: "43.75rem",
                lg: "57.5rem",
                xl: "75rem",
                xxl: "87.5rem"
            }}
        >
            <ChakraCarousel gap={32}>
                {data.map((post, index) => (
                    <Flex
                        key={index}
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        justifyContent="space-between"
                        flexDirection="column"
                        overflow="hidden"
                        color="white"
                        bg="linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"
                        rounded={5}
                        flex={1}
                        p={5}
                    >
                        <VStack >
                            <Heading
                                fontSize={{ base: "xl", md: "2xl" }}
                                textAlign="center"
                                w="full"
                                mb={2}
                            >
                                {capsFirst(post.title)}
                            </Heading>
                            <Text w="full">{capsFirst(post.body)}</Text>
                        </VStack>
                        
                        <Box w="full" pt="20px">
                            <Avatar boxSize="120px" />
                        </Box>
                        
                    </Flex>
                ))}
            </ChakraCarousel>
        </Container>
    );
}

