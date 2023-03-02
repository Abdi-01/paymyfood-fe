import React from "react";
import {
    Box,
    Card,
    CardBody,
    Button,
    Text,
    Image,
    Stack,
} from "@chakra-ui/react";
import { HiTrash } from "react-icons/hi";
import { API_URL } from "../helper";

function CheckoutCard(props) {
    return (
        <Card
            direction={"row"}
            overflow="hidden"
            variant="outline"
            maxH="32"
            mx={"4"}
            bgColor="#393E46"
            color={"#EEEEEE"}
            w='full'
            justify={'space-between'}
        >
            <Image
                objectFit="cover"
                maxW={"32"}
                src={`${API_URL}${props.image}`}
            />

            <Stack>
                <CardBody>
                    <Box mt={"-2"}>
                        <Text size="xs" fontWeight={"semibold"}>
                            {props.product}
                        </Text>
                        {/* Isi props harga kedalam amount: {} */}
                        <Text
                            fontSize={"xs"}
                            textAlign="left"
                            letterSpacing={"wide"}
                        >
                            Rp. {`${props.price * props.qty}`} <br />
                            Amount: {props.qty}
                        </Text>
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"right"}
                        alignItems="center"
                    >
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
                                temp.splice(found, 1)
                                props.setDataCart(temp);
                            }}
                        >
                            <HiTrash />
                        </Button>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default CheckoutCard;
