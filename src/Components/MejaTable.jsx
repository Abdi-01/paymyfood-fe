import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Tbody,
    Td,
    Text,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { API_URL } from "../helper";

function MejaTable(props) {
    const modalDelete = useDisclosure();
    const modalEdit = useDisclosure();
    const cancelRef = React.useRef();
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [table, setTable] = useState("");
    const toast = useToast();

    const btnDelete = async () => {
        await axios.patch(`${API_URL}/table/deletetable`, {
            id: props.id,
        });
        props.getAllTable();
        modalDelete.onClose();
    };

    const btnEdit = async () => {
        await axios.patch(`${API_URL}/table/edittable`, {
            table: !table ? props.table : table,
            id: props.id
        });
        props.getAllTable();
        modalEdit.onClose();
        toast({
            position: "top",
            title: `Edit Success`,
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <Tbody>
            <Tr>
                <Td>{props.idx}</Td>
                <Td>{props.table}</Td>
                <Td>
                    {/* BUTTON EDIT */}
                    <Button
                        bgColor="#00ADB5"
                        onClick={modalEdit.onOpen}
                        mr="4"
                        _hover={""}
                    >
                        <Text>Edit</Text>
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
                                Edit Existing Table
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel color={"#EEEEEE"}>
                                        Table Number
                                    </FormLabel>
                                    <Input
                                        ref={initialRef}
                                        placeholder="Enter new table number"
                                        _hover={""}
                                        bgColor="#222831"
                                        variant={"link"}
                                        onChange={(e) =>
                                            setTable(e.target.value)
                                        }
                                        defaultValue={props.table}
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    bgColor="#00ADB5"
                                    color="#EEEEEE"
                                    _hover=""
                                    mr={3}
                                    type="button"
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
                    <Button colorScheme="red" onClick={modalDelete.onOpen}>
                        Delete User
                    </Button>

                    <AlertDialog
                        isOpen={modalDelete.isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={modalDelete.onClose}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader
                                    fontSize="lg"
                                    fontWeight="bold"
                                >
                                    Delete
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Are you sure? You can't undo this action
                                    afterwards.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button
                                        ref={cancelRef}
                                        onClick={modalDelete.onClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        colorScheme="red"
                                        onClick={btnDelete}
                                        ml={3}
                                    >
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

export default MejaTable;
