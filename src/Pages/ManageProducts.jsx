import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import TabOption from "../Components/TabOption";
import { HiDocumentAdd } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import {
    Flex,
    Box,
    Container,
    Input,
    FormControl,
    Modal,
    ModalOverlay,
    FormLabel,
    ModalFooter,
    ModalCloseButton,
    ModalHeader,
    ModalContent,
    ModalBody,
    Button,
    useDisclosure,
} from "@chakra-ui/react";

function ManageProducts() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [fileProductImage, setFileProductImage] = useState(null);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const inputFile = useRef(null);
    const modalProductImage = useDisclosure();
    const onChangeFile = (event) => {
        console.log(event.target.files);
        modalProductImage.onOpen();
        setFileProductImage(event.target.files[0]);
    };

    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            <Box justifyItems={"center"} flex={"1"}>
                <Box display={"flex"}>
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
                                    Add New Product
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel color={"#EEEEEE"}>
                                            Product Name
                                        </FormLabel>
                                        <Input
                                            ref={initialRef}
                                            placeholder="Enter product name"
                                            _hover={""}
                                            bgColor="#222831"
                                            variant={"link"}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel color={"#EEEEEE"}>
                                            Price
                                        </FormLabel>
                                        <Input
                                            ref={initialRef}
                                            placeholder="Enter product price"
                                            _hover={""}
                                            bgColor="#222831"
                                            variant={"link"}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel color={"#EEEEEE"}>
                                            Category
                                        </FormLabel>
                                        <Input
                                            ref={initialRef}
                                            placeholder="Enter product category"
                                            _hover={""}
                                            bgColor="#222831"
                                            variant={"link"}
                                        />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel color={"#EEEEEE"}>
                                            Product Image
                                        </FormLabel>
                                        <Button
                                            bgColor="#00ADB5"
                                            color="#EEEEEE"
                                            rounded={"md"}
                                            h={"10"}
                                            _hover={""}
                                            p={"2.5"}
                                            variant={"link"}
                                            // onClick={}
                                        >
                                            <HiDocumentAdd
                                                color="#EEEEEE"
                                                size={"md"}
                                            />
                                            Add a File
                                            <Input
                                                type="file"
                                                id="file"
                                                ref={inputFile}
                                                style={{ display: "none" }}
                                                onChange={onChangeFile}
                                            ></Input>
                                        </Button>
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        bgColor="#00ADB5"
                                        color="#EEEEEE"
                                        _hover=""
                                        mr={3}
                                    >
                                        Save
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
                </Box>
                {/* Tab Options */}
                <Box mt={"4"} ml={"4"}>
                    <TabOption />
                </Box>
            </Box>
        </Flex>
    );
}

export default ManageProducts;
