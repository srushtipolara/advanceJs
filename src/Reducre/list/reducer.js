import {createSlice} from "@reduxjs/toolkit";

const ListReducer = createSlice({
        name: "List",
        initialState: {
            list: [],
            error: {}
        },
        reducers: {
            createNewList: (state, action) => {
                state.list.push({...action.payload, id: Math.floor(Math.random() * 1000)});
            },
            updateList: (state, action) => {
                const index = state.list.findIndex((item) => item.id === action.payload.id);
                if (index >= 0)
                    state.list[index] = action.payload;
            },
            deleteList: (state, action) => {
                state.list = state.list.filter((item) => item.id !== action.payload);
            },
        }
    }
)

export const {createNewList, updateList, deleteList} = ListReducer.actions;
export default ListReducer.reducer