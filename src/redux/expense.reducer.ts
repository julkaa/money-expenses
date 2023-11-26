import {createSlice} from "@reduxjs/toolkit";

const initialState: { expenses: any[] } =
    {
        expenses: [{}]
    };
const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addTask: (state, {payload}: { payload: any }) => {
            state.expenses.push(payload)
            console.log(payload);
        },
        deleteTask: (state, {payload}: { payload: any }) => {
            const index = state.expenses.findIndex(element => element.id === payload.id);
            if (index !== -1) {
                state.expenses = state.expenses.filter(element => element.id !== payload.id)
                return
            }

        },
        updateTask: (state, {payload}: { payload: any }) => {
            let index = state.expenses.findIndex(task => task.id === payload.id)
            if (index === -1) {
                console.error('update task error: task was not found')
                return
            }
            state.expenses[index] = payload
        }
    }
})

export const {addTask, deleteTask, updateTask} = expenseSlice.actions;
export default expenseSlice.reducer;
