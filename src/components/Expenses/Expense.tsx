import React, {useEffect, useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {Button} from "@mui/material";
import Modal from "../UI/Modal";
import Form, {IExpenseItem} from "../UI/Form";
import {useNavigate, useParams} from "react-router-dom";
import styles from './Expense.module.css'
import {deleteExpense} from "../../redux/expense.reducer";
import {useDispatch} from "react-redux";

const Expense: React.FC<IExpenseItem> = (props: IExpenseItem) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const id = useParams();
    const dispatch = useDispatch();

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
        dispatch(deleteExpense(props));
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
