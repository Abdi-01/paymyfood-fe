import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Table,
    TableContainer,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { HiDocumentAdd, HiViewGridAdd } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "../Components/Navbar";
import ProductTable from "../Components/ProductTable";
import { API_URL } from "../helper";

function ManageProducts(props) {
    const modalProduct = useDisclosure();
    const modalCategory = useDisclosure();
    const [fileProduct, setFileProduct] = useState(null);
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const inputFile = useRef(null);
    const modalProductImage = useDisclosure();
    const [dataAllProducts, setDataAllProducts] = useState([]);
    const [dataAllCategory, setDataAllCategory] = useState([]);
    const [category, setCategory] = useState("");
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [categoryNew, setCategoryNew] = useState("");
    const toast = useToast();

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

    const printProductData = () => {
        return dataAllProducts.map((val, idx) => {
            return (
                <ProductTable
                    idx={idx + 1}
                    product={val.product}
                    image={val.image}
                    price={val.price}
                    category={val.category?.category}
                    categoryId={val.categoryId}
                    dataAllCategory={dataAllCategory}
                    uuid={val.uuid}
                    getDataProduct={getDataProduct}
                    keeplogin={props.keepLogin}
                />
            );
        });
    };

    const btnAddCategory = async () => {
        await axios.post(`${API_URL}/category/addcategory`, {
            category: category,
        });
        modalCategory.onClose();
        getDataCategory();
    };

    const printSelectOption = () => {
        return dataAllCategory.map((val, idx) => {
            return (
                <option
                    style={{ backgroundColor: "#222831", color: "#EEEEEE" }}
                    value={val.id}
                >
                    {val.category}
                </option>
            );
        });
    };

    const onChangeFile = (event) => {
        modalProductImage.onOpen();
        setFileProduct(event.target.files[0]);
    };

    const btnAddProduct = async () => {
        try {
            let token = localStorage.getItem("pmf_login");
            let formData = new FormData();

            formData.append(
                "data",
                JSON.stringify({
                    product: product,
                    price: parseInt(price),
                    category: parseInt(categoryNew),
                })
            );
            if (fileProduct != null) {
                formData.append("images", fileProduct);
            }
            let tambah = await axios.post(
                `${API_URL}/product/addproduct/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (tambah.data.success) {
                setFileProduct(null);
                // props.keeplogin();
                toast({
                    position: "top",
                    title: `Add product Success`,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
                getDataProduct();
                modalProduct.onClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getDataProduct();
        getDataCategory();
    }, []);

    return (
        <Flex as={Container} maxW={"8xl"} minH={"100vh"} bgColor="#222831">
            <Box justifyItems={"center"} flex={"1"}>
                <Box display={"flex"}>
                    <Navbar />
                    <>
                        <Button
                            rounded={"md"}
                            h={"10"}
                            mt={"4"}
                            ml={"4"}
                            bgColor="#00ADB5"
                            color="#EEEEEE"
                            _hover={""}
                            p={"2.5"}
                            variant={"link"}
                            onClick={modalProduct.onOpen}
                        >
                            <IoMdAddCircle
                                size={"20"}
                                fontWeight={"bold"}
                                color={"#EEEEEE"}
                            />
                            <Text my={"auto"} pl="2">
                                Add Product
                            </Text>
                        </Button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={modalProduct.isOpen}
                            onClose={modalProduct.onClose}
                            size="2xl"
                        >
                            <ModalOverlay />
                            <ModalContent bgColor="#393E46" color={"#EEEEEE"}>
                                <ModalHeader color="#00adb5">
                                    Add New Product
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody as={Flex} pb={6}>
                                    <Box flex={"1"} px={"4"}>
                                        <FormControl>
                                            <FormLabel color={"#EEEEEE"}>
                                                Product Name
                                            </FormLabel>
                                            <Input
                                                ref={initialRef}
                                                placeholder="Enter product name"
                                                _hover={""}
                                                bgColor="#222831"
                                                variant={"link"}
                                                onChange={(e) =>
                                                    setProduct(e.target.value)
                                                }
                                            />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel color={"#EEEEEE"}>
                                                Price
                                            </FormLabel>
                                            <Input
                                                ref={initialRef}
                                                placeholder="Enter product price"
                                                _hover={""}
                                                bgColor="#222831"
                                                variant={"link"}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                            />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel color={"#EEEEEE"}>
                                                Category
                                            </FormLabel>
                                            <Select
                                                variant={"link"}
                                                bgColor="#222831"
                                                _hover={""}
                                                placeholder="Select Option"
                                                onChange={(e) =>
                                                    setCategoryNew(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {printSelectOption()}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box flex={"1"} px={"4"}>
                                        <FormControl>
                                            <FormLabel color={"#EEEEEE"}>
                                                Product Image
                                            </FormLabel>
                                            <Button
                                                bgColor="#00ADB5"
                                                color="#EEEEEE"
                                                rounded={"md"}
                                                h={"10"}
                                                _hover={""}
                                                p={"2.5"}
                                                variant={"link"}
                                                onClick={() =>
                                                    inputFile.current.click()
                                                }
                                            >
                                                <HiDocumentAdd
                                                    color="#EEEEEE"
                                                    size={"md"}
                                                />
                                                Add a File
                                                <input
                                                    type="file"
                                                    id="file"
                                                    ref={inputFile}
                                                    style={{ display: "none" }}
                                                    onChange={onChangeFile}
                                                ></input>
                                                <Modal
                                                    isOpen={
                                                        modalProductImage.isOpen
                                                    }
                                                    onClose={
                                                        modalProductImage.onClose
                                                    }
                                                >
                                                    <ModalOverlay />
                                                    <ModalContent>
                                                        <ModalHeader>
                                                            Product Picture
                                                        </ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody textAlign="center">
                                                            <Image
                                                                objectFit="cover"
                                                                size="4xl"
                                                                src={
                                                                    fileProduct
                                                                        ? URL.createObjectURL(
                                                                              fileProduct
                                                                          )
                                                                        : ""
                                                                }
                                                            ></Image>
                                                        </ModalBody>

                                                        <ModalFooter>
                                                            <Button
                                                                colorScheme="red"
                                                                mr={3}
                                                                onClick={() => {
                                                                    modalProductImage.onClose();
                                                                    setFileProduct(
                                                                        null
                                                                    );
                                                                }}
                                                                variant="solid"
                                                            >
                                                                Cancel
                                                            </Button>
                                                            <Button
                                                                onClick={
                                                                    modalProductImage.onClose
                                                                }
                                                                colorScheme="green"
                                                                variant="outline"
                                                            >
                                                                Save
                                                            </Button>
                                                        </ModalFooter>
                                                    </ModalContent>
                                                </Modal>
                                            </Button>
                                        </FormControl>
                                    </Box>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        bgColor="#00ADB5"
                                        color="#EEEEEE"
                                        _hover=""
                                        mr={3}
                                        onClick={btnAddProduct}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        bgColor="#EEEEEE"
                                        color="#00ADB5"
                                        _hover=""
                                        onClick={modalProduct.onClose}
                                    >
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Button
                            rounded={"md"}
                            h={"10"}
                            mt={"4"}
                            ml={"4"}
                            bgColor="#00ADB5"
                            color="#EEEEEE"
                            _hover={""}
                            p={"2.5"}
                            variant={"link"}
                            onClick={modalCategory.onOpen}
                        >
                            <HiViewGridAdd
                                size={"20"}
                                fontWeight={"bold"}
                                color={"#EEEEEE"}
                            />
                            <Text my={"auto"} pl="2">
                                Add Category
                            </Text>
                        </Button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={modalCategory.isOpen}
                            onClose={modalCategory.onClose}
                        >
                            <ModalOverlay />
                            <ModalContent bgColor="#393E46" color={"#EEEEEE"}>
                                <ModalHeader color="#00adb5">
                                    Add New Category
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel color={"#EEEEEE"}>
                                            Category Name
                                        </FormLabel>
                                        <Input
                                            ref={initialRef}
                                            placeholder="Enter new category name"
                                            _hover={""}
                                            bgColor="#222831"
                                            variant={"link"}
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                        />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        bgColor="#00ADB5"
                                        color="#EEEEEE"
                                        _hover=""
                                        mr={3}
                                        onClick={btnAddCategory}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        bgColor="#EEEEEE"
                                        color="#00ADB5"
                                        _hover=""
                                        onClick={modalCategory.onClose}
                                    >
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </Box>

                <Box mt="4">
                    <TableContainer>
                        <Table variant="simple" color={"#EEEEEE"}>
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Product</Th>
                                    <Th>Image</Th>
                                    <Th>Price</Th>
                                    <Th>Category</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            {printProductData()}
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Flex>
    );
}

export default ManageProducts;
