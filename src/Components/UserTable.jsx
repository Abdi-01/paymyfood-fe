import {
    AlertDialog,
    AlertDialogBody, AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Tbody, Td, Text, Tr, useDisclosure, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { API_URL } from '../helper';




function UserTable(props) {
    const modalDelete = useDisclosure()
    const modalEdit = useDisclosure()
    const cancelRef = React.useRef()
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const toast = useToast();



    const btnDelete = async () => {
        await axios.post(`${API_URL}/user/deleteuser`, {
            email: props.email
        });
        props.getDataUser();
        modalDelete.onClose();
    }

    const btnEdit = async () => {
        await axios.patch(`${API_URL}/user/edituser`, {
            username: !username ? props.username : username,
            email: !email ? props.email : email,
            roleId: !role ? parseInt(props.roleId) : parseInt(role)
        });
        props.getDataUser();
        modalEdit.onClose();
        toast({
            position: 'top',
            title: `Edit Success`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    }

    return (
        <Tbody>
            <Tr>
                <Td>{props.idx}</Td>
                <Td>{props.username}</Td>
                <Td>{props.email}</Td>
                <Td>{props.roleId == 1 ? 'Admin' : 'Cashier'}</Td>
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
                                Edit Existing User
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel color={"#EEEEEE"}>
                                        Username
                                    </FormLabel>
                                    <Input
                                        ref={initialRef}
                                        placeholder="Enter username"
                                        _hover={""}
                                        bgColor="#222831"
                                        variant={"link"}
                                        onChange={(e) => setUsername(e.target.value)}
                                        defaultValue={props.username}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel color={"#EEEEEE"}>
                                        Email
                                    </FormLabel>
                                    <Input
                                        ref={initialRef}
                                        placeholder="Enter email"
                                        _hover={""}
                                        bgColor="#222831"
                                        variant={"link"}
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={props.email}
                                        disabled='true'
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel color={"#EEEEEE"}>
                                        Role
                                    </FormLabel>
                                    <Select placeholder='Select option'
                                        onChange={(e) => setRole(e.target.value)}
                                        defaultValue={props.roleId}>
                                        <option value='1'>Admin</option>
                                        <option value='2' >Cashier</option>
                                    </Select>
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

export default UserTable;