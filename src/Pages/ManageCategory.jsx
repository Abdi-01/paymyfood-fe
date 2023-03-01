import React, {useState, useRef} from 'react';
import {
    Box, Button, Container, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, TableContainer, Text, Th, Thead,
    Tr, useDisclosure, useToast
} from "@chakra-ui/react";
import CategoryTable from '../Components/CategoryTable';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { API_URL } from '../helper';
import { HiViewGridAdd } from 'react-icons/hi';


function ManageCategory() {
    const [dataAllCategory, setDataAllCategory] = useState([])
    const [category, setCategory] = useState('')
    const modalCategory = useDisclosure();
    const initialRef = useRef(null);
    const finalRef = useRef(null);


    const getDataCategory = async () => {
        let get = await axios.get(`${API_URL}/category/getallcategory`);
        // console.log("get all category", getDataCategory)
        setDataAllCategory(get.data)
    }

    const btnAddCategory = async () => {
        await axios.post(`${API_URL}/category/addcategory`, {
            category: category
        });
        modalCategory.onClose();
        getDataCategory();
    }

    const printCategoryData = () => {
        return dataAllCategory.map((val, idx) => {
            return <CategoryTable idx={idx + 1} categoryId={val.id} category={val.category}
                dataAllCategory={dataAllCategory} getDataCategory={getDataCategory}
            />
        })
    }

    React.useEffect(() => {
        getDataCategory();
    }, [])


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
                            onClick={modalCategory.onOpen}
                        >
                            <HiViewGridAdd
                                size={"20"}
                                fontWeight={"bold"}
                                color={"#EEEEEE"}
                            />
                            <Text my={"auto"} pl='2'>Add Category</Text>
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
                                            onChange={(e) => setCategory(e.target.value)}
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

                <Box mt='4'>
                    <TableContainer>
                        <Table variant='simple' color={'#EEEEEE'}>
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Category</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            {printCategoryData()}
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Flex>
    );
}

export default ManageCategory;