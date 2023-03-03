import React from "react";
import { Table, Tbody, Tr, Td, Tfoot, Button } from "@chakra-ui/react";
import { FaCashRegister } from "react-icons/fa";
import { API_URL } from "../helper";
import { useSelector } from "react-redux";
import axios from "axios";

function CheckoutTotal(props) {
    let subTotal = props.dataCart.reduce((a, b) => a + b.price * b.quantity, 0);
    const dataEmail = useSelector((state) => state.authReducer.data.email)

    console.log(typeof subTotal);
    console.log(parseInt(subTotal.toLocaleString()));

    let tax = subTotal * 0.11;
    let total = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(subTotal + tax);

    const btnCheckout = async () => {
        if(window.confirm('Confirm Checkout ?')){
            let token = localStorage.getItem('pmf_login')
            if (props.dataCart.length == 0) {
                alert('Cart empty !')
            } else {
                let checkout = await axios.post(`${API_URL}/transaction/`, {
                    tableId: parseInt(props.table),
                    order: props.dataCart
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                
            }
        }

    }

    return (
        <>
            <Table variant="simple" width={"full"}>
                <Tbody fontWeight={"semibold"} letterSpacing="wide">
                    <Tr>
                        <Td>Sub-Total</Td>

                        <Td isNumeric>{subTotal}</Td>
                    </Tr>
                    <Tr>
                        <Td>Discount</Td>

                        <Td isNumeric>0</Td>
                    </Tr>
                    <Tr>
                        <Td>Tax (11%)</Td>

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
                        <Td isNumeric>{total} </Td>
                    </Tr>
                </Tfoot>
            </Table>
            <Button
                bgColor="#00ADB5"
                color="#EEEEEE"
                width={"full"}
                _hover=""
                rounded={"none"}
                onClick={() => {
                    btnCheckout();
                    props.setDataCart([])
                }}
            >
                <FaCashRegister />
            </Button>
        </>
    );
}

export default CheckoutTotal;
