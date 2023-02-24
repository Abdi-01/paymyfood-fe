import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: {
            username: "",
            email: "",
            roleId: null,
        },
    },
    reducers: {
        loginAction: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Export action function nya
export const { loginAction, updateAction } = authSlice.actions; // fungsi di dalam property reducers

// Export reducersnya
export default authSlice.reducer;
