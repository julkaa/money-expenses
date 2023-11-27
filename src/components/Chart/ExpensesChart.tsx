import React from "react";
import ChartBlock from "./ChartBlock";

interface IExpense {
    date: any;
    amount: number;
}

interface IExpensesChartProps {
    expenses: IExpense[];
}

const ExpensesChart: React.FC<IExpensesChartProps> = ({expenses}) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <ChartBlock dataPoints={chartDataPoints}/>
    );
};

export default ExpensesChart;
