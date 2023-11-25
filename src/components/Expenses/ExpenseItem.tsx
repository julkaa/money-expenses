import React, {useState} from "react";
import styles from './ExpenseItem.module.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {Button} from "@mui/material";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useNavigate} from "react-router-dom";

const ExpenseItem = (props: any) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onEditExpense = () => {
        navigate(`/list/edit/${props.id}`);
        window.scrollTo(0, 0)
        setShowModal(true);
    }

    function editHandler() {
        closeHandler();
    }

    function closeHandler() {
        setShowModal(false);
        navigate('/list');
        // Remove 'create-item' from the URL when modal is closed
    }

    return (
        <>{showModal && <Modal><Form item={props} onCancel={closeHandler} onSave={editHandler}/></Modal>}
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
                        >
                            Delete
                        </Button>
                    </div>
                </Card>
            </li>
        </>
    )
}

export default ExpenseItem;
