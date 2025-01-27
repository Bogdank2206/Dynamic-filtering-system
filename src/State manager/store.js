import {combineReducers} from "redux";
import usersReducer from "./UsersReducer";
import {configureStore} from "@reduxjs/toolkit";
import filtersReducer from "./FiltersReducer";

const reducers = combineReducers({
    users: usersReducer,
    filters: filtersReducer,
});

const store = configureStore({
    reducer: reducers,
})

window.store = store;
export default store;