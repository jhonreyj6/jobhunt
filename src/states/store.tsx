import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userState from "./userState";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
