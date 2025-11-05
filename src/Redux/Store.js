import { Reducer } from "./Reducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {logger} from "redux-logger"
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({user:Reducer})
const store = configureStore({reducer:rootReducer,middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger)
})

export default store;