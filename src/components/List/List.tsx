import styles from './List.module.css';
import Expense from '../Expenses/Expense';
import React from 'react';
import {IExpenseItem, IExpensesBlock} from "../Expenses/ExpensesBlock";

const List: React.FC<IExpensesBlock> = (props) => {
    if (props.items.length === 0) {
        return <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>;
    }

    return (
        <ul className={styles['expenses-list']}>
            {props.items.map((expense: IExpenseItem) => (
                <Expense
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default List;
