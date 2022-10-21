import { Flex, Box } from '@chakra-ui/react'
import React from 'react'

const ProfilePic = ({imageURL, pixel, status = false }: {imageURL: string, pixel: number, status?: boolean}) => {
  return (
    <Flex
    boxSize={status ? `${pixel + 6}px`: `${pixel}px`}
    borderRadius={50}
    backgroundImage="linear-gradient(#DE0046, #F7A34B)"
    justifyContent="center"
    alignItems="center"
    cursor="pointer"
  >
    <Flex
      boxSize={status ? `${pixel + 3}px`: `${pixel}px`}
      borderRadius={50}
      background="white"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        boxSize={`${pixel}px`}
        borderRadius={50}
        backgroundImage={`url(${imageURL})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      />

    </Flex>

  </Flex>
)
}

export default ProfilePic