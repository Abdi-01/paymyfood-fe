import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CheckoutCard from "../Components/CheckoutCard";
import CheckoutTotal from "../Components/CheckoutTotal";
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
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
                h="100%"
                bgColor={"#EEEEEE"}
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
                        Order Details
                    </Text>
                    <CheckoutCard />
                </Box>
                <CheckoutTotal />
            </Box>
        </Flex>
    );
}

export default Landing;
