import React, { useState } from "react";

import {
    Box,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
} from "@chakra-ui/react";

function ProductCard(props) {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const btnIncrement = () => {
        setCount(count + 1);
        setDisabled(false);
    };

    const btnDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setDisabled(true);
        }
    };
    return (
        <Card
            maxW="sm"
            bgColor={"#393E46"}
            direction="column"
            overflow={"hidden"}
        >
            <CardBody p={"0"}>
                <Image
                    src="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Spaghetti Carbonara"
                    objectFit={"cover"}
                    maxH={"32"}
                />
                <Stack mt="3" spacing="1">
                    <Heading size="md" color={"#EEEEEE"}>
                        {props.produk}
                    </Heading>
                    <Text
                        color="#00ADB5"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign={"center"}
                    >
                        {props.price}
                    </Text>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                        pb={"6"}
                    >
                        <Button
                            bgColor={"#00adb5"}
                            color="#EEEEEE"
                            _hover={""}
                            p={"5px"}
                            mr="2"
                            fontSize="lg"
                            fontWeight={"bold"}
                            onClick={btnDecrement}
                            disabled={disabled}
                        >
                            -
                        </Button>
                        <Box my={"auto"}>
                            <Text my={"auto"} color="#EEEEEE">
                                {count}
                            </Text>
                        </Box>
                        <Button
                            bgColor={"#00adb5"}
                            color="#EEEEEE"
                            _hover={""}
                            p="5px"
                            ml="2"
                            fontSize="lg"
                            fontWeight={"bold"}
                            onClick={btnIncrement}
                        >
                            +
                        </Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProductCard;
