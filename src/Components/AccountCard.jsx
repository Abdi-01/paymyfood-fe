import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Image,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AccountCard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("left");
    const dataUsername = useSelector(
        (state) => state.authReducer.data.username
    );
    return (
        <Flex bgColor={"#222831"} mt={"4"} ml={"4"}>
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
                <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                >
                    <Image
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "200px" }}
                        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Caffe Latte"
                    />

                    <Stack>
                        <CardBody>
                            <Heading size="md">The perfect latte</Heading>

                            <Text py="2">
                                Caffè latte is a coffee beverage of Italian
                                origin made with espresso and steamed milk.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant="solid" colorScheme="blue">
                                Buy Latte
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
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
                        <Box display={"block"}>
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
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default AccountCard;
