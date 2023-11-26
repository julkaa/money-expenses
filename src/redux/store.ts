import {configureStore} from "@reduxjs/toolkit";
import expenseReducer from "./expense.reducer";

export const store = configureStore({
    reducer: expenseReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
