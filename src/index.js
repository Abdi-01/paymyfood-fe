import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import globalStore from "./reducers";
import { BrowserRouter } from "react-router-dom";
import {
    ChakraProvider,
    extendTheme,
    defineStyleConfig,
} from "@chakra-ui/react";

const Button = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: "bold",
        borderRadius: "base", // <-- border radius is same for all variants and sizes
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: "2px solid",
            borderColor: "#00adb5",
            color: "#EEEEEE",
        },
        solid: {
            bg: "#00adb5",
            color: "#EEEEEE",
        },
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "outline",
    },
});

const theme = extendTheme({
    colors: {
        pmf: {
            100: "#EEEEEE",
            300: "#393e46",
            400: "#222831",
            900: "#00adb5",
        },
    },
    components: {
        Button,
    },
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={globalStore}>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
