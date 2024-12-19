import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getTodos = createAsyncThunk("getTodos", async () => {
    return await axios.get(url)
})

export const postTodos = createAsyncThunk("postTodos", async (data) => {
    return await axios.post(url, data)
})

export const updateTodos = createAsyncThunk("updateTodos", async (data) => {
    return await axios.put(`${url}/${data.id}`, data)
})
export const deleteTodos = createAsyncThunk("deleteTodos", async (id) => {
    console.log("id =>", id)
    return await axios.delete(`${url}/${id}`)
})