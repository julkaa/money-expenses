import React, {useState} from "react";
import styles from './Form.module.css';
import {Button, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {useLocation} from "react-router-dom";
import {convertDate, getTodayDate} from "../../shared/DateAdapter";
import {useDispatch} from "react-redux";
import {addExpense, updateExpense} from "../../redux/expense.reducer";
import {IExpense} from "../../shared/setExpenses";

interface IFormProps {
    item?: IExpense;
    onCancel: () => void;
}

const Form: React.FC<IFormProps> = ({item, onCancel}) => {
    const [enteredTitle, setEnteredTitle] = useState<string>(item?.title || '');
    const [enteredAmount, setEnteredAmount] = useState<string | number>(item?.amount || '');
    const [enteredDate, setEnteredDate] = useState<string | Date>(convertDate(item?.date) || '');
    const [titleError, setTitleError] = useState<boolean>(false);
    const [amountError, setAmountError] = useState<boolean>(false);
    const [dateError, setDateError] = useState<boolean>(false);

    const location = useLocation();
    const dispatch = useDispatch();

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
        setTitleError(false);
    }
    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
        setAmountError(false);
    }
    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
        setDateError(false);
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const existingExpenses: IExpense[] = JSON.parse(localStorage.getItem('expenses') || '[]');

        if (!enteredTitle.trim()) {
            setTitleError(true);
            return;
        }
        if (!enteredAmount) {
            setAmountError(true);
            return;
        }
        if (!enteredDate || enteredDate.toString().trim() === '') {
            setDateError(true);
            return;
        }

        const expenseData: IExpense = {
            id: item?.id ? item.id.toString() : existingExpenses.length.toString(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        if (location.pathname === '/list/create-expense') {
            dispatch(addExpense(expenseData));
        } else if (location.pathname === `/list/edit/${item.id}`) {
            dispatch(updateExpense(expenseData));
        }

        onCancel();
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
                        onClick={onCancel}>Cancel</Button>
                    <Button type="submit" color='primary'
                            variant="contained">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
