import React from "react";
import { Table, Tbody, Tr, Td, Divider, Tfoot } from "@chakra-ui/react";

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
                    <Td>TOTAL</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
            </Tfoot>
        </Table>
    );
}

export default CheckoutTotal;
