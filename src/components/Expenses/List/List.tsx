import styles from './List.module.css'
import Expense from "../Expense";
import React from "react";

const List = (props: any) => {
    if (props.items.length === 0) {
        return <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>
    }

    return (
        <ul className={styles['expenses-list']}>
            {props.items.map((expense: any, index: number) =>
                <Expense
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
            )}
        </ul>
    );
}

export default List;
