import React, {useState} from "react";
import Card from "../UI/Card";
import ListFilter from "./List/ListFilter";
import List from "./List/List";
import ExpensesChart from "../Chart/ExpensesChart";
import styles from './ExpensesBlock.module.css'

const ExpensesBlock = (props: any) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense: any) => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={styles.expenses}>
            <ListFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <List items={filteredExpenses}/>
        </Card>
    )
}

export default ExpensesBlock;
