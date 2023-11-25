import React from "react";
import styles from './Header.module.css'
import {Button, Container} from "@mui/material";
import {useAuth} from "../../Hooks/useContext";

const Header = () => {
    const {toggleLogin} = useAuth();
    const handleNewExpense = () => {
        // setModalVisibility(true);
    };
    const handleLogout = () => {
        toggleLogin();
    };
    return (
        <Container className={styles.header}>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleNewExpense}
            >
                Add New Expenses
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles['btn-logout']}
                onClick={handleLogout}
            >
                Log Out
            </Button>
        </Container>
    )
}

export default Header;
