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
    const [titleError, setTitleError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const location = useLocation();
    const dispatch = useDispatch();

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        setTitleError(false); // Reset error when input changes
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        setAmountError(false); // Reset error when input changes
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        setDateError(false); // Reset error when input changes
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const existingExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');

        if (!enteredTitle.trim()) {
            setTitleError(true);
            return;
        }
        if (!enteredAmount.trim()) {
            setAmountError(true);
            return;
        }
        if (!enteredDate.trim()) {
            setDateError(true);
            return;
        }

        const expenseData = {
            id: props.item.id ? props.item.id : existingExpenses.length,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        if (location.pathname === '/list/create-expense') {
            dispatch(addExpense(expenseData));
        } else if (location.pathname === `/list/edit/${props.item.id}`) {
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
                        <label>Title<span className={styles.required}>*</span></label>
                        <TextField
                            className={styles.input}
                            variant="outlined"
                            required
                            fullWidth
                            error={titleError}
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className={styles['new-expense__control']}>
                        <label>Amount<span className={styles.required}>*</span></label>
                        <OutlinedInput
                            className={styles.input}
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            required
                            fullWidth
                            error={amountError}
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className={styles['new-expense__control']}>
                        <label>Date<span className={styles.required}>*</span></label>
                        <TextField
                            type="date"
                            fullWidth
                            required
                            error={dateError}
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
                        variant="contained" color='secondary'
                        onClick={props.onCancel}>Cancel</Button>
                    <Button type="submit" color='primary'
                            variant="contained">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
