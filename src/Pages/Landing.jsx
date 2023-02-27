import React from "react";
import Navbar from "../Components/Navbar";
import TabOption from "../Components/TabOption";
import { Flex, Box, Text, Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Landing(props) {
    const data = useSelector((state) => state.authReducer.data.username);
    console.log("Data", data);
    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            <Box flex={"3"}>
                <Box>
                    <Navbar />
                </Box>
                {/* Tab Options */}
                <Box mt={"4"} ml={"4"}>
                    <TabOption />
                </Box>
            </Box>
            <Box
                flex="1"
                justifyItems={"center"}
                alignItems={"center"}
                bgColor={"#EEEEEE"}
            >
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
                    Order Details
                </Text>
            </Box>
        </Flex>
    );
}

export default Landing;
