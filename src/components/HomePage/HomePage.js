import React, {useState} from 'react';
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";

import styles from './HomePage.module.css'
import Header from "../Header/Header";
import {DEFAULT_EXPENSES} from "../../shared/fetchExpense";

function HomePage() {
    const [expenses, setExpense] = useState(DEFAULT_EXPENSES);
    const addExpenseHandler = (expense) => {

        setExpense(prevExpenses => {
            return [expense, ...prevExpenses]
        });
        localStorage.setItem('expenses', JSON.stringify(expenses))
    };
    return (
        <div>
            <Header/>
            {/*<PostDetails><p>Haha Modal</p></PostDetails>*/}
            <header className={styles['App-header']} color="primary">
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses items={expenses}/>
            </header>

        </div>
    );
}

export default HomePage;
