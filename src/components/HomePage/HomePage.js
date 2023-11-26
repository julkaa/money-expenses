import React, {useState} from 'react';
import ExpensesBlock from "../Expenses/ExpensesBlock";

import styles from './HomePage.module.css'
import Header from "../Header/Header";

function HomePage() {
    const mutatedExpenses = JSON.parse(localStorage.getItem('expenses')).map(item => {
        item.date = new Date(item.date);
        return item;
    })
    const [expenses, setExpense] = useState(mutatedExpenses);
    const addExpenseHandler = (expense) => {

        setExpense(prevExpenses => {
            return [expense, ...prevExpenses]
        });
        localStorage.setItem('expenses', JSON.stringify(expenses))
    };
    return (
        <div>
            <Header/>
            <header className={styles['App-header']} color="primary">
                <ExpensesBlock items={expenses}/>
            </header>

        </div>
    );
}

export default HomePage;
