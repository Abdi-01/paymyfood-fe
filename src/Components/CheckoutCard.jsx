import React from "react";
import {
    Card,
    CardBody,
    Button,
    Text,
    Image,
    Stack,
    Heading,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";

function CheckoutCard() {
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
        <div>
            <Card
                direction={"row"}
                overflow="hidden"
                variant="outline"
                maxH="32"
                mx={"4"}
                bgColor="#393E46"
                color={"#EEEEEE"}
            >
                <Image
                    objectFit="cover"
                    maxW={"32"}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />

                <Stack>
                    <CardBody>
                        <Box>
                            <Text size="xs" fontWeight={"semibold"}>
                                Spaghetti Carbonara
                            </Text>
                            <Text py="1" fontSize={"xs"} textAlign="left">
                                Rp. 15.000,00-
                            </Text>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"right"}
                            alignItems="center"
                        >
                            <Button
                                variant="link"
                                bgColor={"#00adb5"}
                                color="#EEEEEE"
                                _hover={""}
                                h={"10px"}
                                w={"10px"}
                                p={"10px"}
                                mr="2"
                                fontSize="lg"
                                fontWeight={"bold"}
                                onClick={btnDecrement}
                                disabled={disabled}
                            >
                                -
                            </Button>
                            <Box my={"auto"}>
                                <Text my={"auto"}>{count}</Text>
                            </Box>
                            <Button
                                variant="link"
                                bgColor={"#00adb5"}
                                color="#EEEEEE"
                                _hover={""}
                                h={"10px"}
                                w={"10px"}
                                py="10px"
                                ml="2"
                                fontSize="lg"
                                fontWeight={"bold"}
                                onClick={btnIncrement}
                            >
                                +
                            </Button>
                        </Box>
                    </CardBody>
                </Stack>
            </Card>
        </div>
    );
}

export default CheckoutCard;
