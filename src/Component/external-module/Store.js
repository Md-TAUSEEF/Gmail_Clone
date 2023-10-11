import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../fature/mailSlice';
import userReducer from '../fature/useSlice';
export const store = configureStore({
    reducer:{
        mail:mailReducer,
        user:userReducer
    },
});