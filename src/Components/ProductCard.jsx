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
            width={"xs"}
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
                    objectFit={"cover"}
                    width="full"
                    
                />
                <Stack mt="3" spacing="1">
                    <Heading size="md" color={"#EEEEEE"} textAlign={"center"}>
                        {props.product}
                    </Heading>
                    <Text
                        color="#00ADB5"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign={"center"}
                        
                    >
                        Rp. {props.price}
                    </Text>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                        pb={"6"}
                        mt="3"
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
