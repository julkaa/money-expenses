import React, {useEffect, useState} from 'react';
import styles from './HomePage.module.css';
import ExpensesBlock from '../Expenses/ExpensesBlock';
import {useDispatch} from 'react-redux';
import {fetchExpense} from '../../redux/expense.reducer';
import HeaderButtons from '../Header/HeaderButtons';

interface IExpenseItem {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const HomePage: React.FC = () => {
    const localStorageExpenses = localStorage.getItem('expenses');
    const initialExpenses: IExpenseItem[] = localStorageExpenses ? JSON.parse(localStorageExpenses) : [];
    const convertedExpenses: IExpenseItem[] = initialExpenses.map((item: IExpenseItem) => {
        item.date = new Date(item.date);
        return item;
    });
    const [expenses, setExpenses] = useState<IExpenseItem[]>(convertedExpenses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpense(convertedExpenses));
    }, [dispatch, convertedExpenses]);

    return (
        <div>
            <HeaderButtons/>
            <div className={styles.header} color="primary">
                <ExpensesBlock items={expenses}/>
            </div>
        </div>
    );
};

export default HomePage;
