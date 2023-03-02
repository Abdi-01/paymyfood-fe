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
import { API_URL } from "../helper";

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
            width={"3xs"}
            bgColor={"#393E46"}
            direction="column"
            overflow={"hidden"}
            rounded={"3xl"}
            shadow="2xl"
        >
            <CardBody p={"0"}>
                <Image
                    src={`${API_URL}${props.image}`}
                    alt="Product Image"
                    height={"200px"}
                    objectFit="cover"
                    width="full"
                    
                />
                <Stack mt="2" spacing="1">
                    <Heading size="md" color={"#EEEEEE"} textAlign={"center"}>
                        {props.product}
                    </Heading>
                    <Text
                        color="#00ADB5"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign={"center"}
                        
                    >
                        Rp. {props.price.toLocaleString()}
                    </Text>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                        pb={"6"}
                        mt="3"
                    >
                        <Button
                            color="white"
                            size="md"
                            fontSize={"lg"}
                            colorScheme="pmf"
                            w="4"
                            mr="2"
                            variant={"solid"}
                            onClick={btnDecrement}
                            disabled={disabled}
                        >
                            -
                        </Button>
                        <Box my={"auto"}>
                            <Text my={"auto"} color="#EEEEEE" fontSize={"24"}>
                                {count}
                            </Text>
                        </Box>
                        <Button
                            color="white"
                            size="md"
                            fontSize={"lg"}
                            colorScheme="pmf"
                            w="4"
                            ml="2"
                            variant={"solid"}
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
