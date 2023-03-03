import {
    Box,
    Container,
    Flex,
    Text,
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    CardBody,
    Card,
    Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Statistics(props) {
    const [placement] = useState("left");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dataUsername = useSelector(
        (state) => state.authReducer.data.username
    );
    const dataRoleId = useSelector((state) => state.authReducer.data.roleId);

    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            {/* BOX 1 */}
            <Box
                flex={"2"}
                display="flex"
                flexDir={"column"}
                justifyContent="space-between"
            >
                <Box>
                    <Button
                        mt={"4"}
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
                    <Box mt="4" color={"#EEEEEE"} w="2xl">
                        <Text fontSize={"7xl"} fontWeight="bold">
                            Welcome, {dataUsername}
                        </Text>
                    </Box>
                    <Card mt="4" bgColor={"#393e46"} w={"xl"}>
                        <CardBody>
                            <Stat>
                                <Box
                                    display={"flex"}
                                    justifyContent="space-between"
                                >
                                    <StatLabel
                                        color="#00ADB5"
                                        fontSize={"2xl"}
                                        fontWeight="bold"
                                        w={"xl"}
                                        opacity={"inherit"}
                                    >
                                        Gross Income
                                    </StatLabel>
                                    <Input
                                        variant={"link"}
                                        bgColor="#00ADB5"
                                        color={"#222831"}
                                        placeholder="Select Date"
                                        size="md"
                                        type="date"
                                    ></Input>
                                </Box>

                                <StatNumber
                                    color="#EEEEEE"
                                    fontSize={"6xl"}
                                    fontWeight="bold"
                                    letterSpacing={"wider"}
                                >
                                    Rp 1.500.000,00-
                                </StatNumber>
                                <StatHelpText
                                    color="#00ADB5"
                                    fontSize={"2xl"}
                                    fontWeight="semibold"
                                    opacity={"inherit"}
                                >
                                    Today
                                </StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
            {/* END BOX 1 */}

            {/* BOX 2 */}
            <Box
                flex="1"
                display={"flex"}
                bgColor={"#EEEEEE"}
                flexDir={"column"}
                justifyContent={"space-between"}
                h="100vh"
            >
                <Box>
                    <Text
                        p={"4"}
                        mx={"auto"}
                        color="#222831"
                        fontWeight={"bold"}
                        fontSize={"2xl"}
                        textAlign={"center"}
                        textDecorationLine={"underline"}
                        textUnderlineOffset={"5px"}
                    >
                        All-time <br /> Best Sellers
                    </Text>

                    {/* CHECKOUT CARD */}
                    <Box
                        overflowY={"auto"}
                        h="60vh"
                        __css={{
                            "&::-webkit-scrollbar": {
                                w: "0",
                            },
                            "&::-webkit-scrollbar-track": {
                                w: "6",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                borderRadius: "10",
                                bg: `gray.100`,
                            },
                        }}
                    >
                        {/* {printAllOrder()} */}
                    </Box>
                    {/* END CHECKOUT CARD */}
                </Box>

                {/* CHECKOUT TEXT */}
                <Box>{/* <CheckoutTotal dataCart={dataCart} /> */}</Box>
                {/* END CHECKOUT TEXT */}
            </Box>
            {/* END BOX 2 */}
            {/* Drawer Content */}
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
                        <Box
                            display={"flex"}
                            flexDir="column"
                            justifyContent={"space-between"}
                            h="90vh"
                        >
                            <Box>
                                {dataRoleId == 1 ? (
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
                                        <Link to={"/tables"}>
                                            <Text my={"4"}>
                                                <Button
                                                    bgColor={"#00adb5"}
                                                    _hover="none"
                                                    w={"full"}
                                                    color={"#222831"}
                                                >
                                                    Manage Tables
                                                </Button>
                                            </Text>
                                        </Link>
                                        <Link to={"/statistics"}>
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
                                ) : (
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
                                )}
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

export default Statistics;
