import './Expenses.css'
import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: any) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense: any) => {
        console.log(expense.date)
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            {/*1Variant*/}
            {/*{filteredExpenses.length === 0 ?*/}
            {/*    (<p>No expenses found.</p>): (filteredExpenses.map((expense: any, index: number) =>*/}
            {/*        <ExpenseItem*/}
            {/*            key={expense.id}*/}
            {/*            title={expense.title}*/}
            {/*            amount={expense.amount}*/}
            {/*            date={expense.date}/>*/}
            {/*    ))}*/}

            {/*2 Variant*/}
            {/*{filteredExpenses.length === 0 && <p>No expenses found.</p>}*/}
            {/*{filteredExpenses.length > 0 && filteredExpenses.map((expense: any, index: number) =>*/}
            {/*    <ExpenseItem*/}
            {/*        key={expense.id}*/}
            {/*        title={expense.title}*/}
            {/*        amount={expense.amount}*/}
            {/*        date={expense.date}/>*/}
            {/*)}*/}
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;
