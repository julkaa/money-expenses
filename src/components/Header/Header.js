import React, {useEffect, useState} from "react";
import styles from './Header.module.css'
import {Button} from "@mui/material";
import {useAuth} from "../../Hooks/useContext";
import Modal from "../UI/Modal";
import Form from "../UI/Form";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
    const {toggleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (location.pathname === '/list/create-expense') {
            setShowModal(true);
        }
    }, [location.pathname]);

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
            </div>
        </>
    )
}

export default Header;
