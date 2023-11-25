import React, {useState} from "react";
import styles from './Header.module.css'
import {Button, Container} from "@mui/material";
import {useAuth} from "../../Hooks/useContext";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {toggleLogin} = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleNewExpense = () => {
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
        <>{showModal && <Modal><Form item={[]} onCancel={closeHandler} onSave={editHandler}/></Modal>}
            <Container className={styles.header}>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleNewExpense}
                    className={styles.btn}
                >
                    Add New Expenses
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={styles['btn-logout']}
                    onClick={handleLogout}
                >
                    Log Out
                </Button>
            </Container>
        </>
    )
}

export default Header;
