import React, {useState} from "react";
import './ExpenseForm.css'
import {InputAdornment, OutlinedInput, TextField} from "@mui/material";

const ExpenseForm = (props: any) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event: any) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event: any) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: any) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }


    // @ts-ignore
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <TextField
                        className='input'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <OutlinedInput
                        className='input'
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        required
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    {/*<input type="date" min="2022-01-01" max="2023-09-01" onChange={(event) => {inputChangeHandler('date', event.target.value)}}/>*/}
                    <input type="date" min="2020-01-01" max="2023-09-01" value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
