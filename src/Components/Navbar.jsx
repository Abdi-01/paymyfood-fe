import React from "react";
import {
    Box,
    Container,
    Flex,
    Text,
    useDisclosure,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

import { HiMenu, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("left");
    const dataUsername = useSelector(
        (state) => state.authReducer.data.username
    );
    return (
        <Flex bgColor={"#222831"} mt={"4"}>
            <Box>
                <Button
                    rounded={"md"}
                    h={"10"}
                    bgColor="#00ADB5"
                    color="#EEEEEE"
                    _hover={""}
                    p={"2.5"}
                    variant={"link"}
                    justifyItems={"self-start"}
                    onClick={onOpen}
                    mr={"16"}
                >
                    <HiMenu color="#EEEEEE" />
                </Button>
            </Box>
            <Box>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder={"Search for a product..."}
                        color={"#EEEEEE"}
                        bgColor={"#393e36"}
                        variant={"link"}
                        justifyItems={"self-end"}
                        h={"10"}
                        w={"lg"}
                    />
                    <InputRightElement>
                        <Button
                            size={"md"}
                            bgColor={"transparent"}
                            variant={"link"}
                        >
                            <HiSearch color="#00ADB5" />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        Welcome, {dataUsername}
                    </DrawerHeader>
                    <DrawerBody>
                        <Box display={"block"}>
                            <Link to={"/landing"}>
                                <Text>
                                    <Button>Home</Button>
                                </Text>
                            </Link>
                            <Link to={"/products"}>
                                <Text>
                                    <Button>Product</Button>
                                </Text>
                            </Link>
                            <Link to={"/"}>
                                <Text>
                                    <Button>Logout</Button>
                                </Text>
                            </Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
