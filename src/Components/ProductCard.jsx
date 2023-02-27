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

function ProductCard() {
    return (
        <Card maxW="sm" bgColor={"#393E46"}>
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Spaghetti Carbonara"
                    borderRadius="lg"
                    maxH={"32"}
                />
                <Stack mt="3" spacing="1">
                    <Heading size="md" color={"#EEEEEE"}>
                        Spaghetti Carbonara
                    </Heading>
                    <Text color="#00ADB5" fontSize="2xl" fontWeight="bold" textAlign={"center"}>
                        $15
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
