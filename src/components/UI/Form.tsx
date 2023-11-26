import React, {useState} from "react";
import styles from './Form.module.css'
import {Button, InputAdornment, OutlinedInput, TextField} from "@mui/material";

const Form = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState(props.item.title || '');
    const [enteredAmount, setEnteredAmount] = useState(props.item.amount || '');
    const [enteredDate, setEnteredDate] = useState(props.item.date || '');
    console.log(String(props.item.date));
    const titleChangeHandler = (event: any) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event: any) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: any) => {
        console.log(event.target.value);
        console.log(typeof event.target.value);
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
                            fullWidth
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className={styles['new-expense__control']}>
                        <label>Date</label>
                        <TextField
                            type="date"
                            value='2023-11-01'
                            fullWidth
                            onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className={styles['new-expense__actions']}>
                    <Button type="submit"
                            variant="contained" className={styles['cancel-btn']}
                            onClick={props.onCancel}>Cancel</Button>
                    <Button type="submit"
                            variant="contained" className={styles['save-btn']} onClick={props.onSubmit}>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
