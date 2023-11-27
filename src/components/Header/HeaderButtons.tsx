import React, {useState} from "react";
import styles from './HeaderButtons.module.css';
import {Button} from "@mui/material";
import {useAuth} from "../../Hooks/useContext";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useNavigate} from "react-router-dom";

const HeaderButtons: React.FC = () => {
    const {toggleLogin} = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleNewExpense = () => {
        navigate('/list/create-expense');
        setShowModal(true);
    };

    const handleLogout = () => {
        toggleLogin();
    };

    const closeHandler = () => {
        setShowModal(false);
        navigate('/list');
    };

    return (
        <>
            {showModal && (
                <Modal>
                    <Form onCancel={closeHandler}/>
                </Modal>
            )}
            <div className={styles.header}>
                <Button
                    type="button"
                    variant="contained"
                    onClick={handleNewExpense}
                    color='primary'
                >
                    Add New Expenses
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    className={styles['btn-logout']}
                    color='primary'
                    onClick={handleLogout}
                >
                    Log Out
                </Button>
            </div>
        </>
    );
};

export default HeaderButtons;
