import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './Slice'

const store = configureStore({
    reducer: {
        allCart: cartSliceReducer
    },
})

export default store;