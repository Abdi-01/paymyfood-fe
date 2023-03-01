import React from "react";
import {
    Box,
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
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption
} from "@chakra-ui/react";

import { HiMenu, HiSearch, HiFilter, } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("left");
    const dataUsername = useSelector(
        (state) => state.authReducer.data.username
    );

    const dataRoleId = useSelector((state) => state.authReducer.data.roleId);
    console.log("role id reducer : ", dataRoleId);


    return (
        <Flex bgColor={"#222831"} mt={"4"} ml={"4"}>

            {/* BUTTON DRAWER */}
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

            {/* SEARCH BAR */}
            <Box>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder={"Search for a product..."}
                        color={"#EEEEEE"}
                        bgColor={"#393E46"}
                        variant={"link"}
                        justifyItems={"self-end"}
                        h={"10"}
                        w={"lg"}
                    />
                    <InputRightElement>
                        <Button
                            display={"flex"}
                            alignSelf={"center"}
                            size={"md"}
                            bgColor={"transparent"}
                            variant={"link"}
                            py={"2.5"}
                        >
                            <HiSearch color="#00ADB5" />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            {/* BUTTON FILTER */}
            {/* <Button
                rounded={"md"}
                h={"10"}
                bgColor="#00ADB5"
                color="#EEEEEE"
                _hover={""}
                p={"2.5"}
                variant={"link"}
                // onClick={}
                ml={"4"}
            >
                <HiFilter color="#EEEEEE" />
            </Button> */}

            {/* SORT BUTTON */}
            <Menu closeOnSelect={false}>
                <MenuButton
                    as={Button}
                    rounded={"md"}
                    h={"10"}
                    bgColor="#00ADB5"
                    color="#EEEEEE"
                    _hover={""}
                    p={"2.5"}
                    variant={"link"}
                    ml={"4"}
                >
                    <HiFilter color="#EEEEEE" />
                </MenuButton>
                <MenuList minWidth="240px">
                    <MenuOptionGroup
                        defaultValue="asc"
                        title="Order"
                        type="radio"
                    >
                        <MenuItemOption value="asc">
                            Ascending (A - Z)
                        </MenuItemOption>
                        <MenuItemOption value="desc">
                            Descending (Z - A)
                        </MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>

            {/* DRAWER */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        borderBottomWidth="1px"
                        fontWeight={"bold"}
                        fontSize={"larger"}
                    >
                        Welcome, {dataUsername}
                    </DrawerHeader>
                    <DrawerBody>
                        <Box display={"flex"} flexDir='column' justifyContent={'space-between'} h='90vh'>
                            <Box>

                                {dataRoleId == 1 ?
                                    <>
                                        <Link to={"/landing"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Home
                                                </Button>
                                            </Text>
                                        </Link>
                                        <Link to={"/products"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Manage Products
                                                </Button>
                                            </Text>
                                        </Link>
                                        <Link to={"/category"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Manage Category
                                                </Button>
                                            </Text>
                                        </Link>
                                        <Link to={"/accounts"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Manage Accounts
                                                </Button>
                                            </Text>
                                        </Link>
                                        <Link to={"/products"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Statistics
                                                </Button>
                                            </Text>
                                        </Link>
                                    </>

                                    :

                                    <Link to={"/landing"}>
                                        <Text my={"4"}>
                                            <Button
                                                bgColor={"#00adb5"}
                                                _hover="none"
                                                w={"full"}
                                                color={"#222831"}
                                            >
                                                Home
                                            </Button>
                                        </Text>
                                    </Link>

                                }
                            </Box>
                            <Box>
                                <Link to={"/"}>
                                    <Text my={"4"}>
                                        <Button
                                            bgColor={"#00adb5"}
                                            _hover="none"
                                            w={"full"}
                                            color={"#222831"}
                                        >
                                            Logout
                                        </Button>
                                    </Text>
                                </Link>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
