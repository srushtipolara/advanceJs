import {createSlice} from "@reduxjs/toolkit";
import {getTodos, postTodos} from "./thunk";

const TodoReducer = createSlice({
    name: "Todo",
    initialState: {
        todo: [],
        error: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todo = action.payload.data || [];
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            state.error = action.payload;
        })
        builder.addCase(postTodos.fulfilled, (state, action) => {
            state.todo.unshift(action.payload.data);
        });
        builder.addCase(postTodos.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export default TodoReducer.reducer;