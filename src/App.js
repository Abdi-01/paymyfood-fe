import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

function App(props) {
    return (
        <Box bgColor={"#222831"}>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/landing" element={<Landing />}></Route>
                <Route path="/products" element={<AddProduct />}></Route>
            </Routes>
        </Box>
    );
}

export default App;
