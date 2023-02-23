import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: {
            username: '',
            email: '',
            role: ''
        }
    },
    reducers: {
        loginAction: (state, action) => {
            state.data = action.payload;
        },
        updateAction: (state, action) => {
            state.data = { ...state.data, ...action.payload }; // kalau mau nambahin property baru ke initial state
        }
    }
});

// Export action function nya
export const { loginAction, updateAction} = authSlice.actions; // fungsi di dalam property reducers

// Export reducersnya
export default authSlice.reducer; 