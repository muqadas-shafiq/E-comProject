import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from "./ProductReducer/ProductSlice"
import userReducer from "./userReducer/userSlice"


export const store = configureStore({
    reducer:{
        Productlist: ProductReducer,
        user:userReducer

    }
    
})

