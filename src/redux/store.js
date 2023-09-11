import { configureStore } from "@reduxjs/toolkit";
import signupService from "./services/signup.service"

const store = configureStore({
    reducer:{
        [signupService.reducerPath]: signupService.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signupService.middleware)
})
export default store;