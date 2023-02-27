import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

const globalStore = configureStore({
    reducer: {
        authReducer,
    },
});

export default globalStore;
