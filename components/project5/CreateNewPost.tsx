import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, Text, VStack, Icon, Flex } from '@chakra-ui/react'
import React, { Dispatch } from 'react'
import { GitHub } from '../../public/project4/icons'
import { NewPostIcon } from '../../public/project5/icons'

const CreateNewPost = ({ isOpen, onClose, setActive }:
    {
        isOpen: boolean,
        onClose: () => void,
        setActive: Dispatch<React.SetStateAction<{
            home: boolean;
            message: boolean;
            newPost: boolean;
        }>>
    }
) => {

    const handleClose = () => {
        if (typeof window != "undefined") {
            console.log("window: ", window.location.pathname)
            if (window.location.pathname === "/project5/inbox") {
                setActive({ home: false, message: true, newPost: false })
            }
            else if (window.location.pathname === "/project5"){
                setActive({ home: true, message: false, newPost: false })
            }
        }
        onClose();
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} > 
                <ModalOverlay />
                <ModalContent minW="530px" minH="550px" mt="100px" border="0px solid red">
                    <ModalCloseButton position="fixed" color="white" size="md" />
                    <Text
                        textAlign="center"
                        py="10px"
                        fontWeight={600}
                        fontSize="16px"
                        color="project5.black"
                        borderWidth="0px 0px 1px 0px"
                        borderStyle="solid"
                        borderColor="project5.borderColor"
                    >
                        Create new post
                    </Text>

                    <ModalBody >
                        <Flex w="full" pt="150px" border="0px solid red" justifyContent="center" alignItems="end">
                            <VStack spacing="20px">
                                <Icon as={NewPostIcon} />
                                <Text color="project5.black" fontWeight={300} fontSize="22px">Drag photos and videos here</Text>
                                <Button bgColor="project5.blue" color="project5.white" size="sm" p="6px 9px" fontSize="14px">Select from computer</Button>
                            </VStack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateNewPost