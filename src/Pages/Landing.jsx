import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import TabOption from "../Components/TabOption";

function Landing(props) {
    
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
