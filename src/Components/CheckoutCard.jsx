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

function CheckoutCard() {
    return (
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
                    <Box mt={"-2"}>
                        <Text size="xs" fontWeight={"semibold"}>
                            Spaghetti Carbonara
                        </Text>
                        {/* Isi props harga kedalam amount: {} */}
                        <Text
                            fontSize={"xs"}
                            textAlign="left"
                            letterSpacing={"wide"}
                        >
                            Rp. 15.000,00- <br />
                            Amount: {}
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
