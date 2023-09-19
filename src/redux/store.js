import { configureStore } from "@reduxjs/toolkit";
import signupService from "./services/signup.service"
import { boardService } from "./services/boardService";

const store = configureStore({
    reducer:{
        [signupService.reducerPath]: signupService.reducer,
        [boardService.reducerPath]: boardService.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signupService.middleware)
})
export default store;