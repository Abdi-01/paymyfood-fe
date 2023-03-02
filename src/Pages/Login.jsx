import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Image,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../reducers/auth";
import logo from "../Assets/logo.png";

function Login(props) {
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => setShow(!show);

    const onBtnLogin = async () => {
        try {
            if (email == "" || password == "") {
                alert("Please enter your credentials");
            } else {
                let res = await axios.post(`http://localhost:2000/user/auth`, {
                    email: email,
                    password: password,
                });
                console.log("Ini res.data dari LOGIN", res.data);

                alert("Login Successfull");
                localStorage.setItem("pmf_login", res.data.token);
                dispatch(loginAction(res.data));
                navigate("/landing");
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        // Login Feature
        <Flex as={Box}
            minH={"100vh"}
            bgColor="#222831"
            justify={"center"}
            align={"center"}
        >
            <Box>
                <Image
                    objectFit="fill"
                    w={"md"}
                    src={logo}
                    alt="PMF Logo"
                    mr={"8"}
                />
            </Box>
            <Box>
                <Card
                    align="center"
                    p={"10"}
                    bgColor="#393E46"
                    rounded={"2xl"}
                >
                    <CardHeader>
                        <Heading
                            size="lg"
                            color="#00ADB5"
                            fontWeight={"bold"}
                            letterSpacing={"wide"}
                        >
                            Sign-In
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text
                            color="#00ADB5"
                            mb={"4"}
                            fontWeight={"bold"}
                            letterSpacing={"wider"}
                        >
                            Email
                        </Text>
                        <Input
                            pr="4.5rem"
                            py={"1.5rem"}
                            type={"text"}
                            placeholder="Enter your email"
                            mb={"8"}
                            rounded={"xl"}
                            bgColor={"#222831"}
                            variant={"filled"}
                            color={"#EEEEEE"}
                            _hover={""}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Text
                            color="#00ADB5"
                            mb={"4"}
                            fontWeight={"bold"}
                            letterSpacing={"wider"}
                        >
                            Password
                        </Text>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                py={"1.5rem"}
                                type={show ? "text" : "password"}
                                placeholder="Enter your password"
                                mb={"8"}
                                rounded={"xl"}
                                bgColor={"#222831"}
                                variant={"filled"}
                                color={"#EEEEEE"}
                                _hover={""}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="md"
                                    bgColor="transparent"
                                    color="#00ADB5"
                                    mt={"auto"}
                                    _hover={""}
                                    variant={"link"}
                                    onClick={handleClick}
                                >
                                    {show ? <HiEyeOff /> : <HiEye />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </CardBody>
                    <CardFooter>
                        {/* add onClick here: */}
                        <Button
                            type="button"
                            bgColor="#00ADB5"
                            size={"lg"}
                            _hover={""}
                            color={"#222831"}
                            onClick={onBtnLogin}
                        >
                            Sign In
                        </Button>
                    </CardFooter>
                </Card>
            </Box>
        </Flex>
    );
}

export default Login;
