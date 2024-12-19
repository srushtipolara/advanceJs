import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reduce";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfigure = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfigure, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
})

export default store;