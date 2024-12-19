import {createSlice} from "@reduxjs/toolkit";

const loginReducer = createSlice({
    name: "Login",
    initialState: {
        user: {},
    },
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload
        }
    },
})

export const {userLogin} = loginReducer.actions
export default loginReducer.reducer;