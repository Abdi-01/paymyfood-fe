import {
    AlertDialog,
    AlertDialogBody, AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Tbody, Td, Text, Tr, useDisclosure, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { API_URL } from '../helper';

function CategoryTable(props) {
    const modalDelete = useDisclosure();
    const modalEdit = useDisclosure();
    const cancelRef = React.useRef();
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [category, setCategory] = useState('');
    const toast = useToast();


    const btnEdit = async () => {
        try {
            let edit = await axios.patch(`${API_URL}/category/editcategory`, {
                category: !category ? props.category : category,
                id: props.categoryId
            });
            if (edit.data.success) {
                toast({
                    position: 'top',
                    title: `Edit Success`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
                props.getDataCategory();
                modalEdit.onClose();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const btnDelete = async () => {
        try {
            await axios.patch(`${API_URL}/category/deletecategory`, {
                id: props.categoryId
            });
            props.getDataCategory();
            modalDelete.onClose();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Tbody>
            <Tr>
                <Td>{props.idx}</Td>
                <Td>{props.category}</Td>
                <Td>
                    {/* BUTTON EDIT */}
                    <Button
                        bgColor="#00ADB5"
                        onClick={modalEdit.onOpen}
                        mr='4'
                    >
                        <Text  >Edit</Text>
                    </Button>

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={modalEdit.isOpen}
                        onClose={modalEdit.onClose}
                    >
                        <ModalOverlay />
                        <ModalContent bgColor="#393E46" color={"#EEEEEE"}>
                            <ModalHeader color="#00adb5">
                                Edit Existing Category
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>

                                <FormControl mt={4}>
                                    <FormLabel color={"#EEEEEE"}>
                                        Category
                                    </FormLabel>
                                    <Input
                                            ref={initialRef}
                                            placeholder="Enter new category name"
                                            _hover={""}
                                            bgColor="#222831"
                                            variant={"link"}
                                            onChange={(e) => setCategory(e.target.value)}
                                            defaultValue={props.category}
                                        />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    bgColor="#00ADB5"
                                    color="#EEEEEE"
                                    _hover=""
                                    mr={3}
                                    type='button'
                                    onClick={btnEdit}
                                >
                                    Save
                                </Button>
                                <Button
                                    bgColor="#EEEEEE"
                                    color="#00ADB5"
                                    _hover=""
                                    onClick={modalEdit.onClose}
                                >
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    {/* BUTTON DELETE */}
                    <Button colorScheme='red' onClick={modalDelete.onOpen}>
                        Delete User
                    </Button>

                    <AlertDialog
                        isOpen={modalDelete.isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={modalDelete.onClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                    Delete
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Are you sure? You can't undo this action afterwards.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={modalDelete.onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='red' onClick={btnDelete} ml={3}>
                                        Delete
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>

                </Td>
            </Tr>
        </Tbody>
    );
}

export default CategoryTable;