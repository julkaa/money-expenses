import React, {useState} from "react";
import styles from './HeaderButtons.module.css'
import {Button} from "@mui/material";
import {useAuth} from "../../Hooks/useContext";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useNavigate} from "react-router-dom";

const HeaderButtons = () => {
    const {toggleLogin} = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleNewExpense = () => {
        navigate('/list/create-expense');
        setShowModal(true);
    };
    const handleLogout = () => {
        toggleLogin();
    };

    function editHandler() {
        closeHandler();
    }

    function closeHandler() {
        setShowModal(false);
        navigate('/list');
    }

    return (
        <>{showModal && <Modal><Form item={[]} onCancel={closeHandler} onSubmit={editHandler}/></Modal>}
            <div className={styles.header}>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleNewExpense}
                    color='primary'
                >
                    Add New Expenses
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={styles['btn-logout']}
                    color='primary'
                    onClick={handleLogout}
                >
                    Log Out
                </Button>
            </div>
        </>
    )
}

export default HeaderButtons;
