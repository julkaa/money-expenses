import React from "react";
import styles from './ExpenseDate.module.css';

interface IExpenseDateProps {
    date: Date;
}

const ExpenseDate: React.FC<IExpenseDateProps> = ({date}) => {
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();

    return (
        <div className={styles['expense-date']}>
            <div className={styles['expense-date__month']}>{month}</div>
            <div className={styles['expense-date__year']}>{year}</div>
            <div className={styles['expense-date__day']}>{day}</div>
        </div>
    );
};

export default ExpenseDate;
