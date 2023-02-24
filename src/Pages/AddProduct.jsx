import { Container, Input, Text } from "@chakra-ui/react";
import React from "react";

function AddProduct() {
    return (
        <Container>
            <Text
                color="#00ADB5"
                mb={"4"}
                fontWeight={"bold"}
                letterSpacing={"wider"}
            >
                Add Product
            </Text>
            <Input
                pr="4.5rem"
                py={"1.5rem"}
                type={"text"}
                placeholder="Enter product name"
                mb={"8"}
                rounded={"xl"}
                bgColor={"#222831"}
                variant={"filled"}
                color={"#EEEEEE"}
                _hover={""}
            />
        </Container>
    );
}

export default AddProduct;
