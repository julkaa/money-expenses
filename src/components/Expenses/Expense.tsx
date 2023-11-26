import React, {useEffect, useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {Button} from "@mui/material";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import styles from './Expense.module.css'

const Expense = (props: any) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const id = useParams();
    const location = useLocation();

    useEffect(() => {
        if (id && !showModal) {
            navigate('/list');
        }
    }, []);

    const onEditExpense = () => {
        navigate(`/list/edit/${props.id}`);
        window.scrollTo(0, 0)
        setShowModal(true);
    }

    function onDeleteExpense() {
        const existingExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');

        const expenseIndex = existingExpenses.findIndex(
            (expense: any) => expense.id === props.id
        );

        if (expenseIndex !== -1) {
            existingExpenses.splice(expenseIndex, 1);
            localStorage.setItem('expenses', JSON.stringify(existingExpenses));
        }
        window.location.reload();
    }

    function closeHandler() {
        setShowModal(false);
        navigate('/list');
    }

    return (
        <>{showModal && <Modal><Form item={props} onCancel={closeHandler}/></Modal>}
            <li>
                <Card className={styles['expense-item']}>
                    <ExpenseDate date={props.date}/>
                    <div className={styles['expense-item__description']}>
                        <h2>{props.title}</h2>
                        <div className={styles['expense-item__price']}>${props.amount}</div>
                        <Button
                            variant="contained"
                            onClick={onEditExpense}
                            className={styles['edit-btn']}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            className={styles['delete-btn']}
                            onClick={onDeleteExpense}
                        >
                            Delete
                        </Button>
                    </div>
                </Card>
            </li>
        </>
    )
}

export default Expense;
