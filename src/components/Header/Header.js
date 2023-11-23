import React from "react";
import styles from './Heder.module.css'
import {Button, Container} from "@mui/material";

const Header = () => {

    return (
        <Container className={styles.header}>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
            >
                Add New Expenses
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Log Out
            </Button>
        </Container>
    )
}

export default Header;
