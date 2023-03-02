import React from "react";
import { Table, Tbody, Tr, Td, Tfoot, Button } from "@chakra-ui/react";
import {FaCashRegister} from "react-icons/fa" 

function CheckoutTotal(props) {
    let subTotal = props.dataCart.reduce((a, b) => a + b.price * b.qty, 0);

    console.log(typeof subTotal);
    console.log(parseInt(subTotal.toLocaleString()));

    let tax = subTotal * 0.11;
    let total = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(subTotal + tax);

    return (
        <Table variant="simple" width={"full"}>
            <Tbody fontWeight={"semibold"} letterSpacing="wide">
                <Tr>
                    <Td>Sub-Total</Td>
                    <Td></Td>
                    <Td isNumeric>{subTotal}</Td>
                </Tr>
                <Tr>
                    <Td>Discount</Td>
                    <Td></Td>
                    <Td isNumeric>0</Td>
                </Tr>
                <Tr>
                    <Td>Tax (11%)</Td>
                    <Td></Td>
                    <Td isNumeric>{tax}</Td>
                </Tr>
            </Tbody>
            <Tfoot
                borderWidth={"medium"}
                borderTop={"4px solid #222831"}
                mt="2"
            >
                <Tr fontWeight={"bold"} letterSpacing="wide">
                    <Td>TOTAL</Td>
                    <Td isNumeric>{total}</Td>
                    <Td><Button bgColor="#00ADB5"
                    color="#EEEEEE"
                    _hover=""
                    rounded="md"><FaCashRegister /></Button></Td>
                </Tr>
            </Tfoot>
        </Table>
    );
}

export default CheckoutTotal;
