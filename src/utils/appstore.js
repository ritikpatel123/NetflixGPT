import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice";
import configReducer from "./confiSlice";
import AuthReducer from "./AuthSlice";
const userStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
        authenticated:AuthReducer,
    }
})

export default userStore; 