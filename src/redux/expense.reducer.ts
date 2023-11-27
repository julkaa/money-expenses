import {configureStore, createSlice} from "@reduxjs/toolkit";
import {IExpense} from "../shared/setExpenses";

interface ExpensesState {
    expenses: IExpense[];
}

const storedExpenses: IExpense[] = JSON.parse(localStorage.getItem('expenses') || '[]');

const initialState: ExpensesState = {
    expenses: storedExpenses,
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        fetchExpense: (state, {payload}: { payload: IExpense[] }) => {
            state.expenses = payload;
        },
        addExpense: (state, {payload}: { payload: IExpense }) => {
            state.expenses.push(payload);
            state.expenses = sortExpense(state.expenses);
        },
        deleteExpense: (state, {payload}: { payload: IExpense }) => {
            state.expenses = state.expenses.filter(
                (expense) => expense.id !== payload.id
            );
        },
        updateExpense: (state, {payload}: { payload: IExpense }) => {
            const index = state.expenses.findIndex(
                (expense) => expense.id === payload.id
            );
            if (index !== -1) {
                state.expenses[index] = payload;
            }
            state.expenses = sortExpense(state.expenses);
        }
    },
});

export const {addExpense, deleteExpense, updateExpense, fetchExpense} = expenseSlice.actions;

function sortExpense(expenses: IExpense[]): IExpense[] {
    return expenses.slice().sort((a, b) => b.date - a.date);
}

export const store = configureStore({
    reducer: {expenses: expenseSlice.reducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('expenses', JSON.stringify(state.expenses.expenses));
});

export default store;
