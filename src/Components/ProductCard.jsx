import React from "react";

import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import { API_URL } from "../helper";

function ProductCard(props) {
    return (
        <Card maxW="sm" bgColor={"#393E46"}>
            <CardBody>
                <Image
                    src={`${API_URL}${props.image}`}
                    alt="Spaghetti Carbonara"
                    borderRadius="lg"
                    maxH={"32"}
                />
                <Stack mt="3" spacing="1">
                    <Heading size="md" color={"#EEEEEE"} textAlign={"center"}>
                        {props.product}
                    </Heading>
                    <Text color="#00ADB5" fontSize="2xl" fontWeight="bold" textAlign={"center"}>
                        {props.price}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"} mt="-8">
                <Button bgColor={"#00ADB5"} color={"#EEEEEE"} _hover={""}>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
