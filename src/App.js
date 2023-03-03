import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import ManageProducts from "./Pages/ManageProducts";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import { useDispatch } from "react-redux";
import { API_URL } from "./helper";
import { loginAction } from "./reducers/auth";
import axios from "axios";
import ManageCategory from "./Pages/ManageCategory";
import ManageTables from "./Pages/ManageTables";
import Statistics from "./Pages/Statistics";

function App(props) {
    const dispatch = useDispatch();
    const keepLogin = async () => {
        try {
            let token = localStorage.getItem("pmf_login");
            console.log(token);
            if (token) {
                let response = await axios.get(`${API_URL}/user/keeplogin`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Response data keeplogin:", response.data);
                localStorage.setItem("pmf_login", response.data.token);
                dispatch(loginAction(response.data));
            }
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        keepLogin();
    }, []);
    return (
        <Box bgColor={"#222831"}>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/landing" element={<Landing />}></Route>
                <Route
                    path="/products"
                    element={<ManageProducts keepLogin={keepLogin} />}
                ></Route>
                <Route path="/category" element={<ManageCategory />}></Route>
                <Route path="/accounts" element={<Accounts />}></Route>
                <Route path="/tables" element={<ManageTables />}></Route>
                <Route path="/statistics" element={<Statistics />}></Route>
            </Routes>
        </Box>
    );
}

export default App;
