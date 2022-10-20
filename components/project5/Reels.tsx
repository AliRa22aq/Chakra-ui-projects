import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Reels = () => {

    const reelsData = [
        {
            url: "https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-1/263273711_10158351180047623_7045526683278197383_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH2lIfpbz8RD_mk8tPSoNRp6dXcOl3Y_4Dp1dw6Xdj_gIOPDo_zyeA9b90z-t49RwDSahvIrpM-8WLpGwp-gIBF&_nc_ohc=wbBq4Mewc9UAX8vq9Yk&_nc_ht=scontent.flhe7-2.fna&oh=00_AT8xdjFemOon__lOAIFDFPIGzSNruUNeY9iR1zs9MOX7Iw&oe=6355DCE3",
            name: "Zia_Khan"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/268291303_4502523613200861_7795942138729581556_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGr1Beu8J4O8Vp9Xi_5Ozx1BM3J0C6AmIIEzcnQLoCYgv5SJfdM5M16zlXGFKALEurba8j5rUugNQvCsGpKWYhx&_nc_ohc=AQO3eq3WL9oAX9_5luG&_nc_ht=scontent.flhe7-1.fna&oh=00_AT8Aj0n5PFHn05BohkXNEgYUwWSbPpSqcHzQKNQfRI60Og&oe=63568AE7",
            name: "Startup_Pakistan"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/49864560_1965864593462672_4486298906396721152_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEL9O6DkQxOgC9WThwqUqq23vAYd-7PsXfe8Bh37s-xd0sTn7bEu1zhqdNUbPg4z04caN5MEqoz-si8Lq28m-Q2&_nc_ohc=Y-bmv8CqqgkAX9MIdun&_nc_ht=scontent.flhe7-1.fna&oh=00_AT9jwLKGQbZdA2T1pd6yyATMoT2wDLGyhCnxDWsbY7eqGA&oe=63754CE5",
            name: "Parhlo"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/125323523_1799339156882951_4475541380478554171_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEnHHkOhvgiQSdEyu7XbLAC8lPBr_cHkFfyU8Gv9weQV5p12PumOt5MxDnJNVf2SaQTvyWHSkdup3GEW9nnLLP-&_nc_ohc=RPAzSZ5KskcAX85DTkl&_nc_ht=scontent.flhe7-1.fna&oh=00_AT_GaS1ksO6zRQnvz32sxqGTcoOsTkOaYTxCAGi1y6h3Ig&oe=6375B66B",
            name: "Cricket_Pakistan"
        },
        {
            url: "https://scontent.flhe7-2.fna.fbcdn.net/v/t31.18172-8/14054515_1537325399626731_7147189199324966566_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEuFV1U9f93DyTG_cHZlGMvCt4Xwk4HZ0oK3hfCTgdnSnv6UWDK8wNipXnLH1SgelCdIWNtHExW6zb_YMyWBvLg&_nc_ohc=igBOOc6KuwIAX_1Atvb&_nc_ht=scontent.flhe7-2.fna&oh=00_AT82kU3BpbP3KrqU_iKbqHxM3a0JmukUAEhoLeLvZJLiVQ&oe=63758ED9",
            name: "Saylani_Welfare"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/277779979_5575186639161329_3813112241875895379_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHFLSkoOqV7bU34xjwh5YwQIn8_I0vtyr4ifz8jS-3KvukhM1GwYuVnGekpZaMGZrPjyjz7q3QAAtTdve4UDdZK&_nc_ohc=gmHm5AnlYI8AX9Ms2sa&_nc_ht=scontent.flhe7-1.fna&oh=00_AT_6LNRp0BteNf6ILoWh3oFwXkpcWEsDK9e5P-7aVVYnQA&oe=6355C252",
            name: "Codeacademy"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/283361716_7732182116851919_3150696924305021059_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIOqvlTh4_41tzD488fzk9aCnS8gLqwOBoKdLyAurA4PbaN9eU37SPwTfm2h8stcpAyITNwYstOXH9TDTkg_1_&_nc_ohc=59dJLAAv5K8AX8ZUsW4&tn=tWokXBAw6qZZAYZq&_nc_ht=scontent.flhe7-1.fna&oh=00_AT8bEzYxIM-yQrS8QPVgvfBt9TQN5aLqBCqpb1SpOb2aIw&oe=63554488",
            name: "Wise"
        },
        {
            url: "https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-1/290449576_10229994760712782_7437927587231334884_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFUkEoktO97zslXLMhV3TDhHaH9q_A2VOUdof2r8DZU5YP7INTo6ACpNNLka_FhN-aTevZmbmDwGGOGLlJL4tMV&_nc_ohc=Hud9rDaUIPYAX-KmtKQ&_nc_ht=scontent.flhe7-2.fna&oh=00_AT85d39JwvPiS3zzkDoCPtAFt5zOySKXWl_YO2FXmHTzcw&oe=6356604D",
            name: "Rehan_Allahwala"
        },
        {
            url: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/289059526_423496786315206_6713503864944786347_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeETX925wtf9KLK1bQ3BVpZFLdX2c7BkAVEt1fZzsGQBUUpg43TNgN25hrTqjYsqFhY3GovRhOVRHhU38amR1bMn&_nc_ohc=Vfxw562J9HsAX8V2zMR&_nc_ht=scontent.flhe7-1.fna&oh=00_AT8BL-Ua9RRNQ38bUBECMpilRXekwLOYABYW4dkA3BgPFA&oe=6354FD2D",
            name: "Entrepreneur"
        }

    ]

    const Reel = ({url, name}: {url: string, name: string}) => (
        <Box 
            p="10px" 
            >
            <Flex 
                boxSize="66px"
                borderRadius={50}
                overflow="hidden"
                borderWidth="3px"
                borderStyle="solid"
                // borderColor= "linear(#DE0046, #F7A34B)" 
                // style={{borderColor: "linear-gradient(#DE0046, #F7A34B)"}}
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    boxSize="56px"
                    backgroundImage={`url("${url}")`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius={50}
                    overflow="hidden"
                />
            </Flex>
            <Text
                w="66px"
                color="project5.gray"
                py="5px"
                fontSize="sm"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                textAlign="center"
            >
                {name}
            </Text>
        </Box>
    )

    return (
        <Flex
            w="full"
            h="120px"
            borderColor="project5.borderColor"
            borderWidth="1px"
            borderStyle="solid"
            bgColor="project5.white"
            borderRadius="10px"
            alignItems="center"
            px="10px"
            overflowY="scroll"
            sx={
                {
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            }
        >
            {
                reelsData.map((reel, index) => (
                    <Reel {...reel} key={index} />
                ))
            }

        </Flex>
    )
}

export default Reels