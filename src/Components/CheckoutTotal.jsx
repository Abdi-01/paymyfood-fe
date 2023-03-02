import React from "react";
import { Table, Tbody, Tr, Td, Tfoot, Button } from "@chakra-ui/react";
import { FaCashRegister } from "react-icons/fa"

function CheckoutTotal() {
    return (
        <Table variant="simple" width={"full"}>
            <Tbody fontWeight={"semibold"} letterSpacing="wide">
                <Tr>
                    <Td>Sub-Total</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>Discount</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>Tax (11%)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
            </Tbody>
            <Tfoot
                borderWidth={"medium"}
                borderTop={"4px solid #222831"}
                mt="2"
            >
                <Tr fontWeight={"bold"} letterSpacing="wide">
                    <Td>TOTAL(Rp.)</Td>
                    <Td isNumeric>150000</Td>
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
