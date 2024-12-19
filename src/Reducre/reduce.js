import {combineReducers} from "@reduxjs/toolkit";

import loginReducer from "./Login/reducer";
import ListReducer from "./list/reducer";
import TodoReducer from "./todos/reduce";

export const rootReducer = combineReducers({
    Login: loginReducer,
    EmployeeList: ListReducer,
    TodoList: TodoReducer,
})