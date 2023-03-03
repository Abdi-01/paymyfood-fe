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
    const [count, setCount] = useState(1);
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


    let cari = props.dataCart.find((data, idx) => { // untuk mengetahui apakah di dalam cart usestate ada data yg sama dengan card product atau tidak 
        console.log("dataaaaa", data, props.productId);
        if (data.productId == props.productId) {
            return true;
        } else {
            return false;
        }
    });



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
                        {cari ?
                            <>
                                <Button
                                    bgColor={"#00adb5"}
                                    color="#EEEEEE"
                                    _hover={""}
                                    p={"5px"}
                                    mr="2"
                                    fontSize="lg"
                                    fontWeight={"bold"}
                                    onClick={() => {
                                        let found = props.dataCart.findIndex((data) => data.productId == props.productId);
                                        let temp = [...props.dataCart]
                                        if(temp[found].qty == 1){
                                            temp.splice(found, 1)
                                        } else {
                                            temp[found].qty -= 1
                                        }
                                        props.setDataCart(temp);
                                    }}
                                    disabled={disabled}
                                >
                                    -
                                </Button>

                                <Button
                                    bgColor={"#00adb5"}
                                    color="#EEEEEE"
                                    _hover={""}
                                    p="5px"
                                    ml="2"
                                    fontSize="lg"
                                    fontWeight={"bold"}
                                    onClick={() => {
                                        let found = props.dataCart.findIndex((data) => data.productId == props.productId);
                                        let temp = [...props.dataCart]
                                        temp[found].qty += 1
                                        props.setDataCart(temp);
                                    }}
                                >
                                    +
                                </Button>
                            </>

                            :

                            <Button 
                            _hover={""}
                            onClick={() => {
                                props.setDataCart([...props.dataCart, {
                                    productId: props.productId,
                                    qty: 1, price: props.price, uuid: props.uuid, product: props.product,
                                    image: props.image
                                }])
                            }}>
                                add to cart
                            </Button>
                        }

                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProductCard;
