import {
    Box,
    Button,
    Container,
    Flex,
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
    Table,
    TableContainer,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "../Components/Navbar";
import UserTable from "../Components/UserTable";
import { API_URL } from "../helper";

function ManageTables(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [table, setTable] = useState("");
    // const toast = useToast();
    // const [dataTable, setDataTable] = useState([]);

    // console.log("data all user", dataAllUser);

    // const getTable = async () => {
    //     let get = await axios.get(`${API_URL}/table/getalltable`);
    //     console.log("get data table ", get);
    //     setDataTable(get.data);
    // };

    // const printUserData = () => {
    //     return dataAllUser.map((val, idx) => {
    //         return <UserTable idx={idx + 1} table={val.table} />;
    //     });
    // };

    // const onBtnAdd = async () => {
    //     try {
    //         await axios.post(`${API_URL}/user/addnewuser`, {
    //             username: username,
    //             email: email,
    //             password: password,
    //             roleId: parseInt(role),
    //         });
    //         toast({
    //             position: "top",
    //             title: `New Table added`,
    //             status: "success",
    //             duration: 2000,
    //             isClosable: true,
    //         });
    //         onClose();
    //         getDataUser();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // React.useEffect(() => {
    //     getDataUser();
    // }, []);

    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            <Box w="full">
                <Navbar />
                <>
                    <Button
                        rounded={"md"}
                        h={"10"}
                        mt={"4"}
                        ml={"4"}
                        bgColor="#00ADB5"
                        color="#EEEEEE"
                        _hover={""}
                        p={"2.5"}
                        variant={"link"}
                        onClick={onOpen}
                    >
                        <IoMdAddCircle
                            size={"20"}
                            fontWeight={"bold"}
                            color={"#EEEEEE"}
                        />
                        <Text ml="2">Add Table</Text>
                    </Button>

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent bgColor="#393E46" color={"#EEEEEE"}>
                            <ModalHeader color="#00adb5">
                                Add New Table
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel color={"#EEEEEE"}>
                                        Table Number
                                    </FormLabel>
                                    <Input
                                        ref={initialRef}
                                        placeholder="Enter table number"
                                        _hover={""}
                                        bgColor="#222831"
                                        variant={"link"}
                                        // GANTI ONCHANGE
                                        // onChange={(e) =>
                                        //     setTable(e.target.value)
                                        // }
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
                                    // onClick={onBtnAdd}
                                >
                                    Add
                                </Button>
                                <Button
                                    bgColor="#EEEEEE"
                                    color="#00ADB5"
                                    _hover=""
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
                <Box mt="4">
                    <TableContainer>
                        <Table variant="simple" color={"#EEEEEE"}>
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Username</Th>
                                    <Th>Email</Th>
                                    <Th>Role</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            {/* {printUserData()} */}
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Flex>
        // <AccountCard/>
    );
}

export default ManageTables;
