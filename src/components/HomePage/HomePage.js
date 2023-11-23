import React, {useState} from 'react';
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";

import styles from './HomePage.module.css'
import Header from "../Header/Header";

const DEFAULT_EXPENSES = [
    {
        id: 'e1',
        title: 'Watch',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'Book',
        amount: 69.99,
        date: new Date(2023, 7, 31),
    },
    {id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2023, 6, 12)},
    {
        id: 'e4',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e5',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function HomePage() {
    const [expenses, setExpense] = useState(DEFAULT_EXPENSES);
    localStorage.setItem('expenses', JSON.stringify(expenses))

    const addExpenseHandler = (expense) => {

        setExpense(prevExpenses => {
            return [expense, ...prevExpenses]
        });
        localStorage.setItem('expenses', JSON.stringify(expenses))
    };
    return (
        <div><Header/>
            <header className={styles['App-header']} color="primary">
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses items={expenses}/>
            </header>
        </div>
    );
}

export default HomePage;
