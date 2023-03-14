import React from 'react';
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

function BestSellerCard(props) {
    return (
        <Card
            direction={"row"}
            overflow="hidden"
            variant="outline"
            maxH="32"
            mx={"4"}
            bgColor="#393E46"
            color={"#EEEEEE"}
            my={'3'}
        >
            <Image
                objectFit="cover"
                maxW={"32"}
                src={`${API_URL}${props.image}`}
            />

            <Stack width={"full"}>
                <CardBody>
                    <Box mt={"-2"}>
                        <Text fontSize={'20'} fontWeight={"bold"}>
                            Name : {props.product}
                        </Text>
                    </Box>
                    <Box >
                        <Text fontSize={'20'} fontWeight={"bold"}>
                            Total : {props.total}
                        </Text>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    );
}

export default BestSellerCard;