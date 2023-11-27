import React, {useState} from "react";
import styles from './ExpensesBlock.module.css';
import Card from "../UI/Card";
import ListFilter from "../List/ListFilter";
import List from "../List/List";
import ExpensesChart from "../Chart/ExpensesChart";
import {IExpense} from "../../shared/setExpenses";
import {IExpenseItem} from "../HomePage/HomePage";


export interface IExpensesBlock {
    items: IExpenseItem[];
}

const ExpensesBlock: React.FC<IExpensesBlock> = ({items}) => {
    const [filteredYear, setFilteredYear] = useState<string>('2023');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter((expense: IExpense) => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={styles.expenses}>
            <ListFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <List items={filteredExpenses}/>
        </Card>
    );
};

export default ExpensesBlock;
