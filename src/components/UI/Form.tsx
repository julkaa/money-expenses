import React, {useState} from "react";
import styles from './Form.module.css'
import {InputAdornment, OutlinedInput, TextField} from "@mui/material";

const Form = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState(props.item.title || '');
    const [enteredAmount, setEnteredAmount] = useState(props.item.amount || '');
    const [enteredDate, setEnteredDate] = useState(props.item.date || '');
    console.log(props);
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
    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className={styles['new-expense']}>
            <form onSubmit={submitHandler}>
                <div className={styles['new-expense__controls']}>
                    <div className={styles['new-expense__control']}>
                        <label>Title</label>
                        <TextField
                            className={styles.input}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className={styles['new-expense__control']}>
                        <label>Amount</label>
                        <OutlinedInput
                            className={styles.input}
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            required
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className={styles['new-expense__control']}>
                        <label>Date</label>
                        <input type="date" min="2020-01-01" max="2023-09-01" value={enteredDate}
                               onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className={styles['new-expense__actions']}>
                    <button type='button' className={styles['cancel-btn']} onClick={props.onCancel}>Cancel</button>
                    <button type="submit" className={styles['save-btn']} onClick={props.onSave}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
