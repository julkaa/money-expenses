import React, {useState} from 'react';
import ExpensesBlock from "../Expenses/ExpensesBlock";

import styles from './HomePage.module.css'
import {useDispatch} from "react-redux";
import {fetchExpense} from "../../redux/expense.reducer";
import HeaderButtons from "../Header/HeaderButtons";

function HomePage() {
    const dispatch = useDispatch();
    const mutatedExpenses = JSON.parse(localStorage.getItem('expenses')).map(item => {
        item.date = new Date(item.date);
        return item;
    })

    const [expenses, setExpense] = useState(mutatedExpenses);
    dispatch(fetchExpense(mutatedExpenses));
    return (
        <div>
            <HeaderButtons/>
            <div className={styles['App-header']} color="primary">
                <ExpensesBlock items={expenses}/>
            </div>

        </div>
    );
}

export default HomePage;
