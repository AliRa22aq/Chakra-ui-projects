import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import { Container, Heading, Box, VStack, HStack, Text, Flex, Tag, Avatar } from "@chakra-ui/react";
import ChakraCarousel from "./ChakraCarousel";


// Source
// https://codesandbox.io/s/dd8vn?file=/src/theme.js:0-1359

export const Carousel = () => {

    const [data, setData] = useState([]);
    console.log("data: ", data);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

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
                {data.slice(5, 15).map((post, index) => (
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
                                textAlign="left"
                                w="full"
                                mb={2}
                            >
                                {capsFirst(post.title)}
                            </Heading>
                            <Text w="full">{capsFirst(post.body)}</Text>
                        </VStack>
                        
                        <Box w="full">
                            <Avatar boxSize="120px" />
                        </Box>

                    </Flex>
                ))}
            </ChakraCarousel>
        </Container>
    );
}

