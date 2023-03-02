import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import CheckoutCard from "../Components/CheckoutCard";
import CheckoutTotal from "../Components/CheckoutTotal";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import ProductCard from "../Components/ProductCard";
import TabOption from "../Components/TabOption";
import { API_URL } from "../helper";

function Landing(props) {
    const [dataAllProducts, setDataAllProducts] = useState([]);
    const [dataAllCategory, setDataAllCategory] = useState([]);

    const [showProducts, setShowProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [productName, setProductName] = useState("");
    const [totalData, setTotalData] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("product");
    const [order, setOrder] = useState("ASC");
    const [category, setCategory] = useState("");

    // USESTATE TRANSACTION
    const [dataCart, setDataCart] = useState([]);

    const getAllProducts = async () => {
        try {
            let token = localStorage.getItem("pmf_login");
            let res = await axios.post(
                `${API_URL}/product/list?page=${page}&size=${size}&name=${productName}&sortby=${sortBy}&order=${order}&category=${category}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer  ${token}`,
                    },
                }
            );
            setTotalData(res.data.datanum);
            setShowProducts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getDataProduct();
        getDataCategory();
        getAllProducts();
    }, [page, sortBy, order, category]);

    const printAllProduct = () => {
        return showProducts.map((val, idx) => {
            return (
                <ProductCard
                    product={val.product}
                    price={val.price}
                    uuid={val.uuid}
                    image={val.image}
                    dataCart={dataCart}
                    setDataCart={setDataCart}
                    productId={val.id}
                />
            );
        });
    };

    const printAllOrder = () => {
        return dataCart.map((val, idx) => {
            return (
                <CheckoutCard
                    product={val.product}
                    image={val.image}
                    qty={val.qty}
                    price={val.price}
                    dataCart={dataCart}
                    setDataCart={setDataCart}
                    productId={val.id}
                />
            );
        });
    };

    const paginate = (pageNumber) => {
        setPage(pageNumber);
    };

    const getDataProduct = async () => {
        let get = await axios.get(`${API_URL}/product/getallproduct`);
        // console.log("get data product",get)
        setDataAllProducts(get.data);
    };

    const getDataCategory = async () => {
        let get = await axios.get(`${API_URL}/category/getallcategory`);
        // console.log("get all category", getDataCategory)
        setDataAllCategory(get.data);
    };

    const printBtnGroup = () => {
        return dataAllCategory.map((val, idx) => {
            return (
                <Button
                    bgColor="#00ADB5"
                    color="#EEEEEE"
                    _hover=""
                    mr={3}
                    rounded="full"
                    onClick={() => {
                        setCategory(`${val.category}`);
                        setPage(0);
                    }}
                >
                    {val.category}
                </Button>
            );
        });
    };

    console.log("data carttttt : ", dataCart);

    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            {/* BOX 1 */}
            <Box
                flex={"3"}
                display="flex"
                flexDir={"column"}
                justifyContent="space-between"
            >
                <Box>
                    {/* NAVBAR */}
                    <Box>
                        <Navbar
                            setProductName={setProductName}
                            getAllProducts={getAllProducts}
                            setPage={setPage}
                            setSortBy={setSortBy}
                            setOrder={setOrder}
                        />
                    </Box>
                    {/* BUTTON GROUP */}
                    <Box mt={"4"} ml={"4"}>
                        <Flex>
                            <Button
                                bgColor="#00ADB5"
                                color="#EEEEEE"
                                _hover=""
                                mr={3}
                                rounded="full"
                                onClick={() => {
                                    setCategory("");
                                    setPage(0);
                                }}
                            >
                                All Products
                            </Button>
                            {printBtnGroup()}
                        </Flex>
                    </Box>
                    <Flex w="full" flexWrap={"wrap"} gap="8" ml="4" mt="4">
                        {printAllProduct()}
                    </Flex>
                </Box>
                {/* PAGINATION */}
                <Box>
                    <Flex my="10" w="full" justify={"center"}>
                        <Pagination
                            size={size}
                            page={page}
                            totalData={totalData}
                            paginate={paginate}
                        />
                    </Flex>
                </Box>
            </Box>
            {/* END BOX 1 */}

            {/* BOX 2 */}
            <Box
                flex="1"
                display={"flex"}
                bgColor={"#EEEEEE"}
                flexDir={"column"}
                justifyContent={"space-between"}
                h="100vh"
            >
                <Box>
                    <Text
                        p={"4"}
                        mx={"auto"}
                        color="#222831"
                        fontWeight={"bold"}
                        fontSize={"2xl"}
                        textAlign={"center"}
                        textDecorationLine={"underline"}
                        textUnderlineOffset={"5px"}
                    >
                        Order Details
                    </Text>

                    {/* CHECKOUT CARD */}
                    <Box
                        overflowY={"auto"}
                        h="60vh"
                        __css={{
                            "&::-webkit-scrollbar": {
                                w: "0",
                            },
                            "&::-webkit-scrollbar-track": {
                                w: "6",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                borderRadius: "10",
                                bg: `gray.100`,
                            },
                        }}
                    >
                        {printAllOrder()}
                    </Box>
                    {/* END CHECKOUT CARD */}
                </Box>

                {/* CHECKOUT TEXT */}
                <Box>
                    <CheckoutTotal dataCart={dataCart} />
                </Box>
                {/* END CHECKOUT TEXT */}
            </Box>
            {/* END BOX 2 */}
        </Flex>
    );
}

export default Landing;
