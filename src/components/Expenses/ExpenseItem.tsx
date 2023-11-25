import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {Button} from "@mui/material";
import styles from "../Header/Header.module.css";

const ExpenseItem = (props: any) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        Edit
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={styles['btn-logout']}
                    >
                        Delete
                    </Button>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
