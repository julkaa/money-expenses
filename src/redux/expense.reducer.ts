import {configureStore, createSlice} from "@reduxjs/toolkit";

const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

const initialState = {
    expenses: storedExpenses,
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, {payload}: { payload: any }) => {
            state.expenses.push(payload);
        },
        deleteExpense: (state, {payload}: { payload: any }) => {
            state.expenses = state.expenses.filter(
                (expense: any) => expense.id !== payload.id
            );
        },
        updateExpense: (state, {payload}: { payload: any }) => {
            const index = state.expenses.findIndex(
                (expense: any) => expense.id === payload.id
            );
            if (index !== -1) {
                state.expenses[index] = payload;
            }
        },
    },
});

export const {addExpense, deleteExpense, updateExpense} = expenseSlice.actions;

export const store = configureStore({
    reducer: {expenses: expenseSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('expenses', JSON.stringify(state.expenses.expenses));
});

export default store;
