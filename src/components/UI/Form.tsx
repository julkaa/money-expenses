import React, {useState} from "react";
import styles from './Form.module.css'
import {Button, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {useLocation} from "react-router-dom";
import {convertDate, getTodayDate} from "../../shared/DateAdapter";
import {useDispatch} from "react-redux";
import {addExpense, updateExpense} from "../../redux/expense.reducer";

const Form = (props: any) => {
    const [enteredTitle, setEnteredTitle] = useState(props.item.title || '');
    const [enteredAmount, setEnteredAmount] = useState(props.item.amount || '');
    const [enteredDate, setEnteredDate] = useState(convertDate(props.item.date) || '');
    const location = useLocation();
    const dispatch = useDispatch();
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
        const existingExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');

        const expenseData = {
            id: props.item.id ? props.item.id : existingExpenses.length,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        if (location.pathname === '/list/create-expense') {
            dispatch(addExpense(expenseData));
        } else {
            dispatch(updateExpense(expenseData));
        }
        props.onCancel();
        window.location.reload();
    };

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
                            fullWidth
                            onChange={dateChangeHandler}
                            value={enteredDate}
                            inputProps={{
                                min: "2021-01-01",
                                max: getTodayDate(),
                            }}
                        />
                    </div>
                </div>
                <div className={styles['new-expense__actions']}>
                    <Button
                        variant="contained" className={styles['cancel-btn']}
                        onClick={props.onCancel}>Cancel</Button>
                    <Button type="submit"
                            variant="contained" className={styles['save-btn']} onClick={submitHandler}>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
